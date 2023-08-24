<!-- loio8d5664a644f14063aa05cc8d18aa56eb -->

# Status Indicator

The `StatusIndicator` control reflects a percentage value between 0 and 100.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator) and the [samples](https://ui5.sap.com/#/entity/sap.suite.ui.commons.StatusIndicator) in the Demo Kit.



<a name="loio8d5664a644f14063aa05cc8d18aa56eb__section_dhm_3zj_3bb"/>

## Overview

The status indicator control can be used to display a percentage value in the form of a fillable shape or a group of shapes, translating plain numbers into meaningful visuals that convey the status of the items they represent.

Each status indicator may consist of a single group or multiple groups of shapes that display the value. The filling of the shapes can be proportional to the percentage value of the status indicator, or it can be based on thresholds that are specified using the `discreteThresholds` aggregation.

You can fully customize the control by setting fill direction and fill color and by picking a shape that matches the value measured. In addition to standard shapes, you can define your own custom SVG shapes. This allows you to create a powerful connection between your data and business by using symbols from a specific domain—for example, a half-filled truck shape may represent a real delivery truck filled up to 50% of its capacity.

The status indicator is best used in tiles, tables, and object pages.

  
  
**Status Indicator Example**

![Status Indicator Example](images/Status_Indicator_screenshot_5f85d40.png "Status Indicator Example")



<a name="loio8d5664a644f14063aa05cc8d18aa56eb__section_b4l_jzj_3bb"/>

## Details

**Element Structure**

-   A status indicator must contain at least one group that includes at least one shape.

    -   Groups can be defined using [`ShapeGroup`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.ShapeGroup) elements joined in the [`groups`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.StatusIndicator) aggregation.

    -   Shapes are defined using [`Shape`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.Shape) elements joined in the [`shapes`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.ShapeGroup) aggregation.



**Supported Shapes**

-   You can use any of the predefined shapes or create your own custom shapes:

    -   Simple shapes that include [circular](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.Circle) shapes, [rectangular](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.Rectangle) shapes, and shapes defined as SVG [paths](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.Path).

    -   Custom shapes that consist of an SVG definition, height, width, and other parameters defining the shape. The filling of a custom shape is defined by the [`FillingOption`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.FillingOption) control.


    For more information about simple shapes, see [`sap.suite.ui.commons.statusindicator.SimpleShape`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.SimpleShape).

    For more information about custom shapes, see [`sap.suite.ui.commons.statusindicator.CustomShape`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.CustomShape).


**Shape Filling**

-   You can choose among the following filling types:

    -   `Linear` – The shape is filled with a linear gradient.

    -   `Radial` – The shape is filled with a radial gradient.

    -   `None` – No filling is applied.


    For more information, see [`sap.suite.ui.commons.statusindicator.FillingType`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.FillingType).

-   The direction of the filling animation can be:

    -   `Up` – The shape is filled from bottom upwards.

    -   `Down` – The shape is filled from top to bottom.

    -   `Left` – The shape is filled from right to left.

    -   `Right` – The shape is filled from left to right.


    For more information, see [`sap.suite.ui.commons.statusindicator.FillingDirectionType`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.FillingDirectionType).

-   To define how the filling color should change based on the status indicator value, you can use the [`PropertyThresholds`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.StatusIndicator) aggregation. For each threshold, you can define a filling color that will be applied until the status indicator value reaches this threshold.

    For more information, see [`sap.suite.ui.commons.statusindicator.PropertyThreshold`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.PropertyThreshold).


**Value Distribution**

-   By default, the filling of the status indicator shapes is proportional to the status indicator value. To adjust the filling, you can specify discrete thresholds using the [`discreteThresholds`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.StatusIndicator) aggregation. When discrete thresholds are used, the displayed value may not exactly match the actual value of the status indicator.

    For more information, see [`sap.suite.ui.commons.statusindicator.DiscreteThreshold`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.DiscreteThreshold).

-   When multiple groups of shapes are used, the percentage value is distributed in the following way: shapes in the first group in the [`shapes`](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.ShapeGroup) aggregation are filled first, shapes in the second group second, and so on.


