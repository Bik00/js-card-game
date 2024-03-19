let flippedCards = []; // 이미 뒤집힌 카드를 추적하는 배열
let pauseFlipping = false; // 추가적인 카드 뒤집기를 잠시 멈출지 결정하는 플래그

$(document).ready(function() {

    $(document).on('click', '.card', function () {
        const $values = $('.values');
        if ($values.hasClass("game-started") && pauseFlipping == false && !$values.hasClass("corrected")) {

            checkCard($(this));
        }
    });

});

function checkCard($card) {

    // 카드가 이미 뒤집히는 중인지 확인
    if ($card.hasClass('flipping')) {
        // 뒤집히는 중이면 클릭 무시
        return;
    }

    // 뒤집히는 중 플래그 추가
    $card.addClass('flipping');

    if ($card.css('transform') != "none" && flippedCards.length < 2 && !flippedCards.includes($card)) {
        $card.css('transform', '');
        flippedCards.push($card);

        // 뒤집힌 카드가 2개인 경우 매칭 검사
        if (flippedCards.length == 2) {
            pauseFlipping = true; // 더 이상의 카드 뒤집기를 잠시 멈춤
            if (flippedCards[0].data('value') === flippedCards[1].data('value')) {
                // 카드가 일치하는 경우 처리
                let score = $(".board_score").find("span").text();
                $(".board_score").find("span").text(parseInt(score) + 30 + "");
                flippedCards.forEach(function(card) {
                    card.addClass("corrected");
                });                
                flippedCards = []; // 배열 초기화
                pauseFlipping = false; // 카드 뒤집기 재개
            } else {
                // 카드가 일치하지 않는 경우, 1초 후에 다시 뒤집음
                setTimeout(() => {
                    flippedCards.forEach(function(card) {
                        card.css('transform', 'rotateY(180deg)');
                    });    
                    flippedCards = []; // 배열 초기화
                    pauseFlipping = false; // 카드 뒤집기 재개
                }, 1000);
            }
        }
    }

    // 모든 처리가 끝난 후에 'flipping' 클래스를 제거하여 다시 클릭 가능하게 함
    setTimeout(() => {
        $card.removeClass('flipping');
    }, 500); // 예: 500ms 후에 처리, 카드 뒤집기 애니메이션 시간에 맞춰 조정 필요
}


function checkGame(src) {
    const values = document.querySelector('.values');
    let dest = values.getAttribute('data-time');
    let isFinished = src === dest;

}