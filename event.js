document.getElementById('firstUl').addEventListener('click', function (event) {
event.target.parentNode.removeChild(event.target);    
})
document.getElementById('1stBtn').addEventListener('click', function () {
   var btn = document.getElementById('firstUl');
    var add = document.createElement('li');
    add.innerText = ('try my self');
    btn.appendChild(add);
})

