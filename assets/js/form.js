const usernameInput = document.getElementById('user-name');
const titleInput = document.getElementById('msg-title');
const contentInput = document.getElementById('msg');
const submitButton = document.getElementById('submit');
const errorContainer = document.getElementById('error-message'); // Create an element to display the error message

const redirectPage = function (url) {
    window.location.href = url;
};

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    // Check if any field is empty
    if (!username || !title || !content) {
        // Display an error message
        errorContainer.textContent = 'Please fill in all fields.';
        return; // Prevent form submission
    }

    const existingUserData = localStorage.getItem(username);

    if (existingUserData) {
        const userData = JSON.parse(existingUserData);
        userData.title = title;
        userData.content = content;
        userData.username = username;
        localStorage.setItem(username, JSON.stringify(userData));
    } else {
        const userData = { username, title, content };
        localStorage.setItem(username, JSON.stringify(userData));
    }

    redirectPage('blog.html');
});