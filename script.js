let cells = document.querySelectorAll(".cell");
let resetBtn = document.querySelector(".reset-btn");
let newGame = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let gameContainer = document.querySelector(".container")

gameContainer.classList.remove("hide3");
resetBtn.classList.remove("hide2");
let xTurn = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () =>{
    xTurn = true;
    enableCells();
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide2");
    gameContainer.classList.remove("hide3");


}


cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    console.log("box was clicked");
    if (xTurn) {
      cell.innerText = "X";
      cell.style.color= "green";
      xTurn = false;
    } else {
      cell.innerText = "O";
      cell.style.color= "red";
      xTurn = true;
    }
    cell.disabled = true;
    checkWinner();
  });
});

const disabelCells = () => {
    for(let cell of cells){
        cell.disabled = true;
    }
}
const enableCells = () => {
    for(let cell of cells){
        cell.disabled = false;
        cell.innerText = "";
    };
};

const showWinner = (winner) =>{
    msg.innerText =`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabelCells();
    resetBtn.classList.add("hide2");
    gameContainer.classList.add("hide3");

    
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    let pos1Val = cells[pattern[0]].innerText;
    let pos2Val = cells[pattern[1]].innerText;
    let pos3Val = cells[pattern[2]].innerText;
    if( pos1Val != "" && pos2Val != "" , pos3Val != ""){
        if(pos1Val == pos2Val && pos2Val == pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
            
        };
    };
  };
};

resetBtn.addEventListener("click",resetGame);
newGame.addEventListener('click',resetGame);
