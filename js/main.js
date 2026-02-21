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
                    <li><a href="https://forms.gle/XX3NvUSGwizPQ99k9" target="_blank">お問い合わせ</a></li>
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

    // =========================================
    // Dummy Login (ID: guest / PASS: 1111)
    // =========================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const idInput = document.getElementById('studion-id');
            const passInput = document.getElementById('password');
            const errorMsg = document.getElementById('loginError');

            const id = idInput.value.trim();
            const pass = passInput.value;

            if (id === 'guest' && pass === '1111') {
                // ログイン成功 → メンバーズページへ
                window.location.href = 'members.html';
            } else {
                // ログイン失敗 → エラー表示
                errorMsg.style.display = 'block';
                passInput.value = '';
            }
        });
    }

    // =========================================
    // Members Page Popups
    // =========================================
    function setupPopup(openBtnId, popupId, closeBtnId) {
        const openBtn = document.getElementById(openBtnId);
        const popup = document.getElementById(popupId);
        const closeBtn = document.getElementById(closeBtnId);
        if (!openBtn || !popup) return;

        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                popup.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // 編集する → 編集ポップアップ
    setupPopup('btnEditProfile', 'popupEdit', 'btnCloseEdit');
    // 詳細を見る → 詳細ポップアップ
    setupPopup('btnViewDetail', 'popupDetail', 'btnCloseDetail');
});
