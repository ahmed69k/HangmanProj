import { createStore } from "vuex";

export default createStore({
    state:{
        word:'',
        wordLength: null,
        attemptsLeft: null,
        guessedLetters: [],
        gameOver: false,
        win: false,
        difficulty: null,
        mostRecentlyGuessed: ''
    },
    mutations:{
        setDifficulty(state,input){
            state.difficulty = input;
            console.log(state.difficulty)
        },
        setAttempts(state,difficulty){
            if(difficulty == 'easy'){
                state.attemptsLeft = 8
                state.wordLength = 3
            }
            else if(difficulty == 'medium'){
                state.attemptsLeft = 6
                state.wordLength = 6
            }
            else{
                state.attemptsLeft = 4
                state.wordLength = 8
            }
        },
        setWord(state,word){
            state.word = word.toLowerCase();
            state.guessedLetters = [];
            state.gameOver = false;
            state.win = false;
        },
        guessLetter(state,letter){
            state.mostRecentlyGuessed = letter
            if(state.guessedLetters.includes(letter)||state.gameOver){
                return
            }
            state.guessedLetters.push(letter)
            if(!state.word.includes(letter)){
                state.attemptsLeft--;
                
                if(state.attemptsLeft<=0){
                    state.gameOver = true;
                }
            }
            else{
                const allGuessed = state.word.split('').every(ch => state.guessedLetters.includes(ch))
                if(allGuessed){
                    state.win = true;
                    state.gameOver = true;
                }
            }
        }
    },
    actions: {
        async fetchRandomWord({state, commit}){
            const url = `https://random-word-api.herokuapp.com/word?number=1&length=${state.wordLength}`
            try{
                const res = await fetch(url)
                const data = await res.json()
                commit('setWord', data[0])
                if(!data || !data[0]){
                    console.warn("No word returned!")
                    return;
                }
                console.log(data[0])
                return data[0];
                
            }
            catch(e){
                console.log(e)
            }
        }
    },
    getters: {

    }
})