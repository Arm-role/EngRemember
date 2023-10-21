let correctword = 0;
let Words = [{eng:"apple", thai:"แอปเปิล"},
             {eng:"banana", thai:"กล้วย"},
            ];

let current = correctword;
let text = "";
ReWord()

function getValue(){
    let getWord = document.getElementById("thaiWord")
    let WordInput = getWord.value;
    if(WordInput == text){
        correctword ++;
        getWord.value = "";
    }
    else{
        Nottrue()
    }
    let score = document.getElementById("Score");
    score.innerText = correctword;

    if(current != correctword){
        ReWord();
        current = correctword;
    }
}

function ReWord(){
    let randomWord = Math.floor(Math.random() * Words.length);
    let word = Words[randomWord];
    let test = document.getElementById("Word");
    test.innerText = word.eng; 
    text = word.thai;
}
function Nottrue(){
    console.log("No")
    let getWord = document.getElementById("thaiWord")
    getWord.value = "";
}