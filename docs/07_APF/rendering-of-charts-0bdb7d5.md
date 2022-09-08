<!-- loio0bdb7d53b5c19456e10000000a423f68 -->

# Rendering of Charts

The rendering of charts includes the following elements that are defined in the APF Configuration Modeler:

-   Chart title

    The chart title is taken from the *Step Long Title* field of the step configuration. It is displayed above any representation of a particular analysis step. If no long title is defined, the step title is used instead.

-   Titles of the horizontal axis and the vertical axis

    The general format of the title is <title \(unit\)\>. It can be determined in one of the following ways:

    -   The title is first read from the *Label* field of the representation configuration in the APF Configuration Modeler, if this property has been configured.

    -   If the `fieldDesc` property has not been configured, but the field has a corresponding `sap:text` annotation in the OData metadata, the system looks up the field name specified in the annotation and retrieves the `sap:label` value of that field. This applies to those fields for which you want to display the name rather than an ID, for example, the customer ID.

    -   If the *Label* field has not been configured and a `sap:text` annotation does not exist, the system looks up the `sap:label` annotation of the OData metadata, which retrieves the label specified for this field in the SAP HANA model.


    > ### Note:  
    > The unit is concatenated to the title only if the axis shows a measure that has a unit and if all data records have the same unit.

-   Value formatting:

    All fields are formatted according to the supported OData 2.0 annotations. If no annotations exist, the value is displayed without formatting.

-   Legend

    A legend is displayed for all charts that have multiple dimensions or measures. The same formatting applies as described above.

-   Labels of the horizontal axis and the vertical axis

    The rendering of the labels of the axes is defined by the behavior of the core chart. The same formatting applies as described above.


