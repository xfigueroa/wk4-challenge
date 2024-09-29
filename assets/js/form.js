const usernameInput = document.getElementById('user-name');
const titleInput = document.getElementById('msg-title');
const contentInput = document.getElementById('msg');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;
  
    // Verifica si ya existe un objeto de usuario en el localStorage
    const existingUserData = localStorage.getItem(username);
  
    if (existingUserData) {
        // Si ya existe, actualiza el objeto existente
        const userData = JSON.parse(existingUserData);
        userData.title = title;
        userData.content = content;
        userData.username = username
        localStorage.setItem(username, JSON.stringify(userData));
    } else {
        // Si no existe, crea un nuevo objeto de usuario
        const userData = { username, title, content };
        localStorage.setItem(username, JSON.stringify(userData));
    }
  
    // Limpia los campos del formulario
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';
});