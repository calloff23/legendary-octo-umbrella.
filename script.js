// JavaScript to handle page transitions
document.getElementById('clickButton').addEventListener('click', function () {
    // Hide the first page
    document.getElementById('page1').style.display = 'none';

    // Show the second page
    const page2 = document.getElementById('page2');
    page2.style.display = 'flex';
});
