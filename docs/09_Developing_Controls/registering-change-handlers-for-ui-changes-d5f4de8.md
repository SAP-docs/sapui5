<!-- loiod5f4de8c177448e7aeb8e560e6061776 -->

# Registering Change Handlers for UI Changes



<a name="loiod5f4de8c177448e7aeb8e560e6061776__section_b3c_kxd_2yb"/>

## Where to Register Change Handlers?

If a change relies only on the control itself, like a change of a property \(for example *rename*\), the needed change handler has to be registered directly for this control type.

Changes that influence the aggregation of another control \(for example *move*\) have to be registered on the lowest upper-level control where the aggregation changes take place. This control is called the *relevant container*.

For example, for a `GroupElement`, the relevant container is the `SmartForm` where a *move* action across group boundaries is allowed. If the *move* action has to be restricted to a group, this group control is the relevant container.

