const grid = document.getElementById('grid');
let gridCell = document.getElementsByClassName('grid-cell');
let newBtn = document.getElementById('new');
let clearBtn = document.getElementById('clear');
let eraseBtn = document.getElementById('erase');
let blackBtn = document.getElementById('black');
let colorBtn = document.getElementById('color');
let shadeBtn = document.getElementById('shade');

createGrid();
paintItBlack();

newBtn.addEventListener('click', function() {
	clearGrid();
	newGrid();
	paintItBlack();
})

clearBtn.addEventListener('click', function() {
	clearGrid();
	createGrid();
	paintItBlack();
})

eraseBtn.addEventListener('click', function() {
	eraseCell();
})

blackBtn.addEventListener('click', function () {
	paintItBlack();
})

colorBtn.addEventListener('click', function() {
	rainingBows();
})

shadeBtn.addEventListener('click', function() {
	shadeCell();
})

function createGrid() {
	grid.style.gridTemplateColumns = 'repeat(128, 1fr)';
	grid.style.gridTemplateRows = 'repeat(128, 1fr)';
    for(let i = 0; i < 16384; i++) {
        let cell = document.createElement('div');
        	cell.setAttribute('class', 'grid-cell');
			grid.appendChild(cell);
	}
}

function paintItBlack() {
	for (let i = 0; i < gridCell.length; i++) {
		gridCell[i].addEventListener('mouseenter', function() {
			gridCell[i].style.backgroundColor = 'black';
		})
	}
}

function newGrid() {
	let gridSize = Number(prompt('Enter grid size (1-128)'));
	if(gridSize < 1 || gridSize > 128 || gridSize == null) {
		alert('Invalid grid size')
		createGrid();
	} else {
		grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
		grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    	for(let i = 0; i < (gridSize * gridSize); i++) {
        	let cell = document.createElement('div');
        		cell.setAttribute('class', 'grid-cell');
				grid.appendChild(cell);
		}
	}	
}

function clearGrid() {
    if(grid.hasChildNodes()) {
        while(grid.hasChildNodes()) {
            grid.removeChild(grid.lastChild);
        }
    }
}

function eraseCell() {
	for (let i = 0; i < gridCell.length; i++) {
		gridCell[i].addEventListener('mouseenter', function() {
			gridCell[i].style.backgroundColor = null;
		})
	}
}

function rainingBows() {
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
	for (let i = 0; i < gridCell.length; i++) {
		gridCell[i].addEventListener('mouseenter', function() {
			gridCell[i].style.backgroundColor = rgb;
		})
	}
}

function shadeCell() {
	for (let i = 0; i < gridCell.length; i++) {
		gridCell[i].addEventListener('mouseenter', function() {
			let j = 0;
			if(j < 10) {j++};
			gridCell[i].style.opacity = Number(gridCell[i].style.opacity)+0.1
		})
	}
}