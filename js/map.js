var fullscreen,
    map,
    popup,
    basemaps = [];

require(["esri/map",
    "application/FullScreenMap",
    "esri/SpatialReference",
    "esri/dijit/Popup",
    "esri/dijit/PopupTemplate",
    "esri/dijit/HomeButton",
    "esri/dijit/BasemapGallery",
    "esri/geometry",
    "esri/geometry/Point",
    "esri/geometry/Multipoint",
    "esri/geometry/Circle",
    "esri/geometry/Extent",
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/Font",
    "esri/symbols/TextSymbol",
    "esri/graphic",
    "esri/layers/GraphicsLayer",
    "esri/Color",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/query",
    "dojo/domReady!"
], function(Map, FullScreenMap, SpatialReference, Popup, PopupTemplate, HomeButton, BasemapGallery, Geometry, Point, Multipoint, Circle, Extent, SimpleFillSymbol, SimpleLineSymbol, SimpleMarkerSymbol, Font, TextSymbol, Graphic, GraphicsLayer, Color, domClass, domConstruct, on, query) {

    popup = Popup({
        highlight: false
    }, domConstruct.create("div"));

    map = new Map("mapDiv", {
        basemap: "osm",
        infoWindow: popup
    });

    fullscreen = new FullScreenMap({
        map: map
    }, "fullscreen");
    fullscreen.startup();

    var satLayer = new esri.dijit.BasemapLayer({
            url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
        }),
        boundaryLayer = new esri.dijit.BasemapLayer({
            url: "http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer"
        }),
        transLayer = new esri.dijit.BasemapLayer({
            url: "http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer"
        }),
        satelliteBasemap = new esri.dijit.Basemap({
            layers: [satLayer, boundaryLayer, transLayer],
            title: "Satellite",
            thumbnailUrl: "http://www.arcgis.com/sharing/rest/content/items/d802f08316e84c6592ef681c50178f17/info/thumbnail/Imagery_Labels_Trans.jpg"
        }),
        osmLayer = new esri.dijit.BasemapLayer({
            type: "OpenStreetMap"
        }),
        osmBasemap = new esri.dijit.Basemap({
            layers: [osmLayer],
            title: "Standard",
            thumbnailUrl: "http://www.arcgis.com/sharing/rest/content/items/b834a68d7a484c5fb473d4ba90d35e71/info/thumbnail/osm.jpg"
        });

    basemaps.push(satelliteBasemap, osmBasemap);

    //add the basemap gallery, in this case we'll display maps from ArcGIS.com including bing maps
    var basemapGallery = new BasemapGallery({
            showArcGISBasemaps: false,
            basemaps: basemaps,
            map: map
        }, "basemapGallery"),
        prevView = fullscreen.fullscreen,
        homeButton = new HomeButton({
            map: map
        }, "HomeButton");

    basemapGallery.startup();

    basemapGallery.on("error", function(msg) {
        console.log("basemap gallery error:  ", msg);
    });

    homeButton.startup();

    //add points, markers, and numbers to map, center & zoom
    map.on("load", function() {
        var markerContainer = new GraphicsLayer(),
            latLonArray = new Multipoint();

        for (count = 0; count < markers.length; count++) {
            var point = new Point(markers[count].lon, markers[count].lat),
                symbol = createMarkerSymbol();

            addListItem(count);

            addMarkerGraphic(point, symbol, popupTemplate(count));

            addTextGraphic(point, createText(count), popupTemplate(count));

            latLonArray.addPoint(point);
        }

        function addListItem(count) {
            var listItem = "<li><a class='markerListPopup' data-number='" + count + "' href='javascript:void(0);'>" + markers[count].label + "</a></li>";
            $('#markerList').append(listItem);
        }

        function popupTemplate(count) {
            var popupTemplate = new esri.dijit.PopupTemplate(),
                /*for popups*/
                html = ["<p>" + markers[count].nameLink + "</p>",
                    "<p>" + markers[count].address + "</p>",
                    "<p>TRI ID= " + markers[count].triID + "</p>",
                    "<p>" + markers[count].latLonHtml + "</p>",
                    "<div id='demographicChart'></div>",
                    "<div id='markerNum' data-number='" + count + "'></div>"
                ].join('\n');
            popupTemplate.setContent(html);
            return popupTemplate;
        }

        function addTextGraphic(point, text, popupTemplate) {
            var textGraphic = new Graphic(point, text);
            textGraphic.setInfoTemplate(popupTemplate);
            markerContainer.add(textGraphic);
        }

        function addMarkerGraphic(point, symbol, popupTemplate) {
            var graphic = new Graphic(point, symbol);
            graphic.setInfoTemplate(popupTemplate);
            markerContainer.add(graphic);
        }

        function createText(count) {
            var num = count + 1,
                text = new TextSymbol(num.toString());
            text.setFont(fontProperties());
            text.setVerticalAlignment("bottom");
            text.setOffset(0, -3);
            text.setColor(new dojo.Color("white"));
            return text;
        }

        function fontProperties() {
            var font = new Font();
            font.setSize("10pt");
            font.setFamily("Helvetica");
            font.setWeight("bold");
            return font;
        }

        function createMarkerSymbol() {
            var s = new SimpleMarkerSymbol(),
                iconPath = "M14.597,29.445c-0.057-0.591,1.959-5.648-5.644-13.092c-1.644-1.61-4.715-4.281-4.715-7.208c0-4.553,4.856-8.243,10.846-8.243h-0.171c5.989,0,10.847,3.69,10.847,8.243c0,2.926-3.072,5.599-4.717,7.208c-7.603,7.443-5.587,12.501-5.644,13.092H14.597z";
            s.setPath(iconPath);
            s.setColor(new dojo.Color("#2b83ba"));
            s.setSize(40);
            s.outline.color = new dojo.Color("#1A608D");
            return s;
        }

        //set map and home button extent
        var setMap = latLonArray.getExtent();
        map.setExtent(setMap.expand(2));
        homeButton.extent = setMap.expand(2);
        //add markers to map
        map.addLayer(markerContainer);


        //add and configure links in popup;
        domConstruct.create("p", getLinkConfig("ejMile", 1), findDomPlacement('actionList'));
        domConstruct.create("p", getLinkConfig("ejMile", 3), findDomPlacement('actionList'));
        var buffer1Link = domConstruct.create("a", getLinkConfig("buffer", 1), findDomPlacement('ejMile1')),
            buffer3Link = domConstruct.create("a", getLinkConfig("buffer", 3), findDomPlacement('ejMile3')),
            minority1Link = domConstruct.create("a", getLinkConfig("minority", 1), findDomPlacement('ejMile1')),
            minority3Link = domConstruct.create("a", getLinkConfig("minority", 3), findDomPlacement('ejMile3')),
            poverty1Link = domConstruct.create("a", getLinkConfig("poverty", 1), findDomPlacement('ejMile1')),
            poverty3Link = domConstruct.create("a", getLinkConfig("poverty", 3), findDomPlacement('ejMile3')),
            hispanic1Link = domConstruct.create("a", getLinkConfig("hispanic", 1), findDomPlacement('ejMile1')),
            hispanic3Link = domConstruct.create("a", getLinkConfig("hispanic", 3), findDomPlacement('ejMile3')),
            income1Link = domConstruct.create("a", getLinkConfig('income', 1), findDomPlacement('ejMile1')),
            income3Link = domConstruct.create("a", getLinkConfig('income', 3), findDomPlacement('ejMile3')),
            race1Link = domConstruct.create("a", getLinkConfig('race', 1), findDomPlacement('ejMile1')),
            race3Link = domConstruct.create("a", getLinkConfig('race', 3), findDomPlacement('ejMile3'));

        function findDomPlacement(type) {
            var domPopup = window.map.infoWindow.domNode;
            switch (type) {
                case ('actionList'):
                    return query('.actionList', domPopup)[0];
                case ('ejMile1'):
                    return query('#ejMile1', domPopup)[0];
                case ('ejMile3'):
                    return query('#ejMile3', domPopup)[0];
            }

        }

        query('.buffer1Single').on("click", buffer1Single);
        query('.buffer3Single').on("click", buffer3Single);
        query('.minority1Link').on("click", minority1);
        query('.minority3Link').on("click", minority3);
        query('.poverty1Link').on("click", poverty1);
        query('.poverty3Link').on("click", poverty3);
        query('.hispanic1Link').on("click", hispanic1);
        query('.hispanic3Link').on("click", hispanic3);
        query('.income1Link').on("click", income1);
        query('.income3Link').on("click", income3);
        query('.race1Link').on("click", race1);
        query('.race3Link').on("click", race3);

        $('.markerListPopup').click(function() {
            var num = $(this).data("number"),
                point = new Point(markers[num].lon, markers[num].lat),
                html = ["<p>" + markers[num].nameLink + "</p>",
                    "<p>" + markers[num].address + "</p>",
                    "<p>TRI ID= " + markers[num].triID + "</p>",
                    "<p>" + markers[num].latLonHtml + "</p>",
                    "<div id='demographicChart'></div>",
                    "<div id='markerNum' data-number='" + num + "'></div>"
                ].join('\n');
            map.infoWindow.setTitle("");
            map.infoWindow.setContent(html);
            map.infoWindow.show(point);
            $('.actionList').removeClass('hidden');
        });

        function switchMarkerColor(event, obj, color){
            if (event.graphic.symbol.type != "textsymbol") {
                event.graphic.symbol.color.setColor(new dojo.Color(color));
                obj.redraw();
            } else if (event.graphic.symbol.type === "textsymbol") {
                event.target.previousSibling.e_graphic.symbol.color.setColor(new dojo.Color(color));
                obj.redraw();
            }
        }

        //hover & click color for markers
        markerContainer.on("mouse-over", function(evt) {
            switchMarkerColor(evt, this, "#d7191c");
        });

        markerContainer.on("mouse-down", function(evt) {
            switchMarkerColor(evt, this, '#1A608D');
        });

        markerContainer.on("mouse-out, mouse-up", function(evt) {
            switchMarkerColor(evt, this, '#2b83ba');
        });


        function createBufferSymbol() {
            var bufferSymb = new SimpleFillSymbol();
            bufferSymb.setOutline(null);
            bufferSymb.setColor(new dojo.Color([105, 137, 158, 0.45]));
            return bufferSymb;
        }

        //additional graphic layers
        var buffer1Layer = new GraphicsLayer(),
            buffer1SingleLayer = new GraphicsLayer(),
            buffer3Layer = new GraphicsLayer(),
            buffer3SingleLayer = new GraphicsLayer();


        $('.buffer1').click(function() {
            buffer1();
        });

        $('.buffer3').click(function() {
            buffer3();
        });

        function buffer1Single() {
            var lat = $('.lat').text();
            var lon = $('.lon').text();
            var url = "http://epamap14.epa.gov/ejmap/demog2010report.aspx?coords=" + lon + "," + lat + "&feattype=point&radius=1";
            hideEverything();
            window.open(url, "_blank");
            if (buffer1SingleLayer._div === null) {
                buffer = new Circle({
                    center: [lon, lat],
                    geodesic: true,
                    radius: 1,
                    radiusUnit: "esriMiles"
                });
                var bufferCircle = new Graphic(buffer, createBufferSymbol());
                buffer1SingleLayer.add(bufferCircle);
                $('#legendInfo').css('display', 'block');
                $('#legendInfo').html('<p class="bold">1 Mile Radius</p>');
                map.addLayer(buffer1SingleLayer);
                map.reorderLayer(buffer1SingleLayer, 0);
                buffer1SingleLayer.show();
            } else {
                buffer1SingleLayer.clear();
                buffer = new Circle({
                    center: [lon, lat],
                    geodesic: true,
                    radius: 1,
                    radiusUnit: "esriMiles"
                });
                var bufferCircle = new Graphic(buffer, createBufferSymbol());
                buffer1SingleLayer.add(bufferCircle);
                $('#legendInfo').css('display', 'block');
                $('#legendInfo').html('<p class="bold">1 Mile Radius</p>');
                map.addLayer(buffer1SingleLayer);
                map.reorderLayer(buffer1SingleLayer, 0);
                buffer1SingleLayer.show();
            }
        }

        function buffer3Single() {
            var lat = $('.lat').text();
            var lon = $('.lon').text();
            var url = "http://epamap14.epa.gov/ejmap/demog2010report.aspx?coords=" + lon + "," + lat + "&feattype=point&radius=3";
            hideEverything();
            window.open(url, "_blank");
            if (buffer3SingleLayer._div === null) {
                buffer = new Circle({
                    center: [lon, lat],
                    geodesic: true,
                    radius: 3,
                    radiusUnit: "esriMiles"
                });
                var bufferCircle = new Graphic(buffer, createBufferSymbol());
                buffer3SingleLayer.add(bufferCircle);
                $('#legendInfo').css('display', 'block');
                $('#legendInfo').html('<p class="bold">3 Mile Radius</p>');
                map.addLayer(buffer3SingleLayer);
                map.reorderLayer(buffer3SingleLayer, 0);
                buffer3SingleLayer.show();
            } else {
                buffer3SingleLayer.clear();
                buffer = new Circle({
                    center: [lon, lat],
                    geodesic: true,
                    radius: 3,
                    radiusUnit: "esriMiles"
                });
                var bufferCircle = new Graphic(buffer, createBufferSymbol());
                buffer3SingleLayer.add(bufferCircle);
                $('#legendInfo').css('display', 'block');
                $('#legendInfo').html('<p class="bold">3 Mile Radius</p>');
                map.addLayer(buffer3SingleLayer);
                map.reorderLayer(buffer3SingleLayer, 0);
                buffer3SingleLayer.show();
            }
        }

        function buffer1() {
            hideEverything();
            if (buffer1Layer._div === null) {
                for (i in latLonArray.points) {
                    buffer = new Circle({
                        center: latLonArray.points[i],
                        geodesic: true,
                        radius: 1,
                        radiusUnit: "esriMiles"
                    });
                    var bufferCircle = new Graphic(buffer, createBufferSymbol());
                    buffer1Layer.add(bufferCircle);
                }
                $('#legendInfo').css('display', 'block');
                $('#legendInfo').html('<p class="bold">1 Mile Radius</p>');
                map.addLayer(buffer1Layer);
                map.reorderLayer(buffer1Layer, 0);
                buffer1Layer.show();
            } else {
                $('#legendInfo').css('display', 'block');
                $('#legendInfo').html('<p class="bold">1 Mile Radius</p>');
                buffer1Layer.show();
            }
        }

        function buffer3() {
            hideEverything();
            if (buffer3Layer._div === null) {
                for (i in latLonArray.points) {
                    buffer = new Circle({
                        center: latLonArray.points[i],
                        geodesic: true,
                        radius: 3,
                        radiusUnit: "esriMiles"
                    });
                    var bufferCircle = new Graphic(buffer, createBufferSymbol());
                    buffer3Layer.add(bufferCircle);
                }
                $('#legendInfo').css('display', 'block');
                $('#legendInfo').html('<p class="bold">3 Mile Radius</p>');
                map.addLayer(buffer3Layer);
                map.reorderLayer(buffer3Layer, 0);
                buffer3Layer.show();
            } else {
                $('#legendInfo').css('display', 'block');
                $('#legendInfo').html('<p class="bold">3 Mile Radius</p>');
                buffer3Layer.show();
            }
        }

        $("#hideLayers").click(function() {
            hideEverything();
            $('#legendInfo').empty();
            $('#legendInfo').css('display', 'none');
        });

        function hideEverything() {
            buffer1Layer.hide();
            buffer1SingleLayer.hide();
            buffer3Layer.hide();
            buffer3SingleLayer.hide();
            map.infoWindow.hide();
        }

    });

    //whenever graphics reload
    map.on("update-end", function() {
        //check whether or not we are in fullscreen view, if it is different from the previous view, recenter and update previous view
        if (fullscreen.fullscreen != prevView) {
            homeButton.home();
            prevView = fullscreen.fullscreen;
        }
    });

});

$(document).ready(function() {
    $("#hideLayers").kendoButton();
});