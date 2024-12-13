<!-- loiob103bf6f5e5d40eb8ecef89c562dfcc1 -->

# Change Handlers

Change Handlers are essential modules for change files.

Change handlers are JavaScript modules implementing functions to apply and revert the content passed via change files. They're also responsible for providing change-handler specific content to change files when they're being written.

Change Handlers transform the information in UI change files into changes on the UI of an app.

The flexibility library contains several default change handlers to enable simple controls, for example for the *move*, *reveal*, and *remove* actions. If no default handler is available for your use case, you need to implement your own custom change handler. See [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md).

Both custom and default change handlers must be registered so they can be called for their respective controls. See [Registering Change Handlers for UI Changes](registering-change-handlers-for-ui-changes-d5f4de8.md).

