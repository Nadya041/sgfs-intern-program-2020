let myBoardElement = document.getElementById("myBoard");
let playerInfoTurn = document.getElementById("player-info-box");
let diceInfo = document.getElementById("dice-info");
let throwDice = document.getElementById("throw-dice--action");

throwDice.addEventListener("click", function () {

    GameEngine.processDiceThrow();
});

const GameEngine = {
    gameFields: [],
    availableFields: [...availableFields],
    players: [...availablePlayerCollection],
    currentPlayerIndex: 0,


    showPlayerTurn() {
        playerInfoTurn.innerHTML = ("The player on turn is: " + GameEngine.players[this.currentPlayerIndex].name)

    },

    processDiceThrow() {
        let currenDiceThrow = GameEngine.throwDice(6);
        diceInfo.innerHTML = ("You throw : " + currenDiceThrow);
        GameEngine.players[this.currentPlayerIndex].activeBox += currenDiceThrow;
        if (GameEngine.players[this.currentPlayerIndex].activeBox >= this.availableFields.length) {
            GameEngine.players[this.currentPlayerIndex].activeBox -= this.availableFields.length;
        }

       this.currentPlayerIndex = this.currentPlayerIndex == 0 ?1:0;

        GameEngine.showPlayerTurn()

        this.generateBoard();

    },



    drawBoard() {

    },
    getBoxTemplate: (fieldInfo) => {

        let template = [`<div class = "box"><span> ${fieldInfo.name}</span>`]
        if (fieldInfo.id != 0) {
            template.push(`<br> <span> price: ${fieldInfo.price} </span>
            <br> <span> tax: ${fieldInfo.tax} </span>`);
        }

        for (let i = 0; i < GameEngine.players.length; i++) {
            if
                (GameEngine.players[i].activeBox == fieldInfo.id) {
                template.push(`<span> <br> ${GameEngine.players[i].name} </span>`)

            }
        }

        template.push(" </div>");
        return template.join("");

    },

    buildGameBoardRow(startCol, endCol, cssClass) {

        let template = [];
        template.push(`<div class = "${cssClass} row">
      
        `)
        for (let i = startCol; i < endCol; i++) {
            template.push(this.getBoxTemplate(this.availableFields[i]));
        }
        template.push(" </div> ");

        return template;
    },

    generateBoard() {

        let template = this.buildGameBoardRow(0, 8, "first-row")
        template.push(...this.buildGameBoardRow(8, 10, "second-row"));
        template.push(...this.buildGameBoardRow(10, 12, "third-row"));
        template.push(...this.buildGameBoardRow(12, 20, "last-row"));

        myBoardElement.innerHTML = template.join("");
    },

    startGame() {
        this.availableFields = [...availableFields]
        this.players = [...availablePlayerCollection]
        this.generateBoard();
        this.showPlayerTurn();




    },

    throwDice: (sideCount) => {
        return Math.floor(Math.random() * Math.floor(sideCount)) + 1;
    }
}
GameEngine.startGame();


