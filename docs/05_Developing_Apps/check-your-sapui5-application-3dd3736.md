<!-- loio3dd37367d73945bcae39301e12a4eee4 -->

# Check Your SAPUI5 Application

There are two checks you can do: Are my component IDs unique and valid? Does my app have the necessary SAPUI5 ICF node or are there unnecessary ICF nodes?



There are two checks integrated into the ABAP Test Cockpit \(ATC\) to make sure that your SAPUI5 application is built correctly.



<a name="loio3dd37367d73945bcae39301e12a4eee4__section_rwm_k1c_44b"/>

## The Checks

The following checks are available:

-   [ATC Check SAPUI5 Component Consistency](atc-check-sapui5-component-consistency-a71400b.md)

-   [ATC Check ICF Nodes for SAPUI5 Applications](atc-check-icf-nodes-for-sapui5-applications-2aa5187.md) \(in on-premise systems only\)




<a name="loio3dd37367d73945bcae39301e12a4eee4__section_qdg_tjc_44b"/>

## How to Check

In on-premise systems, you need to activate both checks in the back-end system:

1.  Start transaction `SCI` \(Code Inspector\).
2.  Choose *Code Inspector* \> *Management of* \> *Checks*.
3.  Make sure that the following check classes are activated:
    -   `CL_CI_TEST_UI5_COMP`
    -   `CL_CI_TEST_UI5_ICF`


It's recommended that you add both checks to a check variant. You can then execute both checks at the same time in a dedicated variant or together with other checks that you perform regularly:

1.  In transaction `SCI` \(Code Inspector\) under *Check Variant*, either create a new check variant or edit an existing one.
2.  Go to *Locally available checks* \> *User Interfaces* and activate the following checks:
    -   UI5: Consistency check for SAPUI5 components
    -   UI5: ICF nodes consistency check

3.  Save the variant.

For more information about check variants, see [Creating and Processing a Check Variant](https://help.sap.com/viewer/ba879a6e2ea04d9bb94c7ccd7cdac446/latest/en-US/49243e38855616b6e10000000a42189d.html).

Now you can execute the check variant for your SAPUI5 apps or packages:

1.  Start transaction `SE80` \(Object Navigator\).
2.  In the Repository Browser, select *BSP Application* or *Package* from the dropdown list.
3.  Select the entry you want to check.
4.  Right-click on the entry and choose *Check* \> *ABAP Test Cockpit \(ATC\) with...*.
5.  On the *Options* tab, select the Code Inspector check variant that contains the two check classes.
6.  Choose *Execute Checks*.

The check is executed and you can react to the results as necessary. For more information, see [Choosing a Check Variant for a Local ATC Check](https://help.sap.com/viewer/ba879a6e2ea04d9bb94c7ccd7cdac446/latest/en-US/eaedb182328d4ffab7df496c1dae06b3.html).

