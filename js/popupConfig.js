function getLinkConfig(type, radius){
    var config;
    switch(type){
        case "ejMile":
            config = {
                "id": type + radius,
                "class": "bold",
                "innerHTML": "EJ Mile " + radius + ": "
            };
            return config;
        case "buffer":
            config ={
                "class": type + radius + "Single",
                "innerHTML": "Demographics",
                "href": "javascript:void(0);"
            };
            return config;
        case "minority":
            config = {
                "class": type + radius + "Link",
                "innerHTML": "Minority",
                "href": "javascript:void(0);"
            };
            return config;
        case "poverty":
            config = {
                "class": type + radius + "Link",
                "innerHTML": "Poverty",
                "href": "javascript:void(0);"
            };
            return config;
        case "hispanic":
            config = {
                "class": type + radius + "Link",
                "innerHTML": "Hispanic",
                "href": "javascript:void(0);"
            };
            return config;
        case "income":
            config = {
                "class": type + radius + "Link",
                "innerHTML": "Income",
                "href": "javascript:void(0);"
            };
            return config;
        case "race":
            config = {
                "class": "race1Link",
                "innerHTML": "Race",
                "href": "javascript:void(0);"
            };
            return config;
    }
}

