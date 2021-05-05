// Deletes all notes.
let lib_id = Zotero.Libraries.userLibraryID;
let item_ids = await Zotero.Items.getAllIDs(lib_id);
for (let item_id of item_ids) {
    let item = await Zotero.Items.getAsync(item_id);
    if (item.isNote()) {
        item.deleted = true;
        await item.saveTx();
    }
}
return true;
