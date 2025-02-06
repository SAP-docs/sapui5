<!-- loio53cdd55a77ce4f33a14bd0767a293063 -->

# Type Determination

The property binding automatically determines the appropriate type depending on the property's metadata, unless a type is specified explicitly. For example, the binding `"{DeliveryDate}"` will determine the type `sap.ui.model.odata.type.DateTimeOffset` \(assuming the metadata specifies "Edm.DateTimeOffset" for this property\), but `"{path : 'DeliveryDate', type : 'sap.ui.model.odata.type.String'}"` uses the hardcoded type `sap.ui.model.odata.type.String` instead \(and does not require metadata\). You cannot specify format options or constraints unless you also hardcode the type.

Automatic type determination will take constraints from metadata into account, namely the [OData property facets](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part3-csdl.html) "MaxLength", "Nullable", "Precision" and "Scale". In addition to the OData property facets, the following OData V4 annotations are considered to set type constraints on automatic type determination:

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

