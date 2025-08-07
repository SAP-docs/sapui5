<!-- loio83c89ccef12f48ab98f6c3811bd025b3 -->


# Working With UI Annotations

## Overview

UI annotations are metadata elements used to define how data is presented in SAP Fiori applications. They are typically applied to CDS views and exposed via OData services. This document outlines how to work with UI annotations across different programming models:

-   **OData V2 with BOPF or RAP**
-   **OData V4 with RAP**
-   **CAP (Cloud Application Programming Model)**

---

## ⚠️ Version Scope

> This documentation includes guidance for **OData V2**, **OData V4**, and **CAP**. Please ensure you are referencing the correct section based on your project’s architecture.

---

## Annotation Types

| Type                 | Description                                                        | Applicable Models |
| -------------------- | ------------------------------------------------------------------ | ----------------- |
| In-place annotations | Defined directly in CDS views using `@UI.*`                        | V2, V4, CAP       |
| Ex-place annotations | Defined in metadata extension files                                | V2 only           |
| Vocabulary-based     | Uses standardized vocabularies like `UI`, `Common`, `Capabilities` | V2, V4, CAP       |

---

⚠️ While it is technically possible to expose BOPF-based business objects via OData V4, this approach is not recommended. For new developments, SAP recommends using the RESTful ABAP Programming Model (RAP), which provides native support for OData V2 and V4, draft handling, and UI annotations.

---

## OData V2 with BOPF or RAP

OData V2 services can be built using either the **classic ABAP programming model with BOPF** or the **modern RAP framework**.

### With BOPF

-   UI annotations can be defined in-place or ex-place.
-   Draft handling and actions are managed via BOPF configuration and classes.
-   Technically, BOPF can be exposed via OData V4, but this is **not recommended** due to limited support and complexity.

### With RAP

-   RAP supports OData V2 bindings.
-   Behavior definitions and CDS views are used to define business logic and annotations.
-   Draft handling and deep entity operations are supported.

### Example: RAP OData V2 Deep Entity

```abap
define root custom entity ZCE_R_Header {
  key hdr_Key    : land1;
      hdr_field1 : landx;
      hdr_field2 : natio;
      _item      : composition [1..*] of ZCE_I_Items;
}
```

Service bindings can be configured for OData V2 or V4 depending on the use case.

---

## OData V4 with RAP

The **RESTful ABAP Programming Model (RAP)** is optimized for OData V4 but also supports V2. It simplifies development by integrating annotations, behavior definitions, and draft handling.

### CDS UI Annotations

```abap
@UI.lineItem: [
  { position: 10, value: 'ProductID' },
  { position: 20, value: 'ProductName' }
]
@UI.selectionField: [ 'ProductID', 'ProductName' ]
@UI.identification: [
  { position: 10, value: 'ProductName' }
]
```

### Draft Handling

```abap
@ObjectModel.draftEnabled: true
```

Behavior definitions manage actions, validations, and lifecycle events.

---

## CAP (Cloud Application Programming Model)

CAP supports UI annotations for SAP Fiori elements and exposes services via OData V4. Annotations are defined in CDS or CSN format.

### Example: CAP CDS with UI Annotations

```cds
entity Products {
  key ID          : UUID;
      name        : String;
      category    : String;

  @UI.lineItem: [
    { value: ID },
    { value: name },
    { value: category }
  ]
  @UI.selectionField: [ name, category ]
}
```

---

## 📌 Recommendation: Backend vs Frontend Annotations (OData V2 & V4)

When building SAP Fiori applications using OData V2 or V4 (outside of CAP), developers can define UI annotations either:

-   **In the backend** (CDS views using `@UI.*` annotations)
-   **In the frontend** (XML annotation files or manifest extensions)

### ✅ Backend (CDS) Annotations – Recommended

**Advantages:**
-   Centralized logic and UI metadata
-   Easier reuse across multiple applications
-   Automatically interpreted by SAP Fiori elements
-   Supports both OData V2 and V4
-   Aligns with SAP’s strategic direction (RAP, Fiori elements)

**Use When:**
-   You control the backend CDS views
-   You want to leverage Fiori elements for auto-generated UIs
-   You need consistent UI behavior across apps

### ⚠️ Frontend (XML) Annotations – Use with Caution

**Advantages:**
-   Flexibility for customizing UI without changing backend
-   Useful when backend annotations are missing or inaccessible

**Limitations:**
-   Harder to maintain and scale
-   UI logic is decoupled from data model
-   Requires manual updates if backend changes
-   Not recommended for RAP-based services

**Use When:**
-   You cannot modify the backend CDS views
-   You need temporary overrides or quick UI fixes

> 🧭 SAP recommends defining UI annotations **in the backend CDS views** whenever possible. This ensures consistency, maintainability, and full compatibility with SAP Fiori elements and the RAP model. Frontend annotations should be used only as a fallback or for minor UI adjustments.

---

## 🛠️ SAP Fiori Tools Support

SAP Fiori tools provide a powerful set of extensions for **Visual Studio Code** and **SAP Business Application Studio** that assist developers in:

-   Creating SAP Fiori elements apps
-   Managing and previewing annotations (both backend and frontend)
-   Generating UI from OData metadata
-   Debugging and testing Fiori applications

These tools are especially helpful when working with CAP based Fiori elements applications and frontend XML annotations in OData V2 and V4.

> 📦 Download the SAP Fiori tools extension pack from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=SAPSE.sap-ux-fiori-tools-extension-pack).

> 📘 For official documentation and tutorials, visit the [SAP Fiori Tools Help Portal](https://help.sap.com/docs/r/product/SAP_FIORI_tools/Latest/en-US).

---

## Migration Guidance

| From                | To                   | Migration Notes                                                                  |
| ------------------- | -------------------- | -------------------------------------------------------------------------------- |
| BOPF (OData V2)     | RAP (OData V2 or V4) | Replace metadata extensions with in-place annotations; use behavior definitions  |
| CDS with ex-place   | CDS with in-place    | Consolidate annotations into CDS views                                           |
| BOPF actions        | RAP actions          | Use behavior definitions and ABAP classes                                        |
| Classic UI5         | Fiori elements       | Leverage annotations for auto-generated UI                                      |

---

## Further Reading

-   [SAP Help Portal – RAP Guide](https://help.sap.com/docs/abap-cloud/abap-rap/abap-restful-application-programming-model)
-   [OData V2 in RAP](https://help.sap.com/docs/abap-cloud/abap-rap/odata-v2)
-   [SAP Fiori Elements V4](https://sapui5.hana.ondemand.com/sdk/)
-   [CAP Annotation Documentation](https://cap.cloud.sap/docs/advanced/fiori#fiori-annotations)
-   [SAP Fiori Tools Help Portal](https://help.sap.com/docs/r/product/SAP_FIORI_tools/Latest/en-US)

---



