<!-- loioe9465213eb6e42f4987e49effc7c4b47 -->

# Enabling Dialogues or Popovers

In order to enable the contentinsisde all instances of [`sap.m.Dialog`](https://sapui5.hana.ondemand.com/#/api/sap.m.Dialog) and [`sap.m.Popover`](https://sapui5.hana.ondemand.com/#/api/sap.m.Popover), the following criteria should be fullfilled:

-   The dialog or popover should be assigned a valid component of type [`sap.ui.core.Component`](https://sapui5.hana.ondemand.com/#/api/sap.ui.core.Component).
-   Alternatively, the closest parent of the dialog or popover should have a valid component of type [`sap.ui.core.Component`](https://sapui5.hana.ondemand.com/#/api/sap.ui.core.Component).
-   This owner component must either be an embedded or application component. If it's an embedded component it should be in the control hierarchy of the application component - which is used to start UI Adaptation.



## Exemplar ways to assign a component to your dialog or popover:

*Component.runAsOwner*

```html
//application or embedded component
oComponent.runAsOwner( function () {
		//dialog
		var oDialog = new sap.m.Dialog({
					id: "exampledialogid",
					content: [ new sap.ui.layout.form.Form("exampleformid1", {...}) ];
		});
		//popover
		var oPopover = new sap.m.Popover({
					id: "examplepopoverid",
					content: [ new sap.ui.layout.form.Form("exampleformid2", {...}) ];
		});
	});
```

*Element.addDependent*

```html
//dialog
var oDialog = new sap.m.Dialog({
			id: "exampledialogid",
			content: [ new sap.ui.layout.form.Form("exampleformid1", {...}) ];
});
//popover
var oPopover = new sap.m.Popover({
			id: "examplepopoverid",
			content: [ new sap.ui.layout.form.Form("exampleformid2", {...}) ];
});
 
//oElement of type sap.ui.core.Element
oElement.addDependent(oDialog);
oElement.addDependent(oPopover);
 
//application or embedded component
var oComponent = sap.ui.core.Component.getOwnerComponentFor(oElement);

```



## Embedded Component

For more details how to set up an embedded component, please check [Stable IDs: All You Need to Know](stable-ids-all-you-need-to-know-f51dbb7.md).

*Pre-requisite for embedded component*

```html
//UI Adaptation should be started from oAppComponent
var oAppComponent = sap.ui.core.Component.getOwnerComponentFor(oEmbeddedComponent);

```



## Disable UI Adaptation for a dialog or popover

*Disable UI Adaptation*

```html
//dialog
var oDialog = new sap.m.Dialog({...});
//popover
var oPopover = new sap.m.Popover({...});

//to disable UI adaptation, assign the following function to the dialog's / popover's instance
oDialog.isPopupAdaptationAllowed = function() {
	return false;
}
oPopover.isPopupAdaptationAllowed = function() {
	return false;
}



```

> ### Caution:  
> If the dialog or popover is destroyed \(e.g. in afterClose\(\) of the control\) and is opened again in the same session, then the changes would not be visible, as the dialog or popover would be instantiated again \(current restriction of flexibility, will be removed in further releases\).

> ### Note:  
> -   Please refrain from using the wrench icon in the dialog to start UI adaptation, as it will be deprecated soon.
> -   All default popup browser events \(including AutoClose\) are disabled when in RTA and re-enabled upon exiting RTA.
> -   The dialog or popover control & all controls inside should have a stable id.

