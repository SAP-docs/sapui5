<!-- loioa2b24a69baef4b91af2293ccc6b5871f -->

# Extending Delivered Apps Using Adaptation Projects

You can extend delivered apps based on SAP Fiori elements by using the Adaptation Studio in SAP Business Application Studio. The Adaptation Editor allows you to create adaptation projects on top of delivered apps.

> ### Tip:  
> While SAP Fiori elements supports table type modifications through adaptation projects, we cannot guarantee compatibility across all applications and scenarios. Table type modifications may behave differently depending on factors such as the specific application, OData version, and existing configurations.
> 
> We recommend that you thoroughly test any table type modifications before productive usage to ensure all functionalities work as expected.



## When to Extend Apps

SAP aims to consistently deliver the latest industry best practices, innovations, and business applications. However, if a standard SAP Fiori application doesn’t fully reflect your business process or the specific needs of some of your business users, you can extend it by creating and adapting an application variant, while the original SAP Fiori application remains available and unchanged. In an application variant, you can extend the original code to define changes that fulfill the specific business requirements of different business roles, user groups, organizational units, and countries. For example, you might want to create an application variant to simplify and streamline a specific process by hiding fields not required by casual users, visualizing data as a chart, or changing a responsive table to a grid table to make information easier to process. Or you might want to add additional subobject pages to visualize additional data.

For detailed information about extending the delivered apps see [\[Extending SAP Fiori Applications\]](https://help.sap.com/docs/bas/developing-sap-fiori-app-in-sap-business-application-studio/extending-sap-fiori-application). Additionally, the tutorial group [\[Work with SAPUI5 Adaptation Projects\]](https://developers.sap.com/group.sapui5-adaptation-projects.html) provides additional helpful insights and valuable learning content.



> ### Note:  
> For information aboutSAP Fiori elements for OData V2, see [Extending the Delivered Apps Manifest Using an Adaptation Project](extending-the-delivered-apps-manifest-using-an-adaptation-project-61a015c.md).

