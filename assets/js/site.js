// #region model
// Data structures and business logic
let lists = []; // Array to hold lists
// #endregion model

// #region view
const mainContent = document.getElementById('content');

function renderListView() {
    mainContent.innerHTML = '';
    const list = document.createElement('div');
    list.innerHTML = '<h2>List View</h2><ul>Unordered list</ul>';
    mainContent.appendChild(list);
}

function renderNewListForm() {
    mainContent.innerHTML = '';
    const section = document.createElement('section');

    const label = document.createElement('label');
    label.textContent = 'Name:';
    label.setAttribute('for', 'listName');

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'listName';
    input.value = 'default name';

    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.addEventListener('click', () => {
        console.log('OK clicked, list name:', input.value);
        // Here you would typically add the new list to your data structure
        renderListView();
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
        console.log('Cancel clicked');
        renderListView();
    });

    section.appendChild(label);
    section.appendChild(input);
    section.appendChild(okButton);
    section.appendChild(cancelButton);
    mainContent.appendChild(section);
}
// #endregion view

// #region controller
const newListButton = document.getElementById('newListButton');
newListButton.addEventListener('click', () => {
    renderNewListForm();
});

// Initial view
renderListView();
// #endregion controller