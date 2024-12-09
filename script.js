const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Desactivar Modo Nocturno';
    } else {
        toggleButton.textContent = 'Activar Modo Nocturno';
    }
});