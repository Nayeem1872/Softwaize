document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Product clicked!');
    });
});


document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.header-main').classList.toggle('nav-active');
});
document.querySelector('#best-sellers-link').addEventListener('click', function(event) {
    event.preventDefault();

    
    document.querySelector('.best-sellers-products').classList.toggle('best-sellers-active');
});
