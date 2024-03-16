$(document).ready(function() {
    $('.card').on('click', function () {
        var $card = $(this);
        if ($card.css('transform') == "none") {
            $card.css('transform', 'rotateY(180deg)');
        } else {
            $card.css('transform', '');
        }
    });
});