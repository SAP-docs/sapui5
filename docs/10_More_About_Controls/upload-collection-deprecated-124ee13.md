<!-- loio124ee13b03664b14b455630fb8171996 -->

# Upload Collection \(deprecated\)

`UploadCollection` is a list control for attachment management that provides the ability to upload, edit or delete attachments.

> ### Caution:  
> Deprecated as of version 1.88, replaced by [`sap.m.plugins.UploadSetwithTable`](https://ui5.sap.com/#/api/sap.m.plugins.UploadSetwithTable).

The `UploadCollection` control allows users to upload single or multiple files from their devices \(desktop PC, tablet or phone\) to an app. Due to its responsiveness, the upload collection can be used in containers of different sizes.



## Overview

You can use the `UploadCollection` control to show a list of files, for example, attachments or uploads, that can be modified, or you can allow users to add or remove files to or from this list.

The `UploadCollection` control can be used in the following scenarios:

-   **Instant Upload**

    Allows users to upload single or multiple files from their devices and attach them to the application immediately. The selection and upload process is completed in one step and is automatically triggered by the `UploadCollection` control.

-   **Upload Pending**

    In this scenario, the upload process is divided into two steps.

    -   Users select attachments and add them to the upload list \(multiple selection is possible\). Thereby, a user can delete a file of this selection again without canceling the whole upload of the other selected files.


    In a second step, the user uploads the selected files to the application. The upload is provided by the application, for example, with an upload button or similar. To trigger the upload, the control offers an event.




## Details

**Interaction and Behaviour**

-   **Upload files**

    The upload is triggered by the *Add* or *Upload* pushbutton \(depending on the scenario\). In the OS-native file picker dialog you can select one or multiple files. However, the consuming application need to enable the upload of multiple files by using the `multiple` property during the instantiation. During the upload process, a progress indicator provides information about the status. For upload, also Drag & Drop can be used.

-   **Open files**

    To open a listed file, you can choose the icon or thumbnail of the attachment as well as the filename itself. Depending on the file extension, browser capabilities, and device type \(Desktop or mobile\), the file is handled differently, for example, it is opened in a new tab or downloaded, if no display capability is available in the browser.

-   **Rename files**

    Choosing the *Rename* pushbutton \(pen icon\) turns the file name into an input field and allows modification. If the `sameFilenameAllowed` property is set to `false`, the new file name is validated and, if the file name already exists in the current list, an error occurs, which indicates that you need to change the file name.

-   **Delete files**

    The user can delete files by using the *Delete* button. After choosing the *Delete* button, a dialog appears, asking the user to confirm the deletion of the respective file that removes the file from the upload list or application \(the delete behaviour depends on the scenario that is used\).

-   **Sorting and filtering files**

    The application can provide the sorting and filtering feature for the Upload Collection list. After setting the filtering criteria, the users get the filtering information displayed in the info toolbar.

-   For the instant upload scenario only, the following features are available:

    -   **Download files**

        You can download a file item from the Upload Collection list and save it on your device. For example, you can provide a *Download* button in the `sap.m.OverflowToolbar` in the header, and once you marked one of the items the download feature can be used. To use this feature, API methods in the `UploadCollection` control and the `UploadCollectionItem` control are used. Using the `askForLocation` parameter, you can configure that the browser should ask for the location where to store the file or not \(depending on the browser\). When this parameter is set to `false`, the download method acts in the same way as when clicking on the file link. If the `askForLocation` parameter is set to `true`, the browser opens a *Save As* dialog.

    -   **Upload a new version of a file**

        To upload a new version of a file to the Upload Collection list, the `openFileDialog` method is available. You can provide a button in the `sap.m.OverflowToolbar` in the header and if one entry in the Upload Collection list is selected, the API method shall be called. The uploading process of the new version depends on the settings for the optional `UploadCollectionItem` parameter:

        -   If the parameter is provided, the method removes the selected item from the Upload Collection list automatically to upload the new version.

        -   If the parameter is not provided, the select dialog of the operating system opens and the further steps have to be proceeded manually by the user.


        The detailed behavior of the feature depends on the app, in which the control is used.

    -   **Terminate uploading a file**

        During an upload process of a file, you can terminate the upload with the *Delete* pushbutton, for example, if the data file is very big and the uploading process takes too long. With the `terminationEnabled` property, you can decide for your application to make the button for termination invisible to prevent the user from terminating an instant upload in the `sap.m.UploadCollection` control.

    -   **`uploadButtonInvisible` property**

        With the `uploadButtonInvisible` property, you can decide for your application to make the *Upload* button in the instant upload scenario invisible to prevent the user from uploading a file.





## Layout

-   The *Rename* and *Delete* pushbuttons are displayed for each item and are active and visible by default. Both icons can be set to invisible or inactive.

-   While most file types have generic icons \(such as Word documents, Excel sheets and PDFs\), graphic files can be displayed with a small thumbnail preview of its graphic if the respective URL is provided.

-   The toolbar of the `UploadCollection` control can be customized:

    -   To customize the toolbar, the `toolbar` aggregation can be set to the `sap.m.OverflowToolbar` control which can contain your preferred UI5 controls. To make the position of the upload \(*\+*\) pushbutton configurable, the `sap.m.ToolbarSpacer` type is used. To configure the position of the button, you can set the placeholder element to the designated position.

    -   If the toolbar is not customized it only provides the upload \(*\+*\) button.
    -   In case the customizable toolbar has been configured and the placeholder is missing, an exception will be thrown.

-   The `mode` property of the `UploadCollection` control can be set. Therefore the `sap.m.ListMode` type is used.

    -   The listmode `Delete` is not supported and will be set to listmode `None` if used.

    -   In chase of an upload pending scenario, the listmode `MultiSelect` is not supported; in this case it will be set to listmode `None` automatically.





## API Reference/Sample

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.UploadCollection) and the [Samples](https://ui5.sap.com/#/entity/sap.m.UploadCollection) in the Demo Kit.



## Constraints and Dependencies

By using the `UploadCollection` control, you need to be aware of the following constraints:

-   The `UploadCollection` control does not work with IE9 because of a missing header parameter handling needed for the upload.

-   The file name of an upload item can contain any text and special characters but not a URL.


The `sap.m.UploadCollection` control uses the `sap.ui.unified.FileUploader` control and contains dependencies to this control. If you want to use the `UploadCollection` control, you need to be aware of these dependencies. For more information about the `FileUploader` control, see the [API Reference Documentation](https://ui5.sap.com/#/api/sap.ui.unified.FileUploader). 

