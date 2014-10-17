var map,
    popup,
    basemaps = [];

require(["esri/map",
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
], function(Map, SpatialReference, Popup, PopupTemplate, HomeButton, BasemapGallery, Geometry, Point, Multipoint, Circle, Extent, SimpleFillSymbol, SimpleLineSymbol, SimpleMarkerSymbol, Font, TextSymbol, Graphic, GraphicsLayer, Color, domClass, domConstruct, on, query) {

    popup = Popup({
        highlight: false
    }, domConstruct.create("div"));

    map = new Map("mapDiv", {
        basemap: "osm",
        infoWindow: popup
    });

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
            var lat = markers[count].lat,
            lon = markers[count].lon;
            if(lat !== "" || lon !== ""){
                var point = new Point(markers[count].lon, markers[count].lat),
                symbol = createMarkerSymbol();

                addListItem(count);

                addMarkerGraphic(point, symbol, popupTemplate(count));

                addTextGraphic(point, createText(count), popupTemplate(count));

                latLonArray.addPoint(point);
            }
        }

        function addListItem(count) {
            var itemNum = count+1,
            listItem = "<li><a class='markerListPopup' data-number='" + count + "' href='javascript:void(0);'>" + markers[count].label + "</a></li>";
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
        domConstruct.create("a", getLinkConfig("buffer", 1), findDomPlacement('ejMile1')),
        domConstruct.create("a", getLinkConfig("buffer", 3), findDomPlacement('ejMile3')),
        domConstruct.create("a", getLinkConfig("minority", 1), findDomPlacement('ejMile1')),
        domConstruct.create("a", getLinkConfig("minority", 3), findDomPlacement('ejMile3')),
        domConstruct.create("a", getLinkConfig("poverty", 1), findDomPlacement('ejMile1')),
        domConstruct.create("a", getLinkConfig("poverty", 3), findDomPlacement('ejMile3')),
        domConstruct.create("a", getLinkConfig("hispanic", 1), findDomPlacement('ejMile1')),
        domConstruct.create("a", getLinkConfig("hispanic", 3), findDomPlacement('ejMile3')),
        domConstruct.create("a", getLinkConfig('income', 1), findDomPlacement('ejMile1')),
        domConstruct.create("a", getLinkConfig('income', 3), findDomPlacement('ejMile3')),
        domConstruct.create("a", getLinkConfig('race', 1), findDomPlacement('ejMile1')),
        domConstruct.create("a", getLinkConfig('race', 3), findDomPlacement('ejMile3'));

        function findDomPlacement(type) {
            var domPopup = window.map.infoWindow.domNode;
            switch (type) {
                case ('actionList'):
                    return query('.actionList', domPopup)[0];
                    break;
                case ('ejMile1'):
                    return query('#ejMile1', domPopup)[0];
                    break;
                case ('ejMile3'):
                    return query('#ejMile3', domPopup)[0];
                    break;
                default:
                    break;
            }

        }

        query('.bufferSingleMarker').on("click", bufferSingleMarker);
        query('.minorityLink').on("click", createPopupPie);
        query('.povertyLink').on("click", createPopupPie);
        query('.hispanicLink').on("click", createPopupPie);
        query('.incomeLink').on("click", createPopupPie);
        query('.raceLink').on("click", createPopupPie);

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

        function switchMarkerColor(event, obj, color) {
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

        $('.bufferMarkers').click(function() {
            bufferAllMarkers($(this));
        });


        function createBufferSymbol() {
            var bufferSymb = new SimpleFillSymbol();
            bufferSymb.setOutline(null);
            bufferSymb.setColor(new dojo.Color([105, 137, 158, 0.45]));
            return bufferSymb;
        }

        function createBuffer(radius, lonLatArray) {
            var buffer = new Circle({
                center: lonLatArray,
                geodesic: true,
                radius: radius,
                radiusUnit: "esriMiles"
            });
            return buffer;
        }

        function getGraphicLayer(type, radius) {
            var graphicLayer;
            if (type === "single") {
                switch (radius) {
                    case 1:
                        graphicLayer = buffer1SingleLayer;
                        break;
                    case 3:
                        graphicLayer = buffer3SingleLayer;
                        break;
                    default:
                        break;
                }
                return graphicLayer;
            } else if (type === "all") {
                switch (radius) {
                    case 1:
                        graphicLayer = buffer1AllLayer;
                        break;
                    case 3:
                        graphicLayer = buffer3AllLayer;
                        break;
                    default:
                        break;
                }
                return graphicLayer;
            }
        }

        function showBufferLegend(radius) {
            $('#legendInfo').css('display', 'block');
            $('#legendInfo').html('<p class="bold">' + radius + ' Mile Radius</p>');
        }

        function addBufferLayer(graphicLayer, radius) {
            var lonLatArray = [$('.lon').text(), $('.lat').text()],
                bufferCircle = new Graphic(createBuffer(radius, lonLatArray), createBufferSymbol());
            graphicLayer.add(bufferCircle);
            showBufferLegend(radius);
            map.addLayer(graphicLayer);
            map.reorderLayer(graphicLayer, 0);
            graphicLayer.show();
        }

        //additional graphic layers
        var buffer1AllLayer = new GraphicsLayer(),
            buffer1SingleLayer = new GraphicsLayer(),
            buffer3AllLayer = new GraphicsLayer(),
            buffer3SingleLayer = new GraphicsLayer();

        function bufferSingleMarker() {
            var radius = $(this).data('radius'),
                url = "http://epamap14.epa.gov/ejmap/demog2010report.aspx?coords=" + $('.lon').text() + "," + $('.lat').text() + "&feattype=point&radius=1",
                graphicLayer = getGraphicLayer("single", radius);

            hideEverything();
            window.open(url, "_blank");

            //if graphiclayer is empty
            if (graphicLayer._div === null) {
                addBufferLayer(graphicLayer, radius);
            } else {
                graphicLayer.clear();
                addBufferLayer(graphicLayer, radius);
            }
        }

        function bufferAllMarkers(obj) {
            var radius = $(obj).data('radius'),
                graphicLayer = getGraphicLayer("all", radius),
                lonLatArray = [$('.lon').text(), $('.lat').text()];

            hideEverything();

            //if graphic layer is empty
            if (graphicLayer._div === null) {
                for (i in latLonArray.points) {
                    var bufferCircle = new Graphic(createBuffer(radius, latLonArray.points[i]), createBufferSymbol());
                    graphicLayer.add(bufferCircle);
                }
                showBufferLegend(radius);
                map.addLayer(graphicLayer);
                map.reorderLayer(graphicLayer, 0);
                graphicLayer.show();
            } else {
                showBufferLegend(radius);
                graphicLayer.show();
            }
        }

        $("#hideLayers").click(function() {
            hideEverything();
            $('#legendInfo').empty();
            $('#legendInfo').css('display', 'none');
        });

        function hideEverything() {
            buffer1AllLayer.hide();
            buffer1SingleLayer.hide();
            buffer3AllLayer.hide();
            buffer3SingleLayer.hide();
            map.infoWindow.hide();
        }

    });

});

$(document).ready(function() {
    $("#hideLayers").kendoButton();
});