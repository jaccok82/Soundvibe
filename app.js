
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const generateButton = document.getElementById('generate-button');
    const message = document.getElementById('message');
    const openSpotify = document.getElementById('open-spotify');
    const userName = document.getElementById('user-name');
    const userPhoto = document.getElementById('user-photo');

    loginButton.addEventListener('click', () => {
        alert('Spotify-login gestart (simulatie).');
        loginButton.style.display = 'none';
        userName.textContent = 'Jacco';
        userPhoto.src = 'https://via.placeholder.com/60';
        userPhoto.style.display = 'inline-block';
    });

    generateButton.addEventListener('click', () => {
        const mood = document.getElementById('mood-input').value;
        if (!mood) {
            message.textContent = 'Typ eerst een stemming in.';
            return;
        }
        message.textContent = `Afspeellijst aangemaakt op basis van: ${mood}`;
        openSpotify.href = 'https://open.spotify.com';
        openSpotify.style.display = 'block';
    });
});
