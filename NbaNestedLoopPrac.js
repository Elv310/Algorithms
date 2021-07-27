
    //     @ Pelicans	L128-111
    //     @ Suns	L111-94
    //     vs Hawks	L99-94
    //     vs Hornets	W116-105
    //     vs Timberwolves	W137-121
    //     @ Warriors	W128-97
    //     vs Pacers	W105-100
    //     @ Kings	L123-120
    //     vs Suns	L114-104
    //     vs Warriors	W117-91


let lakerGames = [
    [128, 111],
    [111, 94],
    [99, 94],
    [105, 116],
    [121, 137],
    [97, 128]
]
for(let i = 0; i < lakerGames.length; i++){
    console.log(lakerGames[i][0], lakerGames[i][1])

}


let lakersScores = [111, 94, 116, 137, 128 ]
let opponentsScores = [128, 111, 94, 105, 121, 97]
// console.log("lakers scored", lakersScores[i],"opponents scored", opponentsScores[i])

for(let i = 0; i < lakersScores.length; i++){
    // console.log("lakers scored", lakersScores[i],"opponents scored", opponentsScores[i])

    // if( lakersScores[i] > opponentsScores[i]){
    //     // console.log(lakersScores[i])
    // }

}

let lakersWin = lakerGames
let lakersLoss = opponentsScores

if(lakersWin - opponentsScores){
    if(opponentsScores - lakersLoss){
        console.log("the lakers won",lakersScores[i],"and they won by",lakersWin,"the lakers loss", opponentsScores[i],"lakers loss by",lakersLoss )
    }
}



// Output if the Lakers won the game and how much they won by; if they lost , Output how much did they lose by