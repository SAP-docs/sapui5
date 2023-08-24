<!-- loio78880c09a1954a02b49c21357d45c91f -->

# Performance Measurement Using sap/ui/performance/Measurement Module

You can use `sap/ui/performance/Measurement` to measure the performance of your JavaScript code.

For each measurement, the result is a time and a duration. The time are the milliseconds \(ms\) from starting the measurement till its end. The duration is the effective milliseconds, pause phases are not counted here.

You can measure the categories that are used by the SAPUI5 core classes as listed in the following table:


<table>
<tr>
<th valign="top">

Category



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

`javascript` \(default\)



</td>
<td valign="top">

Default measurement category if no category is provided



</td>
</tr>
<tr>
<td valign="top">

`require` 



</td>
<td valign="top">

Identifies the duration of `sap.ui.require` for lazy loading of JavaScipt classes including the loading and parsing times for a class



</td>
</tr>
<tr>
<td valign="top">

`xmlhttprequest` 



</td>
<td valign="top">

Identifies the duration of an `jQuery.ajax` call



</td>
</tr>
<tr>
<td valign="top">

`render` 



</td>
<td valign="top">

Used for all rendering-related measurements that trigger core rendering of controls within the `RenderManager` class

With the `render` category there comes an additional set of categories to distinguish between different phases of rendering



</td>
</tr>
<tr>
<td valign="top">

`control` 



</td>
<td valign="top">

Identifies the duration for HTML rendering provided with the `ControlRender.render` method



</td>
</tr>
<tr>
<td valign="top">

`after` 



</td>
<td valign="top">

Identifies the duration for calls on the control's `onAfterRendering` method



</td>
</tr>
<tr>
<td valign="top">

`preserve` 



</td>
<td valign="top">

Identifies the duration needed to find out whether rendering can be preserved



</td>
</tr>
</table>



## Procedure



### 1. Activate performance measurement

By default, `Measurement` is disabled to avoid unnecessary code execution during runtime. Therefore, you first have to activate the measurement using one of the following options:

-   Use URL Parameter `sap-ui-measure=true` to measure an initial request.

-   Use the diagnostics window in your app with [Ctrl\] + [Alt\] + [Shift\] + [S\] . In this window, you can also see a visualization of the results.

-   Activate measurement in the browser's console by calling `Measurement.setActive(true)`

-   Create a measurement in your code with:

    ```js
    // "Log" required from module "sap/base/Log"
    // "Measurement" required from module "sap/ui/performance/Measurement"
    Measurement.setActive(true);
    Measurement.start("myId","Measurement of myId");
    Log.info("foo");
    Measurement.end("myId");
    ```

    You can use methods as listed in the following table:


    <table>
    <tr>
    <th valign="top">

    Action


    
    </th>
    <th valign="top">

    Method


    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    Start measurement


    
    </td>
    <td valign="top">
    
    `Measurement.start(sId,sInfo,[categories])` 


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    End measurement


    
    </td>
    <td valign="top">
    
    `Measurement.end(sId)` 


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    Pause


    
    </td>
    <td valign="top">
    
    `Measurement.pause(sId)` 


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    Resume


    
    </td>
    <td valign="top">
    
    `Measurement.resume(sId)` 


    
    </td>
    </tr>
    </table>
    

To activate measurement for certain categories only, you have the following options:

-   Provide a URL Parameter with categories `sap-ui-measure=category1,category2`

-   Add the category as parameter to the call of the `Measurement.setActive` as in the following example:

    ```
    // Measure only "require" category
    // "Measurement" required from module "sap/ui/performance/Measurement"
    Measurement.setActive(true,"require")
    ```

    To assign a measurement to a specific category, just add the category to the `start` function.

    ```
    // "Measurement" required from module "sap/ui/performance/Measurement"
    Measurement.start("myId","Measurement of myId", **\["foo"\]**);
    ```

    > ### Note:  
    > If you also use the `start` or `average` method, make sure that the same categories are passed on, otherwise no measurement is started.




### 2. Retrieve the results

You can view the results in the *Performance* section of the diagnostics window \([Ctrl\] + [Alt\] + [Shift\] + [S\] \). Here, you can also refresh the result list, if the performance measurement is still running.

You can retrieve the results via API with one of the following commands:


<table>
<tr>
<th valign="top">

Command



</th>
<th valign="top">

Returns



</th>
</tr>
<tr>
<td valign="top">

`Measurement.getAllMeasurements()` 



</td>
<td valign="top">

Array of all measures \(running and completed\)



</td>
</tr>
<tr>
<td valign="top">

`Measurement.getAllMeasurements(true)` 



</td>
<td valign="top">

Array of completed measures



</td>
</tr>
<tr>
<td valign="top">

`Measurement.getAllMeasurements(false)` 



</td>
<td valign="top">

Array of running \(not completed\) measures



</td>
</tr>
<tr>
<td valign="top">

`Measurement.getMeasurement(string)` 



</td>
<td valign="top">

One specific measurement by ID



</td>
</tr>
<tr>
<td valign="top">

`Measurement.filterMeasurements(func)` 



</td>
<td valign="top">

Array of all measures based on the result of the filter function \(running and completed\)



</td>
</tr>
<tr>
<td valign="top">

`Measurement.filterMeasurements(func, true)` 



</td>
<td valign="top">

Array of completed measures based on the result of the filter function



</td>
</tr>
<tr>
<td valign="top">

`Measurement.filterMeasurements(func, false)` 



</td>
<td valign="top">

Array of running measures based on the result of the filter function



</td>
</tr>
</table>

In Google Chrome, for example, you can also display the results in a table in the console by using:

```
console.table(Measurement.getAllMeasurements(true)) //table with completed measurements
```



### 3. Interpret the results

Each entry in the resulting array provides an object of the following structure:

-   `id`: `string`

    The unique ID of the measurement as provided in the `start` or `average` method

-   `info`: `string`

    Additional information as provided in the `start` or `average` method

-   `duration`: `float`

    Duration or average duration in ms

-   `count`: `int`

    Number of calls counted of an average

-   `average`: `boolean`

    Indicates whether the result is an average

-   `categories`: `string[]`

    Categories as provided in the `start` or `average` method




### 4. Clear results

To clear all measurements call the `Measurement.clear` method.



## Specific Use Cases



### Averages

For repeatedly occurring operations, you can calculate an average duration with the `Measurement.average` method.

```
// "Log" required from module "sap/base/Log"
// "Measurement" required from module "sap/ui/performance/Measurement"
Measurement.setActive(true);
for (var i=0;i<1000;i++) {
    Measurement.average("myId","Average of myId");
    Log.info("Foo " + i);
    Measurement.end("myId");
}
```

Based on the ID, all measurement calls are counted and the average duration is calculated and provided in the result, together with the complete duration and the number of calls:

```
// "Log" required from module "sap/base/Log"
// "Measurement" required from module "sap/ui/performance/Measurement"
Log.info("1000 calls: " + Measurement.getMeasurement("myId").count === 1000); //true
Log.info("Average time: " + Measurement.getMeasurement("myId").duration);

```



### Measurement of Object Methods

You can register an average measurement without changing the original source code. For this, you use the following APIs:

-   `Measurement.registerMethod`

-   `Measurement.unregisterMethod`

-   `Measurement.unregisterAllMethods`


To measure the average time a method of an instance, you can use the following example code:

```
// "Button" required from module "sap/m/Button"
// "Measurement" required from module "sap/ui/performance/Measurement"
var oButton = new Button();
Measurement.registerMethod("oButton.setText", oButton, "setText", ["instance"]); //register to oButton instance on method setText
Measurement.setActive(true,["instance"]); //measure only category "instance"
for (var i=0;i<1000;i++) {
    oButton.setText("MyButton" + i);
}
 
Measurement.unregisterMethod(oButton, "setText");
// or Measurement.unregisterAllMethods();

Measurement.getAllMeasurements();
```

To measure the average time a method of a class, you can use the following example code:

```
// "Button" required from module "sap/m/Button"
// "Measurement" required from module "sap/ui/performance/Measurement"
Measurement.registerMethod("oButton.setText", Button.prototype, "setText",["class"]); //register to Button class on method setText
Measurement.setActive(true,["class"]); //measure only category "class"
for (var i=0;i<1000;i++) {
    var oButton = new Button();
    oButton.setText("MyButton" + i);
}
 
Measurement.unregisterMethod(oButton, "setText");
//or Measurement.unregisterAllMethods();
 
Measurement.getAllMeasurements();
```



### Filtering

You can also use the categories listed above as filters for the result list or to define measurements for one or more specific categories with the `filterMeasurements` method.

To filter the categories that are measured, you use, for example:

```
// Filter for category1
Measurement.filterMeasurements(function(oMeasurement) {
    return oMeasurement.categories.indexOf("category1") > -1;
});
```

To filter the results, you can use a code like this:

```
// Filter for duration > 500ms
Measurement.filterMeasurements(function(oMeasurement) {
    return oMeasurement.duration > 500;
});

```

**Related Information**  


[API Reference: `jQuery.sap.measure.html`](https://ui5.sap.com/#/api/jQuery.sap.measure)

[Performance: Speed Up Your App](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md "If a web app has performance issues, finding the cause can be both a time-consuming and nerve-consuming task. To help you avoid and solve performance issues in your app, here are some good practices we've discovered while dealing with SAPUI5 apps.")

[Performance Issues](../05_Developing_Apps/performance-issues-966d67c.md "This section lists some of the most important issues that should be avoided to improve performance in SAPUI5 applications.")

