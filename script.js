let players = [];
let currentPlayerIndex = 0;
let scores = {};

function addPlayer() {
    const playerName = document.getElementById("playerName").value.trim();
    if (playerName !== "" && !players.includes(playerName)) {
        players.push(playerName);
        scores[playerName] = 0;
        document.getElementById("playerName").value = "";
        updatePlayersList();
    }
}

function updatePlayersList() {
    document.getElementById("playersList").innerText = "Joueurs: " + players.join(", ");
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
    } else {
        alert("Ajoutez des joueurs pour commencer.");
    }
}

function playAdultTruthOrDare() {
    const questions = [
        "Action : Envoie un texto osé à quelqu'un !",
        "Vérité : As-tu déjà embrassé quelqu'un dans cette pièce ?",
        "Action : Bois une gorgée de ton verre !",
        "Vérité : Quel est ton plus grand fantasme ?"
    ];

    if (players.length > 0) {
        const currentPlayer = players[currentPlayerIndex];
        const randomIndex = Math.floor(Math.random() * questions.length);
        document.getElementById("adultTruthOrDare").innerText = `${currentPlayer}, ton défi : ${questions[randomIndex]}`;
    } else {
        alert("Ajoutez des joueurs pour commencer.");
    }
}
function playGame() {
    const gameText = document.getElementById("gameText");
    
    let challenges = [];

    if (window.location.href.includes("action-verite-adulte")) {
        challenges = [
            "Action : Envoie un texto osé à quelqu'un !",
            "Vérité : As-tu déjà embrassé quelqu'un dans cette pièce ?",
            "Action : Bois une gorgée de ton verre !",
            "Vérité : Quel est ton plus grand fantasme ?"
        ];
    } else if (window.location.href.includes("je-never")) {
        challenges = [
            "Je n’ai jamais menti à mes parents.",
            "Je n’ai jamais envoyé un message à la mauvaise personne.",
            "Je n’ai jamais triché à un jeu.",
            "Je n’ai jamais regretté un message envoyé."
        ];
    } else if (window.location.href.includes("lyrics")) {
        challenges = [
            "Complète les paroles : 'Ce rêve bleu, je n'y crois pas, c'est merveilleux... 🎶'",
            "Complète les paroles : 'J'irai où tu iras, qu'importe la place ou l'endroit... 🎶'",
            "Complète les paroles : 'Écris l'histoire, tout ce que tu voudras... 🎶'",
            "Complète les paroles : 'Elle me dit, écris une chanson contente... 🎶'"
        ];
    }

    if (challenges.length > 0) {
        const randomIndex = Math.floor(Math.random() * challenges.length);
        gameText.innerText = challenges[randomIndex];
    }
}
function toggleMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    
    let modeButton = document.querySelector(".mode-toggle");
    if (document.body.classList.contains("dark-mode")) {
        modeButton.innerText = "Mode Clair";
    } else {
        modeButton.innerText = "Mode Sombre";
    }
}
