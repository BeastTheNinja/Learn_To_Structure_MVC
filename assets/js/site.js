// #region model
// Data structures and business logic
let lists = []; // Array to hold lists
// #endregion model

// #region view
// View functions for rendering UI components
const mainContent = document.getElementById('content');

// Function to render the list view
function renderListView() {
    mainContent.innerHTML = '';
    const list = document.createElement('div');
    list.innerHTML = '<h2>List View</h2><ul>Unordered list</ul>';
    mainContent.appendChild(list);
}

// Function to render the new list form
function renderNewListForm() {

    // Clear the main content area
    mainContent.innerHTML = '';

    // Create the section
    const section = document.createElement('section');

    // Create the label
    const label = document.createElement('label');

    label.textContent = 'Name:';

    label.setAttribute('for', 'listName');

    // Create the input field
    const input = document.createElement('input');

    input.type = 'text';

    input.id = 'listName';

    input.value = 'default name';

    // Add input validation or other logic here
    const okButton = document.createElement('button');

    okButton.textContent = 'OK';

    okButton.addEventListener('click', () => {
        console.log('OK clicked, list name:', input.value);
        // Here you would typically add the new list to your data structure
        renderListView();
    });
    // Create the cancel button
    const cancelButton = document.createElement('button');

    cancelButton.textContent = 'Cancel';

    // Add event listener for cancel button
    cancelButton.addEventListener('click', () => {
        console.log('Cancel clicked');
        renderListView();
    });
    // Append elements to section and main content
    section.appendChild(label);
    section.appendChild(input);
    section.appendChild(okButton);
    section.appendChild(cancelButton);
    mainContent.appendChild(section);
}
// #endregion view

// #region controller
// Controller functions for handling user input and interactions
const newListButton = document.getElementById('newListButton');
// Add event listener for new list button
newListButton.addEventListener('click', () => {
    renderNewListForm();
});

// Initial view
renderListView();
// #endregion controller