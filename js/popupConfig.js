function getLinkConfig(type, radius){
    var config;
    switch(type){
        case "ejMile":
            config = {
                "id": type + radius,
                "class": "bold",
                "data-radius": radius,
                "innerHTML": "EJ Mile " + radius + ": "
            };
            return config;
        case "buffer":
            config ={
                "class": type + "SingleMarker",
                "innerHTML": "Demographics",
                "data-radius": radius,
                "href": "javascript:void(0);"
            };
            return config;
        case "minority":
            config = {
                "class": type + radius + "Link",
                "innerHTML": "Minority",
                "data-radius": radius,
                "href": "javascript:void(0);"
            };
            return config;
        case "poverty":
            config = {
                "class": type + radius + "Link",
                "innerHTML": "Poverty",
                "data-radius": radius,
                "href": "javascript:void(0);"
            };
            return config;
        case "hispanic":
            config = {
                "class": type + radius + "Link",
                "innerHTML": "Hispanic",
                "data-radius": radius,
                "href": "javascript:void(0);"
            };
            return config;
        case "income":
            config = {
                "class": type + radius + "Link",
                "innerHTML": "Income",
                "data-radius": radius,
                "href": "javascript:void(0);"
            };
            return config;
        case "race":
            config = {
                "class": "race1Link",
                "innerHTML": "Race",
                "data-radius": radius,
                "href": "javascript:void(0);"
            };
            return config;
    }
}

