function solution(babbling){
	var answer = 0;
	const basic_words = ['aya', 'ye', 'woo', 'ma'];
	
	for(let b of babbling){
		for(let word of basic_words){
			b = b.replace(word, "here");
        }
		b = b.replaceAll("here", "");
		if (b === "") answer ++;
	}
	return answer;
}