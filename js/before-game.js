
$(document).ready(function() {
    $(document).on("click", "#start", function () {
        var row = $('#row').val();
        var col = $('#col').val();
        var $tableBody = $('tbody');

        // 기존에 있는 카드 제거
        $tableBody.empty();

        // 행과 열에 해당하는 카드 생성 및 추가
        for (var i = 0; i < row; i++) {
            var $row = $('<tr>');
            for (var j = 0; j < col; j++) {
                var $cardCell = $('<td>');
                var $cardContainer = $('<div class="container">');
                var $card = $('<div class="card">');
                var $front = $('<div class="front">').text('front');
                var $back = $('<div class="back">').text('back');

                // 카드 컨텐츠 추가
                $card.append($front);
                $card.append($back);
                $cardContainer.append($card);
                $cardCell.append($cardContainer);
                $row.append($cardCell);
            }
            $tableBody.append($row);
        }
    });
});