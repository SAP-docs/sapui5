<!-- loioaef3384510724522a07df94ec90d1351 -->

# Extension Stability Across Application Updates

When extending SAPUI5 applications, it's essential to understand the compatibility implications that come with application updates.

While SAPUI5's extension mechanisms are designed to survive updates without overwriting customizations, the degree of compatibility that can be guaranteed is limited.

The challenge lies in the dynamic nature of software evolution. As base applications evolve, their internal structure, naming, and architectural patterns may change. Your extensions, which depend on these elements, need to be designed with resilience in mind to gracefully handle such changes.



## Extension Compatibility Risks

SAPUI5 provides robust extension mechanisms, but each approach comes with its own stability characteristics.



### View Modification \(Control Visibility Changes\)

View modifications are in general a stable extension type, as they only affect the `visible` property of controls.

**Potential issues for extending applications:**

-   **Missing or renamed controls:** If the original control is removed or its ID changes, your modification simply won't be applied. The control remains in its default state \(visible or invisible\).

-   **View restructuring:** If the original view is renamed or replaced entirely, modifications are silently ignored. View modifications gracefully degrade when target controls are unavailable.


**Best practices for extensible applications:**

-   Use stable, semantic control IDs where possible.

-   Document the specific controls and views that can be extended.




### Extension Points

Extension points offer great stability when the base application maintains them properly, but they're vulnerable to structural changes inside a view.

**Potential issues for extending applications:**

-   **Removed or renamed extension points:** Your custom content won't be inserted if the extension point is removed or renamed.

-   **Context changes:** Extension points might move to different locations \(e.g. container controls\) or become conditionally hidden. This can also happen when other extension mechanisms are at play, e.g. view modifications to toggle visibility, or controller extensions manipulating the control tree.

-   **Layout incompatibilities:** Surrounding controls may change, causing your extension content to look misplaced or break responsive layouts.

-   **Type constraints:** Updated applications might enforce stricter requirements on what control types can be inserted at extension points.


**Best practices for extensible applications:**

-   Design stable extension point locations.

-   Implement graceful fallbacks i.e. default content for when extension points are not implemented.

-   Avoid hard dependencies for extension points on specific surrounding controls.

-   Document each extension point and its expected typing carefully.



### View Replacement

View replacements provide maximum control but require the highest maintenance effort during upgrades. You should always consider whether extension points or view modifications could achieve your goals.

**Potential issues for extending applications:**

-   **View name changes:** If the original view is renamed, your replacement won't be applied.

-   **Dependency on replaced view:** Other parts of the application expecting the original view structure may break.

-   **Integration challenges:** New features in updated base applications may not integrate properly with your replacement view.


**Best practices for extensible applications:**

-   Document all allowed deviations from the standard view.




### Controller Extensions

Controller extensions are powerful but potentially fragile if the underlying implementation changes. Controller extensions interact directly with application logic that may evolve significantly.

**Potential issues for extending applications:**

-   **Breaking changes to extended methods:** Original methods might change signatures, behavior, or be removed entirely.

-   **Dependency on internal APIs:** Issues can arise from accessing private properties or methods that change between versions. Never access any APIs of the base controller that aren't clearly documented as public.

-   **State management:** Extensions that make assumptions about the application state may become invalid after an update.

-   **Execution order:** Changes to the original controller's method execution flow can break the extension logic.


**Best practices for extensible applications:**

-   Design your controller extension API and its override patterns carefully. Be as strict as possible but as open as necessary.

-   Clearly document which methods can be extended or replaced.


