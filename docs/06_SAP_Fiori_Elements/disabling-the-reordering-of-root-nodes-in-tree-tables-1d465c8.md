<!-- loio1d465c877f264592ad4fee3b9e5b5033 -->

# Disabling the Reordering of Root Nodes in Tree Tables

The `ChangeSiblingForRootsSupported` annotation controls whether users can reorder root nodes in tree tables in SAP Fiori elements for OData V4. Use this annotation to prevent unintended changes to the root-level hierarchy structure.

You can prevent users from changing the order of root nodes by using the [`ChangeSiblingForRootsSupported`](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Hierarchy.xml#L201) annotation.

If `ChangeSiblingForRootsSupported` is set to `false`, users can't do the following actions:

-   Move a root node up or down

-   Drop a node as a root node between two other root nodes


If no specific restrictions have been set for an action, the following actions are supported:

-   Cutting a root node

-   Pasting a node as a root node

-   Dragging a root node

-   Dropping a node as a root node at the beginning or end of the table or onto the right-hand side of the table


If `ChangeSiblingForRootsSupported` is not defined, it is considered as set to `true`.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <edmx:Reference Uri="/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName='%2FIWBEP%2FVOC_HIERARCHY',Version='0001',SAP__Origin='LOCAL')/$value">
>   <edmx:Include Namespace="com.sap.vocabularies.Hierarchy.v1" Alias="SAP__hierarchy"/>
> </edmx:Reference>
> 
> <Annotations Target="SAP__self.HierarchyEntityType">
>   <Annotation Term="SAP__hierarchy.RecursiveHierarchyActions" Qualifier="HierarchyNode">
>     <Record>
>       <PropertyValue Property="ChangeNextSiblingAction" String="SAP__self.changeNextSibling"/>
>       <PropertyValue Property="CopyAction" String="SAP__self.copy"/>
>       <PropertyValue Property="ChangeSiblingForRootsSupported" Bool="false"/>
>     </Record>
>   </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate SAP__self.HierarchyEntityType with @(
>     hierarchy.RecursiveHierarchyActions #HierarchyNode : {
>         $Type: 'hierarchy.RecursiveHierarchyActionsType',
>         ChangeNextSiblingAction: 'SAP__self.changeNextSibling',
>         CopyAction: 'SAP__self.copy',
>         ChangeSiblingForRootsSupported: false
>     }
> );
> ```

