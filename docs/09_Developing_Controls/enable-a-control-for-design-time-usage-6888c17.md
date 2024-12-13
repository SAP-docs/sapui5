<!-- loio6888c17537fe40f1a0d19875c95d2647 -->

# Enable a Control for Design-Time Usage

To enable a control for design-time usage, follow the steps described here.



<a name="loio6888c17537fe40f1a0d19875c95d2647__prereq_pss_hhd_gyb"/>

## Prerequisites

The library containing the control needs to be enabled for design-time usage. See [Enable a Library for Design-Time Usage](enable-a-library-for-design-time-usage-196a7cd.md).



<a name="loio6888c17537fe40f1a0d19875c95d2647__context_yyf_fld_gyb"/>

## Context

All design-time metadata must be contained in one special folder within the library. The location is `<lib_namespace>/designtime`. If there are sub-namespaces in the library, the sub-namespace needs to be present within the `designtime` folder.

For example, if you have a `sap.m.semantic.SemanticPage` control, you need a `sap/m/designtime/semantic/SemanticPage.designtime.js` file.



## Procedure

1.  Move all existing `<control>.designtime.js` files into the `designtime` folder.

    If the library contains subfolders, repeat their structure within the `designtime` folder.

2.  In the `designtime` folder, in the subfolder for your control, create the following files:


    <table>
    <tr>
    <th valign="top">

    File
    
    </th>
    <th valign="top">

    Description
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `<control>.designtime.js`
    
    </td>
    <td valign="top">
    
    File containing the design-time metadata. For more information, see [Providing Design-Time Metadata](providing-design-time-metadata-5866a47.md).
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `<control>.icon.(resolution).png`
    
    </td>
    <td valign="top">
    
    Icons for controls in different resolutions \(small, medium, large\)
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `<control>.icon.svg`
    
    </td>
    <td valign="top">
    
    Icon for controls that are scalable to different resolutions
    
    </td>
    </tr>
    </table>
    
3.  In the `<control>.js` file, in the metadata of the control, set the `designtime` property to the name of the module.

    Here's an example:

    > ### Sample Code:  
    > Button.js
    > 
    > ```
    > var Button = Control.extend("<lib_namespace>.Button",
    > {
    >     metadata: {
    >         ...
    >         aggregations: {...},
    >         properties : {...},
    >         designtime : "<lib_namespace>/designtime/Button.designtime"
    >     }
    > });
    > ```


