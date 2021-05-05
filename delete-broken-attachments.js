// Delete broken attachments.
// Mark the broken attachments using the "Storage Scanner" addon first.

var s = new Zotero.Search();
s.libraryID = ZoteroPane.getSelectedLibraryID();
s.addCondition('tag', 'contains', "#broken_attachments");
var ids = await s.search();
if (!ids.length) {
    return "No items found";
}
for (let id of ids) {
    let item = await Zotero.Items.getAsync(id);
    if (!item.isRegularItem()) {
        item.deleted = true;
        await item.saveTx();
    }
}
return true;
