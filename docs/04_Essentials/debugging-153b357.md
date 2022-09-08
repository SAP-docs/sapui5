<!-- loio153b357ccff14715af9973de9a045e38 -->

# Debugging

For the debug levels `DEBUG` and `ALL`, the XML preprocessor writes a trace for what it exactly does.

The following events are traced \(the numbers represent the line numbers in the example below\):

-   The start including the view being processed \(1\)

-   A list of all binding contexts with the path they are pointing to \(2\)

-   Start of processing of a `<with>` statement including the new variable assignment \(3,6\)

-   Evaluation of an `<if>` or `<elseif>` statement including the test result \(4,10\)

-   Start of processing of a `<repeat>` statement \(8\)

-   Each iteration of the `<repeat>` statement including the current variable assignment \(9\)

-   Start of processing of a `<Fragment>` statement including the resulting fragment name \(7\)

-   Finished processing of any of the following statements: `<with>`, `<if>`, `<repeat>`, `<Fragment>` \(12-17\)

-   If any attribute of any other node has been resolved \(5,11\)

-   The finish \(18\)


Each debug line looks as follows:

```
[level] message - <node> sap.ui.core.util.XMLPreprocessor
```

`[level]` is the number of currently active preprocessor statements. It is incremented each time when the processing of an `<if>`, `<with>`, `<repeat>` or `<Fragment>` starts. It is decremented when the node is completely processed. `<node>` is the node being processed with all its attributes.

Example:

```xml
			
1  [ 0] Start processing Element sap.ui.core.mvc.XMLView#__xmlview5 (sap.ui.core.sample.ViewTemplate.scenario.Detail) -  sap.ui.core.util.XMLPreprocessor
2  [ 0] meta = /dataServices/schema/0/entityContainer/0/entitySet/0 -  sap.ui.core.util.XMLPreprocessor
3  [ 1] entityType = /dataServices/schema/0/entityType/0 - <template:with path="meta>entityType" helper="sap.ui.model.odata.AnnotationHelper.gotoEntityType" var="entityType"> sap.ui.core.util.XMLPreprocessor
4  [ 2] test == [object Array] --> true - <template:if test="{entityType>com.sap.vocabularies.UI.v1.LineItem}"> sap.ui.core.util.XMLPreprocessor
5  [ 2] items = {path:'/BusinessPartnerSet', length: 5} - <Table includeItemInSelection="true" mode="SingleSelect" selectionChange="onSelectionChange" items="{= '{path:\'/' + ${meta>name} + '\', length: 5}' }"> sap.ui.core.util.XMLPreprocessor
6  [ 3] target = /dataServices/schema/0/entityType/0/com.sap.vocabularies.UI.v1.LineItem - <template:with path="entityType>com.sap.vocabularies.UI.v1.LineItem" var="target"> sap.ui.core.util.XMLPreprocessor
7  [ 4] fragmentName = sap.ui.core.sample.ViewTemplate.scenario.Table - <core:Fragment fragmentName="sap.ui.core.sample.ViewTemplate.scenario.Table" type="XML"/> sap.ui.core.util.XMLPreprocessor
8  [ 5] Starting - <template:repeat list="{target>}" var="field"> sap.ui.core.util.XMLPreprocessor
9  [ 5] field = /dataServices/schema/0/entityType/0/com.sap.vocabularies.UI.v1.LineItem/0 - <template:repeat list="{target>}" var="field"> sap.ui.core.util.XMLPreprocessor
10 [ 6] test == [object Object] --> true - <template:if test="{field>Value}"> sap.ui.core.util.XMLPreprocessor
11 [ 6] text = ID - <Text text="{path: 'field>Label', formatter: 'sap.ui.model.odata.AnnotationHelper.format'}"/> sap.ui.core.util.XMLPreprocessor
12 [ 6] Finished - </template:if> sap.ui.core.util.XMLPreprocessor
13 [ 5] Finished - </template:repeat> sap.ui.core.util.XMLPreprocessor
14 [ 4] Finished - </core:Fragment> sap.ui.core.util.XMLPreprocessor
15 [ 3] Finished - </template:with> sap.ui.core.util.XMLPreprocessor
16 [ 2] Finished - </template:if> sap.ui.core.util.XMLPreprocessor
17 [ 1] Finished - </template:with> sap.ui.core.util.XMLPreprocessor
18 [ 0] Finished processing Element sap.ui.core.mvc.XMLView#__xmlview5 (sap.ui.core.sample.ViewTemplate.scenario.Detail) -  sap.ui.core.util.XMLPreprocessor
```

