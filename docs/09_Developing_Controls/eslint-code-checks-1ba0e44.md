<!-- loio1ba0e44f1036439b95f25527664f14f7 -->

# ESLint Code Checks

SAPUI5 uses ESLint to check JavaScript sources.

The following tables show the ESLint rules that should be enabled for the SAPUI5 projects.



## Rule Sets

**Possible Errors**


<table>
<tr>
<th valign="top">

Rule

</th>
<th valign="top">

ESLint default

</th>
<th valign="top">

Core

</th>
<th valign="top">

Comment

</th>
</tr>
<tr>
<td valign="top">

`no-cond-assign`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-console`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-constant-condition`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-comma-dangle`

</td>
<td valign="top">

error

</td>
<td valign="top">

**error/warning**

</td>
<td valign="top">

can be set to warning if lib only supports IE9

</td>
</tr>
<tr>
<td valign="top">

`no-control-regex`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-debugger`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-dupe-keys`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-empty`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-empty-class`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-ex-assign`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-extra-boolean-cast`

</td>
<td valign="top">

error

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-extra-parens`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-extra-semi`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-func-assign`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-inner-declarations`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-invalid-regexp`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-negated-in-lhs`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-obj-calls`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-regex-spaces`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-sparse-arrays`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-unreachable`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`use-isnan`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`valid-jsdoc`

</td>
<td valign="top">

off

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

`requireReturn` = false

</td>
</tr>
<tr>
<td valign="top">

`valid-typeof`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
</table>

**Best Practices**


<table>
<tr>
<th valign="top">

Rule

</th>
<th valign="top">

ESLint default

</th>
<th valign="top">

Core

</th>
<th valign="top">

Comment

</th>
</tr>
<tr>
<td valign="top">

`block-scoped-var`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

currently only warning because of wrong behaviour in switch statement

</td>
</tr>
<tr>
<td valign="top">

`complexity`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`consistent-return`

</td>
<td valign="top">

error

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`curly`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`default-case`

</td>
<td valign="top">

off

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`dot-notation`

</td>
<td valign="top">

error

</td>
<td valign="top">

**off**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`eqeqeq`

</td>
<td valign="top">

error

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

`smart`

</td>
</tr>
<tr>
<td valign="top">

`guard-for-in`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-alert`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-caller`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-div-regex`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-else-return`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-empty-label`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-eq-null`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-eval`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-extend-native`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-fallthrough`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-floating-decimal`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-implied-eval`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-labels`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-iterator`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-lone-blocks`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-loop-func`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-multi-str`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-native-reassign`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-new`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-new-func`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-new-wrappers`

</td>
<td valign="top">

error

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-octal`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-octal-escape`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-proto`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-redeclare`

</td>
<td valign="top">

error

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-return-assign`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-script-url`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-self-compare`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-sequences`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-unused-expressions`

</td>
<td valign="top">

error

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-warning-comments`

</td>
<td valign="top">

off

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-with`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`radix`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`wrap-life`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

any

</td>
</tr>
<tr>
<td valign="top">

`yoda`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
</table>

**Strict Mode**


<table>
<tr>
<th valign="top">

Rule

</th>
<th valign="top">

ESLint default

</th>
<th valign="top">

Core

</th>
</tr>
<tr>
<td valign="top">

`no-extra-strict`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
</tr>
<tr>
<td valign="top">

`strict`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
</tr>
</table>

**Variables**


<table>
<tr>
<th valign="top">

Rule

</th>
<th valign="top">

ESLint default

</th>
<th valign="top">

Core

</th>
<th valign="top">

Comment

</th>
</tr>
<tr>
<td valign="top">

`no-catch-shadow`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-delete-var`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-label-var`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-shadow`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-shadow-restricted-names`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-undef`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-undefined`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-undef-init`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-unused-vars`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

`vars = all`, `args` = none

</td>
</tr>
<tr>
<td valign="top">

`no-use-before-define`

</td>
<td valign="top">

error

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

 

</td>
</tr>
</table>

**Node.js**


<table>
<tr>
<th valign="top">

Rule

</th>
<th valign="top">

ESLint default

</th>
<th valign="top">

Core

</th>
</tr>
<tr>
<td valign="top">

`handle-callback-err`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`no-mixed-requires`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`no-new-require`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`no-path-concat`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`no-process-exit`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`no-restricted-modules`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`no-sync`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
</table>

**Stylistic**


<table>
<tr>
<th valign="top">

Rule

</th>
<th valign="top">

ESLint default

</th>
<th valign="top">

Core

</th>
<th valign="top">

Comment

</th>
</tr>
<tr>
<td valign="top">

`brace-style`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

`singleLine = false` 

</td>
</tr>
<tr>
<td valign="top">

`camelcase`

</td>
<td valign="top">

error

</td>
<td valign="top">

warning

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`consistent-this`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

`that`

</td>
</tr>
<tr>
<td valign="top">

`eol-last`

</td>
<td valign="top">

error

</td>
<td valign="top">

**off**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`func-names`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`func-style`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`new-cap`

</td>
<td valign="top">

error

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`new-parens`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-nested-ternary`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-array-constructor`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-lonely-if`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-new-object`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-spaced-func`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-space-before-semi`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-ternary`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-trailing-spaces`

</td>
<td valign="top">

error

</td>
<td valign="top">

**off**

</td>
<td valign="top">

error, but too many places to change

</td>
</tr>
<tr>
<td valign="top">

`no-underscore-dangle`

</td>
<td valign="top">

error

</td>
<td valign="top">

**off**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-wrap-func`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`no-mixed-spaces-and-tabs`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

`smart`

</td>
</tr>
<tr>
<td valign="top">

`quotes`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`quote-props`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`semi`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`sort-vars`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`keyword-spacing`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

`“after”: true`

</td>
</tr>
<tr>
<td valign="top">

`space-in-brackets`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`space-infix-ops`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`space-return-throw-case`

</td>
<td valign="top">

error

</td>
<td valign="top">

error

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`space-unary-ops`

</td>
<td valign="top">

off

</td>
<td valign="top">

**error**

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`max-nested-callbacks`

</td>
<td valign="top">

off

</td>
<td valign="top">

**warning**

</td>
<td valign="top">

`3`

</td>
</tr>
<tr>
<td valign="top">

`one-var`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`wrap-regex`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
<td valign="top">

 

</td>
</tr>
</table>

**Legacy**


<table>
<tr>
<th valign="top">

Rule

</th>
<th valign="top">

ESLint default

</th>
<th valign="top">

SAPUI5 Core

</th>
</tr>
<tr>
<td valign="top">

`max-depth`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`max-len`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`max-params`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`max-statements`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`no-bitwise`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
<tr>
<td valign="top">

`no-plus`

</td>
<td valign="top">

off

</td>
<td valign="top">

off

</td>
</tr>
</table>

For more information about the rules, see the rules documentation provided on [http://eslint.org](http://eslint.org).

