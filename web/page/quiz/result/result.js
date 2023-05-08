var score = localStorage.getItem('score');
document.getElementById('score').innerText = score + '점';
switch(Math.floor(score / 10)) {
    case 0:
        document.getElementById("img").src = '../../../img/ic_ailien.png';
        break;
    case 1:
    case 2:
    case 3:
        document.getElementById("img").src = '../../../img/ic_normal.png';
        break;
    case 4:
    case 5:
        document.getElementById("img").src = '../../../img/ic_newbie.png';
        break;
    case 6:
    case 7:
        document.getElementById("img").src = '../../../img/ic_geines.png';
        break;
    case 8:
    case 9:
        document.getElementById("img").src = '../../../img/ic_cheonjae.png';
        break;
    case 10:
        document.getElementById("img").src = '../../../img/ic_god.png';
        break;
}