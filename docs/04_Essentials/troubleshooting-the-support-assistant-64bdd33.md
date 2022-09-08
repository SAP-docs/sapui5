<!-- loio64bdd33d236340908fe2659162492b39 -->

# Troubleshooting the Support Assistant

There are certain scenarios in which the Support Assistant does not behave as expected. In this section you can find tips on how to recognize and resolve some of these cases.




<table>
<tr>
<th valign="top">

Support Assistant Behavior



</th>
<th valign="top">

Root Cause



</th>
<th valign="top">

Solution



</th>
</tr>
<tr>
<td valign="top">

What does it mean when the following errors appear in the browser console?

“Access to XMLHttpRequest at <URL\> from origin <ORIGIN\> has been blocked by the CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.”



</td>
<td valign="top">

This usually happens when serving SAPUI5 from a different origin. The Support Assistant tries to load support rule definitions from there, but cannot load them - a 404 response is sent by the origin server. The issue is usually caused by missing or misconfigured CORS headers on the 404 response specifically. Besides some support rules not being loaded, this should not affect normal operation of Support Assistant.



</td>
<td valign="top">

SAPUI5 library owners are encouraged to provide a `.supportrc` as specified by Support Assistant documentation to avoid causing 404 responses.

For more information, see [Create a Ruleset for a Library](create-a-ruleset-for-a-library-b5a5135.md) and [Content Security Policy](../05_Developing_Apps/content-security-policy-fe1a6db.md).



</td>
</tr>
<tr>
<td valign="top">

When you choose a custom location, you get an error message: 'The syntax of the location address is incorrect. The correct syntax is ... '.



</td>
<td valign="top">

URL doesn't match the protocol of the application.



</td>
<td valign="top">

If the application is HTTP, the location should also be HTTP. If it is HTTPS, the location should be HTTPS. Also, the URL should end in sap/ui/support/.



</td>
</tr>
<tr>
<td valign="top">

Temporary rules are not available in the current environment due to Content Security Policy \(CSP\) restrictions.



</td>
<td valign="top">

Content Security Policy is forbidding the execution of temporary rules.



</td>
<td valign="top">

Run the Support Assistant in a development environment, where the `script-src` directive is set to `unsafe-eval`. For more information about CSP, see [Content Security Policy](../05_Developing_Apps/content-security-policy-fe1a6db.md).



</td>
</tr>
</table>

