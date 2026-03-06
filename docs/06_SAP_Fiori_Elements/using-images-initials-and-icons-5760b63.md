<!-- loio5760b638ea274d7aab59e4e434899528 -->

# Using Images, Initials, and Icons

SAP Fiori elements supports the use of images, initials, and icons.

> ### Note:  
> For applications built using SAP Fiori elements for OData V2, you can change the display shape using the Page Editor of SAP Fiori tools. For more information, see [Configure Page Elements](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/047507c86afa4e96bb3d284adb9f4726.html).

The system follows this logic for choosing a display option for an object:

![](images/Avatar_e9e8ed2.jpg)

> ### Note:  
> In the header of an object page, the header image is an avatar control. By default, the avatar is rendered as a square. If the avatar's source, initials, or icon isn't set or found, a fallback placeholder is displayed. The type of placeholder depends on the shape of the avatar. If the avatar is circular, a person icon is shown. If the avatar is a square, a product icon is shown.

You can set the `imageFitType` of the avatar in the header of an object page to determine how an image fits in the avatar's container. The default value is `Cover` which sets the image to be scaled to cover the container. You can also set the `imageFitType` to `Contain` which sets the image to be scaled so that the width and height can fit in the container, as shown in the following code sample:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ui5": {
>     "routing": {
>         "targets": {
>             "SalesOrderManageObjectPage": {
>                 "options": {
>                     "settings": {
>                         "content": {
>                             "header": {
>                                 "avatar": {
>                                     "imageFitType": "Contain"
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Using Images, Initials, and Icons](using-images-initials-and-icons-79fb5fd.md).

