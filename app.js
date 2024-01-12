var app = {
    board: document.getElementById('board'),
    init: function () {
        console.log('init !');
        app.drawBoard()
        app.playerMove()
    },

    player: {
        x: 0,
        y: 0,
        direction: 'right',
    },
    targetCell: {
        x: 5,
        y: 3
    },
    drawBoard() {

        app.board.textContent =''
      // debugger;
        for (let row = 0; row < 4; row++) {
            var boardRow = document.createElement('div')
            boardRow.classList.add('row')
            app.board.append(boardRow)
            for (let cell = 0; cell < 6; cell++) {
                var boardCell = document.createElement('div')
                boardCell.classList.add('cell')
                boardRow.append(boardCell)
                if (cell === app.targetCell.x && row === app.targetCell.y) {

                    boardCell.classList.add('targetCell')

                }
                if (cell === app.player.x && row === app.player.y) {
                    var playerDiv = document.createElement('div');
                    playerDiv.classList.add('player')
                    boardCell.append(playerDiv);


                }
            }


        }



    },
    playerMove(){
        document.addEventListener('keydown', function(event) {
            switch(event.key) {
                case 'ArrowUp':
                    app.player.y = Math.max(0, app.player.y - 1);
                    break;
                case 'ArrowDown':
                    app.player.y = Math.min(3, app.player.y + 1);
                    break;
                case 'ArrowLeft':
                    app.player.x = Math.max(0, app.player.x - 1);
                    break;
                case 'ArrowRight':
                    app.player.x = Math.min(5, app.player.x + 1);
                    break;
            }
            app.drawBoard(); // Redessiner la grille après le déplacement
        });
        

    }

};

document.addEventListener('DOMContentLoaded', app.init);