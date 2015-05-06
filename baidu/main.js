define(function (require,exports,module) {
    var computeYear = document.getElementById('computeByYear');
	var computeMonth = document.getElementById('computeByMonth');
    var average= document.getElementById('averageValue');
	var year=document.getElementsByName("year")[0];
	var month=document.getElementsByName("month")[0];
    computeYear.onclick = function () {
        require('./text.js').year=year;
        average.innerHTML= require('./text.js').yearValue;

    }
	 computeMonth.onclick = function () {
	  require('./text.js').year=year;
	   require('./text.js').month=month;
	 average.innerHTML=require('./text.js').yearValue;
	 
	 }
});