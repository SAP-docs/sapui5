<!-- loio8b325518a2ae48ee91eb2dacda1d1420 -->

# Retrieving Control Instances by Their ID

A control instance can be found in a fragment by means of its ID.



## Context

Due to the above prefixing that guarantees unique IDs, there are different cases possible which require different calls.

Assuming the control has the ID `myControl`, there are two ways how to retrieve it by its ID.

-   Retrieving a control instance when the fragment is not part of a view
    -   When no fragment ID was given: `myControl = Element.getElementbyId("myControl")`, with `Element` required from module `sap/ui/core/Element`

    -   When a fragment ID `myFrag` was given: `myControl = Fragment.byId("myFrag", "myControl")`, with `Fragment` required from module `sap/ui/core/Fragment`


-   Retrieving a control instance when the fragment is embedded into a view and the code is inside a controller. The controller is called `this` in the following examples.

    -   When no fragment ID was given: `myControl = this.byId("myControl")`

    -   When a fragment ID `myFrag` was given: `myControl = this.byId(Fragment.createId("myFrag", "myControl"))`, with `Fragment` required from module `sap/ui/core/Fragment`



