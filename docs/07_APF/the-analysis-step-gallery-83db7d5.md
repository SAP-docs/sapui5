<!-- loio83db7d53b5c19456e10000000a423f68 -->

# The Analysis Step Gallery

When the user clicks *Add Analysis Step*, the analysis step gallery is instantiated. The analysis step gallery displays all available analysis step templates in a hierarchical select dialog. This dialog first lists all available categories. The titles of the categories as well as the order in which they are displayed are defined in the APF Configuration Modeler app.

When the user selects a category, all analysis steps available for this category are listed on the next level of the select dialog. The titles of the analysis steps are defined in the step configuration of the APF Configuration Modeler app. The step configuration also contains one or more category assignments to define the categories in which a particular step is displayed in the analysis step gallery.

On the final level, the representation types for the selected step are displayed.

When the user selects an analysis step to add it to the analysis path, the analysis step gallery calls the `createStepAndSetActive()` API and adds the step to the analysis path as the active analysis step. The analysis step gallery is then closed and the `getSteps` API is called to get all analysis steps in the correct sequence.

