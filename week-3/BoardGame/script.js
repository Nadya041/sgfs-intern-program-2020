let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let box10 = document.getElementById("box10");
let box11 = document.getElementById("box11");
let box12 = document.getElementById("box12");
let box13 = document.getElementById("box13");
let box14 = document.getElementById("box14");
let box15 = document.getElementById("box15");
let box16 = document.getElementById("box16");
let box17 = document.getElementById("box17");
let box18 = document.getElementById("box18");
let box19 = document.getElementById("box19");
let box20 = document.getElementById("box20");

const GameEngine = {
    gameFields: [],
    availableFields: [
        "TRAP", "TRAP", "TRAP", "TRAP", "TRAP", "TRAP", "TRAP",
        "Invest", "Invest", "Invest",
        "Party hard", "Party hard", "Party hard",
        "Chance", "Chance", "Chance",
        "Steal", "Steal", "Steal"
    ],
    drawBoard() {
        box1.innerHTML = this.gameFields[0];
        box2.innerHTML = this.gameFields[1];
        box3.innerHTML = this.gameFields[2];
        box4.innerHTML = this.gameFields[3];
        box5.innerHTML = this.gameFields[4];
        box6.innerHTML = this.gameFields[5];
        box7.innerHTML = this.gameFields[6];
        box8.innerHTML = this.gameFields[7];
        box9.innerHTML = this.gameFields[8];
        box10.innerHTML = this.gameFields[9];
        box11.innerHTML = this.gameFields[10];
        box12.innerHTML = this.gameFields[11];
        box13.innerHTML = this.gameFields[12];
        box14.innerHTML = this.gameFields[13];
        box15.innerHTML = this.gameFields[14];
        box16.innerHTML = this.gameFields[15];
        box17.innerHTML = this.gameFields[16];
        box18.innerHTML = this.gameFields[17];
        box19.innerHTML = this.gameFields[18];
        box20.innerHTML = this.gameFields[19];


    },
    generateBoard() {
        this.gameFields.push("START");
        let cloneAvailableFields = [...this.availableFields];

        while (cloneAvailableFields.length > 0) {
            var item = cloneAvailableFields[Math.floor(Math.random() * cloneAvailableFields.length)];
            this.gameFields.push(item);
            const index = cloneAvailableFields.indexOf(item);
            cloneAvailableFields.splice(index, 1);
        }


    },

    throwDice: (sideCount) =>{
        return Math.floor(Math.random() * Math.floor(sideCount));

            
    }
}
GameEngine.generateBoard();
GameEngine.drawBoard();

console.log(GameEngine.throwDice(8));
