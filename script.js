let rolling = false;

function startRolling() {
    if (rolling) return;

    const options = document.querySelectorAll('.option');
    const optionsCount = options.length;
    const duration = 3000; // 滚动持续时间（毫秒）

    rolling = true;
    $('.start-button').attr('disabled', true);

    const randomOptionIndex = Math.floor(Math.random() * optionsCount);
    const targetPosition = -(randomOptionIndex * $('.option').outerHeight());

    $('.options').animate({ top: targetPosition }, {
        duration: duration,
        easing: 'easeOutBounce',
        complete: () => {
            rolling = false;
            $('.start-button').attr('disabled', false);
        }
    });
}
