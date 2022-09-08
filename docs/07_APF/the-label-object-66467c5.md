<!-- loio66467c53595a6655e10000000a423f68 -->

# The Label Object

The `label` object is a subobject that defines a label text. It can be used, for example, in the `thumbnail` object or the `representation type` object to define the texts for the UI.

The `label` object contains a key that refers to a text resource file, where all texts are maintained and identified by the registered key. The path to this resource file is configured in the `manifest.json` file.

The `label` object has the following format:

```

{
  "type" : "label",    // optional
  "kind" : "text",
  "key" : "<key>"    // text key related to resource file
}
```

