<!-- loio6b741a6133284bd78e897cef8b75f6d9 -->

# Keyboard Handling for SAPUI5 UI Elements

SAPUI5 UI elements provide keyboard handling in order to improve accessibility and speed up work.



## Keyboard Shortcuts for End Users

Some users operate their computer almost exclusively with the keyboard. For those users, focus is critical and the entire page functionality should be available using the keyboard. SAPUI5 supports keyboard navigation with a predefined tab order sequence.

In this topic we introduce the main keyboard combinations that are used by SAPUI5 UI elements.

<a name="loio6b741a6133284bd78e897cef8b75f6d9__table_u1x_1dg_yq"/>Main Keyboard Combinations


<table>
<tr>
<th valign="top">

Key Combination



</th>
<th valign="top">

What it does



</th>
<th valign="top">

Specific Behavior



</th>
</tr>
<tr>
<td valign="top">

[Tab\]

[Shift\] ⁠+⁠ [Tab\]



</td>
<td valign="top">

Focuses UI elements in order \(forward / backward\)



</td>
<td valign="top">

You can cycle through all interactive, enabled and visible UI elements that are part of a given dialog or other container. When the last UI element is focused, pressing the key again will move the focus to first element.



</td>
</tr>
<tr>
<td valign="top">

[Space\] 



</td>
<td valign="top">

Triggers an action \(reversible\)



</td>
<td valign="top">

Pressing and releasing the key triggers the action that is associated with a UI element \(for example, open a link or toggle a button\).

> ### Tip:  
> If you press and hold the key, you can cancel the trigger action by pressing [Shift\].



</td>
</tr>
<tr>
<td valign="top">

[Enter\]



</td>
<td valign="top">

Triggers an action \(immediate\)



</td>
<td valign="top">

Triggers the action that is associated with a UI element \(for example, open a link or toggle a button\). The action is triggered immediately after the key is pressed.



</td>
</tr>
<tr>
<td valign="top">

[Arrow  Keys\] 



</td>
<td valign="top">

Navigates between elements



</td>
<td valign="top">

You can move the focus between elements within a complex UI element \(for example a table or a list\). Depending on the structure, this navigation is either one-directional \(left/right or up/down\) or two-directional \(left, right, up, down\).



</td>
</tr>
<tr>
<td valign="top">

[Home\]

[End\]



</td>
<td valign="top">

Navigates between elements



</td>
<td valign="top">

You can move the selection to the first/last element within a set of elements.

> ### Tip:  
> When using UI elements like sliders and rating indicators, pressing these keys will set the selected value to the maximum/minimum respectively.



</td>
</tr>
<tr>
<td valign="top">

[Page  Up\]

[Page  Down\]



</td>
<td valign="top">

Skips elements during navigation



</td>
<td valign="top">

You can move the selection forward/backward by several elements at a time. If the remaining number of elements is less than the step size, selection will move to the last/first element.



</td>
</tr>
<tr>
<td valign="top">

[Escape\]



</td>
<td valign="top">

Closes element / Reverts changes



</td>
<td valign="top">

Depending on your situation, you can do the following:

-   Close an additionally opened element \(for example, a pop-up\).

-   Revert the execution to a previous step - one step at a time.

-   If you have made changes to the content of an element \(for example, a text field\), pressing this key will revert those changes.




</td>
</tr>
<tr>
<td valign="top">

[F4\] or

 [Alt\] + [Down\]  or

 [Alt\] + [Up\] 



</td>
<td valign="top">

Opens / closes a drop-down menu



</td>
<td valign="top">

You can open the options and elements available in a drop-down menu, if the UI element in question provides this type of information.



</td>
</tr>
<tr>
<td valign="top">

[F6\] or

 [Ctrl\] + [Alt/Option\] + [Down\] 



</td>
<td valign="top">

Forward fast navigation



</td>
<td valign="top">

UI elements within an application can be grouped together \(for example, all elements in the header of an application\). You can forward-skip focusing every element within such a group by using these keys.



</td>
</tr>
<tr>
<td valign="top">

 [Shift\] + [F6\]  or

 [Ctrl\] + [Alt/Option\] + [Up\] 



</td>
<td valign="top">

Backward fast navigation



</td>
<td valign="top">

Skips focus of UI elements backward.



</td>
</tr>
</table>

**Related Information**  


[Keyboard Handling in the Developing Apps Section](../05_Developing_Apps/keyboard-handling-e303820.md "Keyboard Handling in the Developing Apps Section")

[Keyboard Handling for SAPUI5 Controls for Developers](../09_Developing_Controls/keyboard-handling-for-sapui5-controls-for-developers-3e631ad.md "As an application developer, you need to be aware of how the various accessibility aspects, like keyboard handling, are implemented and used.")

