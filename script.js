let players = [];
let scores = {};
let currentPlayerIndex = 0;

function addPlayer() {
    const playerName = document.getElementById("playerName").value.trim();
    if (playerName !== "" && !players.includes(playerName)) {
        players.push(playerName);
        scores[playerName] = 0;
        document.getElementById("playerName").value = "";
        updatePlayersList();
        updateScoreBoard();
    }
}

function updatePlayersList() {
    document.getElementById("playersList").innerText = "Joueurs: " + players.join(", ");
}

function addPoint() {
    if (players.length > 0) {
        let currentPlayer = players[currentPlayerIndex];
        scores[currentPlayer] += 1;
        updateScoreBoard();
    }
}

function updateScoreBoard() {
    let scoreboard = document.getElementById("scoreBoard");
    scoreboard.innerHTML = "";
    let sortedPlayers = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    sortedPlayers.forEach(player => {
        let li = document.createElement("li");
        li.innerText = `${player}: ${scores[player]} points`;
        scoreboard.appendChild(li);
    });
}

function nextPlayer() {
    if (players.length > 0) {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        alert("C'est au tour de " + players[currentPlayerIndex] + " de jouer !");
    } else {
        alert("Ajoutez des joueurs pour commencer.");
    }
}
let players = [];
let scores = {};
let currentPlayerIndex = 0;



function updatePlayersList() {
    document.getElementById("playersList").innerText = "Joueurs: " + players.join(", ");
}

function addPoint() {
    if (players.length > 0) {
        let currentPlayer = players[currentPlayerIndex];
        scores[currentPlayer] += 1;
        updateScoreBoard();
    }
}

function updateScoreBoard() {
    let scoreboard = document.getElementById("scoreBoard");
    scoreboard.innerHTML = "";
    let sortedPlayers = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    sortedPlayers.forEach(player => {
        let li = document.createElement("li");
        li.innerText = `${player}: ${scores[player]} points`;
        scoreboard.appendChild(li);
    });
}

function nextPlayer() {
    if (players.length > 0) {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        alert("C'est au tour de " + players[currentPlayerIndex] + " de jouer !");
    } else {
        alert("Ajoutez des joueurs pour commencer.");
    }
}
