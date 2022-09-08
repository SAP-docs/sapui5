<!-- loiof86dbe9d7f7d48dea5286003b1322165 -->

# Image

Additional information on `sap.m.Image`



<a name="loiof86dbe9d7f7d48dea5286003b1322165__section_N10018_N10011_N10001"/>

## Supporting Different Pixel Densities

Some mobile devices, starting with iPhone4 and iPad3, have a display with a high density of pixels \(four pixels where older models would only have one pixel\). They're called Retina Displays by Apple to suggest they're as crisp and clear as the eye can see. They use four physical pixels to display one logical CSS pixel. This way images can be displayed much sharper when given twice as large as required because internally the device can use many more pixels to display all details of the image. Browsers on those displays do this automatically when images are scaled down.

Some devices support higher resolution images while others don't. We therefore recommend that SAPUI5 app developers provide image resources for all relevant densities to provide a crisp and clear display of images on devices with Retina Display.

The `sap.m.Image` control automatically chooses the right density depending on the device on which it's displayed. If an image of a certain density isn't available, the image control falls back to a default image, which must be provided as well.

The image control is also used implicitly by other controls, for example:

-   `sap.m.Button`
-   `sap.m.SegmentedButton`
-   `sap.m.StandardListItem`

> ### Caution:  
> If you don't have higher resolution images, you must set the `densityAware` property to `false` to avoid unnecessary roundtrips.



<a name="loiof86dbe9d7f7d48dea5286003b1322165__section_N10057_N10011_N10001"/>

## Example

Assume that the following controls are displayed on a device with high-density screen \(`window.devicePixelRatio` is 2\):

```js

new sap.m.Image({ 
	    densityAware: false, // tells the image control that there are no different optimized image variants
	    src : "first.png"   // therefore Image control will directly load first.png 
})

new sap.m.Image({ 
    	src : "second.png"    // Image control will first look for second@2.png, then fall back to second.png
})
```

The first image control is told that there are no image files for the different densities, so it directly loads `first.png`. This image looks as good as other images on Retina Displays.

The second image control first attempts to load `second@2.png`, which is twice as large as the normal image and is scaled down for display to look crisp on Retina Displays. If this file doesn't exist, it falls back to `second.png`, but this fallback causes an additional server request.



<a name="loiof86dbe9d7f7d48dea5286003b1322165__section_N10075_N10011_N10001"/>

## Naming Conventions

Density-related images are loaded if you provide an image name with density awareness in the following format:

```
[imageName]@[densityValue].[extension]
```

Supported densities are 1.5 and 2. The following example shows a set of images with different densities:

-   `detail.png` \(default\)
-   `detail@1.5.png`
-   `detail@2.png`

> ### Note:  
> `detail@0.75.png` isn't supported and uses the standard image for a such low density device.

**Related Information**  


[API Reference: `sap.m.Image`](https://ui5.sap.com/#/api/sap.m.Image)

[Samples: `sap.m.Image`](https://ui5.sap.com/#/entity/sap.m.Image/sample/sap.m.sample.Image)

