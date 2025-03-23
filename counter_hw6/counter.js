// 即時実行関数で全体を囲み、グローバルスコープを汚さないようにする
(() => {
    // HTML内のid="js-counter"の要素を取得し、$counter変数に格納
    const $counter = document.getElementById("js-counter");

    // ボタンクリック時の処理を行う関数を定義
    const clickHandler = (e) => {
        // クリックされたボタン要素を取得
        const $targetButton = e.currentTarget;
        // カウンター要素のテキスト内容を数値に変換
        let currentCount = parseInt($counter.textContent);
        
        // クリックされたボタンが"+"なら加算、それ以外（"-"）なら減算
        if($targetButton.textContent === "+"){
            currentCount += 1;
        } else {
            currentCount -= 1;
        }
        $counter.textContent = currentCount;
        
        // 更新された値で色を判定
        if (currentCount >= 5 && currentCount < 10){
            // 5以上10未満の場合は赤色
            $counter.style.color = "red";
        } else if (currentCount >= 10 && currentCount < 15){
            // 10以上15未満の場合は青色
            $counter.style.color = "blue";
        } else {
            // それ以外の場合は黒色
            $counter.style.color = "#000";
        }
    }

    // class="js-button"を持つ全ての要素にクリックイベントリスナーを設定
    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        // 各ボタンにclickHandlerを紐付け
        document.getElementsByClassName("js-button")[index].
            addEventListener("click",(e) => clickHandler(e))
    }

})();