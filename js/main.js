document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () {
        this.style.display = 'none';
    });
});

document.getElementById('yr').textContent = new Date().getFullYear();

var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
        }
    });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(function (element) {
    io.observe(element);
});

function onScroll() {
    var nav = document.getElementById('cc-nav');
    if (!nav) return;
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

document.getElementById('ccForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.currentTarget;
    var nome = form.elements.nome.value;
    var empresa = form.elements.empresa.value;
    var msg = form.elements.msg.value;
    var text = 'Olá, sou ' + nome + ' da ' + empresa + '. ' + msg;
    window.open('https://wa.me/5500000000000?text=' + encodeURIComponent(text), '_blank');
});

function togglePlan(btn, planId, duration) {
    var parent = btn.parentElement;
    parent.querySelectorAll('.btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    
    var priceContainer = document.getElementById('price-' + planId);
    priceContainer.querySelectorAll('.cc-price-display').forEach(function(el) { el.style.display = 'none'; });
    priceContainer.querySelector('.price-' + duration).style.display = 'block';
}

document.addEventListener('mousemove', function(e) {
    var bg = document.querySelector('.cc-bg');
    if (bg) {
        bg.style.setProperty('--mouse-x', e.clientX + 'px');
        bg.style.setProperty('--mouse-y', e.clientY + 'px');
    }
});
