// Menu Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const body = document.body;

    // Create Menu Overlay if it doesn't exist
    let menuOverlay = document.querySelector('.menu-overlay');
    if (!menuOverlay) {
        menuOverlay = document.createElement('div');
        menuOverlay.className = 'menu-overlay';
        menuOverlay.innerHTML = `
            <div class="menu-content">
                <button class="menu-close">&times;</button>
                <img src="assets/image/StudionLogo_large.png" alt="Studion" class="menu-logo">
                <ul class="menu-list">
                    <li><a href="index.html">ホーム</a></li>
                    <li><a href="demo.html">体験版をプレイ</a></li>
                    <li><a href="contact.html">お問い合わせ</a></li>
                    <li><a href="login.html">メンバーページ</a></li>
                </ul>
            </div>
        `;
        body.appendChild(menuOverlay);
    }

    const startBtn = document.querySelector('.menu-content .btn-orange'); // If we wanted an action button in menu

    const closeBtn = menuOverlay.querySelector('.menu-close');

    // Open Menu
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            menuOverlay.classList.add('active');
            body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }

    // Close Menu
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            body.style.overflow = '';
        });
    }

    // Close when clicking outside
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
            body.style.overflow = '';
        }
    });
});
