
$(document).ready(function() {

    $(document).on('click', '.card', function () {
        const $values = $('.values');
        if ($values.hasClass("game-started")) {
            var $card = $(this);
            if ($card.css('transform') == "none") {
                $card.css('transform', 'rotateY(180deg)');
            } else {
                $card.css('transform', '');
            }
        }
    });
    
});

function checkGame(src) {
    const values = document.querySelector('.values');
    let dest = values.getAttribute('data-time');
    let isFinished = src === dest;

}