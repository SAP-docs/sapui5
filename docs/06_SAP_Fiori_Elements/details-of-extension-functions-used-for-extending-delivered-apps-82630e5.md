<!-- loio82630e5a31b940b68ea1bd2ca44eeb9c -->

# Details of Extension Functions Used for Extending Delivered Apps

In this document, you can find the details of all the extension functions that can be used for extending delivered apps using adaptation extensions.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

**Extension functions of list report, object page and overview page**


<table>
<tr>
<th valign="top">

Method



</th>
<th valign="top">

Supported Floorplans



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `onInitSmartFilterBar` 



</td>
<td valign="top">

List Report

Analytical List Page



</td>
<td valign="top">

This extension function is called when the `SmartFilterbar` has been initialized.



</td>
</tr>
<tr>
<td valign="top">

 `provideExtensionAppStateData` 



</td>
<td valign="top">

List Report

Analytical List Page

Overview Page



</td>
<td valign="top">

Allow extensions to store their specific state. This means that the implementing controller extension must call `fnSetAppStateData`\(`oControllerExtension`, `oAppState`\).

-   `oControllerExtension` must be the `ControllerExtension` instance for which the state should be stored.

-   The storage state is `oAppState`.


Note that the call is ignored if `oAppState` is faulty.



</td>
</tr>
<tr>
<td valign="top">

 `restoreExtensionAppStateData` 



</td>
<td valign="top">

List Report

Analytical List Page

Overview Page



</td>
<td valign="top">

Enable extensions to restore their state based on a previously stored state. In this case, the implementing controller extension can call `fnGetAppStateData` \(`oControllerExtension`\) to retrieve the state information that is stored in the current state for this controller extension. The function returns undefined if no state or a faulty state was stored.



</td>
</tr>
<tr>
<td valign="top">

 `ensureFieldsForSelect` 



</td>
<td valign="top">

List Report

Analytical List Page

Object Page



</td>
<td valign="top">

Give extensions the possibility to ensure that certain fields are contained in the select clause of the table binding. It is used when custom logic of the extension depends on these fields.

The extension logic is applied on the `sControlId` control ID.

For each custom field the extension must call `fnEnsureSelectionProperty` \(`oControllerExtension`, `sFieldname`\).

-   `oControllerExtension` must be the `ControllerExtension` instance to ensure that the field is part of the select clause.

-   `sFieldname` must specify the field that is to be selected. Note that this must either be a field of the entity set itself, or a field that can be reached using a :1 navigation property. In the second case `sFieldname` must contain the relative path.




</td>
</tr>
<tr>
<td valign="top">

 `addFilters` 



</td>
<td valign="top">

List Report

Analytical List Page

Object Page

Overview Page



</td>
<td valign="top">

Allow extensions to add filters. It is combined using `AND` with all the other filters.

For each filter the extension must call `fnAddFilter` \(`oControllerExtension`, `oFilter`\)

-   `oControllerExtension` must be the `ControllerExtension` instance that adds the filter.

-   `oFilter` must be an instance of `sap.ui.model.Filter`.




</td>
</tr>
<tr>
<td valign="top">

 `provideExtensionStateData` 



</td>
<td valign="top">

Object Page



</td>
<td valign="top">

Allow extensions to store their specific state. The implementing controller extension must call `fnSetExtensionStateData` \(`oControllerExtension`, `oExtensionState`\).

-   `oControllerExtension` must be the `ControllerExtension` instance for which the state should be stored.

-   The storage state is

    `oExtensionState`.

    Note that the call is ignored if `oExtensionState` is faulty.


The values for the lifecycle object parameters \(Page, Permanent etc.\) are provided in extension implementation.



</td>
</tr>
<tr>
<td valign="top">

 `restoreExtensionStateData` 



</td>
<td valign="top">

Object Page



</td>
<td valign="top">

Enable extensions to restore their state based on a previously stored state.

In this case, the implementing controller extension can call `fnGetExtensionStateData` \(`oControllerExtension`\) in order to retrieve the state information that has been stored in the current state for this controller extension. The function returns undefined if no state, or a faulty state was stored.

`bIsSameAsLast` is a boolean. The true value indicates that the state cannot be adapted, since view remains as it was left the last time.



</td>
</tr>
<tr>
<td valign="top">

 `provideStartupExtension` 



</td>
<td valign="top">

Overview Page



</td>
<td valign="top">

Modifies the selection variant that is to be set to the filter bar.

The parameter, while calling this function, is a reference to the custom selection variant expected by the overview page.



</td>
</tr>
<tr>
<td valign="top">

 `provideExtensionNavigation` 



</td>
<td valign="top">

Overview Page



</td>
<td valign="top">

This function is used to get a new or modified custom navigation entry to the core. The core then uses the custom navigation entry to perform navigation.

This function is called with the standard navigation entry details \(if present\) for a particular card and context.



</td>
</tr>
<tr>
<td valign="top">

 `provideCustomActionPress` 



</td>
<td valign="top">

Overview Page



</td>
<td valign="top">

This function captures the press event and returns the event corresponding to it, so that the custom functions can be triggered.

The method provided to this function is defined in the controller extension.



</td>
</tr>
<tr>
<td valign="top">

 `provideCustomParameter` 



</td>
<td valign="top">

Overview Page



</td>
<td valign="top">

This function takes the name or key corresponding to a method that is then returned. The method that is returned resolves to give the custom parameters.

The method that returns is also defined in the extension controller.



</td>
</tr>
</table>

**Related Information**  


[Extending Delivered Apps Using Adaptation Extensions](extending-delivered-apps-using-adaptation-extensions-52fc48b.md "You can extend delivered apps based on SAP Fiori elements by using SAP Fiori tools, which is a set of extensions for SAP Business Application Studio and Visual Studio Code.")

