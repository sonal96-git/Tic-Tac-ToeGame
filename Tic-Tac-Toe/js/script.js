let player=1;
let gameBoard=[[0,0,0],[0,0,0],[0,0,0]];
console.log(gameBoard);
function clickEvent(e,posX,posY)
{
    if(gameBoard[posX][posY]==0)
    {
        e.innerHTML=player==1 ? "x" : "0";
        gameBoard[posX][posY]=player;
        if(checkWinner(gameBoard,player))
        {
            
            setTimeout(()=>
            {
                alert("player"  + player + "Won the game..!!!");
            },0);
            return;
          
        }
        if(checkDraw(gameBoard))
        {
            setTimeout(()=>
            {
                alert("Game Over..!!!");
            },0);
        }
       
       
    }
    player=player==1 ? 2 :1;
   
}

function checkWinner(board, player) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player) {
            return true;
        }
    }
    for (let i = 0; i < board.length; i++) {
        if (board[0][i] == player && board[1][i] == player && board[2][i] == player) {
            return true;
        }
    }

    if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
        return true;
    }

    if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
       return true;
    }

    return false;

}
function checkDraw(gameBoard)
{
    for(let i=0;i< gameBoard.length;i++)
    {
        for(let j=0;j< gameBoard.length;j++)
        {
            if(gameBoard[i][j]==0)
            {
                return false;
            }
        }
    }
    return true;
}
 
function restartGame()
{
    window.location.href="index.html";
}