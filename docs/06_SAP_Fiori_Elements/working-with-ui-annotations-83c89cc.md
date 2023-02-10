<!-- loio83c89ccef12f48ab98f6c3811bd025b3 -->

# Working With UI Annotations

Vocabularies and annotations allow you to extend OData services by adding information about how to interpret the OData service and its data.

> ### Note:  
> Please note that this topic has not yet been updated with information specific to OData V4.

For a general introduction to vocabularies and annotations, see the following links:

-   [Vocabulary Based Annotations](http://scn.sap.com/community/gateway/blog/2013/10/07/vocabulary-based-annotations)

-   [Vocabularies](http://www.odata.org/vocabularies/)

On the SAP Gateway front-end server, you can find SAP-specific vocabularies in the SAP Gateway Service Builder \(transaction `SEGW`\) under *Extras* \> *Vocabulary Repository*.

The following types of vocabulary-based annotations are available:

-   In-place: These are part of the service's metadata document.

-   Ex-place: These are composed of an Annotation Provider Class \(APC\) outside the metadata document. The APC is bound to the service using a registration in transaction `/IWBEP/REG_VOCAN`.


These annotations are available using a query to the SAP Gateway catalog service, `/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/`. Entity Set: ‚Annotations‘.



## Reusability

If the OData service is editable instead of read-only, add annotation elements as needed to activate or control the draft infrastructure. Existing read-only OData services that are annotated, such as fact sheets, can be reused for the list report and object page templates under these circumstances:

-   The annotations have to be stored in the back-end system. They also need to have the life cycle of the data model in the back-end system. Note that facet texts need to be defined in a front-end file after generation.

-   The OData service models \(entity sets and entity types\) are derived from CDS views. The CDS entities are the primary artifacts for the data model. The transactional runtime model \(based on the BOPF\) is generated based on annotations.

-   The UI annotations are attached to CDS views using the tags as defined in the SAP - ABAP Programming Model for SAP Fiori guide in the documentation for your SAP NetWeaver version on SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_NETWEAVER](https://help.sap.com/viewer/p/SAP_NETWEAVER).
-   In the front end, CDS UI annotations are exposed generically and dynamically through SAP Gateway APIs \(APC\) as OData Version 4.0 annotation documents that can be addressed separately.

-   Although you can use any annotation source, we recommend using CDS annotations in metadata extensions and exposing them using SAP Gateway and SADL. The exposure generates OData annotations \(XML format\) from the CDS annotations. The following sections explain which OData annotation controls each UI element.

    For more information, search for *SAP-ABAP Programming Model for SAP Fiori* and for *CDS Annotations* in the documentation for your SAP NetWeaver version on SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_NETWEAVER](https://help.sap.com/viewer/p/SAP_NETWEAVER).




## Actions

General actions are available for draft-enabled documents \(edit, save, cancel/discard\). You can also define additional actions using annotations.

The draft-handling actions are handled by the Business Object Processing Framework \(BOPF\). However, you must back up the application-specific actions using an implementation in the OData service. For general information about actions and how to set them up, see [Actions](actions-cbf16c5.md).

Each action corresponds to an OData function import.



## Field Control

> ### Note:  
> This is relevant only for list report and object pages, worklists, and analytical list pages.
> 
> Field controls are omitted from the list report page since it is a read-only page. In a list report page, field controls are considered only if there are custom actions that reference field controls.

You can use field controls to display a UI field as mandatory or read-only, and to hide the field. Field control information is partly static information and valid for all business document instances. However, most use cases are dynamic and reflect the state of the UI application, business document, or user context and must be controlled by the business logic.

As business logic is implemented in the OData service, the OData service also has to provide the relevant field control information. This is valid for the static information the service metadata contains, as well as for dynamic information that is part of the entity data. There is a specification for an SAP extension of the OData protocol based on annotations for OData Version 2.0 that also covers field control. For more information, see [SAP Annotations for OData Version 2.0](https://sap.github.io/odata-vocabularies/docs/v2-annotations.html).

The controls interpret and apply field control information automatically provided by the OData service. When using a smart field, binding the control’s `value-Property` to a property in the OData model to achieve field control as defined by the OData service is sufficient. Field control of the OData service may be overruled by setting more restrictive properties for the smart field.

> ### Sample Code:  
> Snippet of XML-View definition
> 
> ```
> 
> ... 
> 
> <!-- Field-control as defined in OData service -->   
> 
> <SmartField value="{Description}" />
> 
>      
> 
> <!-- Overrule field-control of OData service - read-only here -->    
> 
> <SmartField value="{Name}" editable="false" />
> 
> ...
> 
> ```



<a name="loio83c89ccef12f48ab98f6c3811bd025b3__section_eds_2ny_qlb"/>

## More Information

-   For more information about the BOPF model, see *SAP - BOPF Developer Guide* in the documentation for your SAP NetWeaver version on SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_NETWEAVER](https://help.sap.com/viewer/p/SAP_NETWEAVER).


