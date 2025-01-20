<!-- loio7841bf3f7cc24a86bdff0b5303c5760d -->

# Cleanup After XML Change Application

There's an optional cleanup hook to improve the performance.

The change handler can implement the optional `onAfterXMLChangeProcessing` hook to clean up after the change has been applied on the XML and before data is stored in the view cache.

The hook is called separately for all controls \(HTMLElements\) for each change handler that applied a change on that control, even if the handler threw an error during the apply process.

It's always called after all changes for the control have been applied. It's only called once if multiple changes of the same type were applied on the same control.

This hook can be used for performance improvements. Example: Data is retrieved and used by more than one change handler. To prevent multiple superfluous calls to the data source, the data is stored in the XML tree as custom data . The `onAfterXMLChangeProcessing` hook is then used to remove the custom data before the view-cache is created from the XML tree.

