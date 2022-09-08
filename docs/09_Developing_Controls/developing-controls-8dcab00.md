<!-- loio8dcab0011d274051808f959800cabf9f -->

# Developing Controls

You can create own content for SAPUI5. To develop controls in JavaScript, you can either extend existing controls or create new ones.

> ### Note:  
> If you want to contribute to SAPUI5, you have to consider our guidelines and recommendations with regard to, for example, product standards, file names and encoding.

As a control developer, you create or modify UI libraries and their pieces, i.e. controls and types. You define the set of properties your control provides as well as events or aggregations. A major task is the implementation of a control-specific renderer, which knows how to create suitable HTML markup for a given control instance, taking its current state into account. A renderer is written in JavaScript and produces HTML output which is styled by means of CSS. Such style sheets are another important part of a UI library.

Controls can be defined on the fly without a library definition or running generation steps. These controls are also called notepad controls.

When you want to develop several controls for reuse in different applications, we recommend creating a control library instead of using these notepad controls. Control libraries have additional features such as automatic support for theming and right-to-left languages, but the implementation of the controls is the same as for notepad controls.

> ### Note:  
> This functionality is not restricted to controls. It can also be used to create or extend arbitrary objects, such as components, that are derived from `sap.ui.base.ManagedObject`. For more information, see [API Reference: `sap.ui.base.ManagedObject`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject). 

-   **[Development Conventions and Guidelines](development-conventions-and-guidelines-753b326.md "To keep the SAPUI5 code
		readable and maintainable, development conventions and guidelines are introduced. We
		strongly recommend that you follow these guidelines even if you find them violated
		somewhere. For files that are consistently not following these rules and for which
		adhering to the rules would make the code worse, follow the local style. If you want to
		contribute your content to SAPUI5, you have to follow these conventions and guidelines.")**  
To keep the SAPUI5 code readable and maintainable, development conventions and guidelines are introduced. We strongly recommend that you follow these guidelines even if you find them violated somewhere. For files that are consistently **not** following these rules and for which adhering to the rules would make the code worse, follow the local style. If you want to contribute your content to SAPUI5, you **have to** follow these conventions and guidelines.
-   **[The library.js File](the-library-js-file-bd039ed.md "The library.js file is a JavaScript file that contains the
		JavaScript code for all enumeration types provided by the library as well as
		library-specific initialization code that is independent from the controls in the
		library.")**  
The `library.js` file is a JavaScript file that contains the JavaScript code for all enumeration types provided by the library as well as library-specific initialization code that is independent from the controls in the library.
-   **[Creating Control and Class Modules](creating-control-and-class-modules-c78c07c.md "Modules do not only require and use functionality from other modules, they also expose
		their own functionality to the outside. In asynchronous module definition (AMD) syntax,
		there are several ways to expose such functionality.")**  
Modules do not only require and use functionality from other modules, they also expose their own functionality to the outside. In asynchronous module definition \(AMD\) syntax, there are several ways to expose such functionality.
-   **[Defining the Control Metadata](defining-the-control-metadata-7b52540.md "Control metadata consists of properties, events, as well as aggregations and
		associations.")**  
Control metadata consists of properties, events, as well as aggregations and associations.
-   **[Adding Method Implementations](adding-method-implementations-91f0a8d.md "After defining the metadata of a control, you add the method implementation to the
		control.")**  
After defining the metadata of a control, you add the method implementation to the control.
-   **[Device-specific Behavior of Controls](device-specific-behavior-of-controls-a53ec81.md "Some controls have different behaviors between running on different device types
		(mobile, desktop, tablet). ")**  
Some controls have different behaviors between running on different device types \(mobile, desktop, tablet\).
-   **[Examples for Creating and Extending Controls](examples-for-creating-and-extending-controls-91f1845.md "Examples how to create and extend controls in SAPUI5.")**  
Examples how to create and extend controls in SAPUI5.
-   **[Writing a Control Renderer](writing-a-control-renderer-91f3939.md "SAPUI5 provides three
		classes for control rendering: sap.ui.core.Control,
			sap.ui.core.RenderManager, and
		sap.ui.core.Renderer.")**  
SAPUI5 provides three classes for control rendering: `sap.ui.core.Control`, `sap.ui.core.RenderManager`, and `sap.ui.core.Renderer`.
-   **[Implementing Animation Modes](implementing-animation-modes-76b7d50.md "Some UI elements can have animations like page transitions or dynamic buttons. There may be cases where the animation has to be suppressed, for example, for performance reasons or for specific users. As a control developer, you have to make sure that your control supports the animation modes that are offered to the users.")**  
Some UI elements can have animations like page transitions or dynamic buttons. There may be cases where the animation has to be suppressed, for example, for performance reasons or for specific users. As a control developer, you have to make sure that your control supports the animation modes that are offered to the users.
-   **[Implementing Focus Handling](implementing-focus-handling-91f19f0.md "SAPUI5 provides
		mechanisms for observing the moving focus in an application page for controls. This
		information is then preserved for refocusing elements after rerendering. The focus triggers
		event firing. However, due to the high degree of flexibility in control rendering, a
		functionality tailored to the respective controls is required. For this, the framework
		provides helper functions for the implementation of focus handling.")**  
SAPUI5 provides mechanisms for observing the moving focus in an application page for controls. This information is then preserved for refocusing elements after rerendering. The focus triggers event firing. However, due to the high degree of flexibility in control rendering, a functionality tailored to the respective controls is required. For this, the framework provides helper functions for the implementation of focus handling.
-   **[Item Navigation - Supporting Keyboard Handling in List-like Controls](item-navigation-supporting-keyboard-handling-in-list-like-controls-91f2032.md "The helper class sap.ui.core.delegate.ItemNavigation supports item
		navigation in lists.")**  
The helper class `sap.ui.core.delegate.ItemNavigation` supports item navigation in lists.
-   **[Right-to-Left Support in Controls](right-to-left-support-in-controls-91f2c24.md "SAPUI5 supports
		right-to-left directionality (RTL) in controls.")**  
SAPUI5 supports right-to-left directionality \(RTL\) in controls.
-   **[Defining Groups for Fast Navigation](defining-groups-for-fast-navigation-10b14c7.md "Adjacent controls within the tab chain can be grouped. Within such a group, F6 or 
			Ctrl
			Alt/Option
			Down
		skip all controls of the group and move the focus to the first control in the tab chain of the next group. 
			Shift
			F6
		 or 
			Ctrl
			Alt/Option
			Up
		 move the focus to the first control of the previous group. Adjacent tab chain elements between groups are automatically handled as one
		group. For nested groups, the most concrete group is used.")**  
Adjacent controls within the tab chain can be grouped. Within such a group, [F6\] or  [Ctrl\] + [Alt/Option\] + [Down\] skip all controls of the group and move the focus to the first control in the tab chain of the next group.  [Shift\] + [F6\]  or  [Ctrl\] + [Alt/Option\] + [Up\]  move the focus to the first control of the previous group. Adjacent tab chain elements between groups are automatically handled as one group. For nested groups, the most concrete group is used.
-   **[Composite Controls](composite-controls-d6bab27.md "Composite controls are implemented by reusing other controls.")**  
Composite controls are implemented by reusing other controls.
-   **[Accessibility Aspects](accessibility-aspects-694b356.md "If you are developing SAPUI5 controls, you have to be aware of the accessibility aspects. A deeper understanding is
		needed, so that all accessibility requirements are met.")**  
If you are developing SAPUI5 controls, you have to be aware of the accessibility aspects. A deeper understanding is needed, so that all accessibility requirements are met.
-   **[Writing a Control: FAQ](writing-a-control-faq-3f472df.md)**  


