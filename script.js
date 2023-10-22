let TScore = 0;
let FScore = 0;
let Words = [{eng:"apple", thai:"แอปเปิล"},
             {eng:"banana", thai:"กล้วย"},
];
let wrong = FScore;
let correct = TScore;
let text = "";
let WordList = document.getElementById("wordslist")
WordList.innerText = Words.length;
ReWord()

function getValue(){
    let getWord = document.getElementById("thaiWord")
    let WordInput = getWord.value;
    if(WordInput == text){
        Correct();
    }
    else{
        Nottrue()
    }
}

function ReWord(){
    let randomWord = Math.floor(Math.random() * Words.length);
    let word = Words[randomWord];
    let test = document.getElementById("Word");
    test.innerText = word.eng; 
    text = word.thai;
}
function Correct(){
    TScore ++;
    let getWord = document.getElementById("thaiWord")
    getWord.value = "";
    let Tscore = document.getElementById("True");
    Tscore.innerText = TScore;
    if(correct != TScore){
        ReWord();
        correct = TScore;
    }
}
function Nottrue(){
    FScore ++;
    let getWord = document.getElementById("thaiWord")
    getWord.value = "";
    let Fscore = document.getElementById("False");
    Fscore.innerText = wrong;
    if(wrong != FScore){
        ReWord();
        wrong = FScore;
    }
}

function AddWord(){
    console.log("add");
    let InputThaiWord = document.getElementById("addthai").value
    let InputEngWord = document.getElementById("addeng").value
    console.log(InputThaiWord,InputEngWord);
    if(InputThaiWord.trim() !== "" && InputEngWord.trim() !== ""){
        Words.push({eng: InputEngWord,thai: InputThaiWord});
        console.log(Words);
        WordList.innerText = Words.length;
        document.getElementById("addthai").value = "";
        document.getElementById("addeng").value = "";
    }
    
}