!function(e){"use strict";var t=function(t,n){this.el=e(t);this.options=e.extend({},e.fn.typed.defaults,n);this.text=this.el.text();this.typeSpeed=this.options.typeSpeed;this.startDelay=this.options.startDelay;this.backSpeed=this.options.backSpeed;this.backDelay=this.options.backDelay;this.strings=this.options.strings;this.stringsstops=this.options.stringsstops;this.strPos=0;this.arrayPos=0;this.string=this.strings[this.arrayPos];this.stopNum=this.stringsstops[this.arrayPos];this.loop=this.options.loop;this.loopCount=this.options.loopCount;this.curLoop=1;if(this.loop===false){this.stopArray=this.strings.length-1}else{this.stopArray=this.strings.length}this.build()};t.prototype={constructor:t,init:function(){var e=this;setTimeout(function(){e.typewrite(e.string,e.strPos)},e.startDelay)},build:function(){this.el.after('<span id="typed-cursor">|</span>');this.init()},typewrite:function(e,t){var n=Math.round(Math.random()*(100-30))+this.typeSpeed;var r=this;setTimeout(function(){if(r.arrayPos<r.strings.length){if(e.substr(t,1)==="^"){var n=e.substr(t+1).indexOf(" ");var i=e.substr(t+1,n);e=e.replace("^"+i,"")}else{var i=0}setTimeout(function(){r.el.text(r.text+e.substr(0,t));if(t>e.length&&r.arrayPos<r.stopArray){clearTimeout(n);var n=setTimeout(function(){r.backspace(e,t)},r.backDelay)}else{t++;r.typewrite(e,t);if(r.loop===false){if(r.arrayPos===r.stopArray&&t===e.length){var n=r.options.callback();clearTimeout(n)}}}},i)}else if(r.loop===true&&r.loopCount===false){r.arrayPos=0;r.init()}else if(r.loopCount!==false&&r.curLoop<r.loopCount){r.arrayPos=0;r.curLoop=r.curLoop+1;r.init()}},n)},backspace:function(e,t){var n=Math.round(Math.random()*(100-30))+this.backSpeed;var r=this;setTimeout(function(){r.stopNum=r.stringsstops[r.arrayPos];r.el.text(r.text+e.substr(0,t));if(t>r.stopNum){t--;r.backspace(e,t)}else if(t<=r.stopNum){clearTimeout(n);var n=r.arrayPos=r.arrayPos+1;r.typewrite(r.strings[r.arrayPos],t)}},n)}};e.fn.typed=function(n){return this.each(function(){var r=e(this),i=r.data("typed"),s=typeof n=="object"&&n;if(!i)r.data("typed",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsstops:[0,0,0,0],typeSpeed:0,startDelay:0,backSpeed:0,backDelay:500,loop:false,loopCount:false,callback:function(){null}}}(window.jQuery)