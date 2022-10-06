<!-- loio0326f910c6af4fb1b86f2810ee10419e -->

# Link List Cards

Allows you to view a list of links with title, picture, icon, or subtitle.



Link List card supports the following navigation types:

-   QuickView link: To view contact information from a collection. Example, Recent contact list
-   Cross App link: To access related applications. Example, intent-based navigation
-   External URL link



## Link List Card Types

Supports standard and carousel link list card types.



## Standard

Provides an ordered list items. \(Optional\) You can

-   Add a picture and/or subtitle to the list item.
-   Configure the card size to view multiple columns, if the dashboard layout has multiple columns.

![](images/StandardLLC_f27c6ec.png) 



## Carousel

Provides carousel based view. Title and subtitle appears on top of the card, allowing more space for image. You can also configure this list type with multiple columns.

![](images/CarouselLLC_4a16a45.png)



You can customize the information in the link list to appear in the following ways:

-   One or two line\(s\) of
    -   Text only
    -   Text with icon supports image control
    -   Text with image supports avatar control

-   Interaction States: You can add more interactions to the link list.



## Annotation Examples



### Standard Link List

```

"card20": {
    "model": "salesOrder",
    "template": "sap.ovp.cards.linklist",
    "settings": {
        "title": "Dynamic Linklist Card",
        "targetUri": "https://en.abc.org/wiki/A_2",
        "subtitle": "NEW CARD",
        "listFlavor": "standard",
        "sortBy": "Name",
        "entitySet": "ProductSet",
        "sortOrder": "ascending",
        "headerAnnotationPath": "com.sap.vocabularies.UI.v1.HeaderInfo#header1",
        "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#identify1",
    }
}

```



### Carousel

```
"card_20": {
    "model": "HEPM_OVP_TECH_VAL",
    "template": "sap.ovp.cards.linklist",
    "settings": {
        "title": "{{card20_title}}",
        "entitySet": "Hepmra_C_OFT_Employee",
        "listFlavor": "carousel",
        "sortBy": "Employee",
        "sortOrder": "ascending",
    }
},
```

> ### Note:  
> In SAP Fiori elements for OData V4, add `sap.ovp.cards.v4.linklist` as the `template`. All other manifest settings are the same as in SAP Fiori elements for OData V2.

