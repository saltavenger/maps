function pieConfigPopup(data, title) {
    var config = {
        series: [{
            colorField: "valueColor",
            type: "pie",
            data: data,
            padding: 0,
            margin: 0
        }],
        dataBound: function(e){
            console.log(this);
        },
        chartArea: {
            background: "#F7F7F7"
        },
        seriesDefaults: {
            labels: {
                template: "#= kendo.format('{0:P}', percentage)#",
                position: "center",
                visible: false,
                background: "transparent",
                color: '#ffffff'
            }
        },
        title: {
            text: title,
            color: "#666666",
            margin: {
                bottom: 0
            }
        },
        legend: {
            position: "top"
        },
        tooltip: {
            visible: true,
            template: "#= kendo.format('{0:P}', percentage)#"
        },
        seriesColors: ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"]
    };

    return config;
}

function pieConfigTable(data, title) {
    var config = {
        series: [{
            colorField: "valueColor",
            type: "pie",
            data: data,
            padding: 0,
            margin: 0
        }],
        dataBound: function(e) {
            console.log(e);
        },
        chartArea: {
            height: 200
        },
        title: {
            text: title,
            margin: {
                bottom: 0
            }
        },
        legend: {
            visible: false
        },
        tooltip: {
            visible: true,
            template: "#= category #: #= kendo.format('{0:P}', percentage) #"
        },
        seriesColors: ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"]
    }
    return config;
}

function addDataError(){ 
    $('.k-chart').each(function(){
        var data = $(this).data('kendoChart').options.series[0].data,
        dataNotAvailable = false;
        for(i in data){
            if(data[i].value === ""){
                dataNotAvailable = true;
            }
        }
        if(dataNotAvailable){
           $('<div class="custom-overlay"><p class="message">No Data Available</p></div>').appendTo(this);
        }
    });
}