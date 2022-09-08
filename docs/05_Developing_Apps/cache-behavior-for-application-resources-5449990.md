<!-- loio5449990702764418b8a3124fd650758f -->

# Cache Behavior for Application Resources

By default, the application files are stored in the browser cache for one year to speed up the performance of an SAPUI5 app in a productive environment. To get the latest changes, you need to force your SAPUI5 start page to refresh, for example, with  [CTRL\] + [F5\]  on Windows systems. \(If the refresh doesn't work, clear your browser cache.\)

If you are in development mode and want to get the latest changes immediately without refreshing your SAPUI5 start page, you can add the URL parameter `sap-ui-xx-devmode` to the SAPUI5 start page to force the browser to check whether there's a newer version of the application files available.

