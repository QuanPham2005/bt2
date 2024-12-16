document.addEventListener('DOMContentLoaded', function () {
    const rightArrow = document.querySelector('.right');
    const toggleText = document.getElementById('toggle-text');
    const details = document.getElementById('details');

    const showDetail = function () {
        if (rightArrow.getAttribute('name') === 'right-arrow') {
            rightArrow.setAttribute('name', 'down-arrow');
            toggleText.textContent = 'Hide Details';
            details.style.display = 'block';
        } else {
            rightArrow.setAttribute('name', 'right-arrow');
            toggleText.textContent = 'Show Details';
            details.style.display = 'none';
        }
    };
    rightArrow.addEventListener('click', showDetail);
    toggleText.addEventListener('click', showDetail);
});