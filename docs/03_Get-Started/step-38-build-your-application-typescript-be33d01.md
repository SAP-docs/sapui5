<!-- loiobe33d0120da1491baa490fc01eaaf018 -->

# Step 38: Build Your Application \(TypeScript\)

In this step we're going to build our application and consume the speed of a built SAPUI5 application.



## Preview

  
  
**The SAPUI5 application is built and served**

![The overview page of the application. Contains a Hello World header with buttons and a text input. The lower part shows list of invoices with details, grouped by vendor names.](images/UI5_Walkthrough_Step_38_fb12cea.png "The SAPUI5
					application is built and served")



<a name="loiobe33d0120da1491baa490fc01eaaf018__section_uxj_4h4_tyb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 38: Build Your Application](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/38) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-38.zip).



<a name="loiobe33d0120da1491baa490fc01eaaf018__section_vxj_4h4_tyb"/>

## package.json

Now we create a production-ready version of our SAPUI5 applicaiton that can be deployed to a web server or any other platform. For this we introduce a new `build` script to the `package.json`. This script starts the `ui5 build` command, which initiates the build process using the UI5 build tool. It compiles and bundles all the necessary resources, such as JavaScript, CSS, and other assets, into a deployable format. By adding the `--all` option to the build script, we specify that all available resources should be built including framework dependencies \(e.g. `sap.ui.core`, etc.\) .It ensures that all dependencies and resources required by the application are included in the final build. The `--clean-dest` flag tells the build tool to clean the destination folder before generating a new build. It ensures that any previous build artifacts are removed before the new build is created.

```
{
  "name": "ui5.walkthrough",
  "version": "1.0.0",
  "description": "UI5 TypeScript Walkthrough",
  "scripts": {
      "start": "ui5 serve -o test/mockServer.html",
      "build": "ui5 build --all --clean-dest"
  },
  "devDependencies": {
    "@types/openui5": "^1.120.0",
    "@ui5/cli": "^3.7.1",
    "@ui5/ts-interface-generator": "^0.8.1",
    "typescript": "^5.2.2",
    "ui5-middleware-livereload": "^3.0.2",
    "ui5-middleware-serveframework": "3.0.0",
    "ui5-middleware-simpleproxy": "^3.2.8",
    "ui5-tooling-transpile": "^3.2.7"
  }
}
```

Now that we added this script to our project configuration, we also execute it:

Open a terminal and execute `npm run build` in the project root folder.

Congrats! You have successfully built your SAPUI5 application.



<a name="loiobe33d0120da1491baa490fc01eaaf018__section_f2r_rh4_tyb"/>

## Install a Local Web Server

To test the built result, we can serve the build output locally. To do this, we have to add a local web server hosting the built resources. For this tutorial we choose an npm package called [local-web-server](https://www.npmjs.com/package/local-web-server).

Therefore, we have to install the new package by executing `npm i -D local-web-server` in the project root folder.

To actually use the newly added web server, we have to add a new script to our `package.json` which we'll call `serve-dist`. This script starts the `local-web-server` by pointing to the SAPUI5 build output located in the `dist` folder of our project. The `--compress` flag specifies that the server should compress the data being transmitted to the client. It optimizes the responses sent by the server to the client. By adding the `--open` flag to the script we indicate that the server should automatically open a browser window or tab to the server's URL.



<a name="loiobe33d0120da1491baa490fc01eaaf018__section_cxw_th4_tyb"/>

## package.json

```
{
  "name": "ui5.walkthrough",
  "version": "1.0.0",
  "description": "UI5 TypeScript Walkthrough",
  "scripts": {
      "start": "ui5 serve -o test/mockServer.html",
      "build": "ui5 build --all --clean-dest",
      "serve-dist": "ws --compress -d dist --open"
  },
  "devDependencies": {
    "@types/openui5": "^1.120.0",
    "@ui5/cli": "^3.7.1",
    "@ui5/ts-interface-generator": "^0.8.1",
    "typescript": "^5.2.2",
    "ui5-middleware-livereload": "^3.0.2",
    "ui5-middleware-serveframework": "3.0.0",
    "ui5-middleware-simpleproxy": "^3.2.8",
    "ui5-tooling-transpile": "^3.2.7"
  }
}
```

Now it's time to start the server by executing `npm run serve-dist` in a terminal in the project root folder. Your default browser opens automatically and the built application is hosted. The `local-web-server` does not offer proxy capabilities so far, nor does it allow to open a specific HTML file in the browser. To display any actual data, it is therefore necessary to open the `test/mockServer.html` file in the browser instead of the `index.html`.



<a name="loiobe33d0120da1491baa490fc01eaaf018__section_u12_lby_tfb"/>

## Congratulations!

You've completed the walkthrough, good job! You should now be familiar with all the major development paradigms and concepts of SAPUI5. Our other tutorials focus on particular aspects of SAPUI5 and some advanced topics, so if you want to dive deeper into specific topics, feel free to explore!

**Related Information**  


[UI5 Tooling documentation](https://sap.github.io/ui5-tooling/stable/)

