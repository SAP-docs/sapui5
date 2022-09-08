<!-- loioc1025c2e30a748ae82e929cb7f6d2f9a -->

# Upgrading from a Version Below 1.38

When upgrading to the current SAPUI5 version from a version below 1.38 \(released in June 2016\), check whether the changes listed below influence your apps.

With this SAPUI5 version, jQuery has been upgraded to version 2.2.3.

This upgrade may impact your SAPUI5 apps. The following sections give an overview of our findings and how to deal with them.

> ### Note:  
> If you use additional open-source libraries that depend on jQuery, check whether they need to be upgraded as well.



## jQuery.Event



### Problem

jQuery removed some robustness checks in its event handling code. Without these checks, the `jQuery.trigger` function must only be called with events that either have no `originalEvent` property or where the `originalEvent` has all methods that `window.Event implements` \(especially `preventDefault`, `stopPropagation` and `stopImmediatePropagation`\).

When a `jQuery.Event` is constructed with an object literal \(`properties`\) or when `originalEvent` is set to some object after construction, this constraint is not fulfilled. Unfortunately, many SAPUI5 unit tests used this approach to simulate mouse or key events.



### Solution

For each code that creates events, you have to apply the following fix:

The module `QUnitUtils` now rewrites the `jQuery.Event` constructor so that any given object literal is enriched with the missing methods. Most SAPUI5 unit tests include the `QUnitUtils` module early, which then fixes the issue.

Application code that needs to simulate an event, either should omit the `originalEvent` or use `Event.create` to create a native event and only then create a `jQuery.Event`.



## jQuery.fn.position



### Problem

`jQuery.fn.position` now takes the scroll positions of the parent element into account. This change was recoginzed as incompatible by the jQuery team and reverted with version 2.2.1.



### Solution

Nothing, this is automatically fixed.



## jQuery.now



### Problem

`jQuery.now` is now set to `Date.now` for all browsers. But as the jQuery property represents a separate reference to that function, it is not touched by code that modifies `Date.now`, especially not by Sinon fake timers. Therefore Sinon fake timers don't work with jQuery 2.2 if Sinon is started after `jQuery`.



### Solution

As a workaround, `QUnitUtils` redefines `jQuery.now` so that it delegates to the current `Date.now`. This will then use any installed fake timer.



## :visible selector



### Problem

Somewhere between jQuery 1.11.1 and 2.2.0, the behavior of the `:visible` selector has changed. For empty inline elements \(for example, a `span` with no text\), the selector now reports `:visible = true` whereas jQuery 1.1.1 reported it as `hidden`. There was only one functionality in the `sap.ui.dt` library where this change in behavior caused problems.



### Solution

Instead of using `:visible`, that functionality now uses its own implementation similar to jQuery 1.11.1.



## jQuery.isPlainObject



### Problem

jQuery 2.2.0 simplified the implementation of `jQuery.isPlainObject`. As a side-effect, objects with a `constructor` property with a non-function value \(like a `string` value\) caused a runtime error when `jQuery.isPlainObject` was applied.



### Solution

This issue is fixed with jQuery 2.2.2.



## Descriptor for Applications, Components, and Libraries

If you want to add new attributes of a descriptor version higher than V2 \(SAPUI5 1.30\) to your existing `manifest.json` file, see [Migration Information for Upgrading the Descriptor File](../04_Essentials/migration-information-for-upgrading-the-descriptor-file-a110f76.md).

