document.addEventListener('DOMContentLoaded', () => {
    // Botão para mudar tema
    const toggleThemeButton = document.getElementById('toggle-theme');
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleThemeButton.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('section#ebook').classList.toggle('dark-mode');
        document.querySelectorAll('section#ebook img').forEach(img => {
            img.classList.toggle('dark-mode');
        });
        document.querySelectorAll('section#ebook a').forEach(a => {
            a.classList.toggle('dark-mode');
        });
        document.querySelector('footer').classList.toggle('dark-mode');
    });

    // Notificação de download
    const downloadLink = document.getElementById('download-ebook');
    downloadLink.addEventListener('click', () => {
        alert('Obrigado por baixar nosso e-book!');
    });
});
