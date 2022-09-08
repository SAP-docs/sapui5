<!-- loiocc467b9a1c574410ac4a08a5dc2f55a2 -->

# Code Editor

The `sap.ui.codeeditor.CodeEditor` offers functionality to display and edit source code artifacts with syntax highlighting and code completion capabilities for various programming languages.



## Overview

The `sap.ui.codeeditor.CodeEditor` provides simple SAPUI5 wrapper control that exposes a subset of API and functionality provided by the third-party ACE \(Ajax.org Cloud9 Editor\) implementation. You can find more information about ACE on the website [https://ace.c9.io/](https://ace.c9.io/).

> ### Restriction:  
> -   If you use API calls to the native API of ACE, we cannot guarantee backwards compatibility after an upgrade to higher ACE library versions.
> 
> -   Accessibility features like high-contrast themes and keyboard handling are not fully available as they are for the rest of the SAPUI5 controls.



<a name="loiocc467b9a1c574410ac4a08a5dc2f55a2__section_lsh_hbb_ybb"/>

## Details



### Autocompletion

The sap.ui.codeeditor.CodeEditor control is enabled with two modes of autocompletion:

-   Default autocompletion

    The default autocompletion options of the underlying ACE editor `enableBasicAutocompletion`, `enableSnippets`, `enableLiveAutocompletion` are always enabled.

-   Custom autocompletion

    The users of CodeEditor can specify their own autocompletion handling. To do this, the following API method is provided: `CodeEditor.prototype.addCustomCompleter(oCustomCompleter)`.

    There are several characteristics you should bear in mind:

    -   `oCustomCompleter` must contain implementation of a custom completer method called `getCompletions`.

    -   The method accepts two parameters: `fnCallback` and `context` object. `Callback` should be called, as in the example, with the suggestions that you want to appear in the editor. The format is an array of objects. Each object should contain the following properties: `name`, `value`, `score` and `meta`.

    -   The `context` object contains `oPos` and `sPrefix` as provided by the ACE editor.



Here is an example of custom autocompletion:

> ### Sample Code:  
> ```js
> codeEditor.addCustomCompleter({
>       getCompletions: function(callback, context) {
>           // callback is provided to us by ACE so we can execute it as shown
>           // below in order to display suggestions to the user
>           // ideally, the array argument, provided to the following method call
>           // will be dynamically generated based on the content of the context
>           // object
>           // let's assume the context contains an sPrefix equal to 'read', which
>           // means the cursor in ACE is at the end of a 'read' word
>           // by executing the following call, we can show a list of suggestions
>           // such as: readFile, readStream, readResponse 
>           callback(null, [{
>             name: "foo",
>             value: "foo",
>             // name is not displayed on the screen
>             name: "readFile",
>             // value is displayed on the screen
>             value: "readFile()",
>             // score determines which suggestion goes first
>             score: "1",
>             meta: "rhyme"
>               // meta is short info displayed on the right of value						meta: "function"
>           }, {
>             name: "bar",
>             value: "bar",
>             score: "1",
>             meta: "rhyme"
>               // name is not displayed on the screen
>             name: "readStream",
>             // value is displayed on the screen
>             value: "readStream(input)",
>             // score determines which suggestion goes first
>             score: "3",
>             // meta is short info displayed on the right of value
>             meta: "params: input"
>           }, {
>             name: "baz",
>             value: "baz",
>             score: "1",
>             meta: "rhyme"
>               // name is not displayed on the screen
>             name: "readStream",
>             // value is displayed on the screen
>             value: "readStream(input, encoding)",
>             // score determines which suggestion goes first
>             score: "2",
>             // meta is short info displayed on the right of value
>             meta: "params: input, encoding"
>           }])
> 
> ```

