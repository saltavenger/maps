var markers = [
{ lat:'34.256535', lon:'-92.052418', html:'<font face=Arial size=1><a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=71602TRFLR5100I" target=_blank>ARCELORMITTAL PINE BLUFF</a><br>5100 INDUSTRIAL DR S, PINE BLUFF ARKANSAS 71602 (JEFFERSON), PINE BLUFF, AR 71602<br>TRI ID = 71602TRFLR5100I<br>Latitude <span class="lat">34.256535</span>&nbsp; Longitude <span class="lon">-92.052418</span></font>', label:'ARCELORMITTAL PINE BLUFF', ej1:'0.607,0.448,0.018,0.402,0.581,0.003,0.393,0.167,0.244,0.085', ej3:'0.583,0.263,0.009,0.422,0.560,0.005,0.317,0.186,0.273,0.124' },
{ lat:'34.257073', lon:'-92.062488', html:'<font face=Arial size=1><a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=71602FLRDD3300N" target=_blank>BERENFIELD CONTAINERS SW LTD</a><br>3300 N HUTCHINSON ST, WHITE HALL ARKANSAS 71602 (JEFFERSON), WHITE HALL, AR 71602<br>TRI ID = 71602FLRDD3300N<br>Latitude <span class="lat">34.257073</span>&nbsp; Longitude <span class="lon">-92.062488</span></font>', label:'BERENFIELD CONTAINERS SW LTD', ej1:'0.376,0.303,0.012,0.632,0.350,0.004,0.297,0.170,0.290,0.108', ej3:'0.514,0.245,0.010,0.491,0.490,0.006,0.299,0.183,0.275,0.136' },
{ lat:'34.2656', lon:'-92.0261', html:'<font face=Arial size=1><a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=71602GYLRD500MC" target=_blank>DELTA NATURAL KRAFT</a><br>1701 JEFFERSON PKWY, PINE BLUFF ARKANSAS 71611 (JEFFERSON), PINE BLUFF, AR 71611<br>TRI ID = 71602GYLRD500MC<br>Latitude <span class="lat">34.2656</span>&nbsp; Longitude <span class="lon">-92.0261</span></font>', label:'DELTA NATURAL KRAFT', ej1:'0.973,0.421,0.002,0.027,0.965,0.000,0.296,0.235,0.358,0.037', ej3:'0.706,0.336,0.010,0.298,0.685,0.003,0.373,0.198,0.273,0.081' },
{ lat:'34.221569', lon:'-91.907406', html:'<font face=Arial size=1><a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=71611NTRNTFAIRF" target=_blank>EVERGREEN PACKAGING</a><br>5201 FAIRFIELD RD, PINE BLUFF ARKANSAS 71601 (JEFFERSON), PINE BLUFF, AR 71601<br>TRI ID = 71611NTRNTFAIRF<br>Latitude <span class="lat">34.221569</span>&nbsp; Longitude <span class="lon">-91.907406</span><br></font>', label:'EVERGREEN PACKAGING', ej1:'0.500,0.152,0.063,0.531,0.438,0.000,0.231,0.231,0.308,0.077', ej3:'0.529,0.247,0.033,0.482,0.485,0.002,0.268,0.216,0.301,0.098' },
{ lat:'33.138611', lon:'-91.966667', html:'<font face=Arial size=1><a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=71635GRGPCPAPER" target=_blank>GEORGIA-PACIFIC CROSSETT PLYWOOD/STUDMI LL COMPLEX</a><br>101 PLYWOOD MILL RD, CROSSETT ARKANSAS 71635 (ASHLEY), CROSSETT, AR 71635<br>TRI ID = 71635GRGPCPAPER<br>Latitude <span class="lat">33.138611</span>&nbsp; Longitude <span class="lon">-91.966667</span></font>', label:'GEORGIA-PACIFIC CROSSETT PLYWOOD/STUDMI LL COMPLEX', ej1:'0.693,0.284,0.014,0.308,0.672,0.004,0.413,0.094,0.250,0.133', ej3:'0.383,0.176,0.017,0.623,0.359,0.004,0.255,0.129,0.329,0.167' }
];

var map;
require([ "esri/map",
          "esri/SpatialReference",
          "esri/dijit/Popup",
          "esri/dijit/PopupTemplate",
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
        ], function(Map, SpatialReference, Popup, PopupTemplate, Geometry, Point, Multipoint, Circle, Extent, SimpleFillSymbol, SimpleLineSymbol, SimpleMarkerSymbol, Font, TextSymbol, Graphic, GraphicsLayer, Color, domClass, domConstruct, on, query) { 

var popup = Popup({highlight: false},domConstruct.create("div"));

  map = new Map("mapDiv", {
    basemap: "osm",
    infoWindow: popup
  });

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
      var html = markers[count].html; /*for popups*/
      var popupTemplate = new esri.dijit.PopupTemplate();
      popupTemplate.setContent(html);
      var p = new Point(lon, lat);
      latLonArray.addPoint(p);
      var s = new SimpleMarkerSymbol();
      var num = count + 1;
      var font = new Font("20pt", Font.ALIGN_END, Font.STYLE_ITALIC, Font.VARIANT_NORMAL, Font.WEIGHT_BOLD,"Helvetica");
      var t = new TextSymbol(num.toString()).setFont(font).setVerticalAlignment("bottom").setOffset(0, 5);
      var g = new Graphic(p, s);
      g.setInfoTemplate(popupTemplate);
      var textGraphic = new Graphic(p, t);
      pointLayer.add(textGraphic);
      pointLayer.add(g);
      count++;
    }

    var setMap = latLonArray.getExtent();
    map.setExtent(setMap.expand(2));
    map.addLayer(pointLayer);
    
    //buffer

    var bufferSymb = new SimpleFillSymbol();
    var buffer1Layer = new GraphicsLayer();
    var buffer1SingleLayer = new GraphicsLayer();
    var buffer3Layer = new GraphicsLayer();
    var buffer3SingleLayer = new GraphicsLayer();

  $('.showPopup').click(function(){
    var num = (this.dataset.number);
    var lat = markers[num].lat;
    var lon = markers[num].lon;
    var p = new Point(lon, lat);
    var html = markers[num].html; /*for popups*/
    map.infoWindow.setTitle("");
    map.infoWindow.setContent(html);
    map.infoWindow.show(p);
    $('.actionList').removeClass('hidden');
  });

  domConstruct.create("p", { "id": "ejMile1", "innerHTML": "EJ Mile 1: "}, query(".actionList", window.map.infoWindow.domNode)[0]);
    domConstruct.create("p", { "id": "ejMile3", "innerHTML": "EJ Mile 3: "}, query(".actionList", window.map.infoWindow.domNode)[0]);
  var buffer1Link = domConstruct.create("a", { "class": "buffer1Single", "innerHTML": "Demographics", "href": "javascript:void(0);"}, query("#ejMile1", window.map.infoWindow.domNode)[0]);
  var buffer3Link = domConstruct.create("a", { "class": "buffer3Single", "innerHTML": "Demographics", "href": "javascript:void(0);"}, query("#ejMile3", window.map.infoWindow.domNode)[0]);
  query('.buffer1Single').on("click", buffer1Single);
  query('.buffer3Single').on("click", buffer3Single);


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
      $('#legendInfo').html('<p>1 Mile Radius</p>');
      map.addLayer(buffer1SingleLayer);
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
      $('#legendInfo').html('<p>1 Mile Radius</p>');
      map.addLayer(buffer1SingleLayer);
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
      $('#legendInfo').html('<p>3 Mile Radius</p>');
      map.addLayer(buffer3SingleLayer);
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
      $('#legendInfo').html('<p>3 Mile Radius</p>');
      map.addLayer(buffer3SingleLayer);
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
      $('#legendInfo').html('<p>1 Mile Radius</p>');
      map.addLayer(buffer1Layer);
      buffer1Layer.show();
    }
    else{
      $('#legendInfo').html('<p>1 Mile Radius</p>');
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
      $('#legendInfo').html('<p>3 Mile Radius</p>');
      map.addLayer(buffer3Layer);
      buffer3Layer.show();
    }
    else{
      $('#legendInfo').html('<p>3 Mile Radius</p>');
      buffer3Layer.show();
    }
  }

    $("#hideLayers").click(function(){
      hideEverything();
      $('#legendInfo').empty();
    });

    function hideEverything(){
      buffer1Layer.hide();
      buffer1SingleLayer.hide();
      buffer3Layer.hide();
      buffer3SingleLayer.hide();
    }
  });
});