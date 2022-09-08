<!-- loio30671a0ce976438aaddf32a2455ffb61 -->

# Common Pitfalls in JSDoc

The use of the JSDoc toolkit has some pitfalls. By following the guidelines outlined below, these issues can be avoided.



## Multiple Documentation Comments Before a Symbol

In case of multiple documentation comments before a JavaScript symbol, JSDoc only associates the last comment with the symbol. Therefore, multiple documentation comments before a symbol must be avoided. The comment and code sequence below results in an unwanted documentation for the `adjustFilters` symbol. To avoid this, move the TODOs, either within the function or before the documentation comment.

```js

/**
 * Maps the UI filter objects to the internal Filter object.
 *
 * @param filteredColumns The current UI filters that will be mapped
 * to the internal format.
 * @returns The newly formatted format.
 * @private
 */
/** TODO: Call getOperator when custom filters are supported */
/** TODO: getValue2 to fix later when we have ranges with BETWEEN operator */
sap.ui.table.internal.BehaviorManager.prototype.adjustFilters = function(filteredColumns) {
  // ...
}
```



## Special Case: Section Separators

JSDoc interprets any multiline comment starting with a double asterisks \( `/**` \) as a documentation comment for the JavaScript symbol that follows the documentation comment. However, some developers use "decorative" documentation comments to separate sections in their JavaScript modules, and using a multiline comment consisting of asterisks is just one example for such decorative comments:

```js

// Update aggregation
  this.insertSection(oSection, iTargetIndex, true);

  /****Update index/id mapping table********************************/
  aSections = this.getSections();
  for (var i = 0; i < aSections.length; i++) {
    this.aIdMappings[aSections[i].getId()] = i;
  }
```

For JSDoc, however, this looks like a documentation comment for the `aSections` variable. And if this is the last documentation comment for `aSections`, it appears in the generated JSDoc for the enclosing module or class. The only way to avoid such silly mistakes in documentation, is to avoid the pairing of multiline documentation comments and symbols to be documented. So do **not** use stars/asterisks for a separating banner comment. You can use other characters, for example /\* ==== \*/ or /\* ----- \*/, or at least avoid the double asterisks at the beginning. A very unnoticeable replacement would be to use a double quote /\*"\*\*\*\*\*\*\*\*\*\*\*\*/ as only the last documentation comment before a symbol is used. Another very good option to avoid misinterpretation of banner comments is to document the symbol that follows.



## HTML Tags in Documentation Comments

JSDoc explicitly allows HTML tags in documentation comments. This allows, as in JavaDoc, to structure longer or more complex documentation comments with the help of some HTML markup. Typical use cases are ordered or unordered lists or semantic tags like `<code>` or `<em>`. But be aware that the support for HTML tags for formatting purposes unfortunately implies that JSDoc must not escape them. So, if you want to include an HTML literally, for example, to explain what kind of HTML is produced by a control, the HTML tag must be HTML-escaped in the source code. Otherwise, it will mark up the final JSDoc output, which will most likely break.

**Example**

In the example, note the escaped `<TR>` in the first and the third line of the documentation comment:

```js

/**
 * This function return the rowNumber given a row&lt;TR>.
 *
 * @private
 * @param {DomRow} &lt;TR> dom object.
 * @returns {int} the row number maintained in the data object.
 */
sap.ui.table.Table.prototype.getRowNumber = function(oDomRow) {


```

