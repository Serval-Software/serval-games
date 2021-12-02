class Minesweeper {
	constructor(difficulty) {
		this.difficulty = difficulty
		this.flags = {}

		this._initSettings()
		this._initBoard()
	}

	_initSettings() {
		const currentSettings = settings[this.difficulty];
		this.width = currentSettings.width;
		this.height = currentSettings.height;
		this.mines = currentSettings.mines;
		this.size = this.width * this.height;
	}

	_initBoard() {
		this.board = Array.from({ length: this.height }, () => Array.from({ length: this.width }, () => 0));
		this.hidden = Array.from({ length: this.height }, () => Array.from({ length: this.width }, () => 1));
		let cellsIndex = Array.from({length: this.height * this.width}, (x, idx) => idx);

		// Set mines
		for(let i = 0; i < this.mines; i++) {
			const idx = Math.ceil(Math.random() * (cellsIndex.length + 1));
			const rowIdx = Math.ceil(idx / this.height);
			const columnIdx = idx % this.width;

			this.board[rowIdx][columnIdx] = -1;
			cellsIndex = cellsIndex.slice(0, idx).concat(cellsIndex.slice(idx + 1, cellsIndex.length));
		}

		// Set counts
		for(let i = 0; i < this.height; i++) {
			for(let j = 0; j < this.width; j++) {
				this.board[i][j] = this._getNeighbors(i, j);
			}
		}
	}

	_getNeighbors(row, column) {
		if(this.board[row][column] === -1) {
			return -1;
		}

		let count = 0;
		for(let i = Math.max(row - 1, 0); i < Math.min(row + 2, this.height); i++) {
			for(let j = Math.max(column - 1, 0); j < Math.min(column + 2, this.width); j++) {
				count += this.board[i][j] === -1;
			}
		}

		return count;
	}

	discoverCell(row, column) { }
	
	placeFlag(row, column) { }
}

const settings = {
	beginner: {
		width: 7,
		height: 8,
		mines: 10
	},
	intermediate : {
		width: 16,
		height: 16,
		mines: 40
	},
	expert : {
		width: 16,
		height: 31,
		mines: 99
	}
}


const game = new Minesweeper("beginner")
console.log(game.board);