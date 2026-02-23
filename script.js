function toggleMenu() { document.getElementById('nav').classList.toggle('active'); }

onload = function () {
    var e = document.getElementById('typed-name'), n = "Christopher Raper", i = 0;
    if (!e) return;
    setInterval(() => cursor.style.opacity ^= 1, 500);
    (function t() { i < n.length && (e.textContent += n[i++], setTimeout(t, 100)); })();
};