<!-- loioe6035883c54b4e2b94c022b6950398fd -->

# Features



<a name="loioe6035883c54b4e2b94c022b6950398fd__section_uwc_fms_w3b"/>

## Refresh Data Object

The refresh data object feature reads the attributes of the data object and automatically fetches the predefined result attributes.



<a name="loioe6035883c54b4e2b94c022b6950398fd__section_y23_kms_w3b"/>

## Access Modes

The access modes provided to the value in the text rule settings should be either `Editable` or `Hidden`.

-   The hidden access sets that default value to the attribute of data object in text rule, where it gets hidden from the text rule. The default value is `mandatory`.
-   The editable access sets that default value to the new entries of data object which is created after the settings are applied and new `else` block is created. The default value is `optional`. When the result data object changes, by default all the attributes will have the access mode as `Editable` with no default value.



<a name="loioe6035883c54b4e2b94c022b6950398fd__section_f4c_3ms_w3b"/>

## Operations

You can model a text rule without a result data object too. This type of text rule lets you perform operations on existing data objects or its attributes and is supported only in expression language 2.0. You can also add multiple result operations in a text rule.

> ### Note:  
> Select *No Default Result* as the text rule result to perform the operations.

To view the list of operations that can be performed on any data object or attribute of your project, press [CTRL\] + [SPACE\]  in the *Then* field of your text rule.

**List of Operations:**


<table>
<tr>
<th valign="top">

Operation

</th>
<th valign="top">

Syntax

</th>
<th valign="top">

Input

</th>
<th valign="top">

Description

</th>
<th valign="top">

Example

</th>
</tr>
<tr>
<td valign="top" rowspan="2">

Update

</td>
<td valign="top" rowspan="2">

*UPDATE*\(`<Target>, <Source>`\)

</td>
<td valign="top">

`Target Entity`

</td>
<td valign="top">

The target data object or attribute that should be updated as per the value of the `Source Entity` or `Expression`.

</td>
<td valign="top" rowspan="2">

*UPDATE*\(`Employee_Table.Employee Name` , `Employee.Employee Name` \)

The data object, `Employee_Table.Employee Name` is updated as per the value of `Employee.Employee Name`.

</td>
</tr>
<tr>
<td valign="top">

`Source Entity` or `Source Expression`.

</td>
<td valign="top">

The value of the `Target Entity` is updated to the value of the `Source Entity` or the value returned by the `Source Expression`.

> ### Note:  
> You can also use vocabulary rules as the source expression by selecting it from the autosuggest list.



</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Append

</td>
<td valign="top" rowspan="2">

*APPEND*\(`<Target>, <Source>`\)

</td>
<td valign="top">

`Target Entity`

</td>
<td valign="top">

The target data object of type *Table* to which the `Source` has to be appended.

</td>
<td valign="top" rowspan="2">

*APPEND*\(`FlightTable, Flight`\)

The data object `Flight` is appended to the data object `FlightTable`.

</td>
</tr>
<tr>
<td valign="top">

`Source Entity` or `Source Expression` 

</td>
<td valign="top">

A data object that should be appended to the `Target` data object. Source data object should be of type *Structure* or *Table* or a rule that returns a data object of type *Structure* or *Table*.

</td>
</tr>
</table>

For more information about functions related to text rule operations, see [Functions](https://help.sap.com/viewer/0e4dd38c4e204f47b1ffd09e5684537b/Cloud/en-US/0b42dec8f69f405f9a564e162c4f07c9.html).



<a name="loioe6035883c54b4e2b94c022b6950398fd__section_p13_nms_w3b"/>

## Value Help

While authoring a rule in advanced mode, the auto-complete suggestion list provides the corresponding list of values as value help items along with other auto-complete suggestions.

There are two types of value help:

-   Value List : The values are created and maintained in the business rules by adding code and description.
-   Service URL Mapping : The values are maintained outside the business rules and you have to configure the managed system to consume the values from external system. For more information on configuring managed system, see [Configuring Managed System](https://help.sap.com/viewer/9d7cfeaba766433eaea8a29fdb8a688c/Cloud/en-US/74dfe0537d8e47889cdfc8a874ecde27.html) in SAP Business Technology Platform Business Rules.

> ### Note:  
> -   The value list link is provided with the suggestions, only if the attribute is of type value help.
> -   The value help dialog can also be consumed by pressing **f4** while authoring a rule.
> -   To change the value help while authoring the rule, you can also click the value help attribute which opens the value help dialog.

-   In the following example, the ID of an equipment is an attribute of type value help. While authoring the rule, the value help is provided in the suggestion which has the value list with descriptions as shown in the table. The value can be selected from the list and consumed in the rule.

    ```
    If
    	    ID of an Equipment is equal to 'E001'
    	    Then
    	    Order
    
    ```

    **Value List**


    <table>
    <tr>
    <td valign="top">
    
    **Code**
    
    </td>
    <td valign="top">
    
    **Description**
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    E001
    
    </td>
    <td valign="top">
    
    Smartphone
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    E002
    
    </td>
    <td valign="top">
    
    Laptop
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    E003
    
    </td>
    <td valign="top">
    
    Tablet
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    E004
    
    </td>
    <td valign="top">
    
    Smartphone
    
    </td>
    </tr>
    </table>
    
-   You can search for the value and description in the search bar.
-   The advanced filter option is used to filter a value and description based on conditions which can be included or excluded. It can be applied in both value and description field.

    **For Example**:

    If you want to filter the description `Smartphone` from the list which has `Smartphone`, `Laptop`, and `Tablet`, then the condition can be applied in both the value and description field as the following.

    **Include**: Description is equal to `Smartphone`.

    **Exclude**: Value is equal to `E004`.

    So that the filtered result is `E001`, `Smartphone`.

-   The value column can be sorted in both ascending and descending order.

    > ### Note:  
    > The search and filter options are case sensitive.




<a name="loioe6035883c54b4e2b94c022b6950398fd__section_l4z_pms_w3b"/>

## Date Control

While authoring a rule in advanced mode, the auto-complete suggestion list of the Rule Builder UI control provides the date link where the value can be picked from the calendar. This date link is provided in the suggestion list, only if the attribute is of type date.

In the following example, the DOB of an employee is an attribute of type date. While authoring the rule, the date link is provided in the suggestion which opens a calendar from where the value can be selected and consumed in the rule.

```

	If
	DOB of an Employee is equal to '01/01/18'
	Then
	Discount

```

