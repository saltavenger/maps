var map;
require([ "esri/map",
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

  var popup = Popup({highlight: false},domConstruct.create("div"));

  map = new Map("mapDiv", {
    basemap: "osm",
    infoWindow: popup
  });

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
    title       :"Satellite",
    thumbnailUrl:"http://www.arcgis.com/sharing/rest/content/items/d802f08316e84c6592ef681c50178f17/info/thumbnail/Imagery_Labels_Trans.jpg"
  });

  var osmLayer = new esri.dijit.BasemapLayer({
    type: "OpenStreetMap"
  });

  var osmBasemap = new esri.dijit.Basemap({
    layers      :[osmLayer],
    title       :"Standard",
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