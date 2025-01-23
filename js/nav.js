document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // This would stop the navigation
    });
});
