<!-- loiocfcbde260f354bcba07d2686f02a1708 -->

# High Contrast Themes for SAPUI5 Controls

SAPUI5 offers two high contrast themes for its controls, High Contrast Black \(HCB\) and High Contrast White \(HCW\). These themes support users with visual impairments and are required by the accessibility product standards. The themes can be switched on by adding a dedicated URL parameter.



## SAPUI5 library support

UI-relevant libraries delivered with SAPUI5already support the HCB and HCW themes. These themes can be activated, for example, by adding the URL parameter `sap-ui-theme` or `sap-theme` with the corresponding technical theme name. These technical names typically start with `sap_` and end with `_hcb`/`_hcw`.



> ### Example:  
> HCB Theme Enablement based on *Horizon* using a URL parameter
> 
> <code>https://...?<b>sap-(ui-)theme=sap_horizon_hcb</b>&amp;...</code>

For a complete list of themes, see the related documentation.

> ### Note:  
> Using an operating system \(OS\) high-contrast mode together with a SAPUI5 high-contrast theme in a **non-**Chromium browser might result in visual inconsistencies. In such cases, either disable the OS high-contrast mode while keeping the SAPUI5 theme or use a supported Chromium-based browser, such as Chrome or Edge.

**Related Information**  


[Supported Combinations of Themes and Libraries](../02_Read-Me-First/supported-combinations-of-themes-and-libraries-38ff8c2.md "This chapter gives an overview of the possible combinations of themes and libraries for the SAPUI5 versions that are still in maintenance.")

