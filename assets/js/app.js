const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Changed selector to '.name'
const $b = document.querySelector('.blog'); // Changed selector to '.blog'
const $l = document.querySelector('.location'); // Changed selector to '.location'

async function displayUser(username) { // Added 'async' keyword
    try {
        $n.textContent = 'Cargando...';
        const response = await fetch(`${usersEndpoint}/${username}`);
        const data = await response.json(); // Parsing response JSON
        console.log(data);
        $n.textContent = data.name || 'Nombre no disponible'; // Using data.name or providing a default message
        $b.textContent = data.blog || 'Blog no disponible'; // Using data.blog or providing a default message
        $l.textContent = data.location || 'Ubicación no disponible'; // Using data.location or providing a default message
    } catch (err) {
        handleError(err);
    }
}

function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);



/* Cambié los selectores del DOM para obtener los elementos por su clase correspondiente: querySelector('.name'), querySelector('.blog'), y querySelector('.location').
Añadí la palabra clave async a la función displayUser para utilizar await en las llamadas asíncronas.
Añadí un bloque try...catch para manejar los errores de la petición a la API.
Parseé la respuesta de la API a JSON usando response.json().
Usé los datos obtenidos para mostrar el nombre, blog y ubicación del usuario en el DOM, o proporcionar un mensaje predeterminado si la información no está disponible. */