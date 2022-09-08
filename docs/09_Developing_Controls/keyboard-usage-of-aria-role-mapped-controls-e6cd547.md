<!-- loioe6cd5476193f48d1a273de990276c9bc -->

# Keyboard Usage of ARIA Role Mapped Controls

Screen readers offer list features, that ease the app navigation, by grouping and extracting all elements with similar behaviors. This leads to additional requirements when creating SAPUI5 controls. Control developers need to make sure that their controls are marked with the correct ARIA role.



## Keyboard Handling for Role Mapped Controls

The applied role names define implicitly the keyboard usage. For example an element with `role=button` can be activated with [SPACE\] and [ENTER\] keys, navigation between controls with `role=menuitem` is expected using [Arrow keys\] and so on.

> ### Note:  
> If you develop new SAPUI5 controls please note the following:
> 
> -   Navigation with the cursor of the screen reader cannot be the only option. Keyboard navigation has to be implemented as well.
> 
> -   All information about roles, states, and properties must be present at the keyboard focus position and be spoken when the focus moves to the control.



## Additional Requirements for Some Control Types

Screen readers offer lists that group certain types of elements. These lists ease and speed up the navigation. There are some requirements, that specific control types have to comply to, in order to be properly used by the screen reader lists.

-   **Landmarks/Regions** 

    -   Special regions must be indicated and labeled \(Navigation, Page Header, Main etc.\) in order to be part of the landmark list.


-   **Headings**

    -   The headings in an SAPUI5 app must have either ARIA `role=heading` + `aria-level` or use `<H1 – H6>` HTML tags.

    -   The panel heading hierarchy must be logical \(for example, nested panels must have higher hierarchy levels\).

    -   Headings must be referenced by the containers they belong to \(using <code>aria-labelledby = “HEADING_ID”</code>\).


-   **Links**

    -   Links in an SAPUI5 app must either be true `<a>` HTML elements or have ARIA `role=link`.


-   **Form Controls**

    -   Form fields must be correctly labeled and their list indicators have to be distinctive.

    -   Form fields will show up as Input, Radio Buttons and so on in the form list of the screen reader.


-   **Lists**

    -   Lists have to implement a navigation concept that allows using both arrow keys to go through list item entities, and also be able to focus individual active sub-parts of a list item.

    -   Lists and list items should always be identified using correctly nested `<ul>` and `<li>` markup or alternatively by ARIA `role=list` and `role=listitem` roles.

    -   Sometimes list items may need special roles \(for example `menuitem`\).

    -   For lists with a specific number of items, speech output should always be “*Current item number of N total items*”. No matter how many items are visible, if the total number is not known, speech output should always be “*Current item number*”.


-   **Tables**

    -   Data tables must be coded with valid HTML.

    -   Tables must have titles.

    -   Layout tables for presentational purposes must be coded as such \(using ARIA <code>role=“presentation”</code>\). Then they are not displayed in the table list.

    -   Editable and active cells may require special interaction models. During navigation, all screen reader relevant information must be available at the focus location.

    -   Tables have to properly associate and identify \(even hierarchical\) row/column headers. They have to be announced for every cell.

    -   In case there are no visible headers, but information is organized in a table-like layout with individual columns/cells, a respective row/column identifier has to be provided.

    -   For tables with a specific number of rows, speech output should always be “*Current row of N total rows*”. No matter how many rows are visible, if the total number is not known, speech output should always be “*Current row*”.



