document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
        toggle.textContent = '☀️';
    }
    
    toggle.addEventListener('click', function() {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            toggle.textContent = '☀️';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            toggle.textContent = '🌙';
            localStorage.removeItem('darkMode');
        }
    });
    
    const filterInput = document.getElementById('filter');
    const sections = document.querySelectorAll('section');
    
    filterInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        
        sections.forEach(function(section) {
            const text = section.textContent.toLowerCase();
            if (query === '' || text.includes(query)) {
                section.style.display = 'block';
                section.style.animation = 'none';
                setTimeout(() => section.style.animation = 'slideUp 0.8s forwards', 10);
            } else {
                section.style.display = 'none';
            }
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});