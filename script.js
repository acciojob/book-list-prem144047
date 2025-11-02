//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function() {
    // Get the values from the input fields
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Create a new row in the table
    const table = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete btn btn-danger">Clear</button></td>
    `;
    table.appendChild(row);

    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    // Add event listener for the delete button
    row.querySelector('.delete').addEventListener('click', function() {
        table.removeChild(row);
    });
});