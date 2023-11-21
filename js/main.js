document.addEventListener('DOMContentLoaded', function() {

    function updateVisibility() {
        if (location.hash === '') {
            document.querySelector('#header').classList.remove('hidden');
        } else {
            document.querySelector('#header').classList.add('hidden');
        }
    }

    document.querySelector('#header nav a').addEventListener('click', (e) => {
        document.querySelector('#header').classList.add('hidden');
    });

    document.querySelectorAll('.backarrow').forEach((icon) => {
        icon.addEventListener('click', () => {
            history.back();
        });
    });
    
    window.addEventListener('hashchange', updateVisibility);

    updateVisibility();
});

