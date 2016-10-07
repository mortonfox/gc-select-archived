function runSelect(event) {
  event.preventDefault();

  var tbody = document.getElementsByTagName('tbody');
  var rows = tbody[0].getElementsByTagName('tr');

  for (var row of rows) {
    // Find all table rows with an archived cache.
    var oldwarning = row.getElementsByClassName('OldWarning');
    if (oldwarning.length > 0) {
      // Check the row's checkbox so user can do a bulk delete later.
      var checkboxes = row.getElementsByClassName('Checkbox');
      checkboxes[0].checked = true;
    }
  }
}

function init() {
  // Make a new button for our action.
  var newbutton = document.createElement('input');
  newbutton.setAttribute('class', 'Button');
  newbutton.setAttribute('type', 'submit');
  newbutton.setAttribute('name', 'gc_select_all_archived');
  newbutton.setAttribute('id', 'gc_select_all_archived');
  newbutton.setAttribute('value', 'Select All Archived');

  newbutton.addEventListener('click', runSelect);

  // Insert the new button after the "Delete Entire Bookmark List" button.
  var lastbutton = document.getElementById('ctl00_ContentBody_ListInfo_btnDeleteBookmarkList');
  lastbutton.parentNode.appendChild(newbutton);
}

init();

// -- The End --
