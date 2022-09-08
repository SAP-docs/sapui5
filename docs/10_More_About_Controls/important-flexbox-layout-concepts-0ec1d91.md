<!-- loio0ec1d91487aa43058914ba80ccefbc9b -->

# Important FlexBox Layout Concepts

Introduction of important concepts for FlexBox layouts.



<a name="loio0ec1d91487aa43058914ba80ccefbc9b__section_N10018_N10011_N10001"/>

## Main Axis and Cross Axis

A FlexBox layout has a direction in which child elements are laid out. The default direction is **Row** and rows are laid out horizontally in reading direction. This defines the **main axis**. The **cross axis** in this case is vertical.

You can change the layout direction property to **Column**, which results in a vertical main axis and a horizontal cross axis. This is important for the align properties.

> ### Note:  
> If browsers support vertical text flows, the direction of a row can also be vertical. For now this is not an issue and can be ignored.

In addition to Row and Column, the flex direction can be set to **RowReverse** and **ColumnReverse** which will reverse the layout direction.



<a name="loio0ec1d91487aa43058914ba80ccefbc9b__section_N1004D_N10011_N10001"/>

## Two-Dimensional Alignment

You can determine where the flex items are aligned in a FlexBox layout. For the alignment you use the following two properties: **justifyContent** and **alignItems**. The `justifyContent` property sets the alignment along the main axis while `alignItems` acts on the cross axis.

Both properties accept the values **Start**, **Center** and **End**. This results in nine possible combinations, for example

-   *justifyContent = End* and *alignItems: Start* places the items in the upper right corner of a horizonzal FlexBox
-   If you set the direction property to *Column*, the main axis would be vertical. Combined with *justifyContent = End* and *alignItems: Start*, the items are placed in the lower left corner.
-   By reversing the main axis with *direction = ColumnReverse* the layout starts from the bottom. In this case, *justifyContent = End* refers to the top of the FlexBox.
-   *justifyContent* has the additional value *SpaceBetween*. This setting places the first and the last item at the extremes of the main axis. Any other items will be distributed evenly between these two.

For *alignItems* two additional values exist: *Baseline* and *Stretch*. *Baseline* takes the first line of text of each flex item and aligns their baselines. This can be useful if different font sizes are used. *Stretch* makes the flex items take up the whole space along the cross axis of the FlexBox. This is useful if all items should have the same size regardless of the amount of content.



<a name="loio0ec1d91487aa43058914ba80ccefbc9b__section_N100C9_N10011_N10001"/>

## Flexibility

You can let the browser handle the distribution of elements. This ensures that they always fill the available space along the main axis. To do this, set a flexibility factor on the flex items.

The property to control the flexibility is called `growFactor`. It is set on a flex item object by means of `FlexItemData` on the `layoutData` aggregation. The flex layout algorithm determines the "natural" width of the flex items. If there is space left, this space is distributed among the flex items according to their relative `growFactor`. If, for example, a horizonzal flex container is 300px wide and contains two elements of 100px each, 100px would remain. If the `growFactor` for both flex items is set to 1, both get 50px extra, thus making them 150px wide. If the `growFactor` is set to 3 for one item and to 1 for the other item, the first item gets additional 75px \(¾ of 100px\) of the remaining space and the second item 25px \(¼ of 100px\). If the `growFactor` is set to its default value of 0, the item is inflexible and both items would keep their width of 100px.

> ### Note:  
> The flex algorithm distributes the **remaining** space, and **not** the whole space in the FlexBox. Therefore, the resulting widths of the items are not necessarily proportional to the `growFactor`.

To achieve a proportional width according to the `growFactor`, set the width of all items to 0 via CSS. The sum of the "natural" widths of all items is then also 0. The remaining space, however, now equals the full space of the `FlexBox`. This space is then distributed based on the `growFactor`. For the example above with `growFactor` set to 3 and 1, setting the width of the flex items to 0 via CSS results in a width of 225px \(¾ of 300px\) for the first item and 75px \(¼ of 300px\) for the second item.

> ### Caution:  
> Once you set a `growFactor` for any item, the flex layout algorithm ignores the `justifyContent` property of the FlexBox because the items take up all available space anyway. There would be no difference between the different values.

