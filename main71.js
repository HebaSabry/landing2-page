const button = document.getElementById('changecolorbtn');
button.addEventListener('click', function() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime'];
    const randomColor = colors[ Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor = randomColor;
});
const textBtn = document.getElementById('changetextbtn');
const text = document.getElementById('text');
textBtn.addEventListener('click', () => {
    text.textContent ='انا جاهزة أبدأ أول شغل فريلانسينج';});