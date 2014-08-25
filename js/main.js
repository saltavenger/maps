var markers = [
{ lat:'40.03678', lon:'-105.22465', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80301HSRCH5555A" target=_blank>AGILENT TECHNOLOGIES BOULDER CO</a>', address: '5555 AIRPORT BLVD STE 100, BOULDER COLORADO 80301 (BOULDER), BOULDER, CO 80301', triID: '80301HSRCH5555A', latLonHtml: 'Latitude <span class="lat">40.03678</span>&nbsp; Longitude <span class="lon">-105.22465</span>', label:'AGILENT TECHNOLOGIES BOULDER CO', ej1:'0.234,0.103,0.149,0.835,0.015,0.033,0.105,0.112,0.248,0.257', ej3:'0.179,0.156,0.097,0.870,0.014,0.044,0.166,0.105,0.281,0.167' },
{ lat:'40.238056', lon:'-104.998056', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80542BLDRS5983R" target=_blank>BOULDER SCIENTIFIC CO MEAD FACILITY</a>', address: '598 THIRD ST, MEAD COLORADO 80542 (WELD), MEAD, CO 80542', triID: '80542BLDRS5983R', latLonHtml: 'Latitude <span class="lat">40.238056</span>&nbsp; Longitude <span class="lon">-104.998056</span>',  label:'BOULDER SCIENTIFIC CO MEAD FACILITY', ej1:'0.139,0.031,0.122,0.932,0.000,0.007,0.040,0.070,0.180,0.240', ej3:'0.138,0.030,0.120,0.935,0.001,0.006,0.037,0.068,0.188,0.251' },
{ lat:'39.78243', lon:'-104.92225', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80216CLRDP4747H" target=_blank>COLORADO PAINT CO</a>', address: '4747 HOLLY ST, DENVER COLORADO 80216 (DENVER), DENVER, CO 80216', triID: '80216CLRDP4747H', latLonHtml: 'Latitude <span class="lat">39.78243</span>&nbsp; Longitude <span class="lon">-104.92225</span>',  label:'COLORADO PAINT CO', ej1:'0.851,0.191,0.272,0.264,0.562,0.006,0.198,0.129,0.412,0.185', ej3:'0.718,0.190,0.396,0.437,0.291,0.011,0.191,0.142,0.317,0.176' },
{ lat:'40.02025', lon:'-105.227461', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80301SYNTX2075N" target=_blank>CORDEN PHARMA COLORADO INC</a>', address: '2075 N 55TH ST, BOULDER COLORADO 80301 (BOULDER), BOULDER, CO 80301', triID: '80301SYNTX2075N', latLonHtml: 'Latitude <span class="lat">40.02025</span>&nbsp; Longitude <span class="lon">-105.227461</span>',  label:'CORDEN PHARMA COLORADO INC', ej1:'0.160,0.066,0.074,0.874,0.011,0.052,0.073,0.064,0.245,0.213', ej3:'0.177,0.197,0.092,0.869,0.014,0.047,0.188,0.120,0.279,0.169' },
{ lat:'39.87075', lon:'-104.888006', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80640THNLM851E9" target=_blank>ETHANOL MANAGEMENT CO  LLC</a>', address: '8501 E 96TH AVE, HENDERSON COLORADO 80640 (ADAMS), HENDERSON, CO 80640', triID: '80640THNLM851E9', latLonHtml: 'Latitude <span class="lat">39.87075</span>&nbsp; Longitude <span class="lon">-104.888006</span>',  label:'ETHANOL MANAGEMENT CO  LLC', ej1:'0.396,0.044,0.342,0.767,0.012,0.007,0.117,0.110,0.434,0.223', ej3:'0.364,0.087,0.312,0.775,0.012,0.016,0.090,0.100,0.346,0.275' },
{ lat:'40.455978', lon:'-104.857553', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80550FRNTR31375" target=_blank>FRONT RANGE ENERGY</a>', address: '31375 GREAT WESTERN DR, WINDSOR COLORADO 80550 (WELD), WINDSOR, CO 80550', triID: '80550FRNTR31375', latLonHtml: 'Latitude <span class="lat">40.455978</span>&nbsp; Longitude <span class="lon">-104.857553</span>',  label:'FRONT RANGE ENERGY', ej1:'0.145,0.061,0.116,0.897,0.004,0.007,0.106,0.098,0.277,0.279', ej3:'0.140,0.061,0.112,0.905,0.004,0.006,0.097,0.096,0.277,0.270' },
{ lat:'38.276933', lon:'-104.523808', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=81001BFGDR50WIL" target=_blank>GOODRICH CARBON OPERATIONS</a>', address: '50 WILLIAM WHITE BLVD, PUEBLO COLORADO 81001 (PUEBLO), PUEBLO, CO 81001', triID: '81001BFGDR50WIL', latLonHtml: 'Latitude <span class="lat">38.276933</span>&nbsp; Longitude <span class="lon">-104.523808</span>',  label:'GOODRICH CARBON OPERATIONS', ej1:'0.368,0.116,0.337,0.796,0.007,0.004,0.144,0.118,0.492,0.169', ej3:'0.492,0.172,0.454,0.743,0.011,0.008,0.231,0.165,0.328,0.159' },
{ lat:'40.02726', lon:'-105.23966', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80301NPRBT4884S" target=_blank>HOSPIRA BOULDER INC</a>', address: '4884 STERLING DR, BOULDER COLORADO 80301 (BOULDER), BOULDER, CO 80301', triID: '80301NPRBT4884S', latLonHtml: 'Latitude <span class="lat">40.02726</span>&nbsp; Longitude <span class="lon">-105.23966</span>',  label:'HOSPIRA BOULDER INC', ej1:'0.283,0.163,0.184,0.785,0.023,0.048,0.153,0.139,0.353,0.188', ej3:'0.165,0.185,0.087,0.878,0.013,0.042,0.178,0.117,0.269,0.165' },
{ lat:'39.79829', lon:'-104.94363', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=81007NTRST646NS" target=_blank>INTERSTATE CHEMICAL CO INC</a>', address: '646 N STATES AVE, PUEBLO WEST COLORADO 81007 (PUEBLO), PUEBLO WEST, CO 81007', triID: '81007NTRST646NS', latLonHtml: 'Latitude <span class="lat">39.79829</span>&nbsp; Longitude <span class="lon">-104.94363</span>',  label:'INTERSTATE CHEMICAL CO INC', ej1:'0.386,0.064,0.327,0.803,0.022,0.022,0.070,0.113,0.338,0.296', ej3:'0.352,0.073,0.296,0.816,0.018,0.020,0.087,0.116,0.350,0.251' },
{ lat:'39.9695', lon:'-104.81823', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80601LLTCC1095S" target=_blank>INTERTAPE POLYMER GROUP BRIGHTON FACILITY</a>', address: '1095 S FOURTH AVE, BRIGHTON COLORADO 80601 (ADAMS), BRIGHTON, CO 80601', triID: '80601LLTCC1095S', latLonHtml: 'Latitude <span class="lat">39.9695</span>&nbsp; Longitude <span class="lon">-104.81823</span>',  label:'INTERTAPE POLYMER GROUP BRIGHTON FACILITY', ej1:'0.394,0.088,0.358,0.779,0.005,0.016,0.085,0.104,0.319,0.269', ej3:'0.410,0.092,0.376,0.773,0.009,0.011,0.107,0.107,0.321,0.251' },
{ lat:'40.4525', lon:'-104.869166', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80551KDKCLCOUNT" target=_blank>KODAK COLORADO DIV</a>', address: '9952 EASTMAN PARK DR, WINDSOR COLORADO 80551 (WELD), WINDSOR, CO 80551', triID: '80551KDKCLCOUNT', latLonHtml: 'Latitude <span class="lat">40.4525</span>&nbsp; Longitude <span class="lon">-104.869166</span>',  label:'KODAK COLORADO DIV', ej1:'0.146,0.061,0.116,0.896,0.004,0.007,0.108,0.097,0.278,0.279', ej3:'0.134,0.060,0.108,0.912,0.004,0.006,0.094,0.092,0.274,0.274' },
{ lat:'40.454722', lon:'-104.866944', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80528MSKTW23HWA" target=_blank>MUSKET WINDSOR TRANSLOADING FACILITY</a>', address: '2030 HOWARD SMITH AVE E, WINDSOR COLORADO 80528 (WELD), WINDSOR, CO 80528', triID: '80528MSKTW23HWA', latLonHtml: 'Latitude <span class="lat">40.454722</span>&nbsp; Longitude <span class="lon">-104.866944</span>', label:'MUSKET WINDSOR TRANSLOADING FACILITY', ej1:'', ej3:'' },
{ lat:'39.89144', lon:'-104.86917', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80601SSHCN10300" target=_blank>SASHCO INC</a>', address: '10300 E 107TH PL, BRIGHTON COLORADO 80601 (ADAMS), BRIGHTON, CO 80601', triID: '80601SSHCN10300', latLonHtml: 'Latitude <span class="lat">39.89144</span>&nbsp; Longitude <span class="lon">-104.86917</span>', label:'SASHCO INC', ej1:'0.273,0.045,0.233,0.840,0.007,0.017,0.069,0.050,0.277,0.198', ej3:'0.271,0.052,0.219,0.838,0.010,0.019,0.071,0.069,0.305,0.282' },
{ lat:'39.78339', lon:'-104.93863', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80216SHFRC4101E" target=_blank>SHAFER COMMERCIAL SEATING</a>', address: '4101 E 48TH AVE, DENVER COLORADO 80216 (DENVER), DENVER, CO 80216', triID: '80216SHFRC4101E', latLonHtml: 'Latitude <span class="lat">39.78339</span>&nbsp; Longitude <span class="lon">-104.93863</span>', label:'SHAFER COMMERCIAL SEATING', ej1:'0.900,0.277,0.709,0.329,0.176,0.005,0.238,0.164,0.335,0.181', ej3:'0.732,0.203,0.405,0.426,0.297,0.010,0.209,0.149,0.312,0.170' },
{ lat:'39.87075', lon:'-104.88672', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80640SNCLR8581E" target=_blank>SINCLAIR DENVER PRODUCTS TERMINAL</a>', address: '8581 E 96TH AVE, HENDERSON COLORADO 80640 (ADAMS), HENDERSON, CO 80640', triID: '80640SNCLR8581E', latLonHtml: 'Latitude <span class="lat">39.87075</span>&nbsp; Longitude <span class="lon">-104.88672</span>', label:'SINCLAIR DENVER PRODUCTS TERMINAL', ej1:'0.398,0.042,0.344,0.766,0.011,0.007,0.116,0.109,0.434,0.222', ej3:'0.366,0.088,0.314,0.774,0.012,0.016,0.092,0.101,0.348,0.273' },
{ lat:'39.77642', lon:'-104.9223', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=80216VNWTR4300H" target=_blank>UNIVAR USA INC DENVER</a>', address: '4300 HOLLY ST, DENVER COLORADO 80216 (DENVER), DENVER, CO 80216', triID: '80216VNWTR4300H', latLonHtml: 'Latitude <span class="lat">39.77642</span>&nbsp; Longitude <span class="lon">-104.9223</span>', label:'UNIVAR USA INC DENVER', ej1:'0.938,0.199,0.224,0.163,0.697,0.006,0.256,0.123,0.366,0.170', ej3:'0.685,0.189,0.361,0.456,0.289,0.013,0.192,0.144,0.311,0.173' }
  ];

var fullscreen;

var map;
require([ "esri/map",
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

  var popup = Popup({highlight: false},domConstruct.create("div"));

  map = new Map("mapDiv", {
    basemap: "osm",
    infoWindow: popup
  });

  fullscreen = new FullScreenMap({
      map: map
  }, "fullscreen");
  fullscreen.startup();

  var basemaps = [];

  var satLayer = new esri.dijit.BasemapLayer({
    url:"http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
  });
  var boundaryLayer = new esri.dijit.BasemapLayer({
    url:"http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer"
  });
  var transLayer = new esri.dijit.BasemapLayer({
    url:"http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer"
  });
  
  var satelliteBasemap = new esri.dijit.Basemap({
    layers      :[satLayer, boundaryLayer, transLayer],
    title       :"Satellite View",
    thumbnailUrl:"http://www.arcgis.com/sharing/rest/content/items/d802f08316e84c6592ef681c50178f17/info/thumbnail/Imagery_Labels_Trans.jpg"
  });

  var osmLayer = new esri.dijit.BasemapLayer({
    type: "OpenStreetMap"
  });

  var osmBasemap = new esri.dijit.Basemap({
    layers      :[osmLayer],
    title       :"Original View",
    thumbnailUrl:"http://www.arcgis.com/sharing/rest/content/items/b834a68d7a484c5fb473d4ba90d35e71/info/thumbnail/osm.jpg"
  });

  basemaps.push(satelliteBasemap, osmBasemap);

  //add the basemap gallery, in this case we'll display maps from ArcGIS.com including bing maps
  var basemapGallery = new BasemapGallery({
    showArcGISBasemaps: false,
    basemaps: basemaps,
    map: map
  }, "basemapGallery");
  basemapGallery.startup();
  
  basemapGallery.on("error", function(msg) {
    console.log("basemap gallery error:  ", msg);
  });

  var prevView = fullscreen.fullscreen;

  var homeButton = new HomeButton({
    map: map
  }, "HomeButton");
  homeButton.startup();

  var iconPath = "M14.597,29.445c-0.057-0.591,1.959-5.648-5.644-13.092c-1.644-1.61-4.715-4.281-4.715-7.208c0-4.553,4.856-8.243,10.846-8.243h-0.171c5.989,0,10.847,3.69,10.847,8.243c0,2.926-3.072,5.599-4.717,7.208c-7.603,7.443-5.587,12.501-5.644,13.092H14.597z";


  //add points, markers, and numbers to map, center & zoom
  map.on("load", function(){
    var count = 0;
    var pointLayer = new GraphicsLayer();
    var latLonArray = new Multipoint();
    count = 0;
    for(i in markers){
      var listItem = "<li><a class='showPopup' data-number='"+ count+"' href='javascript:void(0);'>" + markers[count].label + "</a></li>";
      $('#markerList').append(listItem);
      var lat = markers[count].lat;
      var lon = markers[count].lon;
      var html = "<p>" + markers[count].nameLink + "</p>"; /*for popups*/
      html += "<p>" + markers[count].address + "</p>";
      html += "<p>TRI ID= " + markers[count].triID + "</p>";
      html += "<p>" + markers[count].latLonHtml + "</p>";
      html += "<div id='demographicChart'></div>";
      html += "<div id='markerNum' data-number='" + count + "'></div>";
      var popupTemplate = new esri.dijit.PopupTemplate();
      popupTemplate.setContent(html);
      var p = new Point(lon, lat);
      latLonArray.addPoint(p);
      var s = new SimpleMarkerSymbol();
      s.setPath(iconPath);
      s.setColor(new dojo.Color("#2b83ba"));
      s.setSize(40);
      s.outline.color = new dojo.Color("#1A608D");
      var num = count + 1;
      var font = new Font();
      font.setSize("10pt");
      font.setFamily("Helvetica");
      font.setWeight("bold");
      var t = new TextSymbol(num.toString()).setFont(font).setVerticalAlignment("bottom").setOffset(0, -3);
      t.setColor(new dojo.Color("white"));
      var g = new Graphic(p, s);
      g.setInfoTemplate(popupTemplate);
      var textGraphic = new Graphic(p, t);
      textGraphic.setInfoTemplate(popupTemplate);
      pointLayer.add(g);
      pointLayer.add(textGraphic);
      count++;
    }

    var setMap = latLonArray.getExtent();
    map.setExtent(setMap.expand(2));
    homeButton.extent = setMap.expand(2);
    map.addLayer(pointLayer);

    //hover & click color for markers
    pointLayer.on("mouse-over", function(evt){
      if(evt.graphic.symbol.type != "textsymbol"){
        evt.graphic.symbol.color.setColor(new dojo.Color("#d7191c"));
        pointLayer.redraw();
      }
      else if(evt.graphic.symbol.type === "textsymbol"){
          evt.target.previousSibling.e_graphic.symbol.color.setColor(new dojo.Color("#d7191c"));
          pointLayer.redraw();
      }
    });

    pointLayer.on("mouse-down", function(evt){
      if(evt.graphic.symbol.type != "textsymbol"){
        evt.graphic.symbol.color.setColor(new dojo.Color("#1A608D"));
        pointLayer.redraw();
      }
      else if(evt.graphic.symbol.type === "textsymbol"){
          evt.target.previousSibling.e_graphic.symbol.color.setColor(new dojo.Color("#1A608D"));
          pointLayer.redraw();
      }
    });

    pointLayer.on("mouse-out", function(evt){
      if(evt.graphic.symbol.type != "textsymbol"){
        evt.graphic.symbol.color.setColor(new dojo.Color("#2b83ba"));
        pointLayer.redraw();
      }
      else if(evt.graphic.symbol.type === "textsymbol"){
          evt.target.previousSibling.e_graphic.symbol.color.setColor(new dojo.Color("#2b83ba"));
          pointLayer.redraw();
      }
    });

     pointLayer.on("mouse-up", function(evt){
      if(evt.graphic.symbol.type != "textsymbol"){
        evt.graphic.symbol.color.setColor(new dojo.Color("#2b83ba"));
        pointLayer.redraw();
      }
      else if(evt.graphic.symbol.type === "textsymbol"){
          evt.target.previousSibling.e_graphic.symbol.color.setColor(new dojo.Color("#2b83ba"));
          pointLayer.redraw();
      }
    });
    
    //additional graphic layers

    var bufferSymb = new SimpleFillSymbol();
    bufferSymb.setOutline(null);
    bufferSymb.setColor(new dojo.Color([105, 137, 158, 0.45]));
    var buffer1Layer = new GraphicsLayer();
    var buffer1SingleLayer = new GraphicsLayer();
    var buffer3Layer = new GraphicsLayer();
    var buffer3SingleLayer = new GraphicsLayer();

  $('.showPopup').click(function(){
    var num = $(this).data("number");
    var lat = markers[num].lat;
    var lon = markers[num].lon;
    var p = new Point(lon, lat);
    var html = "<p>" + markers[num].nameLink + "</p>"; /*for popups*/
    html += "<p>" + markers[num].address + "</p>";
    html += "<p>TRI ID= " + markers[num].triID + "</p>";
    html += "<p>" + markers[num].latLonHtml + "</p>";
    html += "<div id='demographicChart'></div>";
    html += "<div id='markerNum' data-number='" + num + "'></div>";
    map.infoWindow.setTitle("");
    map.infoWindow.setContent(html);
    map.infoWindow.show(p);
    $('.actionList').removeClass('hidden');
  });

  domConstruct.create("p", { "id": "ejMile1", "class": "bold", "innerHTML": "EJ Mile 1: "}, query(".actionList", window.map.infoWindow.domNode)[0]);
  domConstruct.create("p", { "id": "ejMile3", "class": "bold", "innerHTML": "EJ Mile 3: "}, query(".actionList", window.map.infoWindow.domNode)[0]);
  var buffer1Link = domConstruct.create("a", { "class": "buffer1Single", "innerHTML": "Demographics", "href": "javascript:void(0);"}, query("#ejMile1", window.map.infoWindow.domNode)[0]);
  var buffer3Link = domConstruct.create("a", { "class": "buffer3Single", "innerHTML": "Demographics", "href": "javascript:void(0);"}, query("#ejMile3", window.map.infoWindow.domNode)[0]);
  var minority1Link = domConstruct.create("a", { "class": "minority1Link", "innerHTML": "Minority", "href": "javascript:void(0);"}, query("#ejMile1", window.map.infoWindow.domNode)[0]);
  var minority3Link = domConstruct.create("a", { "class": "minority3Link", "innerHTML": "Minority", "href": "javascript:void(0);"}, query("#ejMile3", window.map.infoWindow.domNode)[0]);
  var poverty1Link = domConstruct.create("a", { "class": "poverty1Link", "innerHTML": "Poverty", "href": "javascript:void(0);"}, query("#ejMile1", window.map.infoWindow.domNode)[0]);
  var poverty3Link = domConstruct.create("a", { "class": "poverty3Link", "innerHTML": "Poverty", "href": "javascript:void(0);"}, query("#ejMile3", window.map.infoWindow.domNode)[0]);
  var hispanic1Link = domConstruct.create("a", { "class": "hispanic1Link", "innerHTML": "Hispanic", "href": "javascript:void(0);"}, query("#ejMile1", window.map.infoWindow.domNode)[0]);
  var hispanic3Link = domConstruct.create("a", { "class": "hispanic3Link", "innerHTML": "Hispanic", "href": "javascript:void(0);"}, query("#ejMile3", window.map.infoWindow.domNode)[0]);
  var income1Link = domConstruct.create("a", { "class": "income1Link", "innerHTML": "Income", "href": "javascript:void(0);"}, query("#ejMile1", window.map.infoWindow.domNode)[0]);
  var income3Link = domConstruct.create("a", { "class": "income3Link", "innerHTML": "Income", "href": "javascript:void(0);"}, query("#ejMile3", window.map.infoWindow.domNode)[0]);
  var race1Link = domConstruct.create("a", { "class": "race1Link", "innerHTML": "Race", "href": "javascript:void(0);"}, query("#ejMile1", window.map.infoWindow.domNode)[0]);
  var race3Link = domConstruct.create("a", { "class": "race3Link", "innerHTML": "Race", "href": "javascript:void(0);"}, query("#ejMile3", window.map.infoWindow.domNode)[0]);
  
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


  $('.buffer1').click(function(){
    buffer1();
  });

  $('.buffer3').click(function(){
    buffer3();
  });

  function buffer1Single(){
    var lat = $('.lat').text();
    var lon = $('.lon').text();
    var url = "http://epamap14.epa.gov/ejmap/demog2010report.aspx?coords=" + lon + "," + lat + "&feattype=point&radius=1";
    hideEverything();
    window.open(url, "_blank");
    if(buffer1SingleLayer._div === null){
      buffer = new Circle({
        center: [lon, lat],
        geodesic: true,
        radius: 1,
        radiusUnit: "esriMiles"
      });
      var bufferCircle = new Graphic(buffer, bufferSymb);
      buffer1SingleLayer.add(bufferCircle);
      $('#legendInfo').css('display', 'block');
      $('#legendInfo').html('<p class="bold">1 Mile Radius</p>');
      map.addLayer(buffer1SingleLayer);
      map.reorderLayer(buffer1SingleLayer, 0);
      buffer1SingleLayer.show();
    }
    else{
      buffer1SingleLayer.clear();
      buffer = new Circle({
        center: [lon, lat],
        geodesic: true,
        radius: 1,
        radiusUnit: "esriMiles"
      });
      var bufferCircle = new Graphic(buffer, bufferSymb);
      buffer1SingleLayer.add(bufferCircle);
      $('#legendInfo').css('display', 'block');
      $('#legendInfo').html('<p class="bold">1 Mile Radius</p>');
      map.addLayer(buffer1SingleLayer);
      map.reorderLayer(buffer1SingleLayer, 0);
      buffer1SingleLayer.show();
    }
  }

  function buffer3Single(){
    var lat = $('.lat').text();
    var lon = $('.lon').text();
    var url = "http://epamap14.epa.gov/ejmap/demog2010report.aspx?coords=" + lon + "," + lat + "&feattype=point&radius=3";
    hideEverything();
    window.open(url, "_blank");
    if(buffer3SingleLayer._div === null){
      buffer = new Circle({
        center: [lon, lat],
        geodesic: true,
        radius: 3,
        radiusUnit: "esriMiles"
      });
      var bufferCircle = new Graphic(buffer, bufferSymb);
      buffer3SingleLayer.add(bufferCircle);
      $('#legendInfo').css('display', 'block');
      $('#legendInfo').html('<p class="bold">3 Mile Radius</p>');
      map.addLayer(buffer3SingleLayer);
      map.reorderLayer(buffer3SingleLayer, 0);
      buffer3SingleLayer.show();
    }
    else{
      buffer3SingleLayer.clear();
      buffer = new Circle({
        center: [lon, lat],
        geodesic: true,
        radius: 3,
        radiusUnit: "esriMiles"
      });
      var bufferCircle = new Graphic(buffer, bufferSymb);
      buffer3SingleLayer.add(bufferCircle);
      $('#legendInfo').css('display', 'block');
      $('#legendInfo').html('<p class="bold">3 Mile Radius</p>');
      map.addLayer(buffer3SingleLayer);
      map.reorderLayer(buffer3SingleLayer, 0);
      buffer3SingleLayer.show();
    }
  }

  function buffer1(){
    hideEverything();
    if(buffer1Layer._div === null){
      for ( i in latLonArray.points){
        buffer = new Circle({
          center: latLonArray.points[i],
          geodesic: true,
          radius: 1,
          radiusUnit: "esriMiles"
        });
        var bufferCircle = new Graphic(buffer, bufferSymb);
        buffer1Layer.add(bufferCircle);
      }
      $('#legendInfo').css('display', 'block');
      $('#legendInfo').html('<p class="bold">1 Mile Radius</p>');
      map.addLayer(buffer1Layer);
      map.reorderLayer(buffer1Layer, 0);
      buffer1Layer.show();
    }
    else{
      $('#legendInfo').css('display', 'block');
      $('#legendInfo').html('<p class="bold">1 Mile Radius</p>');
      buffer1Layer.show();
    }
  }

  function buffer3(){
    hideEverything();
    if(buffer3Layer._div === null){
      for ( i in latLonArray.points){
        buffer = new Circle({
          center: latLonArray.points[i],
          geodesic: true,
          radius: 3,
          radiusUnit: "esriMiles"
        });
        var bufferCircle = new Graphic(buffer, bufferSymb);
        buffer3Layer.add(bufferCircle);
      }
      $('#legendInfo').css('display', 'block');
      $('#legendInfo').html('<p class="bold">3 Mile Radius</p>');
      map.addLayer(buffer3Layer);
      map.reorderLayer(buffer3Layer, 0);
      buffer3Layer.show();
    }
    else{
      $('#legendInfo').css('display', 'block');
      $('#legendInfo').html('<p class="bold">3 Mile Radius</p>');
      buffer3Layer.show();
    }
  }

    $("#hideLayers").click(function(){
      hideEverything();
      $('#legendInfo').empty();
      $('#legendInfo').css('display', 'hidden');
    });

    function hideEverything(){
      buffer1Layer.hide();
      buffer1SingleLayer.hide();
      buffer3Layer.hide();
      buffer3SingleLayer.hide();
      map.infoWindow.hide();
    }

  });

  //whenever graphics reload
  map.on("update-end", function(){
    //check whether or not we are in fullscreen view, if it is different from the previous view, recenter and update previous view
    if(fullscreen.fullscreen != prevView){
      homeButton.home();
      prevView = fullscreen.fullscreen;
    }
  });

});




$(document).ready(function(){
  $("#hideLayers").kendoButton();
  var data = [];
  for(i in markers){
    var dataObject = {mapNum: parseInt(i)+1, facName: markers[i].nameLink, address: markers[i].address, triID: markers[i].triID, lat: markers[i].lat, lon: markers[i].lon};
    data.push(dataObject);
  }

  var element = $("#grid").kendoGrid({
    dataSource: data,
    sortable: true,
    pageable: {
      pageSize: 10
    },
    detailTemplate: kendo.template($("#template").html()),
    detailInit: detailInit,
    columns: [
        {
          field: "mapNum",
          title: " ",
          width: "60px"
        },
        {
            field: "facName",
            title: "Facility Name",
            encoded: false
        },
        {
            field: "address",
            title: "Address",
            encoded: false
        },
        {
            field: "triID",
            title: "TRI ID"
        },
        {
            field: "lat",
            title: "Latitude"
        },
        {
            field: "lon",
            title: "Longitude"
        }
    ],
    schema: {
      model: {
        fields: {
          mapNum: { type: "number"},
          lat: { type: "number" },
          lon: { type: "number" }
        }
      }
    }
  });

});

function detailInit(e) {
    var detailRow = e.detailRow;

    detailRow.find(".tabstrip").kendoTabStrip({
        animation: {
            open: { effects: "fadeIn" }
        }
    });

    for(i in markers){
      var string1 = markers[i].ej1;
      var allData1 = string1.split(",");
      var income5_1 = 1-(parseFloat(allData1[6])+parseFloat(allData1[7])+parseFloat(allData1[8])+parseFloat(allData1[9]));
      var raceOther_1 = 1-(parseFloat(allData1[3])+parseFloat(allData1[4])+parseFloat(allData1[5]));
      var minorityData1 = [{ category: "Minority", value: allData1[0] }, {category: "Other", value: 1-allData1[0], valueColor: "#000"}];
      var povertyData1 = [{ category: "Poverty", value: allData1[1] }, {category: "Other", value: 1-allData1[1], valueColor: "#000"}];
      var hispanicData1 = [{ category: "Hispanic", value: allData1[2] }, {category: "Other", value: 1-allData1[2], valueColor: "#000"}];
      var incomeData1 = [{ category: "< $15k", value: allData1[6] },{ category: "$15k-$25k", value: allData1[7] }, { category: "$25k-$50k", value: allData1[8] }, { category: "$50k-$75k", value: allData1[9] }, { category: "> $75k", value: income5_1 } ];
      var raceData1 = [{ category: "White", value: allData1[3] }, { category: "Black", value: allData1[4] }, { category: "Asian", value: allData1[5] }, { category: "Other", value: raceOther_1 } ];

      var panelNum = parseInt(i) + 1;
      createPie2("panel" + panelNum, "minority1", minorityData1, "Percent Minority");
      createPie2("panel" + panelNum, "poverty1", povertyData1, "Poverty");
      createPie2("panel" + panelNum, "hispanic1", hispanicData1, "Hispanic Population");
      createPie2("panel" + panelNum, "income1", incomeData1, "Income Data");
      createPie2("panel" + panelNum, "race1", raceData1, "Race");

      var string3 = markers[i].ej3;
      var allData3 = string3.split(",");
      var income5_3 = 1-(parseFloat(allData3[6])+parseFloat(allData3[7])+parseFloat(allData3[8])+parseFloat(allData3[9]));
      var raceOther_3 = 1-(parseFloat(allData3[3])+parseFloat(allData3[4])+parseFloat(allData3[5]));
      var minorityData3 = [{ category: "Minority", value: allData3[0] }, {category: "Other", value: 1-allData3[0], valueColor: "#000"}];
      var povertyData3 = [{ category: "Poverty", value: allData3[1] }, {category: "Other", value: 1-allData3[1], valueColor: "#000"}];
      var hispanicData3 = [{ category: "Hispanic", value: allData3[2] }, {category: "Other", value: 1-allData3[2], valueColor: "#000"}];
      var incomeData3 = [{ category: "< $15k", value: allData3[6] },{ category: "$15k-$25k", value: allData3[7] }, { category: "$25k-$50k", value: allData3[8] }, { category: "$50k-$75k", value: allData3[9] }, { category: "> $75k", value: income5_3 } ];
      var raceData3 = [{ category: "White", value: allData3[3] }, { category: "Black", value: allData3[4] }, { category: "Asian", value: allData3[5] }, { category: "Other", value: raceOther_3 } ];

      createPie2("panel_2_" + panelNum, "minority3", minorityData3, "Percent Minority");
      createPie2("panel_2_" + panelNum, "poverty3", povertyData3, "Poverty");
      createPie2("panel_2_" + panelNum, "hispanic3", hispanicData3, "Hispanic Population");
      createPie2("panel_2_" + panelNum, "income3", incomeData3, "Income");
      createPie2("panel_2_" + panelNum, "race3", raceData3, "Race");
    }
}

function minority1(){
  var item = $('#markerNum').data('number');
  var string1 = markers[item].ej1;
  var allData1 = string1.split(",");
  var minorityData1 = [{ category: "Minority", value: allData1[0] }, {category: "Other", value: 1-allData1[0], valueColor: "#000"}];
  $('#demographicChart').show();
  createPie(minorityData1, "Percent Minority 1 Mile");
}

function minority3(){
  var item = $('#markerNum').data('number');
  var string3 = markers[item].ej3;
  var allData3 = string3.split(",");
  var minorityData3 = [{ category: "Minority", value: allData3[0] }, {category: "Other", value: 1-allData3[0], valueColor: "#000"}];
  $('#demographicChart').show();
  createPie(minorityData3, "Percent Minority 3 Mile");
}

function poverty1(){
  var item = $('#markerNum').data('number');
  var string1 = markers[item].ej1;
  var allData1 = string1.split(",");
  var povertyData1 = [{ category: "Poverty", value: allData1[1] }, {category: "Other", value: 1-allData1[1], valueColor: "#000"}];
  $('#demographicChart').show();
  createPie(povertyData1, "Poverty 1 Mile");
}

function poverty3(){
  var item = $('#markerNum').data('number');
  var string3 = markers[item].ej3;
  var allData3 = string3.split(",");
  var povertyData3 = [{ category: "Poverty", value: allData3[1] }, {category: "Other", value: 1-allData3[1], valueColor: "#000"}];
  $('#demographicChart').show();
  createPie(povertyData3, "Poverty 3 Mile");
}

function hispanic1(){
  var item = $('#markerNum').data('number');
  var string1 = markers[item].ej1;
  var allData1 = string1.split(",");
  var hispanicData1 = [{ category: "Hispanic", value: allData1[2] }, {category: "Other", value: 1-allData1[2], valueColor: "#000"}];
  $('#demographicChart').show();
  createPie(hispanicData1, "Hispanic Population 1 Mile");
}

function hispanic3(){
  var item = $('#markerNum').data('number');
  var string3 = markers[item].ej3;
  var allData3 = string3.split(",");
  var hispanicData3 = [{ category: "Hispanic", value: allData3[2] }, {category: "Other", value: 1-allData3[2], valueColor: "#000"}];
  $('#demographicChart').show();
  createPie(hispanicData3, "Hispanic Population 3 Mile");
}

function income1(){
  var item = $('#markerNum').data('number');
  var string1 = markers[item].ej1;
  var allData1 = string1.split(",");
  var income5_1 = 1-(parseFloat(allData1[6])+parseFloat(allData1[7])+parseFloat(allData1[8])+parseFloat(allData1[9]));
  var incomeData1 = [{ category: "< $15k", value: allData1[6] },{ category: "$15k-$25k", value: allData1[7] }, { category: "$25k-$50k", value: allData1[8] }, { category: "$50-75k", value: allData1[9] }, { category: "> $75k", value: income5_1 } ];
  $('#demographicChart').show();
  createPie(incomeData1, "Income Data 1 Mile");
  var target = $('#demographicChart');
  $('.contentPane').animate({
    scrollTop: target.offset().top
  }, 1000);
  return false;
}

function income3(){
  var item = $('#markerNum').data('number');
  var string3 = markers[item].ej3;
  var allData3 = string3.split(",");
  var income5_3 = 1-(parseFloat(allData3[6])+parseFloat(allData3[7])+parseFloat(allData3[8])+parseFloat(allData3[9]));
  var incomeData3 = [{ category: "< $15k", value: allData3[6] },{ category: "$15k-$25k", value: allData3[7] }, { category: "$25k-$50k", value: allData3[8] }, { category: "$50k-$75k", value: allData3[9] }, { category: "> $75k", value: income5_3 } ];
  $('#demographicChart').show();
  createPie(incomeData3, "Income Data 3 mile");
  location.hash = "#demographicChart";
}

function race1(){
  var item = $('#markerNum').data('number');
  var string1 = markers[item].ej1;
  var allData1 = string1.split(",");
  var raceOther_1 = 1-(parseFloat(allData1[3])+parseFloat(allData1[4])+parseFloat(allData1[5]));
  var raceData1 = [{ category: "White", value: allData1[3] }, { category: "Black", value: allData1[4] }, { category: "Asian", value: allData1[5] }, { category: "Other", value: raceOther_1} ];
  $('#demographicChart').show();
  createPie(raceData1, "Race 1 Mile");
  location.hash = "#demographicChart";
}

function race3(){
  var item = $('#markerNum').data('number');
  var string3 = markers[item].ej3;
  var allData3 = string3.split(",");
  var raceOther_3 = 1-(parseFloat(allData3[3])+parseFloat(allData3[4])+parseFloat(allData3[5]));
  var raceData3 = [{ category: "White", value: allData3[3] }, { category: "Black", value: allData3[4] }, { category: "Asian", value: allData3[5] }, { category: "Other", value: raceOther_3} ];
  $('#demographicChart').show();
  createPie(raceData3, "Race 3 Mile");
  location.hash = "#demographicChart";
}

function createPie(data, title){ 
  $("#demographicChart").kendoChart({
    series: [{
      colorField: "valueColor",
      type: "pie",
      data: data,
      padding: 0,
      margin: 0
    }],
    chartArea:{
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
    legend:{
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

function createPie2(id, className, data, title){
  $("#" + id + " ." + className).kendoChart({
    series: [{
      colorField: "valueColor",
      type: "pie",
      data: data,
      padding: 0,
      margin: 0
    }],
    chartArea:{
      height: 200
    },
    title: {
      text: title,
      margin: {
        bottom: 0
      }
    },
    legend:{
      visible: false
    },
    tooltip: {
      visible: true,
      template: "#= category #: #= kendo.format('{0:P}', percentage) #"
    },
    seriesColors: ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"]
  });
}