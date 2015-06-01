//var newPlayer;
//var player;
//var current_status = -1;
//var view = false;
//var done = false;
//var update_interval = null;
//var status_interval = null;
//
//function abc(){
//    newPlayer = new YT.Player('player', {
//        videoId: 'ijGeNYklCMM',
//        width: 270,
//        height: 195,
//        playerVars: {
//            rel: 0,
//            enablejsapi: 1
//        },
//        events: {
//            onReady: onPlayerReady,
//            onStateChange: onPlayerStateChange
//        }
//    });
//}
//
//function bcd(){
//    newPlayer = new YT.Player('player2', {
//        videoId: 'l7z0QXvE1gs',
//        width: 400,
//        height: 300,
//        playerVars: {
//            rel: 0,
//            enablejsapi: 1
//        },
//        events: {
//            onReady: onPlayerReady,
//            onStateChange: onPlayerStateChange
//        }
//    });
//}
//
//function onYouTubeIframeAPIReady(){
//    for (var i=1 ; i<=10 ; i++){
//        if(i==1){
//            abc();
//        }else if(i==2){
//            bcd();
//        }
//    }
//}
//
//function getStatus() {
//    var event=[];
//    event.data = player.getPlayerState();
//    onPlayerStateChange(event);
//}
//
//function onPlayerReady(event) {
//    readyState();
//    if (event) {
//        player = event.target;
//        status_interval = setInterval("getStatus()", 999);
//    }
//}
//
//function updateytplayerInfo() {
//    if (player && player.getCurrentTime() != 0) {
//        left_second = Math.round( player.getDuration() - player.getCurrentTime() ) - 1;
//        if(left_second > 0 && !view){
//            playState(left_second);
//        } else{
//            next();
//        }
//    }
//}
//
//function updateHTML(elmId, value) {
//    if (document.getElementById(elmId)) {
//        document.getElementById(elmId).innerHTML = value;
//    }
//}
//
//function updateHTML(elmId, value) {
//    $('#state_ready').show();
//}
//
//function onPlayerStateChange(event) {
//    if (event.data == YT.PlayerState.PLAYING && !done) {
//        done = true;
//        if (status_interval != null) {
//            clearInterval(status_interval);
//        }
//        update_interval = setInterval("updateytplayerInfo()", 999);
//        updateytplayerInfo();
//    }
//    if (event.data == YT.PlayerState.ENDED) {
//        next();
//    }
//
//    current_status = event.data;
//}
//
//function next(){
//    view = true;
//    clearInterval(update_interval);
//    nextState();
//}
//
//function readyState() {
//    $('#state_ready').show();
//    $('#state_playing').hide();
//    $('#state_submit').hide();
//}
//
//function playState(leftsec) {
//    $('#left_sec').html(leftsec);
//
//    $('#state_ready').hide();
//    $('#state_playing').show();
//    $('#state_submit').hide();
//}
//
//function nextState() {
//    $('#state_ready').hide();
//    $('#state_playing').hide();
//    $('#state_submit').show();
//}
