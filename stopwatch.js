var StopWatch ={
	interval:null,
	hour:0,
	minute:0,
	second:0,
	/** Clock tick: Increase one second **/
 tick: function(){
	if (this.second<59){
		++this.second;
	}
	else{
		this.second=0;
		this._minuteInc();
	}
	this.updateDisplay();

 }
 ,
 /** Internal: Increase minute **/
 _minuteInc:function(){
	if (this.minute<59){
		++this.minute;
	}
	else{
		this.minute=0;
		this._hourInc();
	}
}
,
 /** Internal: Increase minute **/
 _hourInc:function(){
	if (this.hour<23){
		++this.hour;
	}
	else{
		this.hour=0;
		}
}
,
	/**  Update the display **/
updateDisplay:function(){
   document.getElementById('second').innerText = this._addzeros(this.second);
   document.getElementById('minute').innerText = this._addzeros(this.minute);
   document.getElementById('hour').innerText   = this._addzeros(this.hour);
	
}
,
/** Internal: add leading zeros to numbers **/
_addzeros:function(n){
	var s= n + "";
	if (s.length<2){
		s="0" + s;
	}
	return s;

}
,
/** start the stopwatch**/
start: function(){
	  var _this = this;
      this.interval = setInterval(function() {
    _this.tick();
  }, 1000);
  this.updateButtons('start');


}
, 
/** stop the stopwatch**/
stop:function(){
  clearInterval(this.interval);
  this.interval = null;
  this.updateButtons('stop');

}
,
/** stop the stopwatch**/
reset: function(){
  this.stop();
  this.second = this.minute = this.hour = 0;
  this.updateDisplay();
  this.updateButtons('reset');
}
,
/**Update buttons status (disabled state)**/
updateButtons: function(state){
	  switch (state) {
    case 'start':
      document.getElementById('btn_start').disabled = true;
      document.getElementById('btn_stop').disabled = false;
      document.getElementById('btn_reset').disabled = false;
      break;
    case 'stop':
      document.getElementById('btn_start').disabled = false;
      document.getElementById('btn_stop').disabled = true;
      document.getElementById('btn_reset').disabled = false;
      break;
    case 'reset':
      document.getElementById('btn_start').disabled = false;
      document.getElementById('btn_stop').disabled = true;
      document.getElementById('btn_reset').disabled = true;
      break;
  }
	
}

}