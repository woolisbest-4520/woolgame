let cookieCount = 0;
const cookieButton = document.getElementById('cookie-btn');
const cookieCountDisplay = document.getElementById('cookie-count');

cookieButton.addEventListener('click', () => {
    cookieCount++;
    cookieCountDisplay.textContent = `クッキー: ${cookieCount}`;
});
