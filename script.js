document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
    });
});




const products = [
    {
        image: './img/product6.png',
        name: 'Платье с цветочным рисунком',
        price: '3000 KGZ',
        sale: true
    },
    {
        image: './img/product2.png',
        name: 'Платье в полоску',
        price: '2500 KGC',
        sale: true
    },
    {
        image: './img/product3.png',
        name: 'Топ без рукавов',
        price: '3500 KGZ',
        sale: false
    },
    {
        image: './img/product4.png',
        name: 'Летнее платье',
        price: '2700 KGZ',
        sale: false
    },
    {
        image: './img/product5.png',
        name: 'Летнее платье',
        price: '4000 KGZ',
        sale: false
    },
    {
        image: './img/product3.png',
        name: 'Топ без рукавов',
        price: '3800 KGZ',
        sale: false
    },
    {
        image: './img/product4.png',
        name: 'Летнее платье',
        price: '2900 KGZ',
        sale: false
    },
    {
        image: './img/product5.png',
        name: 'Летнее платье',
        price: '2600 KGZ',
        sale: false
    },
    
    {
        image: './img/product6.png',
        name: 'Летнее платье',
        price: '3400 KGZ',
        sale: false
    }, 
    {
        image: './img/product4.png',
        name: 'Летнее платье',
        price: '2900 KGZ',
        sale: false
    },
    {
        image: './img/product5.png',
        name: 'Летнее платье',
        price: '2600 KGZ',
        sale: false
    },
    
    {
        image: './img/product6.png',
        name: 'Летнее платье',
        price: '3400 KGZ',
        sale: false
    },  
];

const sliderItems = document.getElementById('slider-items');

function loadProducts() {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const saleTag = product.sale ? '<div class="sale">Распродажа</div>' : '';

        productElement.innerHTML = `
            ${saleTag}
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        sliderItems.appendChild(productElement);
    });

    // Рассчитать ширину контейнера слайдера после добавления продуктов
    const productElements = document.querySelectorAll('.product');
    const sliderWidth = document.querySelector('.slider').offsetWidth;
    const totalWidth = productElements.length * productElements[0].offsetWidth;
    sliderItems.style.width = `${totalWidth}px`;
}

let currentIndex = 0;

function updateSlider() {
    const sliderWidth = document.querySelector('.slider').offsetWidth;
    const totalItems = document.querySelectorAll('.product').length;
    const visibleItems = Math.floor(sliderWidth / document.querySelector('.product').offsetWidth);

    if (currentIndex >= totalItems - visibleItems) {
        currentIndex = 0;
    }

    sliderItems.style.transform = `translateX(${-currentIndex * document.querySelector('.product').offsetWidth}px)`;
}

function nextSlide() {
    const totalItems = document.querySelectorAll('.product').length;
    const visibleItems = Math.floor(document.querySelector('.slider').offsetWidth / document.querySelector('.product').offsetWidth);

    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = Math.floor(document.querySelectorAll('.product').length / document.querySelector('.product').offsetWidth) - 1;
    }
    updateSlider();
}

window.addEventListener('resize', updateSlider);
window.onload = () => {
    loadProducts();
    updateSlider();
    setInterval(nextSlide, 3000); // Автоматическое переключение каждые 3 секунды
};