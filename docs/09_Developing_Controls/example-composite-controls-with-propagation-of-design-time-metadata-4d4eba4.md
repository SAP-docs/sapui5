<!-- loio4d4eba493a6446019bbc3b02aa8178e6 -->

# Example: Composite Controls with Propagation of Design-Time Metadata

Composite controls can delegate the content of the public aggregations to internal controls. By doing this, the delegated controls are removed from the public aggregation of the composite and moved to the internal control. The composite control needs to make sure that the public aggregations still return all added controls. This means that the getter of the aggregation must be overridden and return the correct controls.

Here's an example of a composite control that delegates its content to the private aggregation `_verticalLayout`. All accessors and mutators are overridden, and they call the representing methods of the `_verticalLayout` control.

> ### Sample Code:  
> ```
> var MyCompositeControl = Control.extend("MyCompositeControl", {
>     metadata: {
>         aggregations: {
>             content: {
>                 type: "sap.ui.core.Control",
>                 multiple: true
>             },
>             _verticalLayout: {
>                 type: "sap.ui.layout.VerticalLayout",
>                 multiple: false,
>                 hidden: true
>             }
>         },
>         designtime: "<designtime folder path>/MyCompositeControl.designtime"
>     },
> 
>     init: function() {
>         this.setAggregation("_verticalLayout", new VerticalLayout(this.getId() + "--verticalLayout"));
>     },
> 
>     // All accessors and mutators have to be overridden!
>     addContent: function(oControl) {
>         return this.getAggregation("_verticalLayout").addContent(oControl);
>     },
> 
>     getContent: function() {
>         return this.getAggregation("_verticalLayout").getContent();
>     },
> 
>     removeContent: function(oControl) {
>         return this.getAggregation("_verticalLayout").removeContent(oControl);
>     },
> 
>     removeAllContent: function() {
>         return this.getAggregation("_verticalLayout").removeAllContent();
>     },
> 
>     insertContent: function(oControl, iIndex) {
>         return this.getAggregation("_verticalLayout").insertContent(oControl, iIndex);
>     },
> 
>     renderer: function(oRm, oControl) {
>         oRm.write("<div ");
>         oRm.writeControlData(oControl);
>         oRm.writeClasses();
>         oRm.write(">");
>         oRm.renderControl(oControl.getAggregation("_verticalLayout"));
>         oRm.write("</div>");
>     }
> });
> 
> var myCompositeControl = new MyCompositeControl({
>     content: [
>         new sap.m.Label({text: "Label1"}),
>         new sap.m.Button({text: "Button1"}),
>         new sap.m.Label({text: "Label2"}),
>         new sap.m.Text({text: "Text1"}),
>         new sap.m.Label({text: "Label3"}),
>         new sap.m.Text({text: "Text3"})
>     ]
> });
> ```

To enable the control for design time, you need to propagate design-time metadata and the relevant container control to the internal controls. The internal controls don't need to know any behavior related to the composite control because it gets propagated by the composite control. The design-time metadata gets extended or overwritten during the creation of control overlays. So, the internal control knows who is the relevant \(parent\) control from which the design-time metadata is propagated. See the following example:

> ### Sample Code:  
> myCompositeControl.designtime.js
> 
> ```
> {
>     ...
>     aggregations: {
>         content: {
>             ignore: true
>         },
>         form: {
>             ignore: false,
>             propagateMetadata: function(oInnerControl) {
>                 var sType = oInnerControl.getMetadata().getName();
>                 if (sType === "sap.ui.layout.VerticalLayout") {
>                     return oVerticalLayoutPropagatedMetadata;
>                 } else {
>                     // Override all actions from other inner controls
>                     return {
>                         actions: null
>                     };
>                 }
>             },
>             propagateRelevantContainer: true
>         }
>     }
> }
> ```

**Related Information**  


[Propagating Design-Time Metadata for Composite Controls](propagating-design-time-metadata-for-composite-controls-c4159f5.md "If you want the controls used inside a composite control to behave differently as compared to being used stand-alone, the composite control needs to propagate different design-time metadata to the inner controls.")

[Propagating the Relevant Container](propagating-the-relevant-container-888661c.md "The relevant container is the parent control that defines the context in which a control operates. By default, this is the direct parent. If you have a control that defines the context for controls several levels deep in the control tree, you need to propagate the relevant container information.")

