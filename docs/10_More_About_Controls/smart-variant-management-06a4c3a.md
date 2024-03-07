<!-- loio06a4c3ac1cf545a7b51864e7f3aa02da -->

# Smart Variant Management

The `sap.ui.comp.smartvariants.SmartVariantManagement` control provides access to the SAPUI5 flexibility back end for easy communication.

The frequently asked questions section aims at answering some basic questions that you might have when using this control.

> ### Note:  
> The code samples in this section reflect examples of possible use cases and might not always be suitable for your purposes. Therefore, we recommend that you do not copy and use them directly.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartvariants.SmartVariantManagement) and the [sample](https://ui5.sap.com/#/entity/sap.ui.comp.tutorial.smartControls/sample/sap.ui.comp.tutorial.smartControls.07).



## Overview

The `SmartVariantManagement` control encapsulates the `sap.m.VariantManagement` control. This basic control handles the visual representation of variants, or views, on the user interface.

> ### Note:  
> You can define views for specific selections of data on the user interface, for example, based on filter settings. Views are also called variants, usually in a more technical context, for example, in the API names and texts of the control.

The `SmartVariantManagement` control communicates with the back end of SAPUI5 flexibility. The SAPUI5 flexibility back end provides a way to store and retrieve flexibility information, such as personalization or key user data and views for other controls. Depending on the platform used, this involves a different set of features for each platform. For more information about SAPUI5 flexibility, see [SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md) and the documentation on the SAP Help Portal at [https://help.sap.com/viewer/product/UI5\_FLEXIBILITY/Cloud](https://help.sap.com/viewer/product/UI5_FLEXIBILITY/Cloud).

> ### Note:  
> We recommend to use the `SmartVariantManagement` control rather than the `VariantManagement` control, because it enables the communication with the SAPUI5 flexibility back end.

The `SmartVariantManagement` control can be used in combination with the following smart controls:

-   `SmartFilterBar` 
-   `SmartTable`
-   `SmartChart`



## Prerequisites

To use the `SmartVariantManagement` control, consuming applications have to provide the following information and comply with the interface standard:

-   The control using the personalization data
-   A variant type

    > ### Note:  
    > Do not use the constants `page`, `filterbar`, `table`, or `chart`. They are used only internally by the smart controls.

-   The name of the property describing the key
-   Optional information about the data source

This information has to be transferred to the `SmartVariantManagement` control during creation using the `personalizableControls` association. To transfer the data, the `sap.ui.comp.smartvariants.PersonalizableInfo` class must be used.

The control using the personalization data must call the `initialise` method of the control, as shown in the following example:

```js

sap.ui.require([
    'sap/ui/comp/smartvariants/SmartVariantManagement',
    'sap/ui/comp/smartvariants/PersonalizableInfo'
], function (SmartVariantManagement, PersonalizableInfo) {

    var oSmartVariantManagement = new SmartVariantManagement();
    var oPersInfo = new PersonalizableInfo({
        type: "filterBar",
        keyName: "persistencyKey",
        dataSource: this.getEntityType()
         control: this
    });

    oSmartVariantManagement.addPersonalizableControl(oPersInfo);

    oSmartVariantManagement.initialise(function () {
             // get informed about init
        },
        this
    );
})

```

Once the `SmartVariantManagement` control has initialized the SAPUI5 flexibility back end and retrieved the relevant changes, it informs the control using the personalization data about the end of the initialization phase by calling the function passed in this call: `oSmartVariantManagement.initialise(function () {}...`



## SAPUI5 Flexibility Back End

To exchange data with the back end , the control using the personalization data has to provide the following methods that can return and retrieve variants:

-   `fetchVariant`
-   `applyVariant` \(`oVariant`\)

The `fetchVariant` method is called by the `SmartVariantManagement` control every time an interaction takes place with the `VariantManagement` control and when executing a `Save`. In the latter case, the control using the personalization data has to return a JSON-compliant object. The SAPUI5 flexibility back end treats this information as a black box. It does not manipulate this object in any way.

The `applyVariant` method is called by the `SmartVariantManagement` control every time the user selects a new entry in the view list. The previously stored JSON object will be transferred to the `applyVariant` method, and the control using the personalization data can now respond to the information stored in this object.

> ### Note:  
> The JSON object that represents the variant is serialized to a string during processing. Therefore, the JSON object must contain only data that can be serialized and deserialized.

```js

sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.fetchVariant = function() {
         var oVariant = {};
         
         // Retrieve the variant’s content e.g. from input controls and add it to oVariant

         return oVariant;
};

sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.applyVariant = function(oVariant) {

         // Use the content of a user-selected variant and apply it e.g. to input controls
};

```

> ### Note:  
> The `SmartVariantManagement` control triggers the `fetchVariant` method without any user interaction right after it fires the `Initialise` event. This enables the `SmartVariantManagement` control to handle the standard view. This view represents the state of the user interface that is delivered by default. The control can revert the data to this view every time the user selects the standard view at a later point in time.



<a name="loio06a4c3ac1cf545a7b51864e7f3aa02da__SVM_KUA"/>

## Key User Adaptation

To use other smart controls for key user adaptation, you have to enable them. This is described in the following steps using `SmartFilterBar` as an example.

First, you have to register the relevant control within the `SmartVariantManagement` control:

```js

var oPersInfo = new sap.ui.comp.smartvariants.PersonalizableInfo({
                                               type: "chart",                            //specific to the control: already used: filterbar/table/chart
                                               keyName: "persistencyKey",                //nedded as property
                                               dataSource: this.getEntitySet(),                  // not really required; convenient
                                               control: the personalizable control       // the SmartChart, or ...
                               });


```

Also, the relevant control has to provide the `getVariantManagement` method.

Make sure `designtime.js` exists, for example, `sap/ui/comp/designtime/smartfilterbar/SmartFilterBar.designtime.js`:

```js

	….
return {
   actions: {
	settings: function (oControl) { 
         if (oControl.isA("sap.ui.comp.smartfilterbar.SmartFilterBar") &&
             oControl.getVariantManagement() &&  oControl.getVariantManagement().
                isA.("sap.ui.comp.smartvariants.SmartVariantManagement") &&
		oControl.getVariantManagement().isVariantAdaptationEnabled())
         {
             return {
			name: "FILTER_BAR_ADAPT_FILTERS_DIALOG",
			runtimeOnly: true,
			handler: function(oControl, mPropertyBag) {
				      return new Promise(function (resolve, reject) {
						     var fCallBack = function(oData) {
							 resolve(oData);
						      };
						 oControl.showAdaptFilterDialogForKeyUser(
                                              mPropertyBag.styleClass, fCallBack);
				       });
			         }
	        };
          }
	}
   }, …

```

The action setting handler has to return a `Promise`, call the relevant control-specific UI in the UI adaptation mode, and return it via `fCallBack` to the UI adaptation environment.

After the user has exited the control-specific UI, the changes are further handled by the relevant control, which returns the following structure:

```js

return [{
   selectorControl: this._oVariantManagement._getPersoController(),
   changeSpecificData: {
            changeType: "variantContent",
            content: {
                       key: this._oVariantManagement.getSelectionKey(),
                       persistencyKey: this.getPersistencyKey(),
                       content: this.fetchVariant()
            }
   }
}];

```



<a name="loio06a4c3ac1cf545a7b51864e7f3aa02da__section_mcy_fk1_npb"/>

## Page Variants

A page variant is a single UI instance of the `SmartVariantManagement` control that can personalize **multiple** smart controls instead of only one.

To use this enhanced function of the `SmartVariantManagement` control, take the following into consideration:

-   The `SmartVariantManagement` control has a `persistencyKey` property of its own.

    This is the key for storing the personalization data of the smart controls that you want to personalize.

-   For each smart control, a persistency key has to be provided.

    Within the personalization data, this key will identify the specific data for each individual smart control.

-   The smart controls support the `smartVariant` association which has to be assigned along with the page variant reference.


> ### Note:  
> If the page variant is used by the `SmartFilterBar` control, the persistency key of the page variant has to be assigned using the `pageVariantPersistencyKey` custom data of the `SmartFilterBar` control. The `SmartFilterBar` control internally adapts the related `SmartChart` or `SmartTable` controls, and therefore, the `smartVariant` association doesn't have to be assigned.

For more information about page variants, see the [sample](https://ui5.sap.com/#/entity/sap.ui.comp.tutorial.smartControls/sample/sap.ui.comp.tutorial.smartControls.08).



<a name="loio06a4c3ac1cf545a7b51864e7f3aa02da__section_eyb_nk1_npb"/>

## Favorites

If you want to use favorites to manage your views, you have to set the `useFavorites` property in the `VariantManagement` control to `true` \(default is `false`\).

In the `VariantManagement` control, each `VariantItem` has a `favorite` property that determines if the `VariantItem` in question is treated as a favorite.

The `SmartVariantManagement` control automatically starts in a mode where favorites are activated.

You can define favorites in the *Manage Views* dialog. Favorites selected in the dialog are stored as changes in the SAPUI5 flexibility back end that are applied each time the `SmartVariantManagement` control is initiated.



## FAQ



### How can users share their views?

The `SmartVariantManagement` control allows you as the end user to share your views with other users. This can be done by making them public by selecting *Public* in the *Save View* dialog when saving a new view.



### How can I make sure that only key users can make views public?

You can use a setting in SAPUI5 flexibility that determines whether views can be shared or made public by all users \(default\) or key users only. For more information on how to activate the related key user check, see [2658662](https://me.sap.com/notes/2658662). For more information about making views public, see [Step 7: View Management](../03_Get-Started/step-7-view-management-97fc0ea.md).

**Related Information**  


[Key User Adaptation](key-user-adaptation-2e6920b.md "The SmartVariantManagement control is enabled for key user adaptation.")

