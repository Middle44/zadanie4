var Map = ol.Map;
var View = ol.View;
var ImageLayer = ol.layer.Image;
var TileLayer = ol.layer.Tile;
var ImageWMS = ol.source.ImageWMS;
var OSM = ol.source.OSM;

var layers = [
  new TileLayer({
    source: new OSM()
  }),
  new ImageLayer({  //tu treba nastaviť tie veci na svoje vrstvy
    extent: [-13884991, 2870341, -7455066, 6338219],
    source: new ImageWMS({
      url: 'https://ahocevar.com/geoserver/wms', //treba nastaviť na geoserver
      params: {'LAYERS': 'topp:states'}, //nastaviť správne vrstvy
      ratio: 1,
      serverType: 'geoserver'
    })
  })
];
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [19.8, 48.7], //treba zmeniť súradnice
    zoom: 8.5,
    projection: 'EPSG:4326'
  })
});