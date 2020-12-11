let myBoardElement = document.getElementById("myBoard");
let playerInfoTurn = document.getElementById("player-info-box");
let diceInfo = document.getElementById("dice-info");
let throwDice = document.getElementById("throw-dice--action");
let itemInfo = document.getElementById("item-info");
let actionBuyItem = document.getElementById("buy-item--action");
let actionSkipItem = document.getElementById("skip-item--action");
let playerOneWallet = document.getElementById("player-one-wallet");
let playerTwoWallet = document.getElementById("player-two-wallet");



throwDice.addEventListener("click", function () {
    GameEngine.processDiceThrow();
});

actionBuyItem.addEventListener('click', function () {
    GameEngine.buyItem()
});

actionSkipItem.addEventListener('click', function () {
    GameEngine.skipItem()
});


const GameEngine = {
    gameFields: [],
    availableFields: [...availableFields],
    players: [...availablePlayerCollection],
    currentPlayerIndex: 0,
    currentFieldIndex: 0,


    handleGameOver() {
        let thisPlayerWallet = GameEngine.players[this.currentPlayerIndex].wallet
        let tax = GameEngine.availableFields[GameEngine.currentFieldIndex].tax
        let owner = GameEngine.availableFields[GameEngine.currentFieldIndex].owner
        let thisPlayer = GameEngine.players[this.currentPlayerIndex].id

        if (thisPlayerWallet < tax && owner != thisPlayer) {
            alert(thisPlayerName + ", GAME OVER!")
            GameEngine.startGame();
            return true
        }
        return false;
    },

    showPlayerTurn() {
        playerInfoTurn.innerHTML = ("The player on turn is: " + GameEngine.players[this.currentPlayerIndex].name);
        GameEngine.showPlayersWallet(1, playerOneWallet);
        GameEngine.showPlayersWallet(2, playerTwoWallet);
    },


    showPlayersWallet(id, walletContainer) {
        let player = GameEngine.players.find(p => p.id == id);

        walletContainer.innerHTML = player.name + ", you have " + player.wallet + " bgn in your wallet!"

    },


    hideButtonsBuySkip() {
        actionBuyItem.style.display = "none";
        actionSkipItem.style.display = "none";
    },

    hideInfo() {
        diceInfo.style.display = "none";
        itemInfo.style.display = "none";
    },

    skipItem() {

        this.currentPlayerIndex = this.currentPlayerIndex == 0 ? 1 : 0;
        GameEngine.hideButtonsBuySkip();
        GameEngine.hideInfo();
        GameEngine.showPlayerTurn();
        throwDice.style.display = "inline-block";


    },

    payTax() {

        const currentTax = GameEngine.availableFields[GameEngine.currentFieldIndex].tax

        if (GameEngine.handleGameOver() == false) {
            GameEngine.players[this.currentPlayerIndex].wallet -= currentTax
            alert(GameEngine.players[this.currentPlayerIndex].name + ", you pay " + currentTax
                + " tax to " + GameEngine.players.find(p => p.id == GameEngine.availableFields[GameEngine.currentFieldIndex].owner).name)
            this.currentPlayerIndex = this.currentPlayerIndex == 0 ? 1 : 0;

            GameEngine.showPlayerTurn();
            GameEngine.players[this.currentPlayerIndex].wallet += currentTax;
            throwDice.style.display = "inline-block";
        }

    },

    buyItem() {

        if (GameEngine.players[this.currentPlayerIndex].wallet < GameEngine.availableFields[GameEngine.currentFieldIndex].price) {
            alert(GameEngine.players[this.currentPlayerIndex].name + ", you don'n have enought money! ")
            return;
        }

        GameEngine.players[this.currentPlayerIndex].wallet -= GameEngine.availableFields[GameEngine.currentFieldIndex].price;
        GameEngine.availableFields[GameEngine.currentFieldIndex].owner = GameEngine.players[this.currentPlayerIndex].id;

        GameEngine.hideButtonsBuySkip();
        GameEngine.hideInfo();
        this.currentPlayerIndex = this.currentPlayerIndex == 0 ? 1 : 0;
        GameEngine.showPlayerTurn();

        throwDice.style.display = "inline-block";
    },

    showItemInfo() {
        itemInfo.innerHTML = (GameEngine.players[this.currentPlayerIndex].name + ", you are in " + GameEngine.availableFields[this.currentFieldIndex].name);
    },

    processDiceThrow() {
        let currenDiceThrow = GameEngine.throwDice(6);
        diceInfo.innerHTML = (GameEngine.players[this.currentPlayerIndex].name + ", you throw : " + currenDiceThrow);
        GameEngine.players[this.currentPlayerIndex].activeBox += currenDiceThrow;
        if (GameEngine.players[this.currentPlayerIndex].activeBox >= this.availableFields.length) {
            GameEngine.players[this.currentPlayerIndex].activeBox -= this.availableFields.length;
            GameEngine.players[this.currentPlayerIndex].wallet += 1000;
            GameEngine.showPlayersWallet(1, playerOneWallet);
            GameEngine.showPlayersWallet(2, playerTwoWallet);
        }
        throwDice.style.display = "none";

        this.currentFieldIndex = GameEngine.players[this.currentPlayerIndex].activeBox;

        GameEngine.showItemInfo();

        if (GameEngine.players[this.currentPlayerIndex].id != GameEngine.availableFields[GameEngine.currentFieldIndex].owner
            && GameEngine.availableFields[GameEngine.currentFieldIndex].owner != null) {
            GameEngine.payTax()
        }
        if (GameEngine.availableFields[GameEngine.currentFieldIndex].owner == null) {
            actionBuyItem.style.display = "inline-block";
            actionSkipItem.style.display = "inline-block";
        }
        if (GameEngine.players[this.currentPlayerIndex].id == GameEngine.availableFields[GameEngine.currentFieldIndex].owner) {
            throwDice.style.display = "inline-block";
            this.currentPlayerIndex = this.currentPlayerIndex == 0 ? 1 : 0;
            GameEngine.showPlayerTurn();

        }
        diceInfo.style.display = "block";
        itemInfo.style.display = "block";
        this.generateBoard();

    },

    drawBoard() {

    },
    getBoxTemplate: (fieldInfo) => {

        let template = [`<div class = "box"><span> ${fieldInfo.name}</span>`]
        if (fieldInfo.id != 0) {
            template.push(`<br> <span> price: ${fieldInfo.price} </span>
            <br> <span> tax: ${fieldInfo.tax} </span> `);

        }

        if (fieldInfo.owner != null) {
            template.push(`<br> <span> owner: ${GameEngine.players.find(p => p.id == fieldInfo.owner).name} </span>`)
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
        this.availableFields = [...availableFields];
        this.players = [...availablePlayerCollection];
        this.generateBoard();
        this.showPlayerTurn();

    },

    throwDice: (sideCount) => {
        return Math.floor(Math.random() * Math.floor(sideCount)) + 1;
    }
}
GameEngine.startGame();


