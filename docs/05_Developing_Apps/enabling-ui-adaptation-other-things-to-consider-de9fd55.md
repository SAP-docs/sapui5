<!-- loiode9fd55c69af4b46863f5d26b5d796c4 -->

# Enabling UI Adaptation: Other Things to Consider

Find out how you can enable UI adaptation exactly how you need it.



<a name="loiode9fd55c69af4b46863f5d26b5d796c4__section_j4v_lnn_2jb"/>

## How to improve the performance



### Use asynchronous loading of views

To enable processing of UI changes directly on XML views, use the asynchronous loading of views. For more information, see [Instantiating Views](../04_Essentials/instantiating-views-68d0e58.md).

> ### Note:  
> If you use stashed-based lazy loading, asynchronous views are even a prerequisite. See [Stashed-based lazy loading: Load your views asynchronously](sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md#loiof1430c0337534d469da3a56307ff76af__section_async)

> ### Tip:  
> Using the rule `Asynchronous XML views in the Support Assistant,` you can check whether asynchronous loading is used for all views. For more information, see [Support Assistant](../04_Essentials/support-assistant-57ccd7d.md).



### Use view caching

If you use view caching, your views are stored in the cache after UI changes have been applied. The view \(including the UI changes\) is then loaded from the cache. For more information, see [XML View Cache](../04_Essentials/xml-view-cache-3d85d5e.md).



<a name="loiode9fd55c69af4b46863f5d26b5d796c4__section_ghl_f4n_2jb"/>

## Configure the variant management control

If users should be able to save their UI changes as different views \(control variants\), you have to configure the [`sap.ui.fl.variants.VariantManagement`](https://ui5.sap.com/#/api/sap.ui.fl.variants.VariantManagement) control. 

All you have to do is add this control to an appropriate location in your app, and assign the desired UI container as a target in a `for` association.

Please note that it is not supported to retroactively introduce a variant management control after a key user has already created adaptations for your application. This would lead to adaptations being applied in a non-defined order, making the state of the UI unpredictable.

If you retroactively remove a variant management control for which key user adaptations or end user personalization already exist, these adaptations will be lost. 

<a name="loiode9fd55c69af4b46863f5d26b5d796c4__section_rvb_cpn_2jb"/>

## Enable the key user to add additional UI elements

To enable the key user to make additional properties of an OData entity visible \(typically when the key user adds fields or custom fields\), you have to do the following:

-   Use data binding in the container where you want to enable this.
-   Make sure that the related OData model is the default model of your app component. For more information, see [Assigning the Model to the UI](../04_Essentials/assigning-the-model-to-the-ui-91f0d1c.md).
-   If a property of an OData entity shouldn't come up in key user adaptation, for example, because it’s a technical field, you should set the annotation `sap:visible=false`. If the property is only relevant under certain circumstances, you can provide the `field-control` property and set the field to be hidden. For more information, see the [official annotations documentation](https://wiki.scn.sap.com/wiki/display/EmTech/SAP+Annotations+for+OData+Version+2.0#SAPAnnotationsforODataVersion2.0-Property_field_controlAttributesap:field-control).
-   If you don’t have OData models or if you want to give the key user the option to enable more complex UI parts, you can deliver hidden controls \(`visible="false"`\). These can then be made visible via key user adaptation.



<a name="loiode9fd55c69af4b46863f5d26b5d796c4__section_e2v_xpn_2jb"/>

## Reuse Components

If you are using reuse components, dialogs or popovers inside your application, they must have the application component as owner component \(`type=component`\). Make sure to instantiate it using a `runAsOwner` function.



### About Reuse Components

During key user adaptation, only the specific UIs/applications are adapted, but not the reuse components themselves. Key user adaptation follows a WYSIWYG approach. Since the use cases can vary from app to app, the UI changes done inside a reuse component of one app won't be applicable for another app where the same reuse component is used. Therefore, any changes to the UIs inside a reuse component will be stored only in the context of the app in which it was embedded.



<a name="loiode9fd55c69af4b46863f5d26b5d796c4__section_restrictadaptation"/>

## Restrict adaptation for certain controls

It can be a good idea to exclude certain controls from key user adaptation. Examples:

-   Controls for standard actions that should not be **removed** \(for example, the *Close* button\)
-   Controls that should not be **changed**, because their properties are changed dynamically by the application coding, which will consequently overwrite key user changes
-   You're planning a beta release or something similar for an app and want to prevent that the included controls are adapted.

To achieve this, you need instance-specific design time metadata. You attach these metadata via the `sap.ui.dt` namespace and the `designtime` attribute to the `xml` node of the control you want to restrict, or via `CustomData`. There are three types of restrictions:

-   The control cannot be **changed** on the respective instance level \(recommended, for example, if the control properties are changed dynamically by the application coding\).

    Required metadata: `not-adaptable`

-   The control cannot be **changed** on the respective instance level as well as on all children of that instance.

    Required metadata: `not-adaptable-tree`

-   The control cannot be **removed** or **revealed** \(i.e. added\) \(recommended, for example, for standard actions\).

    Required metadata: `not-adaptable-visibility`


> ### Note:  
> Controls that have already been delivered with previous app versions should *not* be switched to `not-adaptable`, `not-adaptable-tree`, or `not-adaptable-visibility` later. Reason: Setting these metadata later will not affect existing changes and might even cause regressions.

The process to define the design time metadata depends on your scenario:



### XML View

In this case, you need to specify metadata via the `sap.ui.dt` namespace. Example:

```xml
<mvc:View xmlns:mvc="sap.ui.core.mvc"
	xmlns:sap.ui.dt="sap.ui.dt"
>
	...
	<SomeControl sap.ui.dt:designtime="<path>/<name.designtime" />
	<SomeOtherControl sap.ui.dt:designtime="not-adaptable" />
	<AnotherControl sap.ui.dt:designtime="not-adaptable-visibility" />
	<ContainerControl sap.ui.dt:designtime="not-adaptable-tree" />
		<ChildControl> <!-- this is also not adaptable -->
			<AnotherChildControl /> <!-- this is also not adaptable -->
		</ChildControl>
	</ContainerControl>
	...
</mvc:View>
```



### Control is instantiated by JavaScript code

In this case, you need to provide the instance-specific design time metadata as custom data. Example:

```js
new SomeControl({
	//other settings
	customData :  [new CustomData({
		key : "sap-ui-custom-settings",
		value : {
			"sap.ui.dt" : {
				"designtime": "not-adaptable" || "not-adaptable-visibility" || "not-adaptable-tree"
			}
		}
	})];
});
```



<a name="loiode9fd55c69af4b46863f5d26b5d796c4__section_s5x_314_2jb"/>

## When are key user changes applied?

As described under [Controller Code](sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md#loiof1430c0337534d469da3a56307ff76af__section_ControllerCode), two mechanisms apply:

-   For controls in the XML view, changes are applied during the XML view processing.
-   For controls that are created by your controller code, such as controls that are part of a group and are later placed inside an existing control \(e.g. `placeAt` to place a control inside a node of the DOM\), the changes are applied when the control becomes part of the SAPUI5 control tree.



<a name="loiode9fd55c69af4b46863f5d26b5d796c4__section_af4_cb4_2jb"/>

## Can I check for stable IDs during automatic testing?

Yes. You can integrate corresponding check from the Support Assistant rule into your Opa5 tests as described in [Integrating the Rules in OPA Tests](../04_Essentials/integrating-the-rules-in-opa-tests-cfabbd4.md).



<a name="loiode9fd55c69af4b46863f5d26b5d796c4__section_k2w_3b4_2jb"/>

## Can I do manual testing?

To test key user adaptation in your [SAP Fiori launchpad sandbox](https://help.sap.com/viewer/825270ffffe74d9f988a0f0066ad59f0/CF/en-US/6609d3ba857742ef99432b6b0472ade0.html), include the following script in the HTML file that you use for sandbox testing. With these configurations, you should be able to start key user adaptation as usual.

```html
<script type="text/javascript">
    window["sap-ushell-config"] = {
        defaultRenderer : "fiori2",
        bootstrapPlugins: {
            "RuntimeAuthoringPlugin" : {
                "component": "sap.ushell.plugins.rta",
                config: {
                    validateAppVersion: false
                }
            }
        }
    }
</script>

```

