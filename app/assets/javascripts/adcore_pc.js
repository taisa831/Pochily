(function(){var d="undefined",a=null;if(!window.SPMobile.PCEng){window.SPMobile.PCEng={getScriptServer:function(){return "spnet5.i-mobile.co.jp"},getSpotServer:function(){return window.SPMobile.SelectServer("spnet1.i-mobile.co.jp,spnet2-1.i-mobile.co.jp,spnet33.i-mobile.co.jp","0,5,5")},getImageServer:function(){return "spdeliver.i-mobile.co.jp"},getUrl:function(f,c,b){b=b||false;var e=document.location.protocol=="http:"?"http":"https";if(!b&&window.SPMobile.getXid){var d=window.SPMobile.getXid();if(d!=a)c+=(c.indexOf("?",0)>-1?"&":"?")+"xid="+d}return e+"://"+f+"/"+c},isSupportOverlay:function(){var a=navigator.userAgent.toLowerCase();return a.indexOf("ipad")!=-1},isIE:function(){var a=navigator.userAgent.toLowerCase();return a.indexOf("internat explorer")!=-1}};var b=typeof document.ontouchstart!=d;window.SPMobile.PCEng.Compat={EVENT_LOAD:window.SPMobile.PCEng.isIE()?"onload":"load",EVENT_TOUCHSTART:b?"touchstart":"mousedown",EVENT_TOUCHEND:b?"touchend":"mouseup",EVENT_TOUCHCANCEL:b?"touchcancel":"mouseup",EVENT_ORIENTATIONCHANGE:typeof window.orientationchange==d?"resize":"orientationchange",EVENT_SCROLL:"scroll",getActionPosition:function(c){var a;if(b)a=c.touches[0];else a=c;return {x:a.pageX,y:a.pageY}},addEventListener:function(a,b,c){if("attachEvent" in a)a.attachEvent(b,c);else a.addEventListener(b,c,false)},onLoad:function(b,a){this.addEventListener(b,this.EVENT_LOAD,a)},onTouchStart:function(b,a){this.addEventListener(b,this.EVENT_TOUCHSTART,a)},onTouchEnd:function(b,a){this.addEventListener(b,this.EVENT_TOUCHEND,a)},onTouchCancel:function(b,a){this.addEventListener(b,this.EVENT_TOUCHCANCEL,a)},onOrientationChange:function(b,a){this.addEventListener(b,this.EVENT_ORIENTATIONCHANGE,a)},onScroll:function(b,a){this.addEventListener(b,this.EVENT_SCROLL,a)}}}var f=a;try{f=imobile_option;imobile_option=a}catch(g){}var e=a;try{e=f.type}catch(g){}var c;switch(e){case "tabletoverlay":c="adcore_pc_tabletoverlay.js";break;default:c="adcore_pc_inline.js"}document.write('<script type="text/javascript" src="'+window.SPMobile.PCEng.getUrl(window.SPMobile.PCEng.getScriptServer(),"script/"+c,true)+('?20110201"></sc'+"ript>"))})()