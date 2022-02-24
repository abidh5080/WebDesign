var hide = document.getElementById('buttn');
hide.addEventListener('click', function () {
    const loginBtn = document.getElementById('loginFrom');
    loginBtn.style.display = "none";
    const nextPage = document.getElementById('nextPage')
    nextPage.style.display = 'block'

})
