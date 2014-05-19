var markers = [
{ lat:'34.256535', lon:'-92.052418', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=71602TRFLR5100I" target=_blank>ARCELORMITTAL PINE BLUFF</a>', address: '5100 INDUSTRIAL DR S, PINE BLUFF ARKANSAS 71602 (JEFFERSON), PINE BLUFF, AR 71602<br>', triID: '71602TRFLR5100I', latLonHtml: 'Latitude <span class="lat">34.256535</span>&nbsp; Longitude <span class="lon">-92.052418</span>', label:'ARCELORMITTAL PINE BLUFF', ej1:'0.607,0.448,0.018,0.402,0.581,0.003,0.393,0.167,0.244,0.085', ej3:'0.583,0.263,0.009,0.422,0.560,0.005,0.317,0.186,0.273,0.124' },
{ lat:'34.257073', lon:'-92.062488', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=71602FLRDD3300N" target=_blank>BERENFIELD CONTAINERS SW LTD</a>', address: '3300 N HUTCHINSON ST, WHITE HALL ARKANSAS 71602 (JEFFERSON), WHITE HALL, AR 71602', triID: '71602FLRDD3300N', latLonHtml: 'Latitude <span class="lat">34.257073</span>&nbsp; Longitude <span class="lon">-92.062488</span>', label:'BERENFIELD CONTAINERS SW LTD', ej1:'0.376,0.303,0.012,0.632,0.350,0.004,0.297,0.170,0.290,0.108', ej3:'0.514,0.245,0.010,0.491,0.490,0.006,0.299,0.183,0.275,0.136' },
{ lat:'34.2656', lon:'-92.0261', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=71602GYLRD500MC" target=_blank>DELTA NATURAL KRAFT</a>', address: '1701 JEFFERSON PKWY, PINE BLUFF ARKANSAS 71611 (JEFFERSON), PINE BLUFF, AR 71611', triID: '71602GYLRD500MC', latLonHtml: 'Latitude <span class="lat">34.2656</span>&nbsp; Longitude <span class="lon">-92.0261</span>', label:'DELTA NATURAL KRAFT', ej1:'0.973,0.421,0.002,0.027,0.965,0.000,0.296,0.235,0.358,0.037', ej3:'0.706,0.336,0.010,0.298,0.685,0.003,0.373,0.198,0.273,0.081' },
{ lat:'34.221569', lon:'-91.907406', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=71611NTRNTFAIRF" target=_blank>EVERGREEN PACKAGING</a>', address: '5201 FAIRFIELD RD, PINE BLUFF ARKANSAS 71601 (JEFFERSON), PINE BLUFF, AR 71601', triID: '71611NTRNTFAIRF', latLonHtml: 'Latitude <span class="lat">34.221569</span>&nbsp; Longitude <span class="lon">-91.907406</span><br>', label:'EVERGREEN PACKAGING', ej1:'0.500,0.152,0.063,0.531,0.438,0.000,0.231,0.231,0.308,0.077', ej3:'0.529,0.247,0.033,0.482,0.485,0.002,0.268,0.216,0.301,0.098' },
{ lat:'33.138611', lon:'-91.966667', nameLink:'<a href="http://oaspub.epa.gov/enviro/tris_control.tris_print?tris_id=71635GRGPCPAPER" target=_blank>GEORGIA-PACIFIC CROSSETT PLYWOOD/STUDMI LL COMPLEX</a>', address: '101 PLYWOOD MILL RD, CROSSETT ARKANSAS 71635 (ASHLEY), CROSSETT, AR 71635', triID: '71635GRGPCPAPER', latLonHtml: 'Latitude <span class="lat">33.138611</span>&nbsp; Longitude <span class="lon">-91.966667</span>', label:'GEORGIA-PACIFIC CROSSETT PLYWOOD/STUDMI LL COMPLEX', ej1:'0.693,0.284,0.014,0.308,0.672,0.004,0.413,0.094,0.250,0.133', ej3:'0.383,0.176,0.017,0.623,0.359,0.004,0.255,0.129,0.329,0.167' }
];

var map;
require([ "esri/map",
          "esri/SpatialReference",
          "esri/dijit/Popup",
          "esri/dijit/PopupTemplate",
          "esri/dijit/HomeButton",
          "esri/geometry",
          "esri/geometry/Point",
          "esri/geometry/Multipoint",
          "esri/geometry/Circle",
          "esri/geometry/Extent",
          "esri/symbols/SimpleFillSymbol",
          "esri/symbols/SimpleLineSymbol",
          "esri/symbols/SimpleMarkerSymbol",
          "esri/symbols/PictureFillSymbol",
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
        ], function(Map, SpatialReference, Popup, PopupTemplate, HomeButton, Geometry, Point, Multipoint, Circle, Extent, SimpleFillSymbol, SimpleLineSymbol, SimpleMarkerSymbol, PictureFillSymbol, Font, TextSymbol, Graphic, GraphicsLayer, Color, domClass, domConstruct, on, query) { 

var popup = Popup({highlight: false},domConstruct.create("div"));

  map = new Map("mapDiv", {
    basemap: "osm",
    infoWindow: popup
  });

  var home = new HomeButton({
        map: map
      }, "HomeButton");
      home.startup();

  var iconPath = "M14.555,26.945C14.503,26.406,16.343,21.792,9.406,15c-1.5-1.469-4.302-3.906-4.302-6.577c0-4.154,4.431-7.521,9.896-7.521h-0.156c5.465,0,9.897,3.367,9.897,7.521c0,2.67-2.803,5.108-4.303,6.577c-6.938,6.792-5.098,11.406-5.15,11.945H14.555z M15.031,5.688c-2.882,0-5.219,1.063-5.219,2.375s2.336,2.375,5.219,2.375c2.882,0,5.219-1.063,5.219-2.375S17.913,5.688,15.031,5.688z";

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
      var popupTemplate = new esri.dijit.PopupTemplate();
      popupTemplate.setContent(html);
      var p = new Point(lon, lat);
      latLonArray.addPoint(p);
      var s = new SimpleMarkerSymbol();
      s.setPath(iconPath);
      s.setColor(new dojo.Color("#2b83ba"));
      s.setOutline(null);
      s.setSize(30);
      var num = count + 1;
      var font = new Font("20pt", Font.ALIGN_END, Font.STYLE_ITALIC, Font.VARIANT_NORMAL, Font.WEIGHT_BOLD,"Helvetica");
      var t = new TextSymbol(num.toString()).setFont(font).setVerticalAlignment("bottom").setOffset(0, 10);
      var g = new Graphic(p, s);
      g.setInfoTemplate(popupTemplate);
      var textGraphic = new Graphic(p, t);
      pointLayer.add(textGraphic);
      pointLayer.add(g);
      count++;
    }

    var setMap = latLonArray.getExtent();
    map.setExtent(setMap.expand(2));
    home.extent = setMap.expand(2);
    map.addLayer(pointLayer);

    //hover & click color for markers
    pointLayer.on("mouse-over", function(evt){
      if(evt.graphic.symbol.type != "textsymbol"){
        evt.graphic.symbol.color.setColor(new dojo.Color("#d7191c"));
        pointLayer.redraw();
      }
    });

    pointLayer.on("mouse-down", function(evt){
      if(evt.graphic.symbol.type != "textsymbol"){
        evt.graphic.symbol.color.setColor(new dojo.Color("#1A608D"));
        pointLayer.redraw();
      }
    });

    pointLayer.on("mouse-out", function(evt){
      if(evt.graphic.symbol.type != "textsymbol"){
        evt.graphic.symbol.color.setColor(new dojo.Color("#2b83ba"));
        pointLayer.redraw();
      }
    });

     pointLayer.on("mouse-up", function(evt){
      if(evt.graphic.symbol.type != "textsymbol"){
        evt.graphic.symbol.color.setColor(new dojo.Color("#2b83ba"));
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
    map.infoWindow.setTitle("");
    map.infoWindow.setContent(html);
    map.infoWindow.show(p);
    $('.actionList').removeClass('hidden');
  });

  domConstruct.create("p", { "id": "ejMile1", "class": "bold", "innerHTML": "EJ Mile 1: "}, query(".actionList", window.map.infoWindow.domNode)[0]);
  domConstruct.create("p", { "id": "ejMile3", "class": "bold", "innerHTML": "EJ Mile 3: "}, query(".actionList", window.map.infoWindow.domNode)[0]);
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
    pageable: true,
    detailTemplate: kendo.template($("#template").html()),
    detailInit: detailInit,
    dataBound: function() {
        this.expandRow(this.tbody.find("tr.k-master-row").first());
    },
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
      var minorityData1 = [{ category: "Minority", value: allData1[0] }, {category: "Other", value: 1-allData1[0], valueColor: "#000"}];
      var povertyData1 = [{ category: "Poverty", value: allData1[1] }, {category: "Other", value: 1-allData1[1], valueColor: "#000"}];
      var hispanicData1 = [{ category: "Hispanic", value: allData1[2] }, {category: "Other", value: 1-allData1[2], valueColor: "#000"}];
      var incomeData1 = [{ category: "Income1", value: allData1[6] },{ category: "Income2", value: allData1[7] }, { category: "Income3", value: allData1[8] }, { category: "Income4", value: allData1[9] } ];
      var raceData1 = [{ category: "Hispanic", value: allData1[2] },{ category: "White", value: allData1[3] }, { category: "Black", value: allData1[4] }, { category: "Asian", value: allData1[5] } ];

      var panelNum = parseInt(i) + 1;
      createPie("panel" + panelNum, "minority1", minorityData1, "Percent Minority");
      createPie("panel" + panelNum, "poverty1", povertyData1, "Poverty");
      createPie("panel" + panelNum, "hispanic1", hispanicData1, "Hispanic Population");
      createPie("panel" + panelNum, "income1", incomeData1, "Income Data");
      createPie("panel" + panelNum, "race1", raceData1, "Race");

      var string3 = markers[i].ej3;
      var allData3 = string1.split(",");
      var minorityData3 = [{ category: "Minority", value: allData3[0] }, {category: "Other", value: 1-allData3[0], valueColor: "#000"}];
      var povertyData3 = [{ category: "Poverty", value: allData3[1] }, {category: "Other", value: 1-allData3[1], valueColor: "#000"}];
      var hispanicData3 = [{ category: "Hispanic", value: allData3[2] }, {category: "Other", value: 1-allData3[2], valueColor: "#000"}];
      var incomeData3 = [{ category: "Income1", value: allData3[6] },{ category: "Income2", value: allData3[7] }, { category: "Income3", value: allData3[8] }, { category: "Income4", value: allData3[9] } ];
      var raceData3 = [{ category: "Hispanic", value: allData3[2] },{ category: "White", value: allData3[3] }, { category: "Black", value: allData3[4] }, { category: "Asian", value: allData3[5] } ];

      createPie("panel_2_" + panelNum, "minority3", minorityData3, "Percent Minority");
      createPie("panel_2_" + panelNum, "poverty3", povertyData3, "Poverty");
      createPie("panel_2_" + panelNum, "hispanic3", hispanicData3, "Hispanic Population");
      createPie("panel_2_" + panelNum, "income3", incomeData3, "Income");
      createPie("panel_2_" + panelNum, "race3", raceData3, "Race");
    }
}

function createPie(id, className, data, title){
  $("#" + id + " ." + className).kendoChart({
    series: [{
      colorField: "valueColor",
      type: "pie",
      data: data
    }],
    title: {
      text: title
    },
    legend:{
      position: "top"
    },
    tooltip: {
      visible: true,
      template: "#= category # - #= kendo.format('{0:P}', percentage) #"
    },
    seriesColors: ["#d7191c", "#fdae61", "#abdda4", "#2b83ba"]
  });
}