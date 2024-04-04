<!-- loio69d3cbd4150c4ffb884e788f7f60fd93 -->

# Mock Server

A mock server mimics one or more back-end services. It is used to simplify integration testing and to decouple UI development from service development. By using a mock server you can develop and test the UI even if the service in the back end is incomplete or unstable.



<a name="loio69d3cbd4150c4ffb884e788f7f60fd93__section_od2_mock_server"/>

## OData V2 Mock Server

The mock server included with SAPUI5 mimics OData V2 back-end calls. It simulates the OData provider and is completely client-based, meaning that no network connectivity to a remote host is required. It intercepts HTTP calls made to the server and provides a fake output to the client. All this is transparent to data binding and the use of an OData model and feels like a real server. No changes are required on the OData model.

The OData V2 mock server provides mock services and also mock data. It supports randomly generated data based on the service metadata as well as mock data provided in JSON files.

> ### Note:  
> The mock server only supports the JSON format for representing the resources it exposes, such as collections, entries, links, and so on.

For more information on the OData V2 mock server, see the topics given below.



<a name="loio69d3cbd4150c4ffb884e788f7f60fd93__section_od4_mock_server"/>

## OData V4 Mock Server

The mock server functionality for OData V4 is included with CAP Node.js. For more information, see [https://cap.cloud.sap/docs/guides/using-services\#local-mocking](https://cap.cloud.sap/docs/guides/using-services#local-mocking).

**Related Information**  


[sap.ui.core.util.MockServer](https://ui5.sap.com/#/api/sap.ui.core.util.MockServer)

