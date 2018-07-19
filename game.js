let app = new Vue({
	el: '#app',
	data: {
		role: 'Problem Maker',
		problem: ''
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
		submit: function(){

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