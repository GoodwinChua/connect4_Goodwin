	var Tray = function(row, col){
		this.row = row;
		this.col = col;
		this.grid = [];
		this.initialize =  function(){
			this.grid = new Array(row);
			for (var i = 0; i < row; i++) {
				this.grid[i] = new Array(col);
			}
			for (var i = 0; i < row; i++) {
				for ( var j = 0; j < col; j++){
					this.grid[i][j] = 0;
				}
			}
		}
		this.dropCoin = function(player, column){
			if ( typeof player == 'number' && typeof column == 'number' ){
				for (var i = this.row-1; i >= 0; i--){
					if ( (this.grid[i][column]) == 0){
						this.grid[i][column] = player;
						return i;
						break;
					}
				}
			}
		}
			
		this.printGrid = function(){
			for (var i = 0; i < row; i++) {
				for ( var j = 0; j < col; j++){
					console.log(this.grid[i][j]);
				}
			}
		}
		this.getWinner = function(){
			var found = false;
			var winningPlayer = 0;
			var isBoardFull = true;
			for ( var i = 0; i < row; i++){
				for ( var j = 0; j < col; j++){
					if ( this.grid[i][j] != 0){
						// Check horizontally
						//console.log("checking " + i + " " + j);
						if ( j+3 < col ){
							if ( 	this.grid[i][j] == this.grid[i][j+1]
									&&	this.grid[i][j] == this.grid[i][j+2]
									&&	this.grid[i][j] == this.grid[i][j+3]	)
							{
								winningPlayer = this.grid[i][j];
								found = true;
							}
						}
						// Check vertically
						if ( i+3 < row){
							if ( this.grid[i][j] == this.grid[i+1][j]
								&&	this.grid[i][j] == this.grid[i+2][j]
								&&	this.grid[i][j] == this.grid[i+3][j]	)
							{
								winningPlayer = this.grid[i][j];
								found = true;
							}
						}
						// Check diagonal "/"
						if ( i+3 < row && j+3 < col){
							if ( this.grid[i][j] == this.grid[i+1][j+1]
								&&	this.grid[i][j] == this.grid[i+2][j+2]
								&&	this.grid[i][j] == this.grid[i+3][j+3]	)
							{
								winningPlayer = this.grid[i][j];
								found = true;
							}
						}
						// Check diagonal "\"
						if ( i+3 < row && j-3 >= 0){
							if ( this.grid[i][j] == this.grid[i+1][j-1]
								&&	this.grid[i][j] == this.grid[i+2][j-2]
								&&	this.grid[i][j] == this.grid[i+3][j-3]	)
							{
								winningPlayer = this.grid[i][j];
								found = true;
							}
						}
					}
					else {
						isBoardFull = false;
					}
				}
			}
			if ( found ){
				// console.log("Congratulations!");
				return winningPlayer;
			}
			else if ( isBoardFull ){
				//console.log("draw");
				return -1;
			}
			else {
				// console.log("no winner");
				return 0;
			}
		}
	};
	