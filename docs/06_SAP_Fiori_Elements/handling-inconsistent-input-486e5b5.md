<!-- loio486e5b58499d414295dc068b446c71a3 -->

# Handling Inconsistent Input

Users might enter data that is so inconsistent that the system cannot store it.

For example, you've entered characters in a number field. Or you've entered more characters than the field length allows. The system behaves as described below.

**System behavior in draft-enabled apps**

In a case like this, the contents of the UI differ from the contents of the draft. Before the user can save the draft, the system displays a message prompting the users to solve these errors. After all errors have been solved, the draft can be activated.

The system also behaves like this when using the *Apply* button in the subobject page. When you choose *Apply*, the system has to make sure that the content on the UI and the stored content of the draft are identical. If the errors described above occur, the system displays the same message prompting the user to solve them.

> ### Note:  
> This message lists only errors related to technical inconsistencies, not to logical inconsistencies. For example, if a user enters a business partner that does not exist, this error is not displayed. These types of errors are displayed in a state message when you save the object.



## Additional Features in SAP Fiori Elements for OData V2

**System behavior in non-draft apps**

Before users can save the data, the system displays a message prompting the users to solve these errors. After all errors have been solved, the object can be saved.

