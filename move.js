//移动 1.1
function move(obj,name,target,fn){
			clearInterval(obj.timer)
			
			obj.timer=setInterval(function () {
				let nowStyle=parseInt(getComputedStyle(obj)[name])
				let speed=(target-nowStyle)/10
				
				if(speed>0){
					speed=Math.ceil(speed)
				}
				else{
					speed=Math.floor(speed)
				}
				
				if(nowStyle==target){
					clearInterval(obj.timer)
					if(fn){fn()}
				}
				else{
					obj.style[name]=nowStyle+speed+'px'
				}
			},30)
		}