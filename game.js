let app = new Vue({
	el: '#app',
	data: {
		player: 'player name',
		role: 'Problem Maker',
		// roles: Problem Maker, Elon Musk, Tech Innovator
		problem: '',
		solution: '',
		solutions: [
			{player: 'Player 1', solution: 'two word solution here'},
			{player: 'Player 2', solution: 'robot submarine'}
		]
	},
	computed: {
		problemValidation: function() {
			// check number of words in problem:
			if(countWords(this.problem) > 6) {
				document.getElementById('submit').disabled = true;
				return 'error';
			}
			else {
				document.getElementById('submit').disabled = false;
				return 'good';
			}
		}
	},
	methods: {
		submitproblem: function(){

		},
		submitsolution: function(){
			this.solutions.push({player: this.player, solution: this.solution});
			console.log(this.solutions);
		}
	}
});
function countWords(essay) {
	let whitespace = false;
	let wordcount = 1;
	for (let i = essay.length; i >= 0; i--) {
		if (essay[i] === " ") {
			whitespace = true;
		}
		if (whitespace === true && essay[i] !== " ") {
			wordcount += 1;
			whitespace = false;
			if (essay[i] === "-") {
				wordcount -= 1;
			}
		}
	}
	return wordcount;
}