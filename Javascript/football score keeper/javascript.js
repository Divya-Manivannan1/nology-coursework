let teamOneScore=0;
let teamTwoScore=0;
let isGameOn=true;


function handleTeamOneScoreButton(){
    if(isGameOn){
        teamOneScore++;
        team1Score.value=teamOneScore;
    }
}

function handleTeamTwoScoreButton(){
    if(isGameOn){
        teamTwoScore++;
        team2Score.value=teamTwoScore;
    }
}

function handleStopameButton(){
    isGameOn=false;
}