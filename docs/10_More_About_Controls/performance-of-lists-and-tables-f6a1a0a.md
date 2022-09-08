<!-- loiof6a1a0ad49ca4d9facac222c4d372726 -->

# Performance of Lists and Tables

Mobile devices usually have a limited memory and processing power. Complex web pages may therefore have a negative impact on the application performance. This also depends on the mobile device and affects most likely the `sap.m.List` and `sap.m.Table` controls.

These controls are often bound to data sources and often dynamically generate list items or table rows. The data may contain a large number of elements. Apart from the performance, creating long lists or tables on mobile devices also affects usability: navigating through large data sets on a mobile device is less convenient than on the desktop. We recommend to restrict the number of elements in lists or tables to 100 on mobile devices.

If a list contains too many items, the device needs more time for rendering and the user has to wait before he can see the list or table on the device. The scrolling behavior may also be affected. To reduce the number of items that must be rendered initially, you can use the `growing` feature for the list or table. With this feature, subsequent loads will not trigger a rerendering of the complete list and are more performant. However, if a re-rendering of the entire list is triggered for another reason, the rendering may have a reduced performance.

