<!-- loio656e825c5f1548e6b1d0acb5586f2a2a -->

# Screen Reader Support for SAPUI5 Controls

SAPUI5 offers screen reader support in order to aid people with visual impairments. The implementation is based on the ARIA and HTML standards.



<a name="loio656e825c5f1548e6b1d0acb5586f2a2a__overview"/>

## Overview

A screen reader is a form of assistive technology mainly used by blind users to create audio output for elements on the screen. The screen reader extracts information from the UI and creates a speech output.

Screen reader support is incorporated at two levels: framework and application level. Many features are available on the framework level. Some features need to be added or adapted according to the app-specific context and need to be considered when developing your app.

No screen reader activation settings are necessary since the accessibility mode in SAPUI5 is switched on by default. Screen reader software get the information about the page directly from the semantic HTML and ARIA attributes.



<a name="loio656e825c5f1548e6b1d0acb5586f2a2a__Aria"/>

## What is ARIA

Web Accessibility Initiative - Accessible Rich Internet Applications \(WAI-ARIA\) provides an ontology of roles, states, and properties that define accessible user interface elements and can be used to improve the accessibility of web content and applications. When accessibility issues cannot be managed with native HTML, ARIA can help bridge those gaps. For more information, see: [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/). For more information, see [More About ARIA](screen-reader-support-for-sapui5-controls-656e825.md#loio656e825c5f1548e6b1d0acb5586f2a2a__MoreARIA) section.



> ### Note:  
> SAPUI5 controls provide the prerequisites for screen reader support based on the ARIA and HTML standards. All screen readers that implement this standard should work fine. If there are deviations in the interpretation, these need to be addressed to the screen reader vendor. If you need more information on our testing environment, see SAP Note [2564165](https://launchpad.support.sap.com/#/notes/2564165).



Currently, the following libraries have screen reader support based on the ARIA standard:

-   sap.f

-   sap.m

-   sap.suite.ui.commons

-   sap.tnt

-   sap.ui.commons

-   sap.ui.comp

-   sap.ui.core

-   sap.ui.generic

-   sap.ui.layout

-   sap.ui.suite

-   sap.ui.table

-   sap.ui.unified

-   sap.ui.ux3

-   sap.uxap

-   sap.viz




<a name="loio656e825c5f1548e6b1d0acb5586f2a2a__MoreARIA"/>

## More About ARIA



### What can ARIA do?

-   Roles to describe the type of widget presented, such as `menu`, `treeitem`, `slider`, and `progressbar`.

-   Roles to describe the structure of the Web page, such as headings, regions, and tables \(grids\).
-   Properties to describe the state of the widgets, such as `aria-checked` for a check box, or `aria-haspopup` for a menu.
-   Properties to define live regions of a page that are likely to get updates \(such as stock quotes\), as well as an interruption policy for those updates—for example, critical updates may be presented in an alert dialog box, and incidental updates occur within the page.
-   A way to provide keyboard navigation for the Web objects and events, such as those mentioned above.



### Roles

Roles are used to define a type of user interface \(UI\) element \(for example`role=“ROLE_NAME”`\). Once a role is set for an element, it does not change.

-   Document Structure Roles: Document structure roles aren’t normally interactive, but instead provide descriptions for sections within a page. Commonly used examples: `img`, `document`, `heading`, `list`, `listitem`, and `toolbar`

    > ### Example:  
    > role=“toolbar”

    You can see a full list on the [ARIA Document Structure](https://www.w3.org/TR/wai-aria/#document_structure_roles) page.

-   Landmark Roles: Created for easier navigation, landmark roles identify each section of content within a page. Commonly used examples: `banner`, `contentinfo`, `form`, `main`, `navigation`, `search`

    > ### Example:  
    > role=“search”

    You can see a full list on the [ARIA Landmark Roles](https://www.w3.org/TR/wai-aria/#landmark_roles) page.

-   Widget Roles: Used when HTML doesn’t define elements, widget roles add semantic meaning to elements and UIs. Widget Roles, standalone UI widgets are part of larger, composite widgets, while composite UI widgets act as containers that manage other contained widgets.

    Commonly used examples of standalone UI widgets include `alert`, `checkbox`, `link`, `menuitem`, `tab`, and `tabpanel` 

    > ### Example:  
    > role=“tabpanel”

    Commonly used examples of composite UI widgets include `combobox`, `grid`, `listbox`, `menu`, `radiogroup`, and `tablist` 

    > ### Example:  
    > i.e. role=“tablist”

    You can see a full list on the [ARIA Widget Roles](https://www.w3.org/TR/wai-aria/#widget_roles) page.


**Related Information**  


[Screen Reader Support in the Developing Apps Section](../05_Developing_Apps/screen-reader-support-33fae34.md "Screen Reader Support in the Developing Apps Section")

[Screen Reader Support for Controls in the Developing Controls Section](../09_Developing_Controls/screen-reader-support-for-sapui5-controls-3853db3.md "Screen Reader Support for Controls in the Developing Controls Section")

