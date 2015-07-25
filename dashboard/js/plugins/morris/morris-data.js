// Morris.js Charts sample data for SB Admin template
var now = new Date();
var now_str = now.getTime().toString();
var d_day = new Date(now - 1000 * 60 * 60 * 24);
var d_week = new Date(now - 1000 * 60 * 60 * 24 * 7);
var d_30day = new Date(now - 1000 * 60 * 60 * 24 * 30);
var d_year = new Date(now - 1000 * 60 * 60 * 24 * 365);
var d_day_str = d_day.getTime().toString();
var d_week_str = d_week.getTime().toString();
var d_30day_str = d_30day.getTime().toString();
var d_year_str = d_year.getTime().toString();
$.getJSON( "/een3270/CH/get_sensor_data.php?DateStart=" + d_day_str + "&DateEnd=" + now_str, function(result1) {

    // Area Chart
    Morris.Area({
        element: 'day-water-chart',
        data: result1,
        xkey: 'DATE',
        ykeys: ['VALUE'],
        labels: ['gallons'],
        pointSize: 0,
        hideHover: 'auto',
        resize: true
    });
    var leak_count = 0;
    var total = 0.0
    $.each(result1, function(key, val){
       total = total + val['VALUE'];
       leak_count = val['LEAKCOUNT'];
    });
    var titleElement = document.getElementById("day-total");
    titleElement.innerHTML = "Total usage: " + total.toFixed(2).toString() + " Gallons";
    
    var fieldNameElement = document.getElementById("leak-alert");
    if (leak_count > 60) {
        fieldNameElement.innerHTML = "<strong>WARNING, LEAK DETECTED!</strong> Water has been running for " + leak_count.toString() + " minutes!";
        fieldNameElement.className = "alert alert-danger";
    }
    else {
        var state = "OFF";
        if (leak_count > 0)
        {
            state = "ON for " + leak_count.toString() + " minutes";
        }
        fieldNameElement.innerHTML = "<strong>No leak detected.</strong> Water system functional. Water is currently " + state;
        fieldNameElement.className = "alert alert-success";
    }
});

$.getJSON( "/een3270/CH/get_sensor_data.php?DateStart=" + d_week_str + "&DateEnd=" + now_str, function(result1) {

    // Area Chart
    Morris.Area({
        element: 'week-water-chart',
        data: result1,
        xkey: 'DATE',
        ykeys: ['VALUE'],
        labels: ['gallons'],
        pointSize: 0,
        hideHover: 'auto',
        resize: true
    });
    
    var total = 0.0;
    $.each(result1, function(key, val){
       total = total + val['VALUE'];
    });
    var titleElement = document.getElementById("week-total");
    titleElement.innerHTML = "Total usage: " + total.toFixed(2).toString() + " Gallons";

});

$.getJSON( "/een3270/CH/get_sensor_data.php?DateStart=" + d_30day_str + "&DateEnd=" + now_str, function(result1) {

    // Area Chart
    Morris.Area({
        element: 'day30-water-chart',
        data: result1,
        xkey: 'DATE',
        ykeys: ['VALUE'],
        labels: ['gallons'],
        pointSize: 0,
        hideHover: 'auto',
        resize: true
    });
    
    var total = 0.0;
    $.each(result1, function(key, val){
       total = total + val['VALUE'];
    });
    var titleElement = document.getElementById("day30-total");
    titleElement.innerHTML = "Total usage: " + total.toFixed(2).toString() + " Gallons";

});

$.getJSON( "/een3270/CH/get_sensor_data.php?DateStart=" + d_year_str + "&DateEnd=" + now_str, function(result1) {

    // Area Chart
    Morris.Area({
        element: 'year-water-chart',
        data: result1,
        xkey: 'DATE',
        ykeys: ['VALUE'],
        labels: ['gallons'],
        pointSize: 0,
        hideHover: 'auto',
        resize: true
    });
    
    var total = 0.0;
    $.each(result1, function(key, val){
       total = total + val['VALUE'];
    });
    var titleElement = document.getElementById("year-total");
    titleElement.innerHTML = "Total usage: " + total.toFixed(2).toString() + " Gallons";

});

