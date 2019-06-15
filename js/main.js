(function() {
    'use strict';

    var btn = document.getElementById('btn'); 

    var y_question = ['頼れる先輩が欲しい。',
                'プログラミングで世界中の人々の命を救いたい。',
                'ロボットの動く仕組みを知りたい。',
                'Javaについて学びたい。',
                '正直2DSoccerは嫌だ。',
                '自然言語処理や音声認識に興味がある。',
                'Pythonで生活していきたい。',
                'C++？なにそれ美味しいの？',
                'こんな素晴らしい診断アプリは今まで見たことがない。',
                '2DSoccerに入ってくれ（願望）。',
                '英訳なら俺に任せろ！',
                '徹マンをしたことがある。',
                'スマブラで先輩に負ける気がしない。',
                'サッカーやろうぜ！',
                '高校時代にプログラミング経験がある。',
                '2DSoccerに入ってくれるかな？',
                '2DSoccerってすげぇよな(小並感)。',
                '災害シミュレーションに興味がある。',
                '優しい先輩が欲しい。',
                'プリキュアになりたい。',
                '力が欲しいか？',
                'PKファイアーはクソだ。',
                '俺、この診断が終わったら結婚するんだ。',
                '金は命より重い。',
                '機械学習に興味がある。',
                '竹で裏打ちした象牙や骨材などの表面に、文字・図柄が彫ってあり、麻雀をするときに使う道具をなんと言うか。',
                'これからはPythonの時代だと思う。'];

    var t = 1;

    var strage = [];
    var strage2 = [];

    var audio =  document.getElementById('bgm');

    btn.addEventListener('click', function() {      // クリックした時の処理は次のようにしてください
        audio.play();
        if (t==1){
            document.getElementById("hajime").play();
        }
        var n = Math.floor(Math.random()*y_question.length);
        question.textContent = y_question[n];
        times.textContent = "第"+t+"問"
        strage = y_question.splice(n, 1);
        strage2 = strage2.concat(strage);
        t++;
        if (t > 11) {
            times.textContent ="結果が出ました！"
            question.textContent = "あなたにぴったりなリーグは”2DSoccer”です！おめでとう！"
            reset.classList.remove('hidden');
        }
        if (t == 12) {
            document.getElementById("Hai").play();
            document.getElementById("kansei").play();
            document.getElementById("panpakapan").play();
        }
        if (t > 2 && t < 11) {
            document.getElementById("dopon").play();
        }
        if (t > 12) {
            document.getElementById("syuuryou").play();
        }
        if (t == 11) {
            document.getElementById("saigonositumon").play();
        }
        if (t > 11) {
            audio.pause();
            audio.currentTime = 0;
        }
        if (t == 7) {
            document.getElementById("atosukosi").play();
        }


    })
    btn.addEventListener('mousedown', function() {      // mousedownした時の処理は次のようにしてください
        this.className = 'pushed';
    })
    btn.addEventListener('mouseup', function() {      // クmouseupした時の処理は次のようにしてください
        this.className = '';
    })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var btn2 = document.getElementById('btn2'); //要素の取得

    btn2.addEventListener('click', function() {      // クリックした時の処理は次のようにしてください
        audio.play();
        if (t==1){
            document.getElementById("hajime").play();
        }
        var n = Math.floor(Math.random()*y_question.length)
        question.textContent = y_question[n];
        times.textContent = "第"+t+"問"
        strage = y_question.splice(n, 1);
        strage2 = strage2.concat(strage);
        t++;
        if (t > 11) {
            times.textContent ="結果が出ました！"
            question.textContent = "あなたにぴったりなリーグは”2DSoccer”です！おめでとう！"
            reset.classList.remove('hidden');
        }
        if (t == 12) {
            document.getElementById("kansei").play();
            document.getElementById("Hai").play();
            document.getElementById("panpakapan").play();
        }
        if (t > 2 && t < 11) {
            document.getElementById("dopon2").play();
        }
        if (t > 12) {
            document.getElementById("syuuryou2").play();
        }
        if (t == 11) {
            document.getElementById("saigonositumon").play();
        }
        if (t > 11) {
            audio.pause();
            audio.currentTime = 0;
        }
        if (t == 7) {
            document.getElementById("atosukosi").play();
        }
    })
    btn2.addEventListener('mousedown', function() {      // mousedownした時の処理は次のようにしてください
        this.className = 'pushed';
    })
    btn2.addEventListener('mouseup', function() {      // mouseupした時の処理は次のようにしてください
        this.className = '';
    })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
reset.addEventListener('click', function() {      // クリックした時の処理は次のようにしてください
    document.getElementById("situkoi").play();
    this.classList.add('hidden');
    t = 1;
    times.textContent ="Rione診断へようこそ！"
    question.textContent = "Rione診断とは2DSoccer、Rescue、@Homeの３つのリーグのどれに所属しようか迷ってるそこのあなたの為に作られた超高性能診断アプリです！たった10問の質問に答えるだけであなたにぴったりなリーグがわかっちゃう！下の注意書きをよく読んでね！Rione診断を始めるには”はい”か”いいえ”のボタンを押してね❤️"
    y_question = y_question.concat(strage2);
    strage2.length = 0;
})

})();
