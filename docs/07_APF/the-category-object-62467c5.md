<!-- loio62467c53595a6655e10000000a423f68 -->

# The Category Object

The `category` object defines the categories that are displayed in the analysis step gallery. It has the following format:

```

{
  "type" : "category",    // optional
  "id" : "<id>",
  "label" : <label>,
  "steps" : [{"type" : "step", "id" : "<step ID>"}*]
}
```

The order in which the steps are listed in the steps array determines the order in which the steps are displayed in the analysis step gallery at runtime.

