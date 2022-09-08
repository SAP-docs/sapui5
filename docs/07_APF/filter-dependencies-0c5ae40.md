<!-- loio0c5ae40bcda34f21b4c0d44632cb4ce4 -->

# Filter Dependencies

At runtime, selections you make in a filter are applied to all subsequent filters, just as selections in an analysis step filter the data of subsequent steps. Selections in a filter are exposed as filter criteria to the value help request or context resolution request of any subsequent filter. Subsequent filters are positioned to the right of the filter where the selection is made \(in left-to-right languages\). This dependency only exists if a property of a filter is also used as filterable property or parameter in the value help request or context resolution request of a subsequent filter.

At design time, the order in which the filters are arranged in the APF Configuration Modeler app determines the order in which the filters appear at runtime. The filter that is at the top of the list at design time appears on the left at runtime. You can determine the way in which filters influence each other by arranging them in the required sequence. A filter that you position at the top of the list in the APF Configuration Modeler influences any filter that is further down the list and that uses the same filter property. In other words, a filter can depend on the selections in any filter that is higher up in the list.

> ### Note:  
> If filter A has a property that filter B requires as parameter or mandatory filter, filter A must be positioned in front of filter B so that the dependency takes effect. Otherwise, filter B is not provided with this property and therefore does not work.

