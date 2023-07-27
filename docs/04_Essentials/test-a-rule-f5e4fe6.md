<!-- loiof5e4fe68e6ea4774b049962498f0e101 -->

# Test a Rule

After you create a rule, you can test it manually on an app.



<a name="loiof5e4fe68e6ea4774b049962498f0e101__section_ngl_mkg_h1b"/>

## Manual Testing on an App



### Test your rule on locally running apps

If you want to test a Support Assistant rule on a locally running app, there are several steps you need to follow:

1.  Start your server with the Support Assistant and support rules code loaded locally.

2.  Start the app from your local server and call the Technical Information Dialog \(available as of version 1.44\).

3.  Press *Activate Support Assistant* and it will load from your local server. If the Support Assistant is not loading, click the gear icon ![](images/AS-Settings-Button_24b9cee.png) next to the button, select *Recommended locations*, and from the dropdown list choose the current version app.

4.  After it loads, if you have correctly entered your data when creating the rule, you should see the title of your rule in the *Available Rulesets* tab.

5.  To execute your rule, select it from the list and press *Analyze*. Your check function will be invoked and then you can put a debugger in your code or insert a breakpoint and see if you are getting the right results.

6.  After your rule was executed, you will get the analysis of all results and the issues that it generated.




### Test your locally modified rule on a remotely running app

To test your locally modified rule on other apps:

1.  Start your server with the Support Assistant and support rules code loaded locally.

2.  Start the app that you want to test your locally modified rule on and call the Technical Information Dialog \(available as of version 1.44\).

3.  Select the gear icon ![](images/AS-Settings-Button_24b9cee.png) next to the *Activate Support Assistant* and select *Custom Location*.

4.  In the input field, write the path to the Support Assistant location from your local server. For example, `http://localhost:8080/testsuite/resources/sap/ui/support/`. This way you can load your version of the Support Assistant with the newly created or modified rule. If the remote app is hosted on an HTTPS server, the local server should run on and support HTTPS protocol.

5.  Close the popup and select *Activate Support Assistant*. You will be able to load the local version of the Support Assistant with the app that you want to test it on.

6.  To execute your rule, select it from the list and choose *Analyze*. Your check function will be invoked and then you can put a debugger in your code or insert a breakpoint and see if you are getting the right results.

7.  After your rule was executed, you will get the analysis of all results and the issues that it generated.


