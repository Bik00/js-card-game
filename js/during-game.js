$(document).ready(function() {
    $(document).on('click', '.card', function () {
        var $card = $(this);
        if ($card.css('transform') == "none") {
            $card.css('transform', 'rotateY(180deg)');
        } else {
            $card.css('transform', '');
        }
    });
});