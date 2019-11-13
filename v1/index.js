var Map = ol.Map;
var View = ol.View;
var ImageLayer = ol.layer.Image;
var TileLayer = ol.layer.Tile;
var ImageWMS = ol.source.ImageWMS;
var OSM = ol.source.OSM;
//var OSM = new OpenLayers.Layer.OSM("OpenStreetMap");

var layers = [
  new TileLayer({
    source: new OSM()
  }),
  new ImageLayer({
    extent: [-124.7309963, 24.9559987, -66.9699973, 49.3719979],
    //extent: [-13884991, 2870341, -7455066, 6338219],
    source: new ImageWMS({
      url: 'https://ahocevar.com/geoserver/wms',
      params: {'LAYERS': 'topp:states'},
      ratio: 1,
      serverType: 'geoserver'
    })
  })
];
var layers1 = [
  new TileLayer({
    source: new OSM()
  }),
  new ImageLayer({
    extent: [-180.000000, -89.998926, 180.000000, 83.599609],
    source: new ImageWMS({
      url: 'https://ahocevar.com/geoserver/wms',
      params: {'LAYERS': 'opengeo:countries'},
      ratio: 1,
      serverType: 'geoserver'
    })
  })
];
var layers2 = [
  new TileLayer({
    source: new OSM()
  }),
  new ImageLayer({
    extent: [17.873264, 48.733223, 17.901966, 48.750580],
    source: new ImageWMS({
      url: 'http://localhost:8080/geoserver/Blasko/wms',
      params: {
            "LAYERS": 'Blasko:Cesta'
      },      
      ratio: 1,
      serverType: 'geoserver'
    })
  })
];
//var completed = new OpenLayers.Layer.WMS (
//  "Cesta",
//  "http://localhost:8080/geoserver/Blasko/wms",
//  {layers:"Blasko:Cesta",transparent: true, format: "image/gif"},
//  {visibility: false},
//  {'displayInLayerSwitcher':true}
//);
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [19.8, 48.7],
    zoom: 1,
    projection: 'EPSG:4326'
  })
});
var map1 = new Map({
  layers: layers1,
  target: 'map',
  view: new View({
    center: [19.8, 48.7],
    zoom: 1,
    projection: 'EPSG:4326'
  })
});
var map2 = new Map({
  layers: layers2,
  target: 'map',
  view: new View({
    center: [19.8, 48.7],
    zoom: 1,
    projection: 'EPSG:4326'
  })
});
//var parser = new WMSCapabilities();
//fetch('nejake.xml').then(function(response) {
//  return response.text();
//}).then(function(text) {
//  var result = parser.read(text);
//  document.getElementById('log').innerText = JSON.stringify(result, null, 2);
//});