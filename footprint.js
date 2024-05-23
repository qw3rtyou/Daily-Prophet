
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    function createFootprintSequence() {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const angle = Math.random() * 360; // 0도에서 360도 사이의 랜덤 각도
        const stepLength = 70; // 발자국 사이의 거리

        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const footprint = document.createElement('img');
                footprint.src = 'data/footprint.png'; // 발자국 이미지 경로
                footprint.className = 'footprint';
                footprint.style.left = `${startX + stepLength * i * Math.cos(angle * Math.PI / 180)}px`;
                footprint.style.top = `${startY + stepLength * i * Math.sin(angle * Math.PI / 180)}px`;
                footprint.style.transform = `rotate(${angle + 90}deg)`;
                body.appendChild(footprint);
            }, i * 750); // 각 발자국은 0.5초 간격으로 생성
        }
    }

    function startFootprints() {
        createFootprintSequence();
        setInterval(createFootprintSequence, 10000); // 10초 마다 새로운 발자국 시퀀스 시작
    }

    startFootprints();
});