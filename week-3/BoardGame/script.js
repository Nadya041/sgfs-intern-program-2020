let myBoardElement = document.getElementById("myBoard");

const GameEngine = {
    gameFields: [],
    availableFields: [...availableFields],

    drawBoard() {

    },
    getBoxTemplate: (fieldInfo) => {
        return `<div class = "box">
         
      <spam> ${fieldInfo.name} </spam>
      <br> <spam> price: ${fieldInfo.price} </spam>
      <br> <spam> tax: ${fieldInfo.tax} </spam>
     
      </div>`;
    },

    generateBoard() {
        let template = [`
        <div class  = "first-row row" >
        <div class = "box"> ${availableFields[0].name} </div>

      ` ]
        for (let i = 1; i < 8; i++) {
            template.push(this.getBoxTemplate(availableFields[i]));
        }
        template.push(" </div> ");
        template.push(`<div class = "second-row row">
      
      `)
        for (let i = 8; i < 10; i++) {
            template.push(this.getBoxTemplate(availableFields[i]));
        }
        template.push(" </div> ");
        template.push(`<div class = "third-row row">
      
      `)
        for (let i = 10; i < 12; i++) {
            template.push(this.getBoxTemplate(availableFields[i]));
        }
        template.push(" </div> ");
        template.push(`<div class = "last-row row">
      
      `)
        for (let i = 12; i < 20; i++) {
            template.push(this.getBoxTemplate(availableFields[i]));
        }
        template.push(" </div> ");
        myBoardElement.innerHTML = template.join("");

    },

    throwDice: (sideCount) => {
        return Math.floor(Math.random() * Math.floor(sideCount)) + 1;
    }
}
GameEngine.generateBoard();
GameEngine.drawBoard();

console.log(GameEngine.throwDice(6));
