class TicTacToe {
    constructor() {
      this.player = 1
      this.field = [[null,null,null],
                    [null,null,null],
                    [null,null,null]]
    }

    getCurrentPlayerSymbol() {
      if(this.player == 1){
        return 'x'
      }else{
        return'o'
      }
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] == null){
        if (this.player == 1){
          this.field[rowIndex][columnIndex] = 'x'
          this.player = 2
        }else{
          this.field[rowIndex][columnIndex] = 'o'
          this.player = 1
        }
      }
    }

    isFinished() {
      if((this.getWinner() !==null) || (this.isDraw() == true)){
        return true
      }else{
        return false
      }
    }

    getWinner() {
      let x = this.field
      if ((x[1][1] == x[0][0] && x[1][1] == x[2][2] && x[1][1] != null) || (x[1][1] == x[2][0] && x[1][1] == x[0][2] && x[1][1] !==null)){
        return x[1][1]
      }else{
          let i = 0
          while (i<3){
            if (x[i][0] == x[i][1] && x[i][0] == x[i][2] && x[i][0]!==null){
              return x[i][0]
            }else if (x[0][i] == x[1][i] && x[0][i] == x[2][i] && x[0][i] !== null){
              return x[0][i]
            }
            i++
          }
          return null
      }
    }

    noMoreTurns() {
      let noSpace = true
      let x = 0
      while (x < 3){
        let y = 0
        while (y <3){
          if (this.field[x][y] == null){
            noSpace = false
          }
          y++
        }
        x++
      }
      if(noSpace == true){
        return true
      }else{
        return false
      }
    }

    isDraw() {
      if((this.getWinner() == null) && (this.noMoreTurns() == true)){
        return true
      }else{
        return false
      }
    }

    getFieldValue(rowIndex, colIndex) {
      if(rowIndex >= 0 && rowIndex < 3 && colIndex >= 0 && colIndex <3){
        return this.field[rowIndex][colIndex]
      }else{
        return null
      }
    }
}

module.exports = TicTacToe;
