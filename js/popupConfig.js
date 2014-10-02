function getLinkConfig(type, radius){
    var config;
    switch(type){
        case "ejMile":
            config = {
                "id": type + radius,
                "class": "bold",
                "data-radius": radius,
                "data-type": type,
                "innerHTML": "EJ Mile " + radius + ": "
            };
            return config;
            break;
        case "buffer":
            config ={
                "class": type + "SingleMarker",
                "innerHTML": "Demographics",
                "data-radius": radius,
                "data-type": type,
                "href": "javascript:void(0);"
            };
            return config;
            break;
        case "minority":
            config = {
                "class": type + "Link",
                "innerHTML": "Minority",
                "data-radius": radius,
                "data-type": type,
                "href": "javascript:void(0);"
            };
            return config;
            break;
        case "poverty":
            config = {
                "class": type + "Link",
                "innerHTML": "Poverty",
                "data-radius": radius,
                "data-type": type,
                "href": "javascript:void(0);"
            };
            return config;
            break;
        case "hispanic":
            config = {
                "class": type + "Link",
                "innerHTML": "Hispanic",
                "data-radius": radius,
                "data-type": type,
                "href": "javascript:void(0);"
            };
            return config;
            break;
        case "income":
            config = {
                "class": type + "Link",
                "innerHTML": "Income",
                "data-radius": radius,
                "data-type": type,
                "href": "javascript:void(0);"
            };
            return config;
            break;
        case "race":
            config = {
                "class": type + "Link",
                "innerHTML": "Race",
                "data-radius": radius,
                "data-type": type,
                "href": "javascript:void(0);"
            };
            return config;
            break;
        default:
            break;
    }
}

