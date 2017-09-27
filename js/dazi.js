var charIndex = -1;  //预设打印的内容  的字符串的下标位置
    var stringLength = 0;  //预设  打印的内容长度
    var inputText;  //预设  打印进页面的内容
	var speed =20;
    function writeContent(init){
    if(init){
    	inputText = document.getElementById('mrcToWrite').innerHTML;
    }
        if(charIndex==-1){
            charIndex = 0;
            stringLength = inputText.length;
        }
        var initString = document.getElementById('myContent').innerHTML;   //在显示区  显示的内容
		initString = initString.replace(/<SPAN.*$/gi,"");
        
        var theChar = inputText.charAt(charIndex);
       	var nextFourChars = inputText.substr(charIndex,4);  //如果将要打印的内容后面4位  是<br> 就跳过
       	var nextFourChars1_1 = inputText.substr(charIndex,3);
       	var nextFourChars1_2 = inputText.substr(charIndex,4);
       	var nextFourChars2_1 = inputText.substr(charIndex,3);
       	var nextFourChars2_2 = inputText.substr(charIndex,4);
       	var nextFourChars3_1 = inputText.substr(charIndex,3);
       	var nextFourChars3_2 = inputText.substr(charIndex,4);
       	var nextFourChars4_1 = inputText.substr(charIndex,13);
       	var nextFourChars5_1 = inputText.substr(charIndex,13);
       	var nextFourChars6_1 = inputText.substr(charIndex,13);
       	var nextFourChars7_1 = inputText.substr(charIndex,13);
       		
       	if(nextFourChars=='<BR>' || nextFourChars=='<br>'){
       		theChar  = '<br>';
       		charIndex+=3;
       		console.log(theChar)
       	};
       	
       	if(nextFourChars1_1=='<i>' ){
       		theChar  = '<i>';
       		charIndex+=2;
       		console.log(theChar)
       	}
       	if(nextFourChars1_2=='</i>' ){
       		theChar  = '</i>';
       		charIndex+=3;
       		console.log(theChar)
       	};
       	
       	if(nextFourChars2_1=='<s>' ){
       		theChar  = '<s>';
       		charIndex+=2;
       		console.log(theChar)
       	}
       	if(nextFourChars2_2=='</s>' ){
       		theChar  = '</s>';
       		charIndex+=3;
       		console.log(theChar)
       	};
       	if(nextFourChars2_1=='<u>' ){
       		theChar  = '<u>';
       		charIndex+=2;
       		console.log(theChar)
       	}
       	if(nextFourChars2_2=='</u>' ){
       		theChar  = '</u>';
       		charIndex+=3;
       		console.log(theChar)
       	};
       	if(nextFourChars4_1=='<s class="a">' ){
       		theChar  = '<s class="a">';
       		charIndex+=12;
       		console.log(theChar)
       	};
       	if(nextFourChars5_1=='<s class="b">' ){
       		theChar  = '<s class="b">';
       		charIndex+=12;
       		console.log(theChar)
       	};
       	if(nextFourChars6_1=='<s class="c">' ){
       		theChar  = '<s class="c">';
       		charIndex+=12;
       		console.log(theChar)
       	};
       	if(nextFourChars7_1=='<s class="d">' ){
       		theChar  = '<s class="d">';
       		charIndex+=12;
       		console.log(theChar)
       	};
       	
        initString = initString + theChar + "<SPAN id='blink'>_</SPAN>";  //那么正在显示的内容为： 已显示的内容加上  将要显示的内容 加上  光标
        document.getElementById('myContent').innerHTML = initString;

        charIndex = charIndex/1 +1;
		if(charIndex%2==1){
             document.getElementById('blink').style.opacity=0;
        }else{
             document.getElementById('blink').style.opacity=1;
        }
         
        if(charIndex<stringLength){
          	scrollTop();
            setTimeout('writeContent(false)',speed);
        }else{
        	
			blinkSpan = null;
			timer = null;
			var code = $('.code');
			code.eq(1).show('500',function(){
				scrollTop();
                startclock($(this).children('.time').get(0));
				code.eq(2).show('500',function(){
					scrollTop();
                    startclock($(this).children('.time').get(0));
					code.eq(3).show('500',function(){
						scrollTop();
                        startclock($(this).children('.time').get(0));
						code.eq(4).show('500',function(){
							scrollTop();
                            startclock($(this).children('.time').get(0));
							code.eq(5).show('500',function(){
								scrollTop();
                                startclock($(this).children('.time').get(0));
								code.eq(6).show('500',function(){
									scrollTop();
                                    startclock($(this).children('.time').get(0));
									code.eq(7).show('500',function(){
										scrollTop();
                                        startclock($(this).children('.time').get(0));
										code.eq(8).css({display:'block',width:'0px'}).animate({width:'100%'},2000)
									})
								});
							});
						});
					});
				})
			});
			setTimeout(load(),5000);
        	function load(){
        		aud.src = 'dist/ctl.mp3';
				aud.preload="metadata";
				aud.load();
        	};
			setTimeout(function(){document.getElementsByClassName('wedding-invitation')[0].className += 'invitation-bounce';},4200)
			
        }  
    }
    var timer = null;
    var currentStyle = 1;
    function blinkSpan(){
    	if(currentStyle==1){
    	currentStyle=0;
    	}else{
    	currentStyle=1;
    	}
    	document.getElementById('blink').style.opacity = currentStyle;
    	timer = setTimeout('blinkSpan()',500);
    	
    }
    function scrollTop(){
    	var div = document.getElementsByClassName('wedding-editor')[0];
    	div.scrollTop = div.scrollHeight;
    };
    $('.cover-inside-seal').on('touchstart',function(){
    	swiper.unlockSwipes();
    	$('.cover-inside-left').addClass('opening');
    	$('.cover-inside-right').addClass('opening');
    	$('.cover-content').addClass('invitation-up');
    })
//  writeContent(true);调用
//时间调用显示
//  startclock(obj);
			var timerID = null; 
			var timerRunning = false;
			function startclock (obj) { 
				stopclock(); 
				showtime(obj);
			} 
			function stopclock (){
				if(timerRunning) clearTimeout(timerID);
				timerRunning = false;
			} 
			function showtime (obj) {
				var now = new Date(); 
				var hours = now.getHours(); 
				var minutes = now.getMinutes(); 
				var seconds = now.getSeconds(); 
				var timeValue = "" +((hours >= 12) ? "下午 " : "上午 " ); 
				timeValue += ((hours >12) ? hours -12 :hours); 
				timeValue += ((minutes< 10) ? ":0" : ":") + minutes; 
				timeValue +=( (seconds < 10) ? ":0" : ":") + seconds; 
				obj.innerHTML=timeValue; 
				timerID=setTimeout( "showtime()",1000); 
				timerRunning=true;
				console.log(obj)
			}