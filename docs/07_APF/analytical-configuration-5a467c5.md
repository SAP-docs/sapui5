<!-- loio5a467c53595a6655e10000000a423f68 -->

# Analytical Configuration

The analytical configuration of APF specifies, for example, the available analysis steps, the representations that are used for each step, and the categories in which the analysis steps are displayed. It is written in JavaScript Object Notation \(JSON\) format.

Some of the objects used to specify the analytical content must be registered under a unique ID and can be accessed using this ID. The IDs must be unique within the configuration of an APF-based Web application.

The following table lists the objects used in an analytical configuration:


<table>
<tr>
<th valign="top">

Object Type



</th>
<th valign="top">

Unique ID Required



</th>
</tr>
<tr>
<td valign="top">

`step` 



</td>
<td valign="top">

Yes



</td>
</tr>
<tr>
<td valign="top">

 `hierarchicalStep` 



</td>
<td valign="top">

Yes



</td>
</tr>
<tr>
<td valign="top">

 `request` 



</td>
<td valign="top">

Yes



</td>
</tr>
<tr>
<td valign="top">

`binding` 



</td>
<td valign="top">

Yes



</td>
</tr>
<tr>
<td valign="top">

`representation` 



</td>
<td valign="top">

Yes



</td>
</tr>
<tr>
<td valign="top">

`representationType` \(optional\)



</td>
<td valign="top">

Yes



</td>
</tr>
<tr>
<td valign="top">

 `facetFilter` 



</td>
<td valign="top">

Yes



</td>
</tr>
<tr>
<td valign="top">

 `smartFilterBarConfiguration` 



</td>
<td valign="top">

Yes



</td>
</tr>
<tr>
<td valign="top">

 `navigationTarget` 



</td>
<td valign="top">

Yes



</td>
</tr>
<tr>
<td valign="top">

`category` 



</td>
<td valign="top">

Yes



</td>
</tr>
<tr>
<td valign="top">

`label` 



</td>
<td valign="top">

No



</td>
</tr>
<tr>
<td valign="top">

`thumbnail` 



</td>
<td valign="top">

No



</td>
</tr>
</table>



## General Rules

The following rules apply when working with configuration objects in Analysis Path Framework:

-   Value representations in configuration objects must comply with the JSON format.

-   String values must be in double quotes.

-   The *type* property is optional, but it is useful for debugging and comprehensibility.

-   The *id* property is mandatory for those objects that require a unique ID. It must be a unique ID of type string.

-   Depending on the object type, configuration objects can contain various other properties. Changes to a set of properties must be compatible with the original configuration object. You can, for example, add new properties.

    > ### Note:  
    > Customer modifications may conflict with the SAP namespace and can be overwritten when updates are imported.


-   **[The Configuration Root Object](the-configuration-root-object-3cda7d5.md)**  

-   **[The Step Object](the-step-object-4bda7d5.md)**  

-   **[The Request Object](the-request-object-33da7d5.md)**  

-   **[The Binding Object](the-binding-object-5e467c5.md)**  

-   **[The Representation Object](the-representation-object-6a467c5.md)**  

-   **[The Representation Type Object](the-representation-type-object-6f467c5.md)**  

-   **[The Facet Filter Object](the-facet-filter-object-2a43fbb.md "")**  

-   **[The Smart Filter Bar Object](the-smart-filter-bar-object-b96dbb6.md "")**  

-   **[The Navigation Target Object](the-navigation-target-object-5cfe2c1.md "")**  

-   **[The Configuration Header Object](the-configuration-header-object-44fa08b.md "")**  

-   **[The Category Object](the-category-object-62467c5.md)**  

-   **[The Label Object](the-label-object-66467c5.md)**  

-   **[The Thumbnail Object](the-thumbnail-object-c5da7d5.md)**  


