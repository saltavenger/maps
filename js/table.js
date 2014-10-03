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
        var pieData = getPieData(i),
            panelNum = parseInt(i) + 1;

        createPieTable("panel" + panelNum, "minority1", pieData.minorityDataOneMile, "Percent Minority");
        createPieTable("panel" + panelNum, "poverty1", pieData.povertyDataOneMile, "Poverty");
        createPieTable("panel" + panelNum, "hispanic1", pieData.hispanicDataOneMile, "Hispanic Population");
        createPieTable("panel" + panelNum, "income1", pieData.incomeDataOneMile, "Income Data");
        createPieTable("panel" + panelNum, "race1", pieData.raceDataOneMile, "Race");
        createPieTable("panel_2_" + panelNum, "minority3", pieData.minorityDataThreeMile, "Percent Minority");
        createPieTable("panel_2_" + panelNum, "poverty3", pieData.povertyDataThreeMile, "Poverty");
        createPieTable("panel_2_" + panelNum, "hispanic3", pieData.hispanicDataThreeMile, "Hispanic Population");
        createPieTable("panel_2_" + panelNum, "income3", pieData.incomeDataThreeMile, "Income");
        createPieTable("panel_2_" + panelNum, "race3", pieData.raceDataThreeMile, "Race");
    }
}

function getTitle(type, radius) {
    var title;
    switch (type) {
        case "minority":
            title = "Percent Minority " + radius + " Mile";
            break;
        case "poverty":
            title = "Poverty " + radius + " Mile";
            break;
        case "hispanic":
            title = "Hispanic Population " + radius + " Mile";
            break;
        case "income":
            title = "Income Data " + radius + " Mile";
            break;
        case "race":
            title = "Race " + radius + " Mile";
            break;
        default:
            break;
    }
    return title;
}


function createPie(data, title) {
    var pieConfig = pieConfigPopup(data, title);
    $("#demographicChart").kendoChart(pieConfig);

    //scrolls popup down to chart
    var target = $('#demographicChart');
    $('.contentPane').animate({
        scrollTop: target.offset().top
    }, 1000);
    return false;
}

function createPieTable(id, className, data, title) {
    var pieConfig = pieConfigTable(data, title);
    $("#" + id + " ." + className).kendoChart(pieConfig);
}