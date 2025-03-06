<!-- loioa90c55840b144f2ebc2d836adbc1a54f -->

# Non-Draft Apps

By default, you need to create apps that use draft handling.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V2.

For general information about draft handling, see [Draft Handling](draft-handling-ed9aa41.md) and SAP Fiori web design guidelines for [Draft Handling](https://experience.sap.com/fiori-design-web/draft-handling/).

You can also create non-draft apps, however, you need to consider the specific features and restrictions listed below, as compared to those for draft apps. Create non-draft apps only for simple scenarios without complex flows.

> ### Note:  
> Example of a complex flow: Creating items and subitems in a single step, before saving.
> 
> Example of a simple flow: An application occasionally used to change specific fields.

> ### Note:  
> Do not combine draft and non-draft entity sets in one application.
> 
> Exception: A draft-enabled entity set can contain a non-draft child only for display purposes. For example, a sales order might contain a non-draft contact sub-object. However, performing actions or external navigation from the non-draft child is not possible.



<a name="loioa90c55840b144f2ebc2d836adbc1a54f__section_tzc_3mr_nz"/>

## Saving Data

In non-draft scenarios, the application does not automatically save data to the back end when an end user changes it on the UI. End users must always save the new or modified data before leaving a page, for example, in the following cases:

-   Creating new subitems.

-   Editing existing subitems.

-   Navigating away, for example, by using a chevron in a table.

-   Navigating back to the list report.


The *Save* button is also available on subobject pages. If an end user tries to navigate away from the edit screen with unsaved data, the application displays a data-loss message.

The following features are also **not** available in non-draft apps:

-   Start working on an object, save it as incomplete, and continue later.

-   Automatic saving and data-loss prevention: Keep working while data is saved automatically and asynchronously.

-   Navigation within the application to different pages without having to save in between.


> ### Note:  
> On the object page, for fields that contain a combination of a value and text, for example, currency and EUR or text arrangement and unit, changed values are displayed correctly after saving, only if you have defined a dedicated side effect.



<a name="loioa90c55840b144f2ebc2d836adbc1a54f__section_ilb_lmr_nz"/>

## Locking

Non-draft apps do not lock objects when data is being edited. If two end users work on the same object simultaneously, data may be lost, and the data from the last user to save becomes the final version. As a result, the system does not retrieve data again from the back-end when the end user begins editing.



<a name="loioa90c55840b144f2ebc2d836adbc1a54f__section_ulw_mmr_nz"/>

## Navigation

The following navigation actions or events discard any entered data:

-   SAP Fiori actions such as Back or Home: These actions cause the display of data-loss message.

-   SAP Fiori launchpad sign out: This action results is data loss without displaying a data-loss message.

-   Browser actions such as navigating either back or forward, opening a bookmark, changing the URL, refreshing, and closing the browser: These actions result is data loss without displaying a data-loss message.




<a name="loioa90c55840b144f2ebc2d836adbc1a54f__section_dsp_pmr_nz"/>

## Extension Points and Secured Execution

Various checks can be executed. For example, check for the needed busy indicator or to see whether the data-loss message is needed. The following table contains the input parameters for the method used in the check, and the corresponding system behavior:

**Example parameters**


<table>
<tr>
<th valign="top">

Parameter

</th>
<th valign="top">

System Behavior

</th>
</tr>
<tr>
<td valign="top">

`busy.set=true` 

</td>
<td valign="top">

Triggers a busy indicator when a function is being executed. It can be set to `false` in case of immediate completion.

</td>
</tr>
<tr>
<td valign="top">

`busy.check=true` 

</td>
<td valign="top">

Checks whether the application is currently busy. The function is executed only if it's not busy.

It must be set to `false` if the function is not triggered by direct user interaction, but as a result of another function that set the application to `busy`.

</td>
</tr>
<tr>
<td valign="top">

`dataloss.popup=true` 

</td>
<td valign="top">

Displays a data-loss message before executing the function if needed \(that is, in non-draft cases when the model or registered methods contain pending changes\).

</td>
</tr>
<tr>
<td valign="top">

`dataloss.navigation=false` 

</td>
<td valign="top">

Indicates that the execution of the function leads to navigation, that is, leaves the current page, which induces a slightly different text for the data-loss message.

</td>
</tr>
</table>



<a name="loioa90c55840b144f2ebc2d836adbc1a54f__section_zbz_ygq_bz"/>

## Further Draft Features That Are Not Available in Non-Draft Apps

The following draft features are **not available** in non-draft apps:

-   No data loss, connectivity disruption or session time-out.

-   Device switch: Start on one device and continue on another.

-   Action and field control adjustments during data entry.

-   Checks during data entry.

-   Actions on entered data \(without saving or triggering side effects\).

-   Calculations and defaulting during data entry.

-   Context-dependent value helps \(based on currently entered data\).

-   Sorting and filtering in editable tables for data entry.


