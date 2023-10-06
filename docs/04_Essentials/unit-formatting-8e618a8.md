<!-- loio8e618a8d93cb4f92adc911b96047eb8d -->

# Unit Formatting

SAPUI5 supports the formatting and parsing of units. These unit formats are by default taken from the CLDR. Besides the default units defined in the CLDR, you can also define custom units.



<a name="loio8e618a8d93cb4f92adc911b96047eb8d__section_m5b_xkh_hdb"/>

## Introduction

Similar to the formatting of currencies, the new unit formatting feature allows you to combine a number value with a localized unit string. Still the actual numbers themselves can be formatted in all kinds of styles, for example, with different decimals or fraction digits.

With version 1.54 all language files will include the CLDR data for formatting. You can check out the public CLDR github repository for an overview of all supported languages and units: [https://github.com/unicode-cldr/cldr-units-modern](https://github.com/unicode-cldr/cldr-units-modern)

The default CLDR units include a pattern for formatting a number value in the given unit and the set locale. Additionally, you can now parse an already formatted string back into the unit-format code from the CLDR and of course the raw number value. The same is true for your self-defined custom units.

In addition to the formatting and parsing patterns, the CLDR also provides a display-name for all units, as well as grammatical plural forms. The display-name for the unit `volume-cubic-inch` is *inches³*. The formatting output might however look like this: *12 in³*.



<a name="loio8e618a8d93cb4f92adc911b96047eb8d__section_fb5_wlh_hdb"/>

## Usage



### Simple Sample

Since the units and their formatting patterns are already included in the respective language JSON files, you can simply instantiate a new unit format instance via the `NumberFormat.getUnitInstance()` factory. The resulting instance supports formatting and parsing. While the `FormatOptions` are used to format the Number itself, the specific unit code is passed to the format/parse method.

```
// create a simple unit formatting instance, without any additional options
sap.ui.require(["sap/ui/core/format/NumberFormat"], function(NumberFormat) {
   var oUnitFormat = NumberFormat.getUnitInstance();
   oUnitFormat.format(12345.678, "speed-mile-per-hour"); // output: 12,345.678 mph
   oUnitFormat.parse("12345.678 mph"); // output: [12345.678, "speed-mile-per-hour"]
});
```



### Complex Sample

Besides a simple formatting and parsing of units defined in the CLDR, you can also use the known format options for formatting numbers independent of the unit. The style of the number output format can be defined as either `short` or `long.`

Essentially, the new unit formatting can be combined together with the existing number formatting.

```

// new unit formatter, decimals are limited to 2, and the output style is set to "short"
sap.ui.require(["sap/ui/core/format/NumberFormat"], function(NumberFormat) {
   var en = new sap.ui.core.Locale("en");
   var oUnitFormat = NumberFormat.getUnitInstance({decimals:2, style:"short"}, en);
   console.log(oUnitFormat.format(12345.678, "speed-mile-per-hour")); // output:  12.35K mph
   console.log(oUnitFormat.parse("12.35K mph")); // output: [12350, "speed-mile-per-hour"]
});

// new unit formatter, decimals are limited to 2, and the output style is set to "long"
sap.ui.require(["sap/ui/core/format/NumberFormat"], function(NumberFormat) {
   var en = new sap.ui.core.Locale("en");
   var oUnitFormat = NumberFormat.getUnitInstance({decimals:2, style:"long"}, en);
   console.log(oUnitFormat.format(12345.678, "speed-mile-per-hour")); // output: 12.35 thousand mph
   console.log(oUnitFormat.parse("12.35 thousand mph")); // output: [12350, "speed-mile-per-hour"]
});
```

The unit’s `displayname` can also be retrieved based on the data from the CLDR.

```
sap.ui.require(["sap/ui/core/format/NumberFormat", "sap/ui/core/Locale", "sap/ui/core/LocaleData"],
    function(NumberFormat, Locale, LocaleData) {
    console.log(LocaleData.getInstance(new Locale("en")).getUnitDisplayName("speed-mile-per-hour")); // output: miles/hour
});
```



### Plural Forms and RTL

Depending on the set locale/language, the output also correctly regards grammatical plural forms, as well as right-to-left orientation. In some Arabic languages, for example, there is a distinction between “many” and “one”, with “one” being a single string without a number in it:

```

sap.ui.require(["sap/ui/core/format/NumberFormat"], function(NumberFormat) {
   var ar = new sap.ui.core.Locale("ar");
   var oUnitFormat = NumberFormat.getUnitInstance({decimals:2, style:"long"}, ar);
   console.log(oUnitFormat.format(123456.789, "angle-revolution")); // 123.46 ألف دورة
   console.log(oUnitFormat.format(1, "angle-revolution")); // دورة
});
```

And here’s an example of right-to-left orientation in Hebrew:

```

sap.ui.require(["sap/ui/core/format/NumberFormat"], function(NumberFormat) {
   var he = new sap.ui.core.Locale("he");
   var oUnitFormat = NumberFormat.getUnitInstance({decimals:2, style:"long"}, he);
   console.log(oUnitFormat.format(12345.678, "speed-mile-per-hour")); // ‏12.35 אלף mph
});
```

> ### Note:  
> The right-to-left languages include a special whitespace character as a marker. This character is of course invisible, but you should take note of it, in case you intend to do string comparisons and other string operations. For example, in the Chrome debugger the RTL mark is visualized as a red dot.



<a name="loio8e618a8d93cb4f92adc911b96047eb8d__section_b2x_tnh_hdb"/>

## Custom Units



### Instance-Exclusive Units

The unit NumberFormat instance also allows you to specify custom units, which can be used for formatting, as well as parsing. All you have to do is add your custom units as an additional parameter in the `NumberFormat.getUnitInstance()` factory.

In the following example, you can see how this is done for a specific instance.

```

sap.ui.require(["sap/ui/core/format/NumberFormat"], function(NumberFormat) {
 
       var oFormat = sap.ui.core.format.NumberFormat.getUnitInstance({
              customUnits: {
                     "zomb": {
                            "unitPattern-count-one": "{0} Zombie...",
                            "unitPattern-count-other": "{0} Zombies!!"
                     }
              }
       });
 
       console.log(oFormat.format(1, "zomb"));     // 1 Zombie...
       console.log(oFormat.format(9001, "zomb"));  // 9.001 Zombies!!
       
       console.log(oFormat.parse("12 Zombies!!")); // [12, "zomb"];
});
```

> ### Caution:  
> The custom units defined on the number format instance will be exclusive to this instance. No other instances are affected. In addition, once you define custom units for an instance, only those units will be formatted and parsed by that instance. This also means that custom units defined via the Configuration are not taken into account for this specific instance.
> 
> This is done to circumvent ambiguities and unit clashes with the CLDR units. So in the above example, only Zombies can be formatted, but no Gigawatt \(CLDR key: `power-gigawatt`\).
> 
> > ### Example:  
> > ```
> >        // the previous Unit instance is used
> >        // formatting/parsing Zombies is fine
> >        console.log(oFormat.format(9001, "zomb"));  // 9.001 Zombies!!
> >        console.log(oFormat.parse("12 Zombies!!")); // [12, "zomb"];
> >  
> >        // formatting/parsing Giga-Watt does not work (because of the exclusivity of the custom units on the above instance)
> >        console.log(oFormat.format(1.21, "power-gigawatt")); // "": results in an empty string
> > ```

If you need both, CLDR units and custom units, you simply have to create two separate number format instances.



### Globally Configured Units

You can also add custom units via the format settings in the Core configuration. Contrary to the custom units defined exclusively on a single unit-formatter instance, these custom units will be available in ALL unit-formatted instances for the current locale \(except if they also define a set of custom units\).

Adding a unit with a key which is already available in the CLDR, will overwrite the CLDR unit. This way you can overdefine single units, in case the CLDR provided formatting is not sufficient.

```
sap.ui.require(["sap/ui/core/format/NumberFormat"], function(NumberFormat) {
   sap.ui.getCore().getConfiguration().getFormatSettings().addCustomUnits({
       "cats": {
          "displayName": "kitties",
          "unitPattern-count-one": "{0} kitty",
          "unitPattern-count-other": "{0} kitties"
       },
       "dogs": {
          "displayName": "puppies",
          "unitPattern-count-one": "{0} puppy",
          "unitPattern-count-other": "{0} puppies"
       },
       "power-horsepower": { // overwrite of an existing CLDR unit
          "displayName": "Horsepower",
          "unitPattern-count-one": "{0} AmazingHorse", // singular form
          "unitPattern-count-other": "{0} AmazingHorses" // plural form
       }
    });
 
 
    var oUnitFormat = NumberFormat.getUnitInstance({decimals:2, style:"long"});
 
    // formatting a custom unit
    console.log(oUnitFormat.format(12, "cats")); // 12,00 kitties
 
 
    // formatting and existing CLDR unit
    console.log(oUnitFormat.format(5, "speed-meter-per-second")); // 5,00 m/s
 
 
    // formatting and existing CLDR unit
    console.log(oUnitFormat.format(12, "power-horsepower")); // 12,00 AmazingHorses
});
```

Additionally, you can now define unit mappings, in order to use aliases for some units. A typical use-case is to map from an ISO unit code to a CLDR key. Of course you can also map to custom units as shown below.

```
sap.ui.getCore().getConfiguration().getFormatSettings().addUnitMappings({
   "kitties": "cats", // maps to a custom defined unit
   "mySpeedAlias": "speed-kilometer-per-hour" // maps to an existing the CLDR unit
});
```



### Additional Format Options

When using either instance, exclusive or globally configured custom units, you can also add two additional format options \(`decimals` and `precision`\) to the custom unit's definition block. In the following examples the `decimals` option is set.

> ### Example:  
> Globally configured custom units:
> 
> ```
> sap.ui.require(["sap/ui/core/format/NumberFormat"], function(NumberFormat) {
>    // define a new unit called Lux
>    sap.ui.getCore().getConfiguration().getFormatSettings().addCustomUnits({
>        "lux": {
>           "displayName": "Lux",
>           "unitPattern-count-one": "{0} lx",
>           "unitPattern-count-other": "{0} lx",
>           "decimals": 2
>        }
>     });
>  
>     var oUnitFormat = NumberFormat.getUnitInstance({style:"long"});
>  
>     console.log(oUnitFormat.format(2.4, "lux")); // 2,40 lux (notice the padded 0 after the 4, this is due to the decimals option)
> });
> ```

> ### Example:  
> Instance exclusive custom unit definition:
> 
> ```
> 
> sap.ui.require(["sap/ui/core/format/NumberFormat"], function(NumberFormat) {
>     // define a new unit called Lux
>     var oFormat = sap.ui.core.format.NumberFormat.getUnitInstance({
>         customUnits: {
>             "lux": {
>                  "displayName": "Lux",
>                  "unitPattern-count-one": "{0} lx",
>                  "unitPattern-count-other": "{0} lx",
>                  "decimals": 2
>             }
>         }
>     });
>  
>     var oUnitFormat = NumberFormat.getUnitInstance({style:"long"});
>  
>     console.log(oUnitFormat.format(2.4, "lux")); // 2,40 lux (notice the padded 0 after the 4, this is due to the decimals option)
> });
> ```



<a name="loio8e618a8d93cb4f92adc911b96047eb8d__section_ybw_1yh_hdb"/>

## Databinding: New Unit Type

Besides the NumberFormat instances, you now can also include the new Unit type in your application. Simply define it as the type for a property binding, and most of the formatting and parsing effort will be handled for you out of the box.

To demonstrate this, we can consider an example with electric meters. Typically they all measure the flow of energy in kilowatt hours \(kWh\). Yet some meters are more precise than others, some measure up to a few hundred wattseconds, others just cap it at full kilowatt hours. To simplify it for our example: the number of decimals might differ depending on the type of electric meter.

```

// defining a new custom Type as a subclass of the sap.ui.model.type.Unit type
sap.ui.require(["sap/ui/model/type/Unit", "sap/ui/core/format/NumberFormat"], function(UnitType, NumberFormat) {
 
       UnitType.extend("sap.ui.core.samples.MeterType", {
              constructor: function(oFormatOptions, oConstraints){
                     // define the dynamic format options as the third argument
                     // ‘aDynamicFormatOptionNames’
                     UnitType.apply(this, [oFormatOptions, oConstraints, ["decimals"]]);
              }
       });
});
```

In the example we defined a new `MeterType` to combine not only a number value and a unit, but the already mentioned optional dynamic format options in one single typed `PropertyBinding`.

```
<-- XML View snippet -->
<t:Table rows=’energyModel>/meters’>
   ... <!-- here is more Table definition stuff, we cut this for simplicity -->
 
 
   <!-- the third part of the binding is the number of decimals for this meter instance -->
   <m:Label text="{parts:['energyModel>value', 'energyModel>unit', 'energyModel>decimals'],type: 'sap.ui.core.samples.MeterType'}"/>
 
 
   ...
</t:Table>
```

With the new bindable dynamic format options of Unit type, you can pass the relevant meter formatting information in a generalized way through the cell’s bindings.

The third argument of the base Unit type constructor is a list of dynamic format options. In our example, the binding context itself contains the information on how many-decimals should be used. Still, these dynamic format options can be bound to any value from any model.

> ### Note:  
> If you use a combination of custom units on the Configuration and the Unit type, the format options from the type have priority.
> 
> So if you define a `decimals` value for a custom unit in the Configuration, the bound values from the Unit type instance will still be taken for the formatting.



<a name="loio8e618a8d93cb4f92adc911b96047eb8d__section_LUM"/>

## Legacy Unit Mapping

With the upgrade of the CLDR version from 35.1 to 41, released with SAPUI5 version 1.110, some unit keys have changed. To support the formatting of legacy unit keys, a mapping has been added. A user is able to load legacy unit keys from his back end, which are then mapped to the new unit keys. When parsing user input, only the new unit keys are returned. Updating or changing entries containing legacy unit keys results in replacing the legacy unit key with a new unit key.

> ### Note:  
> If affected unit keys are handled by back-end code explicitly, this code needs to be adapted.

The following legacy unit keys are currently supported; this map may be subject to change since, with further CLDR upgrades, unit keys may change:


<table>
<tr>
<th valign="top">

Legacy Unit Key



</th>
<th valign="top">

New Unit Key



</th>
</tr>
<tr>
<td valign="top">

`acceleration-meter-per-second-squared`



</td>
<td valign="top">

`acceleration-meter-per-square-second`



</td>
</tr>
<tr>
<td valign="top">

`concentr-milligram-per-deciliter`



</td>
<td valign="top">

`concentr-milligram-ofglucose-per-deciliter`



</td>
</tr>
<tr>
<td valign="top">

`concentr-part-per-million`



</td>
<td valign="top">

`concentr-permillion`



</td>
</tr>
<tr>
<td valign="top">

`consumption-liter-per-100kilometers`



</td>
<td valign="top">

`consumption-liter-per-100-kilometer`



</td>
</tr>
<tr>
<td valign="top">

`pressure-millimeter-of-mercury`



</td>
<td valign="top">

`pressure-millimeter-ofhg`



</td>
</tr>
<tr>
<td valign="top">

`pressure-pound-per-square-inch`



</td>
<td valign="top">

`pressure-pound-force-per-square-inch`



</td>
</tr>
<tr>
<td valign="top">

`pressure-inch-hg`



</td>
<td valign="top">

`pressure-inch-ofhg`



</td>
</tr>
<tr>
<td valign="top">

`torque-pound-foot`



</td>
<td valign="top">

`torque-pound-force-foot`



</td>
</tr>
<tr>
<td valign="top">

`mass-metric-ton`



</td>
<td valign="top">

`mass-tonne`



</td>
</tr>
</table>

**Related Information**  


[API Reference: `sap.ui.core.format.NumberFormat`](https://ui5.sap.com/#/api/sap.ui.core.format.NumberFormat)

