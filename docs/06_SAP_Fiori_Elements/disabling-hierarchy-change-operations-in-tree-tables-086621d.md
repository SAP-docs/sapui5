<!-- loio086621db4d354454bfad2cf518313932 -->

# Disabling Hierarchy Change Operations in Tree Tables

Hierarchy change operations in tree tables support the `UpdateRestrictions` and `NonUpdatableNavigationProperties` annotations in SAP Fiori elements for OData V4. Use these annotations to prevent users from modifying parent-child relationships.

You can disable drag and drop as well as cut and paste to restrict changes in the hierarchy. To do that, use the `UpdateRestrictions` and `NonUpdatableNavigationProperties` annotations on the navigation property to the hierarchy parent.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="YourService.TreeTableSubEntityWithUpdateRestriction">
>     <!-- Draft enabled -->
>     <Annotation Term="Common.DraftRoot">
>         <Record Type="Common.DraftRootType">
>             <PropertyValue Property="ActivationAction" String="YourService.draftActivate"/>
>             <PropertyValue Property="EditAction" String="YourService.draftEdit"/>
>             <PropertyValue Property="PreparationAction" String="YourService.draftPrepare"/>
>         </Record>
>     </Annotation>
> 
>     <!-- Update restrictions on navigation properties -->
>     <Annotation Term="Capabilities.UpdateRestrictions">
>         <Record Type="Capabilities.UpdateRestrictionsType">
>             <PropertyValue Property="NonUpdatableNavigationProperties">
>                 <Collection>
>                     <NavigationPropertyPath>Superordinate</NavigationPropertyPath>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> 
> <!-- Property-level annotations -->
> <Annotations Target="YourService.TreeTableSubEntityWithUpdateRestriction/ID">
>     <Annotation Term="Core.Immutable" Bool="true"/>
>     <Annotation Term="Common.Label" String="ID"/>
> </Annotations>
> 
> <Annotations Target="YourService.TreeTableSubEntityWithUpdateRestriction/name">
>     <Annotation Term="Common.Label" String="Org level name"/>
> </Annotations>
> 
> <Annotations Target="YourService.TreeTableSubEntityWithUpdateRestriction/orgID">
>     <Annotation Term="UI.Hidden" Bool="true"/>
> </Annotations>
> 
> <Annotations Target="YourService.TreeTableSubEntityWithUpdateRestriction/DistanceFromRoot">
>     <Annotation Term="Core.Computed" Bool="true"/>
>     <Annotation Term="UI.Hidden" Bool="true"/>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> define behavior for ZI_TreeTableSubEntityWithUR alias TreeSubEntity
>     persistent table ztree_sub_entity
>     draft table ztree_sub_d
>     lock master 
>     total etag LastChangedAt
>     authorization master ( instance )
>     etag master LocalLastChangedAt
> {
>     field ( readonly ) ID;
>     field ( readonly : update ) ID;
>     field ( readonly ) DistanceFromRoot;
>     
>     association _Superordinate { with draft; }
>     association _Organization; 
>     
>     // Update restriction on navigation to disable the hierarchy opertations
>     association _Superordinate { update ( features : instance ) restricted; }
>     
>     create;
>     update;
>     delete;
>     
>     draft action Edit;
>     draft action Activate;
>     draft action Discard;
>     draft action Resume;
>     draft determine action Prepare;
>     
>     mapping for ztree_sub_entity
>     {
>         ID = id;
>         Parent = parent;
>         Name = name;
>         OrgID = org_id;
>         DistanceFromRoot = distance_from_root;
>     } 
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> @odata.draft.enabled
> entity TreeTableSubEntityWithUpdateRestriction {
>     @Core.Immutable: true
>     @Common.Label  : 'ID'
>     key ID               : String;
>         parent           : String;
> 
>     @Common.Label  : 'Org level name'
>         name             : String;
> 
>     @UI.Hidden     : true
>         orgID            : String;
> 
>     @Core.Computed : true
>     @UI.Hidden     : true
>         DistanceFromRoot : Integer64;
> 
>         Superordinate    : Association to TreeTableSubEntityWithUpdateRestriction
>                              on Superordinate.ID = parent;
>         Organization     : Association to TreeTableEntity
>                              on Organization.ID = orgID;
> }
> 
> annotate TreeTableSubEntityWithUpdateRestriction with @(Capabilities: {UpdateRestrictions: {NonUpdatableNavigationProperties: [Superordinate]}});
> ```

