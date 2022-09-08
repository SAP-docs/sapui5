<!-- loio1a08f70951a744b1a7962b09665cc92f -->

# Setting the Default Binding Mode

The default binding mode applies when a model instance is created. You can overwrite the default binding mode after model creation.

-   To change the default binding mode, call the `setDefaultBindingMode` method on the model as follows:

    ```js
    
    var oModel = new sap.ui.model.json.JSONModel();
    oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
    ```

    In this example, all new bindings for the model will have the one-way binding mode by default.

-   You can, however, only set supported binding modes as default binding mode. You can check if a binding mode is supported as follows:

    ```js
    
    var oModel = new sap.ui.model.json.JSONModel();
    if (oModel.isBindingModeSupported(sap.ui.model.BindingMode.OneTime)) { // true
        oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneTime); 
    }
    ```

    > ### Note:  
    > When you change the binding mode of an existing model instance, the existing bindings are not updated with the newly set binding mode.


