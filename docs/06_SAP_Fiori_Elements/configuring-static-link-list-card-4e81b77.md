<!-- loio4e81b77cbd1646f2912b693686a2ebee -->

# Configuring Static Link List Card

Lets you display static data \(static links and images/icons\) in the form of list items.



You can set the `listFlavor` property in the card settings to display information in standard link list type or as a carousel link list type.



1.  Configure card `title`, `subtitle`, and `listFlavor`.

2.  Configure staticContent properties such as `title`, `subtitle`, `imageUri`, `imageAltText`

3.  Configure navigation properties

    -   Url based navigation: Define `targetUri` and `openInNewWindow` properties

        > ### Sample Code:  
        > Target Uri Based Navigation
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

    -   IntentBasedNavigation: Define `semanticObject` and `action` properties

        > ### Sample Code:  
        > IntentBasedNavigation
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



