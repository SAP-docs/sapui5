<!-- loio59a0e11712e84a648bb990a1dba76bc7 -->

# Building an App with the Flexible Column Layout and Related Classes

The following sections provide you with best practices and details that help you develop SAP Fiori apps with the `sap.f.FlexibleColumnLayout` control.

The simplest way to build an app with the `sap.f.FlexibleColumnLayout` is to create an instance of the control as a top-level container in the root view of your component and then use the `sap.f.routing.Router` to manipulate the control upon user interaction.

On each significant user action, query the `sap.f.FlexibleColumnLayoutSemanticHelper` class for the recommended layout and action buttons to show.

