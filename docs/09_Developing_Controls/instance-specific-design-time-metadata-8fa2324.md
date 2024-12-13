<!-- loio8fa23241746c45eab2bce0c1e33305da -->

# Instance-Specific Design-Time Metadata

If you want to change the adaptability of a control in a specific instance only, you can provide instance-specific design-time metadata.

To attach instance-specific design-time metadata to XML views, you can attach the `designtime` attribute with the `sap.ui.dt` namespace to the XML node of a control. There are two ways to define the design-time metadata: Either with a path to a file that you created or with special keywords for predefined design-time metadata.

For a list of available keywords, see [Deactivating Adaptation of Controls](deactivating-adaptation-of-controls-6af4302.md).

> ### Sample Code:  
> ```
> <core:View
>     ...
>     xmlns:sap.ui.dt="sap.ui.dt"
> >
>     ...
>     <SomeControl sap.ui.dt:designtime="<path>/<name>.designtime" />
>     <SomeOtherControl sap.ui.dt:designtime="not-adaptable" />
>     <AnotherControl sap.ui.dt:designtime="not-adaptable-visibility" />
>     <ContainerControl sap.ui.dt:designtime="not-adaptable-tree">
>         <ChildControl> <!-- this is also not adaptable -->
>             <AnotherChildControl /> <!-- this is also not adaptable -->
>         </ChildControl>
>     </ContainerControl>
>     ...
> </core:View>
> ```

When you instantiate the view in JavaScript code, you can provide instance-specific design-time metadata as custom data:

> ### Sample Code:  
> ```
> new SomeControl({
>     //other settings
>     customData :  [new CustomData({
>         key : "sap-ui-custom-settings",
>         value : {
>             "sap.ui.dt" : {
>                 "designtime": "<path>/<name>.designtime" // || "not-adaptable" || "not-adaptable-visibility" || "not-adaptable-tree"
>             }
>         }
>     })];
> });
> ```

**Related Information**  


[Deactivating Adaptation of Controls](deactivating-adaptation-of-controls-6af4302.md "You can specify that some controls cannot be adapted.")

