<!-- loiocfcbde260f354bcba07d2686f02a1708 -->

# High Contrast Themes for SAPUI5 Controls

SAPUI5 offers two high contrast themes for controls - High Contrast Black \(HCB\) and High Contrast White \(HCW\). These themes support people with visual impairments and are required by the **Accessibility** product standard. The themes can be switched on by adding a dedicated URL parameter.



## SAPUI5 library support

Currently, the following libraries support the high contrast themes:

-   `sap.f`

-   `sap.m`

-   `sap.tnt`

-   `sap.ui.comp`

-   `sap.ui.layout`

-   `sap.ui.suite`

-   `sap.ui.table`

-   `sap.ui.unified`

-   `sap.uxap`

-   `sap.viz`




## Switching on the HCB theme

You can switch on the High Contrast Black theme by appending the `sap_horizon_hcb` URL parameter as in the following example.

> ### Example:  
> HCB Theme Enablement
> 
> <code>http://&lt;hostname&gt;:&lt;port&gt;...?&lt;parameter&gt;=&lt;value&gt;&amp;...&amp;<b>sap_horizon_hcb</b></code>



## Switching on the HCW theme

You can switch on the High Contrast White theme by appending the `sap_horizon_hcw` URL parameter as in the following example.

> ### Example:  
> HCW Theme Enablement
> 
> <code>http://&lt;hostname&gt;:&lt;port&gt;...?&lt;parameter&gt;=&lt;value&gt;&amp;...&amp;<b>sap_horizon_hcw</b></code>

> ### Note:  
> Have in mind that SAPUI5 is optimized for the high contrast mode of Windows when using Chrome and Edge. If you have enabled both the Windows contrast setting and the SAPUI5 high contrast theme and you are using browser different than Chrome and Edge, this may cause conflicts, and deficiencies in the theme can occur. In such cases, please switch off the Windows setting or use another browser.

**Related Information**  


[Supported Combinations of Themes and Libraries](../02_Read-Me-First/supported-combinations-of-themes-and-libraries-38ff8c2.md "This chapter gives an overview of the possible combinations of themes and libraries for the SAPUI5 versions that are still in maintenance.")

