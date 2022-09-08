<!-- loio91f19f036f4d1014b6dd926db0e91070 -->

# Implementing Focus Handling

SAPUI5 provides mechanisms for observing the moving focus in an application page for controls. This information is then preserved for refocusing elements after rerendering. The focus triggers event firing. However, due to the high degree of flexibility in control rendering, a functionality tailored to the respective controls is required. For this, the framework provides helper functions for the implementation of focus handling.

Each control provided by the SAPUI5 framework has its own behavior for focus handling, depending on the functionality that is provided by the control. Complex controls and their embedded content constitute the highest level of complexity.

The base class for elements \(`Element.js`\) provides the following four methods to support the implementation of focus handling:

-    `Element.getFocusDomRef()` 

    Once a visible element is rendered, it has a Document Object Model \(DOM\) representation. The root DOM node can be accessed by using the method `getDomRef()` on the element. The root DOM node is the default focused DOM node. After rendering, when a control is supposed to be focused, the framework asks the control for its focus DOM node by using the `getFocusDomRef()` method. If the root DOM node does **not** represent the element that should have the focus, you have to return another DOM node by overriding the `getFocusDomRef()` method.

-    `Element.focus()` 

    The `focus()` method sets the focus on the element. This is done using the focus DOM node.

-    `Element.getFocusInfo()` 

    For some controls, it is even more difficult to apply the focus once the control has been rerendered. List controls, for example, have their own internal focus handling and set the focus on the different items. A data table moves the focus over a matrix of cells. The requirement is that a control can apply the focus to its exact previous position after rerendering. In cases where the SAPUI5 rendering mechanism fails to find the correct element after rendering \(for example, because it does not have an ID or the ID changed\), override the `getFocusInfo()` method and serialize the focus state into a JSON object and return it. Before rendering, the render manager calls this method for the element instance and stores this information for future use. After rendering, it calls the `applyFocusInfo()` method and passes back the serialized object. This is not only useful for focus information, but also, for example, the exact cursor position of a `TextField` control, can be stored in such an object.

-    `Element.applyFocusInfo(oFocusInfo)` 

    The `applyFocusInfo()` method applies the focus to the element after rerendering. You use this method if a different behavior is expected for the element. The default implementation of this method sets the focus as it is implemented in the `focus()` method \(see above\).




<a name="loio91f19f036f4d1014b6dd926db0e91070__section_52A752721BCF4CFBB9D724F17370144A"/>

## Example

In the following example, the control would usually set the focus on the second child node of its root node. In this case, simply override the `getFocusDomRef()` method:

```js

sap.m.<SampleControl>.getFocusDomRef = function() {
   return this.getDomRef().firstChild.nextSibling;
}
```

Another control generally sets the focus back to the element that previously had the focus. Therefore, it overrides the methods `getFocusInfo` and `applyFocusInfo`.

```js

sap.m.<SampleControl>.getFocusInfo = function() {
   return {id:this.getId(),idx:this.<myFocusElementIndex>};
}

sap.m.<SampleControl>.applyFocusInfo = function(oFocusInfo) {
   var oDomRef = this.getDomRef();
   if (oDomRef) {
      this.<myFocusElementIndex> = oFocusInfo.idx;
      this.focus();
   }
}
```



## API Reference

[sap.ui.core.Element](https://ui5.sap.com/#/api/sap.ui.core.Element)

[getCurrentFocusedControlId](https://ui5.sap.com/#/api/sap.ui.core.Core/methods/getCurrentFocusedControlId)

