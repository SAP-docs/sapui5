<!-- loio56467c53595a6655e10000000a423f68 -->

# Configuration Files and Their Structure

To configure or enhance an APF-based application, you can use the APF Configuration Modeler app. When you export a configuration, a JSON file is created that contains all configuration objects, such as categories, steps, and representations. The following chapters explain the configuration on a technical level and show how the JSON files are structured and what the properties used in the configuration objects mean.

The following JSON files are relevant:

-   The `manifest.json` file, which defines static information about the application.

    > ### Note:  
    > In SAPUI5 1.28 and prior releases, the static information was defined in the application configuration file.

-   The analytical configuration file, which defines the content of the application and how it is represented on the user interface.

    > ### Note:  
    > We recommend not to edit the analytical configuration file manually. However, there are exceptions such as a mass change of OData service paths.


The configuration options include the following tasks:

-   Changing the analytical configuration file

    > ### Note:  
    > When you want to change the analytical configuration file of a delivered application, you must first make a copy and save it to a new location.

    Some possible changes to the analytical configuration file are:

    -   You can change a request, which defines the access to a server resource.

    -   You can change the relation between the requested data and the representations by adapting the binding.

    -   You can add a category for the analysis step gallery.

    -   You can add new analysis steps or adapt existing ones, for example, by replacing the request or the binding for a step.


-   Changing text resource files

    > ### Note:  
    > When you want to change a text resource file of a delivered application, you must first make a copy and save it to a new location.

-   Changing the `manifest.json` file

    Whenever you have changed the analytical configuration file or text resource files and have copied the files to a new location, you must ensure that the locations are adapted accordingly in the `manifest.json` file.


The configuration options are explained in detail in the following sections.

