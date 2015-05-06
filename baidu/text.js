define(function (require, exports) {
    var group = require('./group');
    
       var data =[
        {date: "2015-05-01", value: 12},
        {date: "2015-05-01", value: 11},
        {date: '2015-10-01', value: 32},
		{date: '2015-09-01', value: 33},
		{date: '2015-08-01', value: 34},
		{date: '2015-10-02', value: 35},
		{date: '2015-10-03', value: 36},
		{date: '2014-10-03', value: 36},
		{date: '2014-10-03', value: 36},
    ];
    var year,month;
    var yearValue = group.groupValueByYear(data,year);
    var monthValue = group.groupValueByMonth(data,year,month);
   // var weekValue = group.groupValueByWeek(data);
});



