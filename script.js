// Основной функционал сайта

document.addEventListener('DOMContentLoaded', function () {
    // Базовая функциональность для кнопок продолжения
    const continueButtons = document.querySelectorAll('.continue-btn');
    continueButtons.forEach(button => {
        button.addEventListener('click', function () {
            const videoTitle = this.closest('.video-card').querySelector('.video-title').textContent;
            alert(`Продолжаем просмотр: ${videoTitle}`);
            // В реальном приложении здесь будет переход к видео
        });
    });

    // Функциональность поиска
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-bar input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Поиск: ${query}`);
            // В реальном приложении здесь будет отправка запроса на сервер
        }
    }

    // Плавная прокрутка к якорям
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Имитация прогресса для демонстрации
    function simulateProgress() {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const currentWidth = parseInt(bar.style.width);
            if (currentWidth < 100) {
                bar.style.width = `${currentWidth + 5}%`;
            }
        });
    }

    // Каждые 10 секунд увеличиваем прогресс (для демонстрации)
    setInterval(simulateProgress, 10000);

    // Добавление класса активной странице в навигации
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.brics-nav a');
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
});