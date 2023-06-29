<!-- loio1c60212834c049ed9f65d743dfeb3d9a -->

# Table Personalization \(deprecated\)

The simple concept of table personalization allows the user to personalize a table and to persist these settings.

> ### Caution:  
> Deprecated as of version 1.115, replaced by [Personalization](personalization-75c08fd.md).

Personalization currently supports defining the order of columns and their visibility.



## Components Defining Personalization

The table personalization concept is built upon three distinct artifacts:

-   A table personalization dialog `sap.m.TablePersoDialog`
-   A table personalization controller `sap.m.TablePersoController`
-   A table personalization persistence service provider, based on abstract class `sap.m.TablePersoProvider`



## Table Personalization Dialog

The table personalization dialog `sap.m.TablePersoDialog` is a visual control that can be invoked within the context of the table personalization controller. The dialog shows the list of columns in the table, the order in which they appear, and whether their visibility is set to on or off. The user can then use this dialog to adjust these details.

When a user closes the dialog, its table personalization controller automatically applies the column order and visibility settings to its table and it calls the table personalization persistence service provider's `setPersData` method and fires a `personalizationsDone` event.

You can also use the table personalization controller's `getTablePersoDialog` to directly access the table personalization dialog, and use its `retrievePersonalization` method to access its column order and visibility settings.

The personalization settings retrieved with this method take the form of an object that currently has one single property, `aColumns`, the value of which is an array of column objects each having the following properties:


<table>
<tr>
<th valign="top">

Property



</th>
<th valign="top">

Type



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

`id`



</td>
<td valign="top">

string



</td>
<td valign="top">

The ID of the column



</td>
</tr>
<tr>
<td valign="top">

`order`



</td>
<td valign="top">

integer



</td>
<td valign="top">

The order of the column. Starts with `0`



</td>
</tr>
<tr>
<td valign="top">

`text`



</td>
<td valign="top">

string



</td>
<td valign="top">

The text of the column header



</td>
</tr>
<tr>
<td valign="top">

`visible`



</td>
<td valign="top">

boolean



</td>
<td valign="top">

Specifies whether the column is visible \(true\) or not \(false\)



</td>
</tr>
</table>



## Table Personalization Controller

The table personalization controller `sap.m.TablePersoController` can be seen as a wrapper around three things:

-   Your table \(to be personalized\)
-   A table personalization dialog
-   A table personalization persistence service provider

As an application developer, you most likely want to use a table personalization controller. The controller manages the instantiation of the table personalization dialog and the connection to the table persistence service provider \(see later\). It also applies the personalizations to the table once the dialog has been closed by clicking *OK*.

Here is an example of how a table personalization controller can be used, assuming you are running in the context of the unified shell, which provides backend services such as persistence.

```js

// Create a persistence key
var oPersId = {container: "mycontainer-1", item: "myitem-1"};

// Get a personalization service provider from the shell (or create your own)
var oProvider = sap.ushell.Container.getService("Personalization").getPersonalizer(oPersId);

// Instantiate a controller connecting your table and the persistence service
var oTablePersoController = new sap.m.TablePersoController({
    table: oTable,
    persoService: oProvider
}).activate();

// Cause the dialog to open when the button is pressed
sap.ui.getCore().byId("idPersonalization").attachPress(function() {
    oTablePersoController.openDialog();
});
```

Once the user closes the table personalization dialog, the personalizations made are automatically applied to the table and persisted. Conversely, when the controller is instantiated, any existing personalizations are fetched and applied to the table. The link to the persistence service provider, the instantiation of a table personalization dialog object, and the automatic appliance of any personalization settings to the table is invoked with the activate method as shown above.

As well as the `openDialog` and `activate` methods shown, methods are also available to apply and save the personalizations: `applyPersonalizations` and `savePersonalizations` respectively. In most cases, you do not need to call the functions: the table personalization controller takes care of it all after it has been activated.

The table personalization controller also offers a 'refresh' function. It re-loads the personalization information from the table personalization provider, applies it to the controller's table, and updates the table personalization dialog.

Note the reference to "create your own" personalization service provider in the code example above. The unified shell provides a shell-based personalization persistence service provider \(see below\), but you are of course free to build your own. One simple example might be the use of browser local storage to read and write data.



## Table Personalization Persistence Service Provider

The table personalization persistence service provider should be based on the abstract class `sap.m.TablePersoProvider`. Do not instantiate and use this `sap.m.TablePersoProvider` class directly as a provider; it merely describes the interface that a real persistence service provider should be built to.

The interface itself is simple: on instantiation, persistence identification can be supplied. This will then be used as the key for retrieving, saving and removing the personalization data. The following methods are available:

-   `getPersData()`: Retrieves the personalizations.
-   `setPersData(oPersonalizationData)`: Saves the given personalization data.
-   `delPersData()`: Removes the personalization data.
-   `getGroup(oColumn)`: Lets you specify to which group a column should belong. If you set the `hasGrouping` flag in the table personalization controller, the table personalization dialog will call this method to arrange the columns in groups.
-   `getCaption(oColumn)`: Implement this method if you would like the table personalization dialog to display a different column name than the one displayed within the table, or if you would like to add any information to the standard column name.

    If present, the table personalization controller's `getCaption` method is asked for the column text when the table personalization dialog is opened. If it does not deliver a result, the column header texts are taken from the table.


After activation, the table personalization controller applies the personalization obtained through calling the provider's `getPersData()` to its table: it re-arranges the order of columns in the table and makes them invisible if required. To define a default visibility setting, you can either fill the persistence of your table personalization provider with default settings, or you can implement your table personalization provider's `getPersData` method so that it delivers a default visibility if no persisted personalization is available yet.

> ### Note:  
> There are no keys specified in the calls to the `get`, `set` and `del` functions. These should be inherent from the original instantiation of the service and used implicitly. There may be a requirement to supply a variant style sub-key in future, but this is not yet implemented.

**Shell Table Personalization Persistence Service Provider**

A concrete implementation of the table personalization persistence service provider \(`sap.m.Table PersoProvider`\) is available from the Unified Shell services. The previous code example shows this persistence service provider being instantiated and utilized in the controller.

> ### Note:  
> Please note that this is not part of the SAPUI5 framework. It is delivered separately, and you must check that this service is available in your application context.



## Sample

For a detailed example of how table personalization works, see the [sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.TablePerso).



## API Reference

-   [sap.m.TablePersoDialog](https://ui5.sap.com/#/api/sap.m.TablePersoDialog)
-   [sap.m.TablePersoController](https://ui5.sap.com/#/api/sap.m.TablePersoController)
-   [sap.m.TablePersoProvider](https://ui5.sap.com/#/api/sap.m.TablePersoProvider)

