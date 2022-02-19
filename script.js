const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');


canvas.width = 181;
canvas.height = 657;

const technology = ['  0xBFEREST  ', '  PEGA123  ', '  0xBFEREST   ', '  11DAST 11  ', '  0xBFEREST   ', '  111Python  ', ' 0xBFEREST   ', '  88CSS  ', '  0xBFEREST  ', '  C  '];

const fontSize = 16;
const columns = canvas.width / (fontSize * 2);

const rainDrops = [];

var x = 0;
var y = 0;


for (let t = 0; t < columns; t++) {
	rainDrops[t] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for (let i = 0; i < rainDrops.length; i++) {
		if (x == 9) {
			x = 0;
		}
		else {
			x = x + 1;
		}
		y = 0;
		
		while (y < technology[x].length) {
			const text = technology[x][y];
			context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

			if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
				rainDrops[i] = 0;
			}
			y = y + 1;
			rainDrops[i]++;
		}
	}
};

setInterval(draw, 200);