<!-- loioc86cb441a15146dfbd6eea0400cb13e6 -->

# Refresh API

Use the `refreshBinding` function \(in `Component.js`\) to refresh the header, filter, and content area elements.



> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.



This helps you to reload the data for all components configured in ALP without triggering the browser refresh. The selections in the filter bar \(compact or visual filter\) and the personalization settings \(sorting, grouping, and so on\) are retained even after the refresh.

> ### Note:  
> The main chart selection is lost during the refresh. This may result in the change of table data when AutoHide is switched on for filter mode.

> ### Sample Code:  
> Refreshing by using the controller extensions is defined by the application
> 
> ```
> 
> //By calling refreshBinding function directly .
> 
>        var component = this.getOwnerComponent();
> 
>        component.refreshBinding();
> ```

**Related Information**  


[Configuring Analytical List Page App Extensions](configuring-analytical-list-page-app-extensions-9504fb4.md "This section provides some of the advance configurations and extensions for your application.")

