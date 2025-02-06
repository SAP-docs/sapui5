<!-- loio4e81b77cbd1646f2912b693686a2ebee -->

# Configuring the Static Link List Card

Allows you to display static data such as static links, images, and icons in the form of list items.



To display information in the link list card as either standard or carousal type, you must configure the `listFlavor` property in the card settings.



1.  Configure the `title`, `subtitle`, and `listFlavor` of the card.

2.  Configure the `staticContent` properties such as `title`, `subtitle`, `imageUri`, `imageAltText`.

3.  Configure the following navigation properties:

    -   URL-based navigation: Define the `targetUri` and `openInNewWindow` properties.

        > ### Sample Code:  
        > `targetUri`- Based Navigation
        > 
        > ```
        > "card010_QuickLinks": {
        >   "model": "salesOrder",
        >   "template": "sap.ovp.cards.linklist",
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

    -   Intent Based Navigation: Define the `semanticObject` and `action` properties.

        > ### Sample Code:  
        > Intent Based Navigation
        > 
        > ```
        > "card010_QuickLinks": {
        >   "model": "salesOrder",
        >   "template": "sap.ovp.cards.linklist",
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



