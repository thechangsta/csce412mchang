document.addEventListener('DOMContentLoaded', () => {
    darkmode = document.getElementById('toggle');
    darkmode.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('mode', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
    
    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.add('light');
    }
})

