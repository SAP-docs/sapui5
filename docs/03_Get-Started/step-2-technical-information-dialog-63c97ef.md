<!-- loio63c97ef306f24d6992406eb7d87bc906 -->

# Step 2: Technical Information Dialog

In this tutorial step, we will have a closer look at the "Technical Information Dialog". This tool comes in handy whenever you want to know the technical details of the running application, and also has some other useful features.



<a name="loio63c97ef306f24d6992406eb7d87bc906__section_u2k_c1d_5z"/>

## Preview

 ![Technical Information Dialog](images/Technical_Information_Dialog_SAPUI5_8cec8a2.png) 



<a name="loio63c97ef306f24d6992406eb7d87bc906__section_dmp_d1d_5z"/>

## Opening the Example App and the Technical Information Dialog

1.  Download the example app with errors from the Demo Kitat [Troubleshooting](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.troubleshooting/sample/sap.ui.core.tutorial.troubleshooting.01) and run the app.

2.  Open the *Technical Information Dialog* by pressing  [Ctrl\] + [Shift\] + [Left-Alt\] / [Left-Option\] + [P\] .


The dialog box shows information related to the app and provides access to additional support options.



<a name="loio63c97ef306f24d6992406eb7d87bc906__section_hw4_qmk_sz"/>

## Checking the SAPUI5 Version

When you run into problems with your app, you should check the SAPUI5 version that you're using. The feature that you want to use may not be available in your version or may have some bugs that are already solved in a later version.

1.  Check the displayed version information for the*SAPUI5 Core Package* and the

    *OpenUI5 Version*.

2.  Open the version overview at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html) to see if there are newer patch levels or releases of SAPUI5.

3.  Read the [What's New](../01_Whats-New/what-s-new-in-sapui5-99ac68a.md) section in the documentation and check the  [Change Log](https://ui5.sap.com/#releasenotes.html) to find information about new features and bug fixes.

    > ### Note:  
    > You can view a specific version of the Demo Kit by adding the version number to the URL, for example, `https://ui5.sap.com/1.38.8/`.


For more information, see [Versioning and Maintenance of SAPUI5](../02_Read-Me-First/versioning-and-maintenance-of-sapui5-91f0214.md).



<a name="loio63c97ef306f24d6992406eb7d87bc906__section_t2f_pbd_5z"/>

## Checking the Device

The device on which you run the app may not be supported or might be detected incorrectly by SAPUI5. This can lead to issues with responsiveness or device adaption.

1.  Verify that the *User Agent* shown in the dialog box matches your device, browser, and operating system. If the information is truncated because there is not enough space, you can see the full string as a tooltip. To copy the information, use the *Copy technical information to clipboard* button.

2.  Test the functionality on another device or by using the device emulation features that are offered in the developer tools of your browser.




## Turning On Debug Sources

The SAPUI5 libraries are included in your app in a compressed form. To be able to efficiently debug these libraries, they have to be reloaded in their source format and with developer comments.

1.  Select the *Use Debug Sources* checkbox and confirm reloading the app.

2.  Open the developer tools of your browser

3.  Choose  [Crtl\] + [O\]  and type the name of an SAPUI5 framework artifact to display its source code in debug mode.

    > ### Note:  
    > You may see additional errors and warnings in the developer console. These can help you investigate the problem further.
    > 
    > For performance reasons, you should deactivate this feature again when you're done.


You can also select debug mode only for specific packages:

1.  Next to the *Use Debug Sources* checkbox, choose *Select specific modules* to open the selection dialog box.

2.  Select one or more modules in the module tree and notice that the value of the input field changes accordingly.

3.  Apply the selection and reload the app.


Only the selected modules are now loaded in debug mode.



<a name="loio63c97ef306f24d6992406eb7d87bc906__section_ssw_znk_sz"/>

## Copying Technical Info

If you're really stuck or have found a bug, you can open a ticket. Choose the *Copy technical information to clipboard* button to copy the technical details from this dialog box and then attach them to your message.



<a name="loio63c97ef306f24d6992406eb7d87bc906__section_h4h_wnk_sz"/>

## Accessing Other Tools

The *Technical Information Dialog* also includes links to *Diagnostics* and *Support Assistant* that we will discuss in the following steps of this tutorial.

**Related Information**  


[Technical Information Dialog](../04_Essentials/technical-information-dialog-616a3ef.md#loio616a3ef07f554e20a3adf749c11f64e9 "The Technical Information dialog shows details of the SAPUI5 version currently being used in an app built with SAPUI5. You can use the Technical Information dialog to enable debug resources and open additional support tools to debug your app.")

