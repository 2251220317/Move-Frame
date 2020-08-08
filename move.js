//移动 1.2
function move(obj,name,target,fn){
			clearInterval(obj.timer)
			
			obj.timer=setInterval(function () {
				let nowStyle
				if(name=='opacity'){
					nowStyle=getComputedStyle(obj)[name]*100
				}
				else if(name=='width'||name=='height'||name=='font-size'||name=='border-width'||name=='border-radius'){
					nowStyle=parseInt(getComputedStyle(obj)[name])
				}
				else{
					nowStyle=getComputedStyle(obj)[name]
				}
				
				
				if(nowStyle==target){
					clearInterval(obj.timer)
					if(fn){fn()}
				}
				else{
					let speed=(target-nowStyle)/10
					speed=(speed>0)?Math.ceil(speed):Math.floor(speed)
					if(name=='opacity'){
						obj.style[name]=(nowStyle+speed)/100
					}
					else if(name=='width'||name=='height'||name=='font-size'||name=='border-width'||name=='border-radius'){
						obj.style[name]=nowStyle+speed+'px'
					}
					else{
						obj.style[name]=target
					}
				}
			},30)
		}