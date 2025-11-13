<!-- loio53cdd55a77ce4f33a14bd0767a293063 -->

# Type Determination

The property binding automatically determines the appropriate type depending on the property's metadata, unless a type is specified explicitly. For example, the binding `"{DeliveryDate}"` will determine the type `sap.ui.model.odata.type.DateTimeOffset` \(assuming the metadata specifies "Edm.DateTimeOffset" for this property\), but `"{path : 'DeliveryDate', type : 'sap.ui.model.odata.type.String'}"` uses the hardcoded type `sap.ui.model.odata.type.String` instead \(and does not require metadata\). You cannot specify format options or constraints unless you also hardcode the type.

Automatic type determination will take constraints from metadata into account, namely the [7.2 Type Facets](https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#_Toc38530357) "MaxLength", "Nullable", "Precision" and "Scale". In addition to the OData property facets, the following OData V4 annotations are considered to set type constraints on automatic type determination:

-   `Org.OData.Validation.V1.Validation.Minimum`, `Org.OData.Validation.V1.Validation.Maximum` and `Org.OData.Validation.V1.Validation.Exclusive` are used to set the constraints `minimum`, `maximum`, `minimumExclusive` and `maximumExlusive` for `sap.ui.model.odata.type.Decimal`.

-   `com.sap.vocabularies.Common.v1.IsDigitSequence` is used to set the constraint `isDigitSequence` for `sap.ui.model.odata.type.String`.


> ### Note:  
> Only constant expressions are supported to determine the annotation value in this case.

Currently, the types "Edm.Boolean", "Edm.Byte", "Edm.Date", "Edm.DateTimeOffset", "Edm.Decimal", "Edm.Double", "Edm.Guid", "Edm.Int16", "Edm.Int32", "Edm.Int64", "Edm.SByte", "Edm.Single", "Edm.String" and "Edm.TimeOfDay" are supported and mapped to the corresponding type in the namespace `sap.ui.model.odata.type`. All other types, including collections, are mapped to the generic type `sap.ui.model.odata.type.Raw` which can only be used to access the raw model value "as is", but not to convert it to a human readable representation. This allows specialized controls to work with types that would otherwise not be supported.

For more information, see the [sap.ui.model.odata.type](https://ui5.sap.com/#/api/sap.ui.model.odata.type) and [sap.ui.model.odata.type.Raw](https://ui5.sap.com/#/api/sap.ui.model.odata.type.Raw) API documentation in the Demo Kit.

> ### Note:  
> By default, a property binding delivers a value formatted according to the target type of the control property it applies to, for example, "boolean" in case of `<Icon src="sap-icon://message-warning" visible="{path : 'DeliveryDate', formatter : '.isOverdue'}">`. This leads to errors because type determination adds the correct type for the `DeliveryDate` property which is `DateTimeOffset` and cannot format its value as a boolean value. In such cases, use `targetType : 'any'` as follows:
> 
> ```js
> <Icon src="sap-icon://message-warning" visible="{path : 'DeliveryDate', targetType : 'any', formatter : '.isOverdue'}">
> ```
> 
> In rare cases, you might also want to specify a different `targetType`, for example `string`, `boolean`, `int`, or `float`. For more information how these values relate to OData types, see the [sap.ui.model.odata.type](https://ui5.sap.com/#/api/sap.ui.model.odata.type) API documentation or explore the [XML Templating: UI5 OData Types](https://ui5.sap.com/#/entity/sap.ui.core.mvc.XMLView/sample/sap.ui.core.sample.ViewTemplate.types) sample in the Demo Kit. For more information about `targetType`, see the [sap.ui.base.ManagedObject\#bindProperty](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindProperty) API documentation in the Demo Kit.



<a name="loio53cdd55a77ce4f33a14bd0767a293063__section_GGT"/>

## Geography And Geometry Types

[Auto-`$expand/$select`](automatic-determination-of-expand-and-select-10ca58b.md) as well as automatic type determination also support the following types: "Edm.Geography", "Edm.GeographyPoint", "Edm.GeographyLineString", "Edm.GeographyPolygon", "Edm.GeographyMultiPoint", "Edm.GeographyMultiLineString", "Edm.GeographyMultiPolygon"," Edm.Geometry", "Edm.GeometryPoint", "Edm.GeometryLineString", "Edm.GeometryPolygon", "Edm.GeometryMultiPoint", "Edm.GeometryMultiLineString", "Edm.GeometryMultiPolygon". These are complex types that do not have and do not need UI5 type counterparts. Rather, they are structured with an `Edm.String` "type" property and two `Collection(Edm.Double)` properties, namely "bbox" \(optional\) and "coordinates" \(required\). **Read-only** bindings can simply address numbers inside these arrays, and `sap.ui.model.odata.type.Double` will be used automatically. For more information, see [Property Binding To an Array Element](initialization-and-read-requests-fccfb2e.md#loiofccfb2eb41414f0792c165e69a878717__section_PBAE).

You can also address the entire array, for example within an [Expression Binding](expression-binding-daf6852.md) like "\{= JSON.stringify\(%\{bbox\}\) \}", or even the [entire object](initialization-and-read-requests-fccfb2e.md#loiofccfb2eb41414f0792c165e69a878717__section_PBOV), but without automatic type determination and with no support for writing.

> ### Example:  
> Binding to an Edm.GeographyPoint
> 
> ```
> <FlexBox binding="{/Person('42')/Address/GeoLocation}">
>     <Text id="bbox" text="{= JSON.stringify(%{bbox}) }"/>
>     <Text id="west" text="{bbox/0}"/>
>     <Text id="south" text="{bbox/1}"/>
>     <Text id="east" text="{bbox/2}"/>
>     <Text id="north" text="{bbox/3}"/>
>     <Text id="longitude" text="{coordinates/0}"/>
>     <Text id="latitude" text="{coordinates/1}"/>
>     <Text id="type" text="{type}"/>
> </FlexBox>
> ```

