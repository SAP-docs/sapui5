<!-- loio239b1922758645e7b451e01ded7f56bc -->

# Using Messages

The system generates messages in response to what users do in the SAP system. A message presents information, an instruction, or a warning to users in a given situation.

Back-end systems can generate either a state message or a transition message.

-   State message

    A state message refers to the state of an instance, for example when a user tries to activate an object with field values that return an error like "Amount must not be negative". These messages are displayed on the UI until the state of the related instance has been corrected, for example by changing the amount attribute to a positive value. The messages are displayed to the user and also persisted in the back-end system.

    State messages are not expected or supported in the list report and on the object page \(or subobject page\) in display mode. In edit mode of the object page \(or subobject page\), state messages are shown in the message popover. The popover only shows the message of the current object and its subtree, but not the messages from objects above. Client-side validation messages are also shown here.

-   Transition message

    A transition message does not affect the state of the object, but is rather 'transient' in nature and refers only to the last action that was executed, for example, "Document can't be printed as printer is not available" or "Order cannot be released because the specified quantity is not available in stock". Transition messages are not stored in the back end and are only sent in response to the specific request \(fire and forget\).




<a name="loio239b1922758645e7b451e01ded7f56bc__section_jlv_bxt_jbc"/>

## Back-End Validation Messages After a Field Change

Use input validations moderately, as they can slow down the response and unnecessarily prevent the end user from providing incomplete entries in the draft status.

Input must be validated before the draft object is activated, or when the end user uses the Enter button or Validation button on mobile devices. The validation process must return state messages for the fields that have invalid values. If there are invalid values in any fields, the draft is not activated and the end user returns to the draft version to correct the values. After the user corrects the value in a field, the back end must validate each changed field again and remove or display a state message corresponding to that field.

> ### Note:  
> You can configure multiple targets in a single message rather than configuring each target in multiple messages. This type of configuration must be used only during special scenarios. One scenario is while some fields are individually correct but erroneous when considered collectively. For example, the begin date value surpasses the end date value. Another scenario is while highlighting the unit of measure value of an associated erroneous field. In these scenarios, you must ensure that the fields corresponding to different targets are on the same page in the UI.



<a name="loio239b1922758645e7b451e01ded7f56bc__section_hhy_fsm_vsb"/>

## Handling of 412 Messages \("Precondition Failed" Messages\)

Messages of this type allow users to retry the action that triggered the message by ignoring the 412 warnings. For more information, see [Confirmation Popups](confirmation-popups-9a53662.md).



<a name="loio239b1922758645e7b451e01ded7f56bc__section_otc_1xw_cnb"/>

## Additional Features in SAP Fiori Elements for OData V2

Transition messages are always shown in message dialog - this is true also in edit mode of an object page. Draft operations are handled like actions, for example, activate, prepare, or validate operations.

> ### Note:  
> Avoid raising transition messages during prepare and validate operations. The user would see them in a dialog box and this UI behavior is not needed in edit mode.



<a name="loio239b1922758645e7b451e01ded7f56bc__section_zxr_fxw_cnb"/>

## Additional Features in SAP Fiori Elements for OData V4

For more information about the different transport channels for the different kinds of messages and about the lifecycle management of these messages, see [Server Messages in the OData V4 Model](../04_Essentials/server-messages-in-the-odata-v4-model-fbe1cb5.md).



### State Messages

State messages are always sent with the body in a complex type, meaning you can annotate the name of the message using `@com.sap.vocabularies.Common.v1.Messages`, but only if requested from the client. Once requested, the model removes the existing state messages for the current entity and fills the message model again with the returned ones from the back end.

Applications must annotate side effects with the target to the message property for each property change that can result in new or removed messages. It's designed like this because not every update results in changed messages. If the update is just a dump patch without underlying business logic, there is no need to remove the messages on the client, read them in the back end and transfer them to the client again.

The following is an example of a side effects annotation:

> ### Sample Code:  
> ```
> <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="CustomerChange">
>     <Record>
>         <PropertyValue Property="SourceProperties">
>             <Collection>
>                 <PropertyPath>Customer</PropertyPath>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="TargetProperties">
>             <Collection>
>                 <PropertyPath>SAP__Messages</PropertyPath>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```

If an app needs to read the messages for all properties, you can add a side effect with the entity as source entity, as shown in the following example:

> ### Sample Code:  
> ```
> <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="AllwaysReadStateMessages">
>     <Record>
>         <PropertyValue Property="SourceEntities">
>             <Collection>
>                 <NavigationPropertyPath />
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="TargetProperties">
>             <Collection>
>                 <PropertyPath>SAP__Messages</PropertyPath>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```

Actions that return an entity with an annotated message property are likely to also change state messages. Therefore, if no side effect was annotated, we implicitly request for the message property. If a side effect is annotated, the application must add the message property to the `TargetProperties` of this side effect’s definition.



### Bound and Unbound Messages

SAP Fiori elements provides two main types of message handling, depending on whether the incoming messages are bound, that is, specific to an instance \(for example, the sales order that was chosen for the action to be executed\) or unbound, that is, not related to a specific instance \(for example "No new sales order can be created until the end of this quarter."\).

Unbound messages are always considered as transition messages.

– Handling Bound Messages –

Bound messages \(both state and transition\) are shown in a message popover in edit mode. The message popover allows to display a summarized list of different types of bound messages. In addition, it provides a handy and systemized way to navigate to messages and view the details. The messages for subitems are also shown. Messages are grouped based on the name of the message group the current item belongs to, or else categorized under ‘General’.

Bound transition messages are shown in the message dialog in the list report and on the object page \(or subobject page\) in display mode. State messages are not supported. If there is exactly one transition success message, the message is shown in a message toast.

Bound transition messages, unlike state messages, are always removed whenever the user triggers a new action or changes data.

Usage

-   You want to display multiple messages to the user.

-   You do not want to interrupt the user flow while still retaining the messages corresponding to the operations they perform.


Layout: Message Button

-   You want to display multiple messages to the user.

-   You do not want to interrupt the user flow while still retaining the messages corresponding to the operations they perform.

-   The message button is only available if there are bound messages.

-   The message button is colored to indicate the highest severity among all the incoming bound messages. In addition, it displays the total count of error messages.


Layout: Message Popover

The message popover consists of the following components:

-   Filter: You use the filter function to filter messages based on their severity \(for example error, success, or warning messages\).

-   Group Name: Name of the message group the current item belongs to \(otherwise categorized under 'General'\).

    Messages from the back end are grouped by tables, indicating the section and table name. This allows users to easily see which table an error message is related to if the app contains many tables.

-   Short description of the message.

-   Subtitle label for additional information.

-   Chevron navigation to the detailed description of the message \(if this is supplied by the back end\).

    If the message model provides a long text from the back end, the user is able to navigate to the details section from the message popover. There, the user typically finds more detailed information.

      
      
    **Message Popover: Chevron Navigation to Message Details**

    ![](images/Message_Popover_Chevron_Navigation_to_Details_671213a.png "Message Popover: Chevron Navigation to Message Details")


Navigation is also supported from the messages. This allows end users to navigate directly to the place where the error/warning occurs on the UI by simply clicking on the respective message in the message popover.

– Handling Unbound Messages –

A message dialog is used to display a summarized list of different types of unbound messages \(messages that are not associated with any specific instance, for example a message like “No new sales order can be created since the system is under maintenance until the end of the week.”\). It provides a handy and systemized way to navigate and explore the technical details of every message. It automatically displays messages related to a user action connected to the back end, or to service failures or errors.

Usage

-   You want to display unbound messages that provide immediate feedback to end users on an operation they performed.


Layout: Message Dialog

The message dialog consists of the following components:

-   Filter: You use the filter function to filter messages based on their severity \(for example error, success, or warning messages\).

-   Type: Indicates the type of the message.

-   Title/Subtitle: Use this feature to provide a title and subtitle for the message.

-   Description: Provides the long text of the message with detailed information.

-   Chevron navigation to the detailed description of the message \(if this is supplied by the back end\).

    If the message cannot be fully displayed or includes a description, the `MessageDialog` enables the navigation to the detailed description of the message, along with the technical details of the message \(for example status code, status text, or description\), application details \(component ID, service ID, or service repository\) and error resolution details \(analysis, exception category, or timestamp\).

      
      
    **Message Dialog: Chevron Navigation to Message Details**

    ![](images/Message_Dialog_Chevron_Navigation_to_Details_6971667.png "Message Dialog: Chevron Navigation to Message Details")




### Using Status Messages on the Object Page

Based on information received from the back end, we show a message strip on the object page with a status message for the object whenever it’s relevant to the entire object \(and not to a child entity or a specific field, for example\). The color of the message strip is derived from the criticality of the message. You can hide the message strip or display a specific message using the `ExtensionAPI`. For more information about the `ObjectPage.ExtensionAPI`, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.templates.ObjectPage.ExtensionAPI/methods/showMessages).

