<!-- loioff89e4b80dfe49128e36582fc5d31aa4 -->

# The *Share: Microsoft Teams* Functionality

The Share functionality is enhanced with the integration of Microsoft Teams.

> ### Note:  
> -   System administrators for SAP S/4HANA Cloud Public Edition can find the required information at [Integrating Microsoft Teams](https://help.sap.com/docs/SAP_S4HANA_CLOUD/0f69f8fb28ac4bf48d2b57b9637e81fa/257ec7408db6420682462cd1d000e744.html).
> 
> -   System administrators for SAP S/4HANA can find the required information at [Integration with Microsoft Teams](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/8308e6d301d54584a33cd04a9861bc52/849465e69b7a490a88049fe0b24fb01e.html?version=2023.000).

![](images/Share_Microsoft_Teams_-_All_Options_None_Selected_f6ca832.png)

When an end user clicks the *Share* button and then the *Share: Microsoft Teams* option, a separate window opens with the following sharing options:



<a name="loioff89e4b80dfe49128e36582fc5d31aa4__section_xfv_jqh_fcc"/>

## *As Chat*

End users can collaborate and quickly resolve issues, if necessary, simply by using Microsoft Teams chat to share a direct link with co-workers. They can provide access to a specific state of an SAP Fiori application, for example, so the co-workers can easily process any requests that end users have or tasks that come up.



<a name="loioff89e4b80dfe49128e36582fc5d31aa4__section_ryb_nqh_fcc"/>

## *As Tab*

End users can work efficiently with a group of co-workers on specific content that they share in the form of a Microsoft Teams tab. They can use the Microsoft Teams environment to work on the same context of an SAP Fiori application, and use the tab conversation option in parallel to share ideas, discuss, and collaborate.



<a name="loioff89e4b80dfe49128e36582fc5d31aa4__section_pfq_nqh_fcc"/>

## *As Card*

End users can communicate better with their co-workers using Microsoft Teams by providing a collaborative view that shows application content in a new window and enables them to have a meaningful conversation. This option is only available as part of the *Share* button in the object page.

> ### Caution:  
> If your application contains sensitive and personal data, enabling the *Share: Microsoft Teams* › *As Card* option results in the transfer of this information outside the SAP S/4HANA environment. Application teams need to carefully consider whether such data should be excluded by providing the corresponding annotation. For sensitive personal data, you can use `com.sap.vocabularies.PersonalData.v1.IsPotentiallySensitive`, and for personal data you can use `com.sap.vocabularies.PersonalData.v1.IsPotentiallyPersonal`. If you enable this feature for your business users, use the applicable information channels to inform them accordingly.



### Sharing Header Facets as a Card

End users can share the header facets of an object page using the *Share: Microsoft Teams* › *As Card* option. The visibility of the header facets on the shared card depends on the visibility of these facets to the recipient.

> ### Restriction:  
> -   The following header facets aren't supported while sharing as a card:
> 
>     -   Header facets that contain a micro chart, rating indicator, or progress indicator.
> 
>     -   Custom facets
> 
>     -   Icon-based images
> 
> 
> -   If the target application has modified these properties using the `manifest.json` file or custom coding, the cards don't display the same visibility, position, title, and subtitle of the header facets as displayed on the object page of the source SAP Fiori elements app.
> 
> -   Application developers must note that the formatting of data points changes when the custom OData V4 formatters are applied, or when precision is controlled using the `DataPoint.NumberOfFractionalDigits` annotation. Additionally, the currency format within cards also differs from the format used within the object page.



### Sharing Header Actions as a Card

End users can share the header actions of an object page using the *Share: Microsoft Teams* › *As Card* option. The card only supports annotation-based actions that aren't overridden by manifest settings. It displays only the first two supported actions, which the recipient can initiate within the Microsoft Teams card. If the shared actions are bound actions, then the page context is passed to the action.

> ### Note:  
> -   Application developers must note the following:
> 
>     -   SAP Fiori Elements doesn't support the sharing of buttons based on the `DataFieldForIntentBasedNavigation` annotation.
> 
>     -   SAP Fiori Elements supports confirmation-based actions that use the `Common.IsActionCritical` annotation. However, when this action is triggered within the Microsoft Teams card, the action displays only the default text from the `i18n` key, `"C_OPERATIONS_ACTION_CONFIRM_MESSAGE"`, and not the text overridden by the application for this key.
> 
> 
> -   SAP Fiori Elements doesn't support the sharing of buttons based on `DataFieldForIntentBasedNavigation` annotation.
> 
> -   Action parameters are shown as dropdown fields in the Microsoft Teams card.
> 
> -   The visibility of actions displayed on the shared card depends on the visibility of the actions to the recipient.
> 
> -   The order of the actions listed on the card follows the order specified in the annotation.

> ### Restriction:  
> -   The following header actions aren't supported while sharing as a card:
> 
>     -   Manifest-based actions.
> 
>     -   Annotation-based actions that are overridden by manifest settings using binding expressions or functions.
> 
> 
> -   Action parameter fields within Microsoft Teams cards do not support the following:
> 
>     -   Field help such as value help, dropdown lists, date pickers, or date time pickers.
> 
>     -   Default values.
> 
>     -   The `IN` /`OUT` parameter mapping. Changing a value in one field does not affect the values available in the other field \(`IN` mapping\), and it does not result in other fields getting a value \(`OUT` mapping\).
> 
> 
> -   Application developers must note that for semantic actions, SAP Fiori Elements supports only the static values of the `Criticality` property for `DataFieldForAction` buttons in the card shared using Microsoft Teams.

> ### Note:  
> -   The *Share: Microsoft Teams* functionality uses application states to shorten long URLs. These application state records are cleaned up if they aren't accessed for a long time. For more information, see [Cleanup of Expired Application State](https://help.sap.com/docs/ABAP_PLATFORM_NEW/a7b390faab1140c087b8926571e942b7/6107ee41f89a43c9af0aa279fe039cca.html).
> 
> -   End users who want to use the *Share: Microsoft Teams* feature in incognito mode will receive an error of type ***Authentication Information HTTP Status 401- Unauthorized***. To resolve this, application developers must inform end users that they must allow third-party cookies for the incognito session.

