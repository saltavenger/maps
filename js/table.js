$(document).ready(function() {
    var element = $("#grid").kendoGrid({
        dataSource: createTableData(),
        sortable: true,
        pageable: {
            pageSize: 10
        },
        detailTemplate: kendo.template($("#template").html()),
        detailInit: detailInit,
        columns: tableColumns,
        schema: tableSchema
    });

});

function detailInit(e) {
    var detailRow = e.detailRow;

    detailRow.find(".tabstrip").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    });

    for (i in markers) {
        var demographicOneMileRadius = markers[i].ej1.split(",");

        var incomeData1 = demographicOneMileRadius[6],
            incomeData2 = demographicOneMileRadius[7],
            incomeData3 = demographicOneMileRadius[8],
            incomeData4 = demographicOneMileRadius[9],
            almostAllIncomes = parseFloat(incomeData1) + parseFloat(incomeData2) + parseFloat(incomeData3) + parseFloat(incomeData4);
        
        var income5_1 = 1 - almostAllIncomes;

        var raceData1 = demographicOneMileRadius[3];
        
        var raceOther_1 = 1 - (parseFloat(demographicOneMileRadius[3]) + parseFloat(demographicOneMileRadius[4]) + parseFloat(demographicOneMileRadius[5]));
        var minorityData1 = [{
            category: "Minority",
            value: demographicOneMileRadius[0]
        }, {
            category: "Other",
            value: 1 - demographicOneMileRadius[0],
            valueColor: "#000"
        }];
        var povertyData1 = [{
            category: "Poverty",
            value: demographicOneMileRadius[1]
        }, {
            category: "Other",
            value: 1 - demographicOneMileRadius[1],
            valueColor: "#000"
        }];
        var hispanicData1 = [{
            category: "Hispanic",
            value: demographicOneMileRadius[2]
        }, {
            category: "Other",
            value: 1 - demographicOneMileRadius[2],
            valueColor: "#000"
        }];
        var incomeData1MileRadius = [{
            category: "< $15k",
            value: incomeData1
        }, {
            category: "$15k-$25k",
            value: incomeData2
        }, {
            category: "$25k-$50k",
            value: incomeData3
        }, {
            category: "$50k-$75k",
            value: incomeData4
        }, {
            category: "> $75k",
            value: income5_1
        }];
        var raceData1 = [{
            category: "White",
            value: demographicOneMileRadius[3]
        }, {
            category: "Black",
            value: demographicOneMileRadius[4]
        }, {
            category: "Asian",
            value: demographicOneMileRadius[5]
        }, {
            category: "Other",
            value: raceOther_1
        }];

        var panelNum = parseInt(i) + 1;
        createPie2("panel" + panelNum, "minority1", minorityData1, "Percent Minority");
        createPie2("panel" + panelNum, "poverty1", povertyData1, "Poverty");
        createPie2("panel" + panelNum, "hispanic1", hispanicData1, "Hispanic Population");
        createPie2("panel" + panelNum, "income1", incomeData1MileRadius, "Income Data");
        createPie2("panel" + panelNum, "race1", raceData1, "Race");

        var string3 = markers[i].ej3;
        var allData3 = string3.split(",");
        var income5_3 = 1 - (parseFloat(allData3[6]) + parseFloat(allData3[7]) + parseFloat(allData3[8]) + parseFloat(allData3[9]));
        var raceOther_3 = 1 - (parseFloat(allData3[3]) + parseFloat(allData3[4]) + parseFloat(allData3[5]));
        var minorityData3 = [{
            category: "Minority",
            value: allData3[0]
        }, {
            category: "Other",
            value: 1 - allData3[0],
            valueColor: "#000"
        }];
        var povertyData3 = [{
            category: "Poverty",
            value: allData3[1]
        }, {
            category: "Other",
            value: 1 - allData3[1],
            valueColor: "#000"
        }];
        var hispanicData3 = [{
            category: "Hispanic",
            value: allData3[2]
        }, {
            category: "Other",
            value: 1 - allData3[2],
            valueColor: "#000"
        }];
        var incomeData3 = [{
            category: "< $15k",
            value: allData3[6]
        }, {
            category: "$15k-$25k",
            value: allData3[7]
        }, {
            category: "$25k-$50k",
            value: allData3[8]
        }, {
            category: "$50k-$75k",
            value: allData3[9]
        }, {
            category: "> $75k",
            value: income5_3
        }];
        var raceData3 = [{
            category: "White",
            value: allData3[3]
        }, {
            category: "Black",
            value: allData3[4]
        }, {
            category: "Asian",
            value: allData3[5]
        }, {
            category: "Other",
            value: raceOther_3
        }];

        createPie2("panel_2_" + panelNum, "minority3", minorityData3, "Percent Minority");
        createPie2("panel_2_" + panelNum, "poverty3", povertyData3, "Poverty");
        createPie2("panel_2_" + panelNum, "hispanic3", hispanicData3, "Hispanic Population");
        createPie2("panel_2_" + panelNum, "income3", incomeData3, "Income");
        createPie2("panel_2_" + panelNum, "race3", raceData3, "Race");
    }
}

function minority1() {
    var item = $('#markerNum').data('number');
    var demographicOneMileRadius = markers[item].ej1;
    var allData1 = demographicOneMileRadius.split(",");
    var minorityData1 = [{
        category: "Minority",
        value: allData1[0]
    }, {
        category: "Other",
        value: 1 - allData1[0],
        valueColor: "#000"
    }];
    $('#demographicChart').show();
    createPie(minorityData1, "Percent Minority 1 Mile");
}

function minority3() {
    var item = $('#markerNum').data('number');
    var string3 = markers[item].ej3;
    var allData3 = string3.split(",");
    var minorityData3 = [{
        category: "Minority",
        value: allData3[0]
    }, {
        category: "Other",
        value: 1 - allData3[0],
        valueColor: "#000"
    }];
    $('#demographicChart').show();
    createPie(minorityData3, "Percent Minority 3 Mile");
}

function poverty1() {
    var item = $('#markerNum').data('number');
    var demographicOneMileRadius = markers[item].ej1;
    var allData1 = demographicOneMileRadius.split(",");
    var povertyData1 = [{
        category: "Poverty",
        value: allData1[1]
    }, {
        category: "Other",
        value: 1 - allData1[1],
        valueColor: "#000"
    }];
    $('#demographicChart').show();
    createPie(povertyData1, "Poverty 1 Mile");
}

function poverty3() {
    var item = $('#markerNum').data('number');
    var string3 = markers[item].ej3;
    var allData3 = string3.split(",");
    var povertyData3 = [{
        category: "Poverty",
        value: allData3[1]
    }, {
        category: "Other",
        value: 1 - allData3[1],
        valueColor: "#000"
    }];
    $('#demographicChart').show();
    createPie(povertyData3, "Poverty 3 Mile");
}

function hispanic1() {
    var item = $('#markerNum').data('number');
    var demographicOneMileRadius = markers[item].ej1;
    var allData1 = demographicOneMileRadius.split(",");
    var hispanicData1 = [{
        category: "Hispanic",
        value: allData1[2]
    }, {
        category: "Other",
        value: 1 - allData1[2],
        valueColor: "#000"
    }];
    $('#demographicChart').show();
    createPie(hispanicData1, "Hispanic Population 1 Mile");
}

function hispanic3() {
    var item = $('#markerNum').data('number');
    var string3 = markers[item].ej3;
    var allData3 = string3.split(",");
    var hispanicData3 = [{
        category: "Hispanic",
        value: allData3[2]
    }, {
        category: "Other",
        value: 1 - allData3[2],
        valueColor: "#000"
    }];
    $('#demographicChart').show();
    createPie(hispanicData3, "Hispanic Population 3 Mile");
}

function income1() {
    var item = $('#markerNum').data('number');
    var demographicOneMileRadius = markers[item].ej1;
    var allData1 = demographicOneMileRadius.split(",");
    var income5_1 = 1 - (parseFloat(allData1[6]) + parseFloat(allData1[7]) + parseFloat(allData1[8]) + parseFloat(allData1[9]));
    var incomeData1 = [{
        category: "< $15k",
        value: allData1[6]
    }, {
        category: "$15k-$25k",
        value: allData1[7]
    }, {
        category: "$25k-$50k",
        value: allData1[8]
    }, {
        category: "$50-75k",
        value: allData1[9]
    }, {
        category: "> $75k",
        value: income5_1
    }];
    $('#demographicChart').show();
    createPie(incomeData1, "Income Data 1 Mile");
    var target = $('#demographicChart');
    $('.contentPane').animate({
        scrollTop: target.offset().top
    }, 1000);
    return false;
}

function income3() {
    var item = $('#markerNum').data('number');
    var string3 = markers[item].ej3;
    var allData3 = string3.split(",");
    var income5_3 = 1 - (parseFloat(allData3[6]) + parseFloat(allData3[7]) + parseFloat(allData3[8]) + parseFloat(allData3[9]));
    var incomeData3 = [{
        category: "< $15k",
        value: allData3[6]
    }, {
        category: "$15k-$25k",
        value: allData3[7]
    }, {
        category: "$25k-$50k",
        value: allData3[8]
    }, {
        category: "$50k-$75k",
        value: allData3[9]
    }, {
        category: "> $75k",
        value: income5_3
    }];
    $('#demographicChart').show();
    createPie(incomeData3, "Income Data 3 mile");
    location.hash = "#demographicChart";
}

function race1() {
    var item = $('#markerNum').data('number');
    var demographicOneMileRadius = markers[item].ej1;
    var allData1 = demographicOneMileRadius.split(",");
    var raceOther_1 = 1 - (parseFloat(allData1[3]) + parseFloat(allData1[4]) + parseFloat(allData1[5]));
    var raceData1 = [{
        category: "White",
        value: allData1[3]
    }, {
        category: "Black",
        value: allData1[4]
    }, {
        category: "Asian",
        value: allData1[5]
    }, {
        category: "Other",
        value: raceOther_1
    }];
    $('#demographicChart').show();
    createPie(raceData1, "Race 1 Mile");
    location.hash = "#demographicChart";
}

function race3() {
    var item = $('#markerNum').data('number');
    var string3 = markers[item].ej3;
    var allData3 = string3.split(",");
    var raceOther_3 = 1 - (parseFloat(allData3[3]) + parseFloat(allData3[4]) + parseFloat(allData3[5]));
    var raceData3 = [{
        category: "White",
        value: allData3[3]
    }, {
        category: "Black",
        value: allData3[4]
    }, {
        category: "Asian",
        value: allData3[5]
    }, {
        category: "Other",
        value: raceOther_3
    }];
    $('#demographicChart').show();
    createPie(raceData3, "Race 3 Mile");
    location.hash = "#demographicChart";
}

function createPie(data, title) {
    $("#demographicChart").kendoChart({
        series: [{
            colorField: "valueColor",
            type: "pie",
            data: data,
            padding: 0,
            margin: 0
        }],
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
    });

    //scrolls popup down to chart
    var target = $('#demographicChart');
    $('.contentPane').animate({
        scrollTop: target.offset().top
    }, 1000);
    return false;
}

function createPie2(id, className, data, title) {
    $("#" + id + " ." + className).kendoChart({
        series: [{
            colorField: "valueColor",
            type: "pie",
            data: data,
            padding: 0,
            margin: 0
        }],
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
    });
}