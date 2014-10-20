function createTableData(){
    var data = [];
    for (i in markers) {
        var lat = markers[i].lat,
        lon = markers[i].lon;
        if(lat === "" || lon === ""){
            //if no lat, lon move to end of table
            addMarker = markers.slice(i, i+1);
            markers.splice(i, 1);
            markers.push(addMarker[0]);
        }
        var dataObject = {
            mapNum: parseInt(i) + 1,
            facName: markers[i].nameLink,
            address: markers[i].address,
            triID: markers[i].triID,
            lat: markers[i].lat,
            lon: markers[i].lon
        };
        data.push(dataObject);
    }
    return data;
}

var tableColumns = [{
    field: "mapNum",
    title: " ",
    width: "60px"
}, {
    field: "facName",
    title: "Facility Name",
    encoded: false
}, {
    field: "address",
    title: "Address",
    encoded: false
}, {
    field: "triID",
    title: "TRI ID"
}, {
    field: "lat",
    title: "Latitude"
}, {
    field: "lon",
    title: "Longitude"
}];

var tableSchema = {
    model: {
        fields: {
            mapNum: {
                type: "number"
            },
            lat: {
                type: "number"
            },
            lon: {
                type: "number"
            }
        }
    }
};

function getPieData(i) {
    var demographicOneMileRadius = markers[i].ej1.split(",");
        var incomeData1OneMile = demographicOneMileRadius[6],
        incomeData2OneMile = demographicOneMileRadius[7],
        incomeData3OneMile = demographicOneMileRadius[8],
        incomeData4OneMile = demographicOneMileRadius[9],
        almostAllIncomesOneMile = parseFloat(incomeData1OneMile) + parseFloat(incomeData2OneMile) + parseFloat(incomeData3OneMile) + parseFloat(incomeData4OneMile),
        incomeData5OneMile = (almostAllIncomesOneMile === "")? "" : almostAllIncomesOneMile,
        raceData1OneMile = demographicOneMileRadius[3],
        raceData2OneMile = demographicOneMileRadius[4],
        raceData3OneMile = demographicOneMileRadius[5],
        almostAllRaceOneMile = parseFloat(raceData1OneMile) + parseFloat(raceData2OneMile) + parseFloat(raceData3OneMile),
        raceData4OneMile = (almostAllRaceOneMile === "")? "" : 1- almostAllRaceOneMile,
        minorityDataOneMile = [{
            category: "Minority",
            value: demographicOneMileRadius[0]
        }, {
            category: "Other",
            value: (demographicOneMileRadius[0] === "" )? "" : 1 - demographicOneMileRadius[0],
            valueColor: "#000"
        }],
        povertyDataOneMile = [{
            category: "Poverty",
            value: demographicOneMileRadius[1]
        }, {
            category: "Other",
            value: (demographicOneMileRadius[1] === "")? "" :  1 - demographicOneMileRadius[1],
            valueColor: "#000"
        }],
        hispanicDataOneMile = [{
            category: "Hispanic",
            value: demographicOneMileRadius[2]
        }, {
            category: "Other",
            value: (demographicOneMileRadius[2] === "")? "" : 1 - demographicOneMileRadius[2],
            valueColor: "#000"
        }],
        incomeDataOneMile = [{
            category: "< $15k",
            value: incomeData1OneMile
        }, {
            category: "$15k-$25k",
            value: incomeData2OneMile
        }, {
            category: "$25k-$50k",
            value: incomeData3OneMile
        }, {
            category: "$50k-$75k",
            value: incomeData4OneMile
        }, {
            category: "> $75k",
            value: incomeData5OneMile
        }],
        raceDataOneMile = [{
            category: "White",
            value: raceData1OneMile
        }, {
            category: "Black",
            value: raceData2OneMile
        }, {
            category: "Asian",
            value: raceData3OneMile
        }, {
            category: "Other",
            value: raceData4OneMile
        }];

    var demographicThreeMileRadius = markers[i].ej3.split(",");
        var incomeData1ThreeMile = demographicThreeMileRadius[6],
        incomeData2ThreeMile = demographicThreeMileRadius[7],
        incomeData3ThreeMile = demographicThreeMileRadius[8],
        incomeData4ThreeMile = demographicThreeMileRadius[9],
        almostAllIncomesThreeMile = parseFloat(incomeData1ThreeMile) + parseFloat(incomeData2ThreeMile) + parseFloat(incomeData3ThreeMile) + parseFloat(incomeData4ThreeMile),
        incomeData5ThreeMile = (almostAllIncomesThreeMile === "")? "" : 1 - almostAllIncomesThreeMile,
        raceData1ThreeMile = demographicThreeMileRadius[3],
        raceData2ThreeMile = demographicThreeMileRadius[4],
        raceData3ThreeMile = demographicThreeMileRadius[5],
        almostAllRaceThreeMile = parseFloat(raceData1ThreeMile) + parseFloat(raceData2ThreeMile) + parseFloat(raceData3ThreeMile),
        raceData4ThreeMile = (almostAllRaceThreeMile === "")? "" : 1 - almostAllRaceThreeMile,
        minorityDataThreeMile = [{
            category: "Minority",
            value: demographicThreeMileRadius[0]
        }, {
            category: "Other",
            value: (demographicThreeMileRadius[0] === "")? "" : 1 - demographicThreeMileRadius[0],
            valueColor: "#000"
        }],
        povertyDataThreeMile = [{
            category: "Poverty",
            value: demographicThreeMileRadius[1]
        }, {
            category: "Other",
            value: (demographicThreeMileRadius[1] === "")? "" : 1 - demographicThreeMileRadius[1],
            valueColor: "#000"
        }],
        hispanicDataThreeMile = [{
            category: "Hispanic",
            value: demographicThreeMileRadius[2]
        }, {
            category: "Other",
            value: (demographicThreeMileRadius[2] === "")? "" : 1 - demographicThreeMileRadius[2],
            valueColor: "#000"
        }],
        incomeDataThreeMile = [{
                category: "< $15k",
                value: incomeData1ThreeMile
            }, {
                category: "$15k-$25k",
                value: incomeData2ThreeMile
            }, {
                category: "$25k-$50k",
                value: incomeData3ThreeMile
            }, {
                category: "$50k-$75k",
                value: incomeData4ThreeMile
            }, {
                category: "> $75k",
                value: incomeData5ThreeMile
            }],
            raceDataThreeMile = [{
                category: "White",
                value: raceData1ThreeMile
            }, {
                category: "Black",
                value: raceData2ThreeMile
            }, {
                category: "Asian",
                value: raceData3ThreeMile
            }, {
                category: "Other",
                value: raceData4ThreeMile
            }];

    var pieDataObj = {};
    pieDataObj.minorityDataOneMile = minorityDataOneMile;
    pieDataObj.povertyDataOneMile = povertyDataOneMile;
    pieDataObj.hispanicDataOneMile = hispanicDataOneMile;
    pieDataObj.incomeDataOneMile = incomeDataOneMile;
    pieDataObj.raceDataOneMile = raceDataOneMile;
    pieDataObj.minorityDataThreeMile = minorityDataThreeMile;
    pieDataObj.povertyDataThreeMile = povertyDataThreeMile;
    pieDataObj.hispanicDataThreeMile = hispanicDataThreeMile;
    pieDataObj.incomeDataThreeMile = incomeDataThreeMile;
    pieDataObj.raceDataThreeMile = raceDataThreeMile;
    return pieDataObj;
}