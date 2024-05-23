
const light = document.getElementById('light');

document.addEventListener('mousemove', function (e) {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
});

document.addEventListener('click', function (e) {
    const effect = document.getElementById('click-effect');
    effect.style.left = `${e.clientX - 50}px`;
    effect.style.top = `${e.clientY - 50}px`;
    effect.style.transform = 'scale(1)';
    effect.style.opacity = '1';

    setTimeout(() => {
        effect.style.transform = 'scale(0)';
        effect.style.opacity = '0';
    }, 600);
});

document.addEventListener('mousemove', function (e) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    trail.style.left = `${e.clientX - 10}px`;
    trail.style.top = `${e.clientY - 10}px`;

    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(trail);
        }, 2000);
    }, 10);
});
