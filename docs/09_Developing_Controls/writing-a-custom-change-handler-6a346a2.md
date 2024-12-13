<!-- loio6a346a293c724bd4bc33f0df92706008 -->

# Writing a Custom Change Handler

If no default change handler is available for your use case, you need to implement your own custom change handler.

There are default change handlers available to enable simple controls, for example, for the *move*, *reveal* and *remove* actions. If no default change handler is available, you need to implement your own custom change handler.

Changes to the UI are stored as individual files called *UI Changes*. They encode the change in a delta format, which means that any subsequent \(developer\) changes to any properties that are not directly affected by this particular change will be visible in the application.These files are stored in the layered repository on several possible back ends in a JSON format.

> ### Note:  
> **Design the Semantics of Your Change**
> 
> Keep your change type and change format as semantic as possible. Once a UI change is delivered to users, you need to ensure that the changes can be applied in the future, so users don't lose them. If you evolve the format, you need to make sure that old formats can still be applied \(they no longer need to be written\). A semantic change type can also work on a new control, so UI changes made by users aren't lost when an app switches to the new control, but keeps the stable IDs.
> 
> It must be possible for other controls to implement a change handler for the same change type working with the same change format. Applications can then exchange a control with a semantically matching one, for example from `SimpleForm` to `SmartForm` to `NotYetExistingFutureForm`, without users losing their UI changes.

