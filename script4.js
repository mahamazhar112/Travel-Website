document.querySelectorAll('.destination-card').forEach(item => {
    item.addEventListener('click', function() {
        alert('You have selected this image!');
    });
});

document.querySelectorAll('a[href^=""]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
