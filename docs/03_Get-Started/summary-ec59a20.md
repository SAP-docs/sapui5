<!-- loioec59a200c9dc482e995da6c7c892999f -->

# Summary

Summary of the *Smart Controls* tutorial

In this tutorial we have focused on conveying the big picture of the smart controls leaving quite a few features of the smart controls aside. For example, the `SmartTable` control can also be used in combination with the so-called analytical table, a table type that has additional features, such as displaying aggregation rows to display the sums. This information is controlled by the configuration in the `metadata.xml` document. In addition, the `SmartField` control as a basic building block can consume more annotations than we have been able to show here.

We would also like to mention that the OData services you have seen in this tutorial have version 2.0. With version 4.0, the behavior might change.

In the previous steps you have seen how smart controls can use different sources of configuration to make development easier. You may wonder, though, where exactly which configuration should be located. To answer this question, we need to think about from where the various configuration parts are coming. You should think of `metadata.xml` \(that is the definition of entities, such as `EntityType` and annotations\) as information associated with the service or the application logic, even though we have seen that annotations are more UI-specific than the more generic information found in the `EntityTypes` and the `EntityContainer`. Information in the `metadata.xml` is therefore predetermined for a certain amount of reuse: You can build several UIs \(or parts of it\) reusing this information. We have seen such a reuse several times in this document: The reuse of the OData service metadata document for `SmartFilterBar`, `SmartTable`, and the popups associated with the value help. In contrast to this, the configuration information that we specify in the `view.xml` is more specific to one concrete UI.

