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
  })
});
