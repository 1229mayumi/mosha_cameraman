$(function() {
  // カルーセル
  // メインビジュアルのカルーセル
  $('.carausel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  });
  
  // モーダル
  // work写真をクリックしたとき
  $('.work').click(function() {
    // クリックされた写真のsrcを取得
    const imgSrc = $(this).attr('src');
    // 取得したsrcをモーダルのimgのsrcに設定
    $('#modalImg').attr('src', imgSrc);
    // モダールを表示
    $('#myModal').fadeIn();
  });

  // 閉じるボタンが押されたら、モーダルを閉じる
  $('.close').click(function() {
    $('#myModal').fadeOut();
  });

  // Topに戻るボタン
  // topというidを持つHTML要素を取得し、定数に代入する
  const top = document.getElementById('top');

  //画面がスクロールされた時にイベント処理を実行する
  top.addEventListener('scroll', () => {
    //画面のスクロール量をpxで取得する
    const scrollValue = document.scrollingElement.scrollTop;

    //画面のスクロール量が300px以上であれば、「Topに戻る」ボタンを表示する
    if (scrollValue >= 300) {
      top.style.display = 'inline';
    }
    //画面のスクロール量が300px未満であれば、「Topに戻る」ボタンを非表示にする
    else {
      top.style.display = 'none';
    }
  })


  })

});
