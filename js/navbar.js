document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-nav').classList.toggle('active');
});

document.querySelectorAll('.nav-item.dropdown').forEach(function(item) {
    item.addEventListener('click', function() {
        this.querySelector('.dropdown-menu').classList.toggle('active');
    });
});