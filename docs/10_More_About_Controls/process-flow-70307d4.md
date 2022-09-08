<!-- loio70307d4b63814dad9a95220e85a563dc -->

# Process Flow

The `ProcessFlow` control allows you to show flows of multiple object types, for example, documents or approvals.



## Overview

Process Flow is a complex control that enables you to display documents or other items in their flow. The items or documents are displayed as nodes in a lane containing a lane header with a donut chart. The donut chart reflects the status of the nodes in its lane. The chevron arrows ![Chevron arrow](images/Chevron_Arrow_46af038.png) in the lane header separate the lanes from one another. Connector lines show the process flow of the items between the nodes.

   
  
<a name="loio70307d4b63814dad9a95220e85a563dc__fig_vdm_fhk_5y"/>Process Flow Example

 ![Process Flow Example](images/Process_Flow_05ab4f0.jpg "Process Flow Example") 



<a name="loio70307d4b63814dad9a95220e85a563dc__section_tj3_5wy_bz"/>

## Details

**Behavior and Interaction**

-   The control offers different **scrolling and zooming** behaviors:

    -   You can move the whole flow by holding down the left mouse button as though you were navigating a street map in a web browser.

    -   To zoom in or out, you can either use the mouse wheel or choose the respective buttons if the `ProcessFlow` control is used in combination with a toolbar. The zoom has a semantic effect: detailed information is added or removed depending on the zoom level.


    Both scrolling and zooming can be switched off by changing the values of the `scrollable` and `wheelZoomable` properties.

    > ### Note:  
    > Scrolling is only an option in containers smaller than the ProcessFlow control to be displayed. For more information, see the [sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.ProcessFlow/sample/sap.suite.ui.commons.sample.ProcessFlowScrollable).

-   To improve user experience, **clickable navigation arrows** \(![](images/Left_Navigation_Arrow_b25da7f.png) and ![](images/Right_Navigation_Arrow_0e00f73.png)\) are included in the header. They are visible once there is an overflow, for example, when the complete `ProcessFlow` control can't be displayed because the visible area is limited. A navigation arrow on either side of the process flow header indicates that some part of the horizontal content is hidden, and you need to click the arrow to display it.

    -   On desktop computers, use navigation arrows to move the complete process flow over one lane.

    -   On mobile devices, the navigation arrows can be treated just as indicators. You can scroll through the `ProcessFlow` control by swiping across your screen.


    > ### Note:  
    > The number of lanes that are hidden is displayed next to the navigation arrows.

-   You use the**aggregated node** type in `sap.suite.ui.commons.ProcessFlowNode`, to display a group of nodes that are semantically equal or that have some properties in common. The possible values of the `type` property are `single` \(default\) or `aggregated`.

-   To provide detailed information about a connection between process flow nodes, you can use**connection labels**. For example, if connections between nodes are not unique, the user can select a connection by clicking the respective label. To use this feature, the application needs to implement the popup, the content, and the actions required for the connection labels. You can hide or show these labels if you make the appropriate settings for the `showLabels` property.For more information, see the [sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.ProcessFlow/sample/sap.suite.ui.commons.sample.ProcessFlowConnectionLabels) in the Demo Kit.
-   The control provides various click **events**. You can use these events as follows:

    -   Click event on the node:
        -   To display a popover that has more information about a certain object type. From this quick overview, you can navigate to the object type.
        -   If no additional information needs to be displayed, you can trigger an action sheet instead of the popover to allow the user to execute an action for the item.

    -   Click event on the header:

        The `ProcessFlowLaneHeader` provides a `press` event **only** if the `ProcessFlow` is in Header mode. This happens if no nodes are defined. For more information, see the second sample on this [sample page](https://ui5.sap.com/#/entity/sap.suite.ui.commons.ProcessFlow/sample/sap.suite.ui.commons.sample.ProcessFlow).


-   The process flow offers a complete overview of structured data in their one-to-many \(1:n\) relationships. To focus on the important details in this flow, you can use the **`highlighted`** property to accentuate specific node relationships. If the `highlighted` property is set to `true`, the aggregation in the header node is also adapted \(colors in donut charts and the lane header\). For more information about highlighting , choose the *Toggle HighlightPath* button in the [sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.ProcessFlow/sample/sap.suite.ui.commons.sample.ProcessFlowMultipleRootNodes) in the Demo Kit.

-   In the process flow, you can set the **status** for the following objects:

    -   **node**: Check the available statuses in `ProcessFlowNodeState`. The color of the donut chart is adjusted automatically based on the node status and cannot be overwritten.

    -   **connection label**: Check the available statuses in `ProcessFlowConnectionLabelState`. You can set the status only when using connection labels.

    -   **lane**: Check the available statuses in `ProcessFlowLaneState`.


    The control calculates all other states. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.ProcessFlow).


**Implementation Tips**

-   How to use connections and connection labels

    Connections are defined using the `children` property of a node:

    ```xml
    
    id: "1", lane: "0", title: "Sales Order 1", titleAbbreviation: "SO 1", children: [2, 3]
    ```

    If you want to use connection labels, you define the child node as an object consisting of a `nodeID` and a `connectionLabel` defined by the `ProcessFlowConnectionLabel` control:

    ```xml
    
    	id: "1", lane: "0", title: "Sales Order 1", titleAbbreviation: "SO 1",
    	children: [
    	{
    		nodeId: 2,
    		connectionLabel: new sap.suite.ui.commons.ProcessFlowConnectionLabel({
    			id: "myLabelId1To2",
    			text: "my text",
    			enabled: true,
    			icon: "sap-icon://message-success",
    			state: sap.suite.ui.commons.ProcessFlowConnectionLabelState.Positive		
    		})
    	}]
    
    ```

    Make sure that you also set the `showLabels` property on the `ProcessFlow` control to `true`. Otherwise, the labels are not visible.

-   When to call the `updateModel()` method

    When you change the model that is bound to the `ProcessFlow` control, you need to call the `updateModel()` method, because changing the model affects the nodes and lanes in the process flow, so it must be recalculated. If you change only the content of the nodes, calling the `updateNodesOnly()` method is sufficient.

-   Which binding mode to use

    When using an OData model, make sure that you set the binding mode to One-Way Data Binding as the default because the `ProcessFlow` control does **not** support Two-Way Data Binding. If you cannot set the binding mode of your OData model to One-Way Data Binding, you can bind a JSON model to the `ProcessFlow` filled with data from the OData model instead. For more information, seethe [API Reference Documentation](https://ui5.sap.com/#/api/sap.ui.model.BindingMode) in the Demo Kit and [Setting the Default Binding Mode](../04_Essentials/setting-the-default-binding-mode-1a08f70.md).


**Size and Responsiveness**

-   The `ProcessFlow` control provides **four zoom levels**. It is responsive to the size of the container you put it in. Depending on the container size at the time of the initial load, the control chooses one of the four zoom levels. After loading, you can change the zoom levels as needed.

-   In some cases, the Process Flow includes too much white space. You can reduce the white space by using the `optimizeLayout()` method. When the optimization mode is switched on \(by calling the method\), **layout optimization** is triggered with every rendering or rerendering of the `ProcessFlow` control, for example, when zooming in or out.

    > ### Note:  
    > The layout optimization process runs in parallel with other standard processes required for this control. This may lead to performance issues that can be avoided by testing your app before you use it in production.




## API Reference and Samples

For more information about the `ProcessFlow` control, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.ProcessFlow).

