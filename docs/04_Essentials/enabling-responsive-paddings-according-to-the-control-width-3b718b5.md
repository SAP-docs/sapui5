<!-- loio3b718b5372fa457c92cf5087a673e953 -->

# Enabling Responsive Paddings According to the Control Width

Apply responsive paddings over separate parts of the controls.

> ### Note:  
> You can enable the responsive paddings based on the width of the control only for the SAP Horizon and Quartz themes.



<a name="loio3b718b5372fa457c92cf5087a673e953__section_d2f_1pv_jjb"/>

## Usage

Application developers can now apply responsive paddings over separate parts of the controls and align the space distribution properly, according to the width of the control \(and not the whole screen\). This can be done by using a set of classes, which are available for the different controls.



### Applied Paddings

Based on the container’s size, one of the following classes is added, and the corresponding padding-left and padding-right are applied:


<table>
<tr>
<th valign="top">

Container Size \(pixels\)



</th>
<th valign="top">

Class



</th>
<th valign="top">

Padding-Left and Padding-Right Applied



</th>
</tr>
<tr>
<td valign="top">

<= 600



</td>
<td valign="top">

sapUi-Std-PaddingS



</td>
<td valign="top">

1rem



</td>
</tr>
<tr>
<td valign="top">

\>600



</td>
<td valign="top">

sapUi-Std-PaddingM



</td>
<td valign="top">

2rem



</td>
</tr>
<tr>
<td valign="top">

\>1024



</td>
<td valign="top">

sapUi-Std-PaddingL



</td>
<td valign="top">

2rem



</td>
</tr>
<tr>
<td valign="top">

\>1440



</td>
<td valign="top">

sapUi-Std-PaddingXL



</td>
<td valign="top">

3rem



</td>
</tr>
</table>



### Supported Controls

The following table shows the controls that support responsive paddings. To enable this concept and to add responsive paddings to an element of the controls, add the corresponding classes to the controls, depending on your use case:


<table>
<tr>
<th valign="top">

Supported Controls



</th>
<th valign="top">

 `sapUiResponsivePadding--header` 



</th>
<th valign="top">

 `sapUiResponsivePadding--subHeader` 



</th>
<th valign="top">

 `sapUiResponsivePadding--content` 



</th>
<th valign="top">

 `sapUiResponsivePadding--footer` 



</th>
<th valign="top">

 `sapUiResponsivePadding--floatingFooter` 



</th>
</tr>
<tr>
<td valign="top">

`sap.m.Dialog`

\(`sap.m.MessageBox`,

`sap.m.SelectDialog`,

`sap.m.TableSelectDialog`\)



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
</tr>
<tr>
<td valign="top">

 `sap.m.IconTabBar` 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
</tr>
<tr>
<td valign="top">

 `sap.m.ObjectHeader` 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
</tr>
<tr>
<td valign="top">

 `sap.m.Page` 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
</tr>
<tr>
<td valign="top">

 `sap.m.Popover` 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
</tr>
<tr>
<td valign="top">

 `sap.m.TabContainer` 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
</tr>
<tr>
<td valign="top">

 `sap.m.Wizard` 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
</tr>
</table>

> ### Note:  
> If nessecary, you can further align controls by using the available set of predefined CSS margin classes. For example, you can add negative margins to an element on its left and right sides. For more information, see [Using Predefined CSS Margin Classes](using-predefined-css-margin-classes-777168f.md).



```
<Page class="sapUiResponsivePadding--header sapUiResponsivePadding--subHeader sapUiResponsivePadding--content sapUiResponsivePadding--footer sapUiResponsivePadding--floatingFooter">
```

For a detailed example, see the [Samples for `sap.m.Page`](https://ui5.sap.com/#/entity/sap.m.Page). 





### How to Enable Responsive Paddings

As a control developer, you can enable application developers to apply responsive paddings, by implementing the `sap.ui.core.util.ResponsivePaddingsEnablement` utility.

Here is an example:

```
ResponsivePaddingsEnablement.call(MyCustomControl.prototype, {
					header: {suffix: "-myCustomControlHeader"},
					content: {selector: ".myCustomControlContent"}
					});
				
```

As the example demonstrates, there are two ways to select an element:

-   Using suffix: This enables you to select an element by its ID.
-   Using selector: This covers all possible CSS selections.

To call the utility, when initializing the control, use:

```
MyCustomControl._initResponsivePaddingsEnablement()
```

As a result, application developers will be able to use classes, such as `sapUiResponsivePadding--header` and `sapUiResponsivePadding--content`, to enable the paddings on the respective element.

