<!-- loio9be7f960a39748c9b95c3711fb0e52a9 -->

# sap.ui.vk

The `sap.ui.vk` library provides controls for the visualization and manipulation of 2D and 3D models in your application.

> ### Note:  
> The following sections only provide additional information for some of the controls. For a complete list of all controls and their documentation, see the [API Reference](https://ui5.sap.com/#/api) and the [Samples](https://ui5.sap.com/#/controls). 

Applications use the `sap.ui.vk` namespace. All other namespaces \(`sap.ui.vk.dvl`, `sap.ui.vk`.`threejs`, `sap.ui.svg`\) are specific for particular implementations and should be treated as private APIs.

3D viewing is enabled using rendering engines, either **legacy DVL** or **ThreeJs**.

The selection of the 3D rendering engine is done using the `sap.ui.vk.ContentResource` object and its parameter `sourceType`.

-   To use the legacy DVL rendering engine, set the `sourceType` parameter to `vds`.

-   To use the ThreeJs rendering engine, set the `sourceType` parameter to `vds4`.


All examples and screenshots in this document use the **ThreeJs** rendering engine.

> ### Caution:  
> The legacy DVL rendering engine is deprecated and will be removed in an upcoming release.
> 
> Many new features do not work with the legacy DVL rendering engine. For example, most tools available in the drawer toolbar work only with ThreeJs rendering.

