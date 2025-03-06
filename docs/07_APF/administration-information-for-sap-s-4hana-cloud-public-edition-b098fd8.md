<!-- loiob098fd8d11b344dbb43bcdbff6ff80b2 -->

# Administration Information for SAP S/4HANA Cloud Public Edition

When you, as an administrator, create business users, ensure that they have the business catalog `SAP_CA_BC_APF_MODELING_PC` assigned.

You can also create users based on the business role template `SAP_BC_ANALYTICS_SPECIALIST`. This template includes the business catalog mentioned above, but also other business catalogs, which you may or may not need. You can use the template or assign the business catalog directly to the users as required.

> ### Note:  
> To authorize users for the OData services required to create a configuration for an APF-based app, you must assign them additional business catalogs as the start authorizations for OData services are not included in the business catalog `SAP_CA_BC_APF_MODELING_PC`.

