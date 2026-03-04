<!-- loio2a20b31cf998412b8148db949732c02d -->

# The Share Functionality

The *Share* functionality allows end users to share the current application state using various options.

The following options are available as part of the *Share* functionality:

![](images/Share_options_9e889d2.png)

-   *Send Email*

    When an end user chooses this option, the link to the page opens in the default email client that is configured in the system. When they choose the link, the application page opens in the same state in which it was shared: filter settings, personalization options, and selections for charts and tables, as well app-specific button states such as the filter mode or view mode, are all transferred.

-   *Share in SAP Jam*

    End users can also share the current application state using *Share in SAP Jam*. A dialog appears that allows them to select an existing Jam group, comments can be added, and Jam users can be tagged. This option is only available on platforms that are integrated with SAP Jam.

-   *Save as Tile*

    When an end user chooses this option, the corresponding *Save as Tile* dialog is displayed. When they choose the tile, the application page opens in the same state in which the tile was created. Application developers can customize the title and the sub-title of the tile. In the list report, a dynamic tile with a record count is created, where the applied filter is also taken into account.

-   *Share: Microsoft Teams*

    End users can collaborate with their co-workers using the *Share: Microsoft Teams* functionality. For more information, see [The Share: Microsoft Teams Functionality](the-share-microsoft-teams-functionality-8d382b1.md).

-   *Share: Collaboration Manager*

    When an end user chooses this option, the *SAP Collaboration Manager* dialog opens with the application URL, which includes the page title and the current `iAppState`.

    > ### Note:  
    > System administrators for SAP S/4HANA Cloud Public Edition can find the required information at [Setting Up, Integrating, and Configuring SAP Collaboration Manager](https://help.sap.com/docs/SAP%20Collaboration%20Manager/cb0f914082ac49ddac2aecc728117530/8ec4cf31f6a94a1da039f7d5922cc0f3.html).


> ### Note:  
> -   The *Share* functionality is available for the list report, object page, and subobject page.
> 
> -   For applications using the flexible column layout, the *Share* functionality is shown on the highest view level.
> 
> -   The *Share* functionality is not available for newly created objects in draft mode, so the button is not visible.
> 
> -   For draft objects with an existing active instance the *Share* functionality will directly share the URL of the active instance.
> 
> -   The *Share* functionality is hidden for the creation pages of non-draft objects.

During tile creation, you can change the tile type from dynamic to static using an extension. For more information, see [Extending the Bookmark Function to Save Static Tiles to the SAP Fiori Launchpad](extending-the-bookmark-function-to-save-static-tiles-to-the-sap-fiori-launchpad-7e34ea9.md).

