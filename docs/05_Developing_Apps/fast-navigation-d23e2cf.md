<!-- loiod23e2cf618a44382a203691e8a0baef4 -->

# Fast Navigation

Adjacent controls within the tab chain can be grouped for fast navigation using keyboard shortcuts.

Within such a group, [F6\] or  [Ctrl\] + [Alt/Option\] + [Down\] skip all controls of the group and move the focus to the first control in the tab chain of the next group.  [Shift\] + [F6\]  or  [Ctrl\] + [Alt/Option\] + [Up\]  move the focus to the first control of the previous group. Adjacent tab chain elements between groups are automatically handled as one group. For nested groups, the most concrete group is used.

The following image describes this behavior. Groups are highlighted in blue, elements in the tab chain are grey.

 ![](images/SAPUI5_Views_Fast_Navigation_e5e01dd.png) 

The fast navigation cycles. This means if the focus is within the last group in the group chain, the focus moves to the first control in the first group. This leads to an additional fast navigation chain, which allows fast navigation through applications. Larger controls like the `Table`, `Panel`, and `Form` provide their own groups by default. The application developer defines further groups.

As described, some larger controls or containers already define fast navigation groups. If a group is defined on root level of a control or element, the group can be removed by using the `CustomData` mechanism.

Coding Example:

```js
oControl.data("sap-ui-fastnavgroup", "false", true/*Write into DOM*/);
```

XML View Example:

```xml
<mvc:View
  xmlns:core="sap.ui.core"
  xmlns:mvc="sap.ui.core.mvc"
  xmlns="sap.m">
  <Panel>
    <headerToolbar>
      <Toolbar>
        <Button icon="sap-icon://settings" />
      </Toolbar>
    </headerToolbar>
    <content>
      <Text text="Lorem ipsum dolor st amet..." />
    </content>
    <customData>
      <core:CustomData key="sap-ui-fastnavgroup" value="false" writeToDom="true" />
    </customData>
  </Panel>
</mvc:View>

```

In the same way it is possible to make a control or element to be a fast navigation group. However, keep in mind that not all elements are represented in the DOM.

Coding Example:

```js
oControl.data("sap-ui-fastnavgroup", "true", true/*Write into DOM*/);
```

XML View Example:

```xml
<mvc:View
  xmlns:core="sap.ui.core"
  xmlns:mvc="sap.ui.core.mvc"
  xmlns="sap.m">
  <Panel>
    <headerToolbar>
      <Toolbar>
        <Button icon="sap-icon://settings" />
      </Toolbar>
    </headerToolbar>
    <content>
      <Text text="Lorem ipsum dolor st amet..." />
    </content>
    <customData>
      <core:CustomData key="sap-ui-fastnavgroup" value="true" writeToDom="true" />
    </customData>
  </Panel>
</mvc:View>

```

Also, DOM elements that are not controlled by SAPUI5 controls can be grouped by setting `data-sap-ui-fastnavgroup="true"`.

