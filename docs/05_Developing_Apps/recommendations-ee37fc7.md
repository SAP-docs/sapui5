<!-- loioee37fc7138b843c0a66700f0aeaba3fe -->

# Recommendations

When developing SAPUI5 applications, you need to pay attention to the correctness of the resulting HTML. Some vital accessibility features \(screen reader and keyboard support\) rely on a correct and meaningful structure of the application.



## Rules and Guidelines



### WCAG 2.2

To ensure better accessibility experience and to adhere to the Web Content Accessibility Guidelines \(WCAG\) 2.2, it is important for developers and designers to follow specific guidelines. When working with SAPUI5 controls, refer to the SAP Fiori for Web design guidelines corresponding to the specific control you are using. The design guidelines provide detailed information on how each control should be implemented to meet accessibility requirements. For example for the `sap.m.Object` controls, see [Object Display Components Fiori Guidelines](https://experience.sap.com/fiori-design-web/object-display-elements/).



### Don't change the HTML

Theming \(CSS selectors\), keyboard handling \(tab order\) and screen reader support are tightly coupled with the HTML structure of the generated pages. If you change the structure of the elements \(for example, from custom JavaScript, HTML or CSS\), this could break some or all of the accessibility aspects. In addition, it makes debugging the application more difficult.



### Initial focus position

Within an application, the initial focus should be placed on the element that is most likely to be edited or interacted with first \(for example, mandatory fields on a form\).

When opening dialogs or new pages, the focus should be on the first focusable element inside the content area.

> ### Tip:  
> On touch devices, if the first focusable element is a control that would open the soft keyboard, it is better to place the focus elsewhere - on the footer of the dialog or on a control that requires no keyboard input.
> 
> A good practice is to set the focus on the first mandatory element.



### Don't interfere with existing accessibility features

Overriding code, for example the keyboard tab order or SAPUI5 key handlers, will impact the correct handling and may break the accessibility of the whole application.



### Make sure that each component has a unique ID

The SAPUI5 framework handles the creation of unique IDs automatically. If you pass IDs yourself, make sure that they are unique within the whole application. For more information, see the *Related Information* section.



### Tooltips for container controls

Container and layout controls such as `VerticalLayout` or `Grid` inherit the tooltip property from `sap.ui.core.Element`.

> ### Tip:  
> We do not recommend setting a tooltip for the whole layout control, as it will not be displayed. You can set the needed tooltips for the individual controls which the container holds.

> ### Tip:  
> If you are developing your own controls, follow the guidelines listed under *Related Information*.



## Tips for Testing

Start the application and check each screen element. Check the following:

-   Does it have a label or a tooltip \(hover with the mouse\)?

-   Are the labels and tooltips \(fully\) visible, clear, accurate, and meaningful?

    -   Is this also true for each input field or for a sequence of input fields? \(For example: street and number\)?

    -   Is this also true for buttons, icons and images?

    -   Is this also true for grouped information?


-   Is the user informed about the required entries and input?


**Related Information**  


[Support for Unique IDs](../04_Essentials/support-for-unique-ids-91f28be.md "Stable IDs are used to identify and modify the controls within the controller during runtime. However, if you reuse or nest these views, these stable IDs are no longer unique. To avoid ambiguity, each view adds its own ID as prefix to all its child controls.")

[Keyboard Handling for SAPUI5 Controls for Developers](../09_Developing_Controls/keyboard-handling-for-sapui5-controls-for-developers-3e631ad.md "As an application developer, you need to be aware of how the various accessibility aspects, like keyboard handling, are implemented and used.")

[Screen Reader Support for SAPUI5 Controls](../04_Essentials/screen-reader-support-for-sapui5-controls-656e825.md "SAPUI5 offers screen reader support in order to aid people with visual impairments. The implementation is based on the ARIA and HTML standards.")

[Theming](../04_Essentials/theming-497c27a.md "SAPUI5 is an HTML UI library, therefore styling is done using Cascading Style Sheets (CSS). This allows for creating an impressive visual experience using a widely known standard technology which is well-accepted on the market.")

