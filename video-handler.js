document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('gifContainer');
    const url = container.getAttribute('data-url');
    const imageUrl = url + '.png'; // 기본적으로 PNG 이미지를 사용

    // 이미지 로드하여 크기 측정
    const img = new Image();
    img.onload = function () {
        // 이미지가 로드되면 div의 크기를 이미지 크기에 맞춤
        container.style.width = img.width + 'px';
        container.style.height = img.height + 'px';

        // 초기 배경 이미지 설정
        container.style.backgroundImage = 'url("' + imageUrl + '")';
    };
    img.src = imageUrl;

    let isGifLoaded = false;

    container.addEventListener('mouseenter', function () {
        if (!isGifLoaded) {
            container.style.backgroundImage = 'url("' + url + '.gif")';
            isGifLoaded = true;
        }
    });

    container.addEventListener('mouseleave', function () {
        container.style.backgroundImage = 'url("' + imageUrl + '")';
        isGifLoaded = false;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('myVideo');
    const videoContainer = document.getElementById('videoContainer');
    const threshold = 100; // 마우스가 비디오와 이 거리(픽셀 단위) 이내로 접근하면 재생

    function checkDistance(event) {
        const bounds = videoContainer.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const distance = Math.sqrt(
            Math.pow(centerX - event.clientX, 2) + Math.pow(centerY - event.clientY, 2)
        );

        if (distance < threshold) {
            video.play();
        } else {
            video.pause();
        }
    }

    document.addEventListener('mousemove', checkDistance);
});