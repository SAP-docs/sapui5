<!-- loio5866a476fa4445ec953181354b383097 -->

# Providing Design-Time Metadata

Design-time metadata is defined as an SAPUI5 module. It can contain static information, such as a description of properties or aggregations, as well as executable functions that are called by design-time tools.

To ensure the robustness of your functions, it's important to account for scenarios where a control may not be rendered. Different tools may retrieve information at different points in time, so it's crucial to handle such cases gracefully.

Typically, design-time metadata is defined for a control class rather than a specific control instance, and it describes all instances of this class. In cases where different variations are possible, the control can implement a function that gets the control instance as the first parameter to calculate the correct design-time metadata.

