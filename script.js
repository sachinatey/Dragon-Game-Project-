score = 0;
gameMusic = new Audio('music.mp3')
setTimeout(() =>{
    gameMusic.play();
},3200)
// cross = true;
document.onkeydown = function (e) {
    console.log('Key Code is:', e.code)
    if (e.code == 'ArrowUp') {
        player = document.querySelector('.player');
        player.classList.add('animatePlayer');
        setTimeout(() => {
            player.classList.remove('animatePlayer')
        }, 700);
    }
    if (e.code == 'ArrowRight') {
        player = document.querySelector('.player');
        px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = px + 200 + 'px';
    }
    if (e.code == 'ArrowLeft') {
        player = document.querySelector('.player');
        px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (px - 200) + 'px';
    }
}


checker = setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    dragon = document.querySelector('.dragon');
    ground = document.querySelector('.ground');
    fallmusic = new Audio('playerfall.mp3');


    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));
    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));

    offsetX = Math.abs(px - dx);
    offsety = Math.abs(py - dy);
    console.log(offsetX, offsety);

    if (offsetX < 140 && offsety < 52) {
        gameOver.style.visibility = 'visible';
        dragon.style.animationPlayState = 'paused'
        // dragon.classList.remove('dragonAnimation')
        ground.classList.remove('landMove');
        player.classList.add('playerFall');
        clearInterval(checker);
        fallmusic.play();

    }

    else {
        score += 1;
        updateScore(score);

        anidur = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'));
        newdur = anidur - 0.01;
        dragon.style.animationDuration = newdur + 's';

    }

}, 500);

function updateScore(score) {
    scoreCont = document.querySelector('.scoreCont')
    scoreCont.innerHTML = "Your Score:" + score;
}


