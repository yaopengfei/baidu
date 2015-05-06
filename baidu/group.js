
 define(function(require, exports) {
    exports.groupValueByYear = function (data,year) {
        // 按年
		var average=0;		  	   
	          for (x in data){
			  if(year==data[x].date.substring(0,4))
			 
			 {       average=average+data[x].value; }	 
			 
	         }
       return average;	
		
    };

    exports.groupValueByMonth = function (data) {
        // 按月
		    		
			  var average=0;
		  
	          for (x in data){
	          if(year==data[x].date.substring(0,4)){
			   
			     if(month==data[x].date.substring(5,7)){
				
				    average=average+data[x].value;
				
				}
			 } 
	        }
     return average;	
    };

    exports.groupValueByWeek = function (data) {
        // 按周
    };
});

