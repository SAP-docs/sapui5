<!-- loioc4bd35e657df4285bb6d4b2a6c51a5af -->

# Quick View Cards

You can configure quick view cards to display detailed information about a single record—more than a table or list card can show. You can also assign actions to a quick view card; these actions appear as buttons in the card footer.



Quick view card supports the following properties:


<table>
<tr>
<th valign="top">

Action type

</th>
<th valign="top">

Use for

</th>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.HeaderInfo`

</td>
<td valign="top">

Presents the entity header information.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.Facets`

</td>
<td valign="top">

Presents the detailed content area.

</td>
</tr>
</table>

The `HeaderInfo` annotation supports the following properties:

-   `TypeNamePlural`

-   `ImageUrl` 

-   `Title` 

-   `Description`


The content area shows `FieldGroup` records from `referenceFacet` items that are tagged with the `IsSummary` annotation in the `com.sap.vocabularies.UI.v1.Facets` annotation.

You can configure the `com.sap.vocabularies.UI.v1.Facets` annotation `manifest.json` file by setting the `annotationPath` property with a qualifier, as shown in the code sample below. If the `annotationPath` property is not configured, the `com.sap.vocabularies.UI.v1.Facets` annotation, without a qualifier, is used.





## Configuring the Card Footer

You can assign actions to the quick view cards that open in the object stream of the stack card. The actions are displayed as buttons in the card footer.

The following two action types from the `com.sap.vocabularies.UI.v1.Identification` annotation can be displayed in the footer:


<table>
<tr>
<th valign="top">

Action type

</th>
<th valign="top">

Use for

</th>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation`

</td>
<td valign="top">

Navigating to another SAP Fiori application.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataFieldForAction`

</td>
<td valign="top">

Triggering an OData action.

</td>
</tr>
</table>

Depending on the number of assigned actions, they are displayed in the footer as shown in the following table:


<table>
<tr>
<th valign="top">

Number of actions

</th>
<th valign="top">

Footer behavior

</th>
</tr>
<tr>
<td valign="top">

1

</td>
<td valign="top">

The button is right-aligned in the footer.

</td>
</tr>
<tr>
<td valign="top">

2 \(for example, *OK* and *Cancel*\)

</td>
<td valign="top">

Both buttons appear in the footer, ordered by importance and entry order. We recommend placing the positive action on the left and the negative action on the right.

</td>
</tr>
<tr>
<td valign="top">

3 or more

</td>
<td valign="top">

An *Actions* button appears. Clicking it opens an `ActionSheet` control listing all actions in metadata order.

</td>
</tr>
<tr>
<td valign="top">

0

</td>
<td valign="top">

The footer area isn't displayed.

</td>
</tr>
</table>

Each OData action is translated into a request according to the annotation. Clicking an action invokes the OData service request. Complex actions open a dialog box with the action parameters or a confirmation message.

Interaction buttons in the footer area are part of `sap.m.OverflowToolbar` so quick view cards can display action buttons based on the width of the card. If more actions are necessary, the remaining actions appear in the overflow toolbar.

The following sample shows how to reference a qualified `Identification` annotation from a card definition:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>     ...
>     "cards": {
>         ...
>         "card01": {
>             "model": "ZCD204_EPM_DEMO_SRV",
>             "template": "sap.ovp.cards.v4.table",
>             "settings": {
>                 ...
>                 "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#Qualifier1",
>                 ...
>             }
>         },
>         ...
>     }
> }
> ```

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.



## Card Sizing and Scrolling Behavior

Cards can have different sizes because the height of each quick view card is aligned with the content of the card. If there is more content than can be shown in the card, you'll be able to scroll vertically, but only within the content area itself. The header and footers stay fixed.

The following sample shows how to configure a stack card whose object stream cards display content from a qualified `Facets`annotation:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>     ...
>     "cards": {
>         "card00": {
>             "model": "ZCD204_EPM_DEMO_SRV",
>             "template": "sap.ovp.cards.v4.stack",
>             "settings": {
>                 "category": "{{card01_category}}",
>                 "entitySet": "BusinessPartners",
>                 "objectStreamCardsSettings": {
>                     "annotationPath": "com.sap.vocabularies.UI.v1.Facets#Qualifier2"
>                 }
>             }
>         },
>         ...
>     }
> }
> ```

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.



**Related Information**  


[Stack Cards](stack-cards-756c49c.md "You can use stack cards to group multiple cards of the same type that are related to a common topic or action. When clicked, the object stream can display up to 20 stacked cards.")

