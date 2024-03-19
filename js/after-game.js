function scorePlayer(hasWin) {
    timer.stop();
    let score= $(".board_score").find("span").text();
    let text = "";
    
    if (hasWin) {
        text += "축하합니다! 게임을 클리어 하셨습니다!\n"
    }
    text += "당신의 점수는" + score + "점 입니다!";
    $("#result").text(text);
    showFinishedDialog();
}