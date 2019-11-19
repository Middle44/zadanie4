const Map = ol.Map;
const View = ol.View;
const ImageLayer = ol.layer.Image;
const TileLayer = ol.layer.Tile;
const ImageWMS = ol.source.ImageWMS;
const OSM = ol.source.OSM;
const WMSCapabilities = ol.format.WMSCapabilities;

alert('asdas')

var layers = [
    new TileLayer(
        {
            source: new OSM()
        }),
    new ImageLayer(
        {
            extent: [17.84506885869866, 48.731926770588124, 17.93695929993104, 48.764736748435276],
            source: new ImageWMS(
                {
                    url: 'http://localhost:8080/geoserver/ows?',
                    params: { LAYERS: ['Blasko:Cesta', 'Blasko:Budova', 'Blasko:Chodnik', 'Blasko:Znacka', 'Blasko:Kos', 'Blasko:Park'] },
                    ratio: 1,
                    serverType: 'geoserver'
                }
            ),
        }
    )
];

var map = new Map(
    {
        layers: layers,
        target: 'map',
        view: new View(
            {
                projection: 'EPSG:4326',
                center: [17.888738, 48.746600],
                zoom: 14
            }
        )
    }
);

function capabilities() {
    fetch('http://localhost:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities', { mode: 'cors' }).then(function (response) {
        return response.text();
    }).then(function (data) {
        let parser = new DOMParser();
        XMLDocument = parser.parseFromString(data, 'text/xml');
        console.log(XMLDocument.getElementsByTagName('sco'));
        document.getElementById('Capabilities').textContent = data;
    }
    )
};





