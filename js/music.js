var music = {
    _audioNode: null,
    _audio: null,
    _isload: false,
    _audio_src: "",
    init: function(src) {
        // media资源的加载
        
        music._audioNode=this.createDom(src);
        $('body').prepend(music._audioNode);
        var options_audio = {
            loop: true,
            preload: "auto",
            src: music._audioNode.attr('data-src')
        }
console.log(music._audioNode)
        music._audio = new Audio();

        for (var key in options_audio) {
            if (options_audio.hasOwnProperty(key) && (key in music._audio)) {
                music._audio[key] = options_audio[key];
            }
        }
        music._audio.load();
        music.audio_addEvent();
        $('#coffee_flow').coffee({
            steams              : ["<img src='img/audio_widget_01@2x.png' />","<img src='img/audio_widget_01@2x.png' />"], 
            steamHeight         : 100,
            steamWidth          : 44 
        });
        music._audioNode.removeClass('f-hide');
        music._audio.play();
    },
    createDom:function(src){
        return $(
            "<section class='u-audio f-hide' data-src='"+src+"'>"+
            "<p id='coffee_flow' class='btn_audio'><strong class='txt_audio z-hide'>关闭</strong><span class='css_sprite01 audio_open'></span></p>"+
            "</section>"
        );
    },
    // 声音事件绑定
    audio_addEvent: function() {
        if (music._audioNode.length <= 0) return;
        // 声音按钮点击事件
        var txt = music._audioNode.find('.txt_audio'),
            time_txt = null;
        music._audioNode.find('.btn_audio').on('click', music.audio_contorl);

        // 声音打开事件
        $(music._audio).on('play', function() {
            music._audio_val = false;

            audio_txt(txt, true, time_txt);

            // 开启音符冒泡
            $.fn.coffee.start();
            $('.coffee-steam-box').show(500);
        })

        // 声音关闭事件
        $(music._audio).on('pause', function() {
            audio_txt(txt, false, time_txt)

            // 关闭音符冒泡
            $.fn.coffee.stop();
            $('.coffee-steam-box').hide(500);
        })

        function audio_txt(txt, val, time_txt) {
            if (val) txt.text('打开');
            else txt.text('关闭');

            if (time_txt) clearTimeout(time_txt);

            txt.removeClass('z-move z-hide');
            time_txt = setTimeout(function() {
                txt.addClass('z-move').addClass('z-hide');
            }, 1000)
        }
    },

    // 声音控制函数
    audio_contorl: function() {
        if (!music._audio_val) {
            music.audio_stop();
        } else {
            music.audio_play();
        }
    },

    // 声音播放
    audio_play: function() {
        music._audio_val = false;
        if (music._audio) music._audio.play();
    },

    // 声音停止
    audio_stop: function() {
        music._audio_val = true;
        if (music._audio) music._audio.pause();
    }
}
