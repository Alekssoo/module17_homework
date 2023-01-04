export function repeatWord(word, count) {
    let string = '';
    if (word) {
        for(let i = 0; i < count; i++) {
            if (i < count - 1) {
                string += (String(word) + " ");
            } else string += (String(word));
                
        }
    return string;} else return "word is not entered"
}