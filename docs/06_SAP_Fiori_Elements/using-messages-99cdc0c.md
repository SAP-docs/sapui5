<!-- loio99cdc0c506e44fe98da978685526c16c -->

# Using Messages

The system generates messages in response to what users do in the SAP system. A message presents information, an instruction, or a warning to users in a given situation.

Back-end systems can generate either a state message or a transition message.

-   State message

    A state message refers to the state of an instance, for example when a user tries to activate an object with field values that return an error like "Amount must not be negative". These messages are displayed on the UI until the state of the related instance has been corrected, for example by changing the amount attribute to a positive value. The messages are displayed to the user and also persisted in the back-end system.

    State messages are not expected or supported in the list report and on the object page \(or subobject page\) in display mode. In edit mode of the object page \(or subobject page\), state messages are shown in the message popover. The popover only shows the message of the current object and its subtree, but not the messages from objects above that level. Client-side validation messages are also shown here.

-   Transition message

    A transition message does not affect the state of the object, but is rather 'transient' in nature and refers only to the last action that was executed, for example, "Document can't be printed as printer is not available" or "Order cannot be released because the specified quantity is not available in stock". Transition messages are not stored in the back end and are only sent in response to the specific request \(fire and forget\).

    Transition messages are always shown in the message dialog - this is true also in edit mode of an object page. Draft operations are handled like actions, for example, activate, prepare, or validate operations.

    > ### Note:  
    > Avoid raising transition messages during prepare and validate operations. The user sees them in a dialog box and this UI behavior is not needed in edit mode.




<a name="loio99cdc0c506e44fe98da978685526c16c__section_jlv_bxt_jbc"/>

## Back-End Validation Messages After a Field Change

Use input validations moderately, as they can slow down the response time and unnecessarily prevent the end user from providing incomplete entries in the draft status.

Input must be validated before the draft object is activated, or when the end user uses the Enter button or *Validation* button on mobile devices. The validation process must return state messages for the fields that have invalid values. If there are invalid values in any fields, the draft is not activated and the end user returns to the draft version to correct the values. After the user corrects the value in a field, the back end must validate each changed field again and remove or display a state message corresponding to that field.

> ### Note:  
> You can configure multiple targets in a single message rather than configuring each target in multiple messages. This type of configuration must be used only during special scenarios, for example, some fields might be correct individually but are erroneous when considered collectively, like when the start date value surpasses the end date value. Another scenario is while highlighting the unit of measure value of an associated erroneous field. In these scenarios, you must ensure that the fields corresponding to different targets are on the same page in the UI.



<a name="loio99cdc0c506e44fe98da978685526c16c__section_hhy_fsm_vsb"/>

## Handling of 412 Messages \("Precondition Failed" \)

Messages of this type allow users to retry the action that triggered the message by ignoring the 412 warnings. For more information, see [Confirmation Popups](confirmation-popups-062078f.md).

