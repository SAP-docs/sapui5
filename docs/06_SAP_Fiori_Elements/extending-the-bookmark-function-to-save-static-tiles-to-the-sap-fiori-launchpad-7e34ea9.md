<!-- loio7e34ea9317a54806a725ddf9878530d7 -->

# Extending the Bookmark Function to Save Static Tiles to the SAP Fiori Launchpad

You can extend the standard bookmark function by adding an extension point to the list report or analytical list page controller extension. Static tiles are then saved to the SAP Fiori launchpad instead of dynamic tiles.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

Users can use the bookmark function via the *Share* button to make list reports, object pages, or analytical list pages directly accessible from the SAP Fiori launchpad while preserving all filter values they have set before. The bookmark is added as a tile to the SAP Fiori launchpad.

By default, a dynamic tile is created for the list report and the analytical list page. However, there is an exception when the filter bar is configured to consume the semantic date range feature either through manifest settings or by using the custom date range fields. In this case, a static tile is created if any of the semantic date range field\(s\) have been filled with a value. A dynamic tile is created if nothing has been filled.

For more details on the configuration settings of the semantic date range, see [Enabling Semantic Operators in the Filter Bar](enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

For the object page, a static tile is created. Dynamic tiles fetch data from a web service which may result in the following issues:

-   They can access a different service URL and thus retrieve a wrong value

-   They might fetch data that does not correctly represent the tile’s purpose

-   They might be inconsistent if the original tile is static


If you want to enforce the creation of a static tile, add the extension point `onSaveAsTileExtension` to the list report or analytical list page controller extension.

> ### Note:  
> This extension point can only be used for tiles that are added to the launchpad using the bookmark function.

As a prerequisite, you have already added the controller extension to the `manifest.json` of your app.

Overwrite the value in the `serviceUrl` field of the relevant `oShareInfo` object that can either be an empty string to enforce usage of a static tile, or any other service URL string, as follows:

> ### Sample Code:  
> ```
> sap.ui.define([], function () {
>    "use strict";
>    return {
>       onSaveAsTileExtension: function(oShareInfo) {
>          oShareInfo.serviceUrl = ""; // Force static tile
>       }
>    };
> });
> 
> 
> ```

