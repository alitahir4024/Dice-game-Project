const place_1 = document.querySelector('.place-1');
const place_2 = document.querySelector('.place-2');
const result = document.querySelector('.result');
const btn = document.querySelector('button');
const p_1=document.querySelector('#p1');
const p_2=document.querySelector('#p2');

place_1.innerHTML = 'Player 1 goes here';
place_2.innerHTML = 'Player 2 goes here';
result.innerHTML='Get Ready';

btn.onclick = () => {

    const player_1 = Math.floor(Math.random() * 6);

    const player_2 = Math.floor(Math.random() * 6);

    if (player_1 > player_2 && player_2 < player_1) {
        result.innerHTML = 'player 1 wins';
        p_1.style.color="#9C060C";
        p_1.transition="all 0.5s";
        p_2.style.color="white";
        p_2.transition="all 0.5s";
    }
    else if (player_1 < player_2 && player_2 > player_1) {
        result.innerHTML = 'player 2 wins';
        p_2.style.color="#9C060C";
        p_2.transition="all 0.5s";
        p_1.style.color="white";
        p_1.transition="all 0.5s";
    }
    else if (player_1 == player_2 && player_2 == player_1) {
        result.innerHTML = 'Draw';
        p_1.style.color="#9C060C";
        p_1.transition="all 0.5s";
        p_2.style.color="#9C060C";
        p_2.transition="all 0.5s";
    }

    if (player_1 == 0) {
        place_1.style.backgroundImage = "url('img/dice1.png')";
        place_1.style.backgroundSize = "100% 100%";
        place_1.innerHTML = '';
    }
    else if (player_1 == 1) {
        place_1.style.backgroundImage = "url('img/dice2.png')";
        place_1.style.backgroundSize = "100% 100%";
        place_1.innerHTML = '';
    }
    else if (player_1 == 2) {
        place_1.style.backgroundImage = "url('img/dice3.png')";
        place_1.style.backgroundSize = "100% 100%";
        place_1.innerHTML = '';
    }
    else if (player_1 == 3) {
        place_1.style.backgroundImage = "url('img/dice4.png')";
        place_1.style.backgroundSize = "100% 100%";
        place_1.innerHTML = '';
    }
    else if (player_1 == 4) {
        place_1.style.backgroundImage = "url('img/dice5.png')";
        place_1.style.backgroundSize = "100% 100%";
        place_1.innerHTML = '';
    }
    else if (player_1 == 5) {
        place_1.style.backgroundImage = "url('img/dice6.png')";
        place_1.style.backgroundSize = "100% 100%";
        place_1.innerHTML = '';
    }

    if (player_2 == 0) {
        place_2.style.backgroundImage = "url('img/dice1.png')";
        place_2.style.backgroundSize = "100% 100%";
        place_2.innerHTML = '';
    }
    else if (player_2 == 1) {
        place_2.style.backgroundImage = "url('img/dice2.png')";
        place_2.style.backgroundSize = "100% 100%";
        place_2.innerHTML = '';
    }
    else if (player_2 == 2) {
        place_2.style.backgroundImage = "url('img/dice3.png')";
        place_2.style.backgroundSize = "100% 100%";
        place_2.innerHTML = '';
    }
    else if (player_2 == 3) {
        place_2.style.backgroundImage = "url('img/dice4.png')";
        place_2.style.backgroundSize = "100% 100%";
        place_2.innerHTML = '';
    }
    else if (player_2 == 4) {
        place_2.style.backgroundImage = "url('img/dice5.png')";
        place_2.style.backgroundSize = "100% 100%";
        place_2.innerHTML = '';
    }
    else if (player_2 == 5) {
        place_2.style.backgroundImage = "url('img/dice6.png')";
        place_2.style.backgroundSize = "100% 100%";
        place_2.innerHTML = '';
    }
}