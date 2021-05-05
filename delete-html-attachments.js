// Deletes all html attachments.
let lib_id = Zotero.Libraries.userLibraryID;
let item_ids = await Zotero.Items.getAllIDs(lib_id);
for (let item_id of item_ids) {
    let item = await Zotero.Items.getAsync(item_id);
    if (item.isRegularItem()) {
        let attachment_ids = item.getAttachments();
        for (let attachment_id of attachment_ids_ids) {
            let attachment = await Zotero.Items.getAsync(attachment_id);
            if (attachment.attachmentContentType == "text/html") {
                attachment.deleted = true;
                await attachment.saveTx();
            }
        }
    }
}
return true;
