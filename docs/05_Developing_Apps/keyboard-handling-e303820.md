<!-- loioe3038209d0e94f4487531956a60ef457 -->

# Keyboard Handling

Keyboard handling enables users to access every UI element of the application with the keyboard and is therefore tightly connected to accessibility. Additionally, this aspect is coupled to the screen reader functionality.



## General Recommendations

> ### Tip:  
> For a detailed explanation on the control-specific behavior, see the [Screen-Reader Support for SAPUI5 Controls](https://help.sap.com/viewer/bc5a64aac808463baa95b4230f221716/latest/en-US/144d377d68784689a9b21565dfa14065.html) documentation for end users.
> 
> > ### Note:  
> > Have in mind that the Accessibility for End Users documentation is updated and maintained for the long-term supported versions of SAPUI5. For more information on versioning, see [Versioning and Maintenance of SAPUI5](../02_Read-Me-First/versioning-and-maintenance-of-sapui5-91f0214.md). If you are using a version that is not a long-term supported one, you need to refer to the closest possible lower documentation version.

**Accessibility of UI elements**

Make sure that all available features of the application can be accessed by using only the keyboard - [TAB\], arrows, [ENTER\], and [SPACE\]. The user should be able to activate the functionality of **all** active elements.

**Tab order and reading order**

The reading order of the page is very important for the application user experience. Those who use keyboard only should be able to navigate easily through every single element. You should always have in mind the fact that the page should have a logical reading order. This means that logically related UI controls should receive keyboard and reading focus in such order that preserves semantics and usability.

> ### Note:  
> To achieve this, you need to use layout controls for maintaining the correct tab order. This is especially important for those who use screen reader software, because in most cases they'll follow exactly the tab order of the application and illogical tab orders can confuse them.

> ### Example:  
> When you have to select a country and city from select boxes, the country should be focused first and after that the city.



## Tips for Testing

Start the application and put away your mouse.

-   Can you reach every active screen element just by using the keyboard?

    -   Is this true also for dynamically created texts or control elements?


-   Can you navigate within control elements \(for example, list, table, tabstrip\) using arrow keys?

-   Can you also navigate away from each UI element using the keyboard?

-   Does the visible focus follow the exact keyboard commands? Is it always identifiable and in the visible area?

-   Can you execute all actions? \(Compare with what you can do with the mouse\)


-   **[Fast Navigation](fast-navigation-d23e2cf.md "Adjacent controls within the tab chain can be grouped for fast navigation using keyboard shortcuts.")**  
Adjacent controls within the tab chain can be grouped for fast navigation using keyboard shortcuts.

