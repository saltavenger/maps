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