<!-- loio4e81b77cbd1646f2912b693686a2ebee -->

# Configuring the Static Link List Card

You can configure a static link list card to display static data, such as links, images, and icons, as list items.



To display information in the link list card as either standard or carousal type, you must configure the `listFlavor` property in the card settings.



To configure a static link list card, proceed as follows:

1.  Configure the `title`, `subtitle`, and `listFlavor` of the card.

2.  Configure the `staticContent` properties for each item such as `title`, `subtitle`, `imageUri`, `imageAltText`.


    <table>
    <tr>
    <th valign="top">

    Property
    
    </th>
    <th valign="top">

    Description
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `title`
    
    </td>
    <td valign="top">
    
    The link's title.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `subTitle`
    
    </td>
    <td valign="top">
    
    The link's subtitle.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `imageUri`
    
    </td>
    <td valign="top">
    
    URL of an image or `sap-icon://` reference for an icon.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `imageAltText`
    
    </td>
    <td valign="top">
    
    Alternative text for the image.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `targetUri`
    
    </td>
    <td valign="top">
    
    \(URL-based navigation\) Target URL of the link.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `openInNewWindow`
    
    </td>
    <td valign="top">
    
    \(URL-based navigation\) When `true`, opens the URL in a new browser tab.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `semanticObject`
    
    </td>
    <td valign="top">
    
    \(Intent-based navigation\) Target semantic object of the Fiori intent.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `action`
    
    </td>
    <td valign="top">
    
    \(Intent-based navigation\) Action of the Fiori intent.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `disableInCard`
    
    </td>
    <td valign="top">
    
    When `true`, disables the link inside the card while keeping it active in the quick view.
    
    </td>
    </tr>
    </table>
    
3.  Configure the navigation for each list item. The static link list card supports two kinds of navigation, as shown in the following table:


    <table>
    <tr>
    <th valign="top">

    Navigation type
    
    </th>
    <th valign="top">

    Properties
    
    </th>
    <th valign="top">

    Purpose
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    URL-based navigation
    
    </td>
    <td valign="top">
    
    `targetUri`, `openInNewWindow`
    
    </td>
    <td valign="top">
    
    Linking to a URL to an external website or specific application route.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    Intent-based navigation
    
    </td>
    <td valign="top">
    
    `semanticObject`, `action`
    
    </td>
    <td valign="top">
    
    Navigating to another SAP Fiori app using the SAP Fiori launchpad.
    
    </td>
    </tr>
    </table>
    

URL-based navigation: The following sample shows how to configure URL-based navigation using the `targetUri` and `openInNewWindow` properties.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "card010_QuickLinks": {
>   "model": "salesOrder",
>   "template": "sap.ovp.cards.v4.linklist",
>   "settings": {
>     "title": "Quick Links",
>     "subTitle": "Standard Link List With Static Data",
>     "listFlavor": "standard",
>     "staticContent": [
>       {
>         "title": "Jim Smith",
>         "subTitle": "Sales",
>         "imageUri": "img/JD.png",
>         "imageAltText": "Jim Smith",
>         "targetUri": "https://abc.com",
>         "openInNewWindow": true
>       },
>       {
>         "title": "Alice Wilson",
>         "subTitle": "Sales",
>         "imageUri": "img/AW.png",
>         "imageAltText": "Jim Smith",
>         "targetUri": "https://abc.com",
>         "openInNewWindow": true
>       }
>     ]
>   }
> }
> 
> ```

Intent Based Navigation: The following sample shows how to configure intent-based navigation using the `semanticObject` and `action` properties.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "card010_QuickLinks": {
>   "model": "salesOrder",
>   "template": "sap.ovp.cards.v4.linklist",
>   "settings": {
>     "title": "Quick Links",
>     "subTitle": "Standard Link List With Static Data",
>     "listFlavor": "standard",
>     "defaultSpan": {
>       "rows": 15,
>       "cols": 1
>     },
>     "staticContent": [
>       {
>         "title": "Create Purchase Order",
>         "imageUri": "sap-icon://Fiori6/F0865",
>         "imageAltText": "{{card30_icon_prod_man}}",
>         "semanticObject": "Action",
>         "action": "toappnavsample",
>         "disableInCard": true
>       },
>       {
>         "title": "Create Supplier",
>         "imageUri": "sap-icon://Fiori2/F0246",
>         "imageAltText": "{{card30_icon_so_man}}",
>         "semanticObject": "Action",
>         "action": "toappnavsample"
>       },
>       {
>         "title": "Create Contact",
>         "imageUri": "sap-icon://Fiori6/F0866",
>         "imageAltText": "{{card30_icon_so_man}}",
>         "semanticObject": "Action",
>         "action": "toappnavsample"
>       }
>     ]
>   }
> },
> ```

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.

**Related Information**  


[Configuring the Dynamic Link List Card](configuring-the-dynamic-link-list-card-675c514.md "You can configure dynamic link list card to display data such as links, images, and icons in the form of list items.")

[Link List Cards](link-list-cards-0326f91.md "You can use link list cards to display a list of links with a title, picture, icon, or subtitle. Link list cards support quick views to display contact annotation information.")

