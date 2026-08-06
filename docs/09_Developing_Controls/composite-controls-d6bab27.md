<!-- loiod6bab27b5dc041b29b419bae8ae8f1d1 -->

# Composite Controls

A composite control is an SAPUI5 control whose visual representation is built by reusing other controls, providing a stable public API while encapsulating implementation details.



## What Is a Composite Control?

Examples for composite controls are a search field that combines an input and a button, or a layout container that arranges its children inside an inner `VBox`. From the outside, a composite has its own properties, events, and aggregations. From the inside, it delegates rendering and behavior to the controls it is composed of.

Because the inner controls are an implementation detail, the control developer can change the composition later — adding controls, replacing one with another, or even removing the composition entirely — without breaking applications that use the composite.



## When Should I Use One?

> ### Note:  
> If you do **not** intend to re-use a control in several places, a composite control may not be your best choice. Composite controls are best suited for \(massive\) re-use and for a public API that shields the application developer from its inner workings. If these are not your requirements, consider using other techniques of factoring out common parts within your application. You can, for example, simply write an XML fragment or a function returning the root of some control tree.

Reach for a composite when you need a stable public API that is consumed by several applications or several places in one application. The encapsulation buys you the freedom to evolve its inner structure later. For one-shot factoring of repeated XML code inside a single application, a fragment or a small factory function is usually a better fit.



## What Building Blocks Are Available?

The pages in this Developer's Guide section cover orthogonal aspects of a composite control. Pick the ones that match your need:


<table>
<tr>
<th valign="top">

Aspect

</th>
<th valign="top">

When do I need this?

</th>
<th valign="top">

Documentation

</th>
</tr>
<tr>
<td valign="top">

Define what your composite is built from and pass property changes to the inner controls

</td>
<td valign="top">

Always

</td>
<td valign="top">

[Building Standard Composite Controls](building-standard-composite-controls-c1512f6.md)

</td>
</tr>
<tr>
<td valign="top">

Let app developers add content into an aggregation of your composite

</td>
<td valign="top">

When you expose an aggregation that holds multiple children on your control's public API

</td>
<td valign="top">

[Forwarding Aggregations](forwarding-aggregations-64a5e17.md)

</td>
</tr>
<tr>
<td valign="top">

Let inner controls bind to your composite's properties instead of receiving them via setters

</td>
<td valign="top">

When you have many properties to keep in sync, or when migrating from `XMLComposite`

</td>
<td valign="top">

[Synchronizing Properties via a $this Model](synchronizing-properties-via-a-this-model-8b9014d.md)

</td>
</tr>
<tr>
<td valign="top">

Make inner controls behave differently at design-time than they would standalone

</td>
<td valign="top">

When your control is used in SAPUI5 Flexibility / RTA scenarios

</td>
<td valign="top">

[Propagating Design-Time Metadata for Composite Controls](propagating-design-time-metadata-for-composite-controls-c4159f5.md)

</td>
</tr>
</table>



<a name="loiod6bab27b5dc041b29b419bae8ae8f1d1__section_MFXMLC"/>

## How Do I Migrate From `XMLComposite`?

`sap.ui.core.XMLComposite` is deprecated as of SAPUI5 version 1.88. There is no drop-in replacement; existing `XMLComposite` controls are migrated to the standard `sap.ui.core.Control` pattern documented in this section. For a broader overview of deprecated APIs and their replacements, see our [Modernization Guide](../02_Read-Me-First/modernization-guide-db49236.md).

If you are migrating from `XMLComposite`, the recommended reading order is:

1.  Read [Building Standard Composite Controls](building-standard-composite-controls-c1512f6.md) to understand how you build the inner control tree directly in JavaScript instead of declaring it in an XML fragment.
2.  Read [Synchronizing Properties via a $this Model](synchronizing-properties-via-a-this-model-8b9014d.md) if your `XMLComposite` fragment uses `{$this>...}` bindings.
3.  Read [Forwarding Aggregations](forwarding-aggregations-64a5e17.md) if your `XMLComposite` exposes aggregations.
4.  Optionally review [Propagating Design-Time Metadata for Composite Controls](propagating-design-time-metadata-for-composite-controls-c4159f5.md) if your control needs special design-time behavior.

The following table summarizes what `XMLComposite` provides implicitly, what is no longer available after migration, and which page in this Developer's Guide section covers the compensation:


<table>
<tr>
<th valign="top">

`XMLComposite` feature

</th>
<th valign="top">

What is lost

</th>
<th valign="top">

Compensation

</th>
</tr>
<tr>
<td valign="top">

Fragment-based UI definition

</td>
<td valign="top">

Declarative inner control tree

</td>
<td valign="top">

[Building Standard Composite Controls](building-standard-composite-controls-c1512f6.md) — imperative `init` plus an explicit renderer

</td>
</tr>
<tr>
<td valign="top">

Automatic `$this` model registration

</td>
<td valign="top">

Bidirectional property bindings between fragment and outer control

</td>
<td valign="top">

[Synchronizing Properties via a $this Model](synchronizing-properties-via-a-this-model-8b9014d.md) — the `$this` binding pattern

</td>
</tr>
<tr>
<td valign="top">

Implicit aggregation wiring inside the fragment

</td>
<td valign="top">

Fragment-based forwarding to inner aggregations

</td>
<td valign="top">

[Forwarding Aggregations](forwarding-aggregations-64a5e17.md) — same `forwarding` configuration on a hidden inner aggregation

</td>
</tr>
<tr>
<td valign="top">

`byId("foo")` for fragment children

</td>
<td valign="top">

Direct lookup of inner controls by fragment-local ID

</td>
<td valign="top">

Keep references on `this` directly, or compute the inner control's ID as `getId() + "-foo"` and look it up via `Element.getElementById(...)` — there is no `byId` method on a standard `Control`. For more information, see [Building Standard Composite Controls](building-standard-composite-controls-c1512f6.md).

</td>
</tr>
</table>

**Related Information**  


[Building Standard Composite Controls](building-standard-composite-controls-c1512f6.md "Composite controls are a means to save time and effort by reusing existing controls for the implementation. This page walks you through the building blocks: defining the API, instantiating inner controls in init, propagating property changes, and writing a renderer.")

[Forwarding Aggregations](forwarding-aggregations-64a5e17.md "A mechanism used for aggregations of composite controls. With aggregation forwarding, an aggregation declared on a composite is automatically routed to an aggregation of one of its inner controls — without writing add/remove/destroy wrappers by hand.")

[Synchronizing Properties via a $this Model](synchronizing-properties-via-a-this-model-8b9014d.md "An alternative to writing setter wrappers in your composite control: expose its state via a model, and let the inner controls bind to it. SAPUI5 propagates property changes for you.")

[Propagating Design-Time Metadata for Composite Controls](propagating-design-time-metadata-for-composite-controls-c4159f5.md "If you want the controls used inside a composite control to behave differently as compared to being used stand-alone, the composite control needs to propagate different design-time metadata to the inner controls.")

[API Reference: `sap.ui.base.ManagedObject`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject)

[API Reference: `sap.ui.core.Control`](https://ui5.sap.com/#/api/sap.ui.core.Control)

