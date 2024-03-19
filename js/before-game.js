

$(document).ready(function() {
    $(document).on("click", "#start", function () {
        let row = $('#row').val();
        let col = $('#col').val();
        let $tableBody = $('tbody');
        let $list;

        // 게임 시작 시 카드 뒤집기 잠시 멈춤
        pauseFlipping = true;

        // 기존에 있는 카드 제거
        $tableBody.empty();

        // 랜덤 난수 생성 -> Array 형 반환
        $list = generateArray(row, col);

        // 행과 열에 해당하는 카드 생성 및 추가
        for (let i = 0; i < row; i++) {
            let $row = $('<tr>');
            for (let j = 0; j < col; j++) {
                let value = $list.pop();
                let $cardCell = $('<td>');
                let $cardContainer = $('<div class="container">');
                let $card = $('<div class="card">');
                let $front = $('<div class="front">');
                let $back = $('<div class="back">');

                // 배경 이미지 설정
                let val = value < 10 ? '0' + value : value;
                let imageUrl = "image/image_" + val + ".png"; // 이미지 경로 수정 필요
                $front.css("background-image", "url('" + imageUrl + "')");

                // 카드 컨텐츠 추가
                $card.attr("data-value", value);
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

function generateArray(row, col) {
    const len = (row * col) / 2;
    let ret = new Array();

    // 랜덤 난수 생성하여 배열 채우기
    while (ret.length < len) {
        const random = Math.floor(Math.random() * 36) + 1; // 1 ~ 36까지의 랜덤 난수 생성
        if (!ret.includes(random)) {
            ret.push(random);
        }
    }

    // 배열 복제 및 복제된 배열의 순서를 랜덤하게 섞기
    let doubledArray = ret.slice(); // 배열 복제
    for (let i = doubledArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // 랜덤 인덱스 선택
        [doubledArray[i], doubledArray[j]] = [doubledArray[j], doubledArray[i]]; // 원소 교환
    }

    // 원본 배열과 섞인 복제 배열 결합
    return ret.concat(doubledArray);
}