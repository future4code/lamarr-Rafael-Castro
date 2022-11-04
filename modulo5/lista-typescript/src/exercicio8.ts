function possibleAnagrams(word:string):number{
    const lettersCount:number = word.length    
    if (lettersCount === 0 || lettersCount === 0) {
        return 1
    }
    let result = lettersCount
    for (let i = lettersCount - 1; i > 1; i--) {
        result *= i
    }
    return result
}

console.log(possibleAnagrams('mesa'))
