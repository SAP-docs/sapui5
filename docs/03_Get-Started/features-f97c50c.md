<!-- loiof97c50c577e84f7f9b347ccb2d2ce2d5 -->

# Features

**Refresh Data Object**

The refresh data object feature reads the attributes of the data object and automatically fetches the predefined result attributes.

**Cut/Copy/Paste**

-   The *Copy* option is used to duplicate the specific row and it can be inserted in any other row of the decision table using *Paste* option.
-   The *Cut* option is used to remove the specific row and that can also be inserted in any other row of the decision table using paste option.

**Hit Policy**

For a decision table rule, you can specify how the rule engine should fetch the result. The two types of hit policies are first match and all match:

-   *First Match*: The rule engine fetches the first occurrence that matches the condition and the corresponding result is returned.
-   *All Match*: The rule engine fetches all the occurrences that matches the condition and returns them as result.

**Access Modes**

The access modes provided to the value in the decision table settings should be either `Editable` or `Hidden`.

-   The hidden access sets that default value to all the rows corresponding to the attribute in decision table, where the result column gets hidden. The default value is `mandatory`.
-   The editable access sets that default value to the new row, which is created after the settings are applied. The default value is `optional`.

**Basic and Advanced Mode**

-   The *Basic* mode is explained as follows

    -   It provides the easy way of creating a rule in decision table, which is applicable only for conditions column.
    -   If the operator is not set in the settings of the decision table, then the operator list will be provided as a dropdown in the popover of the decision table row. Once the operator is selected, you will get the input field option to set the value for the column.
    -   Different options are provided to set the values based on the selected data type such as, input field for **string** and **number**, date picker for **date**, dropdown for **boolean**, time picker for **time**.
    -   If the expression is given in the input field for the data type string and number, then the expression can be validated by clicking on the popover itself. If the data is wrong, then the expression will not be taken and the popover gets closed.
    -   If the data type is string, the value can be entered without quotes.
    -   **Exist in** operator is not supported.
    -   Auto suggestion is limited to advance mode which is not available in the basic mode.

-   The *Advanced* mode enables you to create a rule with the auto suggestion and value help feature, which is applicable only for result column.


> ### Note:  
> Basic and advanced modes are applicable only for decision table rules that are modeled using rule expression language.

**Label for Conditions**

A label is a translatable name that can be provided to the project and its entities along with the name and description for globalization. If a label is maintained for each entity of the project, the label name is displayed in the header of all the entities, breadcrumb navigation, and the autosuggest list.

If the condition expression in a decision table is long, the complete expression is not displayed in the header of the decision table. You can provide a label as an identifier for the condition expression. You can also hover the mouse pointer over the label to view the complete expression.

