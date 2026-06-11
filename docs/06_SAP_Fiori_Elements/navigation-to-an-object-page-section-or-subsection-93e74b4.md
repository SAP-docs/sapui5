<!-- loio93e74b4b6815435e966272bb648ce018 -->

# Navigation to an Object Page Section or Subsection

You can enable navigation from a table row to a specific section or subsection on an object page in SAP Fiori elements for OData V4.

To define the table you want to navigate from, add the `targetControlId` property to the table's `navigation` object in the `manifest.json` file. The `targetControlId` value must be the ID of the target section or subsection, for example, `fe::FacetSection::SectionId` for a section or `fe::FacetSubSection::SubSectionId` for a subsection. The ID corresponds to the section or subsection ID generated from the annotations of the object page.

> ### Note:  
> Use the `route` property for internal navigation within the same app, or the `outbound` property for cross-app navigation to external apps. For external apps, the `outbound` must also be defined in the `crossNavigation` object.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> {
>     "sap.app": {
>         ...
>         "crossNavigation": {
>             "outbounds": {
>                 "NavigationTarget-display": {
>                     "semanticObject": "NavigationTarget",
>                     "action": "display"
>                 }
>             }
>         }
>     },
>     ...
>     "sap.ui5": {
>         ...
>         "routing": {
>             "targets": {
>                 "ProductsList": {
>                     "type": "Component",
>                     "name": "sap.fe.templates.ListReport",
>                     "id": "ProductsList",
>                     "options": {
>                         "settings": {
>                             "entitySet": "Products",
>                             "navigation": {
>                                 "Products": {
>                                     "detail": {
>                                         "route": "ProductsDetail",
>                                         "targetControlId": "fe::FacetSubSection::SupplyChain"
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 },
>                 "ProductsDetail": {
>                     "type": "Component",
>                     "name": "sap.fe.templates.ObjectPage",
>                     "id": "ProductsDetail",
>                     "options": {
>                         "settings": {
>                             "entitySet": "Products",
>                             "navigation": {
>                                 "_MoreComments": {
>                                     "detail": {
>                                         "outbound": "NavigationTarget-display",
>                                         "targetControlId": "fe::FacetSubSection::AdditionalInfoSection"
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 }
>             },
>             "routes": [
>                 ...
>             ]
>         }
>     }
> }
> ```

