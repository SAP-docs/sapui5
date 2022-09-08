<!-- loioc5da7d53b5c19456e10000000a423f68 -->

# The Thumbnail Object

The `thumbnail` object defines the visualization of a selected analysis step in the analysis path display of the UI. It has the following format:

```

{
  "type" : "thumbnail",    // optional
  "leftUpper" : <label>,
  "leftLower" : <label>,
  "rightUpper" : <label>,
  "rightLower" : <label>
}
```

The labels define the text that is displayed in the four corners of the thumbnail. All properties of the `thumbnail` object are optional.

