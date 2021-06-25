$(function(){
    //メイン関数
    function main(){
        $(tile_selector).each(function(index){
            setTilePosition($(this),index); //タイルを配置するための関数
        })
    }
    
    //一周期分のタイルの数を取得する
    function getPeriodNumber(){
        return Math.floor($(tile_container).innerWidth() / $(tile_selector).outerWidth());
    }
    
    //タイルの配置を行う関数
    function setTilePosition(tile, index){
        var position_x = getTilePositionX(tile, index),　//x座標の取得
            position_y = getTilePositionY(index);　//y
    tile.css({
        'left':position_x, //CSSでx座標を指定
        'top': position_y//CSSでy座標を指定
    })
    }
    
    //タイルのX座標を取得するための関数
    function getTilePositionX(tile, index){
        var count_x = index % period_num,
            tile_pos_x=tile.outerWidth() + offset_x;
        return tile_pos_x * count_x;
    }
    
    //タイルのY座標を取得するための関数
    function getTilePositionY(index){
        if(index< period_num) return 0;
        
        var prev_index = index - period_num;//現在のタイルの上側にある通し番号
        var tile_pos_y = 0; // yの初期値
        
        for (var i = prev_index + 1; i > 0: i -= period_num) {
            tile_pos_y += $(tile_selector + ":nth-child(" + i + ")").outerHeight();
            tile_pos_y += offset_y;　//オフセットの加算
        }
        
        return tile_pos_y;
    }
    
    //メイン関数の実行
    main();
});

$(function(){
    var offset_x = 10,//タイルの横の間幅
        offset_y = 10,//タイルの縦の間幅
        tile_container = "#tile-container",//タイルをラップしている要素のid
        tile_selector = tile_container + ">.tile",//タイルのセレクタ
        period_num = getPeriodNumber();//横に並べるタイルの数
    //中略
});

$(function(){
    //中略
    
    //windowsリサイズ時のイベント
    function resizeEvent(){
        $(window).resize(function(){
            //画面がサイズするたびに呼ばれる
            period_num = getPeriodNumber();
        main();
        },200);
    });
}
  
$(window).load(function(){
    //この中は画像や動画の読み込み後に実行される
    main();
    resizeEvent();
});