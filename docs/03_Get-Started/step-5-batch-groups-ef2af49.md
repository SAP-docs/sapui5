<!-- loioef2af4957fae469e9203e98006d3ee75 -->

# Step 5: Batch Groups

In this step, we have a closer look at batch groups. Batch groups are used to group multiple requests into one server request to improve the overall performance.



<a name="loioef2af4957fae469e9203e98006d3ee75__section_bt4_fxc_z1b"/>

## Preview

   
  
**No visual change compared to the last step**

 ![](images/Tutorial_OData_V4_Step_4_3ac4fcc.png "No visual change compared to the last step") 



<a name="loioef2af4957fae469e9203e98006d3ee75__section_tsr_gxc_z1b"/>

## Coding

You can view and download all files at [OData V4 - Step 5](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.odatav4/sample/sap.ui.core.tutorial.odatav4.05).



<a name="loioef2af4957fae469e9203e98006d3ee75__section_pp2_mxc_z1b"/>

## webapp/manifest.json

```json
...
				"": {
				"dataSource": "default",
				"settings": {
					"autoExpandSelect": true,
					"operationMode": "Server",
					"groupId": "$auto",
					"synchronizationMode": "None"
				}
...
```

In the previous steps, batch processing was turned off, so that we could monitor the network traffic between our app and the service more easily. Now we turn on batch processing by changing the `groupID` to `$auto`. You can also just remove the line from the code as this is the default.

We now run the app and open the browser developer tools. On the *Console* tab, we clear all messages and choose the *Refresh* button.

> ### Tip:  
> Change the settings of the *Console* so that it only displays information messages, not warnings and errors, to make it easier to find the messages we're looking for.

We see that the request is now bundled: To read the user data, the app now sends a `POST` request instead of a `GET` request to the server. The URL of the `POST` request does not include the `path` to the data we want. Instead it ends with `$batch` that indicates that this is a batch request.

A `$batch` request uses multipart MIME to put several requests into one. This makes it harder to analyze when looking at the request in the browser developer tools. To overcome this issue, you can:

-   Switch the group ID to `$direct` temporarily by changing the source code or changing the default value in the debugger.

-   Copy the relevant part of the request or response from the developer tools to an editor and auto-format it as JSON to analyze it.


**Related Information**  


[Batch Control](../04_Essentials/batch-control-74142a3.md "OData V4 allows you to group multiple operations into a single HTTP request payload, as described in the official OData V4 specification Part 1, Batch Requests (see the link under Related Information for more details).")

[Performance Aspects](../04_Essentials/performance-aspects-5a0d286.md "The OData V4 model offers the features described below which influence performance.")

