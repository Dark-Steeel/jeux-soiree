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
function playTruthOrDare() {
    const questions = [
        "Action : Danse sur une chanson au hasard !",
        "Vérité : As-tu déjà menti à un ami proche ?",
        "Action : Envoie un message embarrassant à quelqu'un !",
        "Vérité : Quel est ton plus grand secret ?"
    ];
    if (players.length > 0) {
        const currentPlayer = players[currentPlayerIndex];
        const randomIndex = Math.floor(Math.random() * questions.length);
        document.getElementById("truthOrDare").innerText = `${currentPlayer}, ton défi : ${questions[randomIndex]}`;
        playSound();
    } else {
        alert("Ajoutez des joueurs pour commencer.");
    }
}

