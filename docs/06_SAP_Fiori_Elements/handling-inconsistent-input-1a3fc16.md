<!-- loio1a3fc163969146059ffe1a544f058a15 -->

# Handling Inconsistent Input

Get to know how SAP Fiori apps handle inconsistent input.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Handling Inconsistent Input](handling-inconsistent-input-486e5b5.md).

Users might enter data that is so inconsistent that the system cannot store it. For example, if they entered characters in a number field or entered more characters than the field length allows. The system behavior is described in the following sections.



## System behavior in draft-enabled apps

In draft-enabled apps, the contents of the UI differ from the contents of the draft. Before the user can save the draft, the system displays a message prompting the users to solve these errors. After all errors have been solved, the draft can be activated.

The system also behaves like this when using the *Apply* button in the subobject page. When you choose *Apply*, the system has to make sure that the content on the UI and the stored content of the draft are identical. If the errors described above occur, the system displays the same message prompting the user to solve them.

> ### Note:  
> This message lists only errors related to technical inconsistencies, not to logical inconsistencies. For example, if a user enters a business partner that does not exist, this error is not displayed. These types of errors are displayed in a state message when you save the object.



## System behavior in non-draft apps

Before users can save the data, the system displays a message prompting the users to solve these errors. After all errors have been solved, the object can be saved.

