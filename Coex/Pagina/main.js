//// Constantes ///

const ganador = document.querySelector('.ganador'),
    Game_state = ['', '', '', '', '', '', '', '', ''],
    combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ],
    win_message = () => `El jugador ${currentPlayer} ha ganado!` ,
    Draw_message = () => `Empataron :/` ,
    current_player_turn = () =>`Turno del jugador ${currentPlayer}`

    ///Variables /////

let gameActive = true,
    currentPlayer = 'O'


///// Funciones ///

function main() {
    handleStatusDisplay(current_player_turn())
    listeners()
}
main()

function handleStatusDisplay(message) {
    ganador.innerHTML = message
     
}



function listeners() {
    document.querySelector('.container').addEventListener('click', handleCellClick)
    document.querySelector('.reset').addEventListener('click', handleRestartGame)
}

function handleCellClick(clickedEvent) {
    const ClickedCell = clickedEvent.target
    if(ClickedCell.classList.contains('cuadro')) {
        const ClickedCellIndex  = Array.from(ClickedCell.parentNode.children).indexOf(ClickedCell)
        console.log(ClickedCellIndex);
        if(Game_state[ClickedCellIndex] !== '' || !gameActive) {
            return
        }
        handleCellPlayed(ClickedCell,ClickedCellIndex)
        handleResultValidation() 
    }
    console.log(ClickedCell);

}

function handleCellPlayed (ClickedCell, ClickedCellIndex) {
    Game_state[ClickedCellIndex] = currentPlayer
    ClickedCell.innerText = currentPlayer

}

function handleResultValidation() {
    let roundMon = false
    for(let i = 0; i<combos.length; i++) {
        const winCondition = combos[i]  
        let position1 = Game_state[winCondition[0]],
            position2 = Game_state[winCondition[1]],
            position3 = Game_state[winCondition[2]]
        if(position1 === '' || position2 === '' || position3=== ''){
            continue;
        }
        if(position1 === position2 && position2 === position3){
            roundMon = true 
            break;
        }
    }
    if(roundMon){
        handleStatusDisplay(win_message())
        gameActive = false
        return
    }
    let roundDraw = !Game_state.includes('')

    if(roundDraw){
        handleStatusDisplay(Draw_message())
        game_active = false
        return
    }
    handlerPlayerChange ()
}

function handlerPlayerChange () {
    currentPlayer = ( currentPlayer ===  'X' ) ? 'O': 'X'
    handleStatusDisplay(current_player_turn())

}

function handleRestartGame() {
    gameActive = true
    currentPlayer = 'O',
    restartGameState()
    handleStatusDisplay(current_player_turn())
    document.querySelectorAll('.cuadro').forEach(cell => cell.innerText = '')

}

function restartGameState() {
    let i = Game_state.length
    while (i--) {
        Game_state[i] = ''
    }
  }
  
  main()