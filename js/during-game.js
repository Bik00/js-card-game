let flippedCards = []; // 이미 뒤집힌 카드를 추적하는 배열
let pauseFlipping = false; // 추가적인 카드 뒤집기를 잠시 멈출지 결정하는 플래그

$(document).ready(function() {

    $(document).on('click', '.card', function () {
        const $values = $('.values');
        if ($values.hasClass("game-started") && pauseFlipping == false) {

            checkCard($(this));
        }
    });

});

function checkCard($card) {
    if ($card.css('transform') != "none" && flippedCards.length < 2) {
        $card.css('transform', '');
        flippedCards.push($card);

        // 뒤집힌 카드가 2개인 경우 매칭 검사
        if (flippedCards.length == 2) {
            pauseFlipping = true; // 더 이상의 카드 뒤집기를 잠시 멈춤
            if (flippedCards[0].data('value') === flippedCards[1].data('value')) {
                // 카드가 일치하는 경우 처리
                flippedCards = []; // 배열 초기화
                pauseFlipping = false; // 카드 뒤집기 재개
            } else {
                // 카드가 일치하지 않는 경우, 1초 후에 다시 뒤집음
                setTimeout(() => {
                    flippedCards.forEach(card => {
                        card.css('transform', 'rotateY(180deg)'); // 카드를 원래 상태로 되돌림
                    });
                    flippedCards = []; // 배열 초기화
                    pauseFlipping = false; // 카드 뒤집기 재개
                }, 1000);
            }
        }
    }
}


function checkGame(src) {
    const values = document.querySelector('.values');
    let dest = values.getAttribute('data-time');
    let isFinished = src === dest;

}