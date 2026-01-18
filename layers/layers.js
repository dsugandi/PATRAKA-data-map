var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PATRAKA_1 = new ol.format.GeoJSON();
var features_PATRAKA_1 = format_PATRAKA_1.readFeatures(json_PATRAKA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PATRAKA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATRAKA_1.addFeatures(features_PATRAKA_1);
cluster_PATRAKA_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PATRAKA_1
});
var lyr_PATRAKA_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PATRAKA_1, 
                style: style_PATRAKA_1,
                popuplayertitle: 'PATRAKA',
                interactive: true,
                title: '<img src="styles/legend/PATRAKA_1.png" /> PATRAKA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PATRAKA_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PATRAKA_1];
lyr_PATRAKA_1.set('fieldAliases', {'Index': 'Index', 'kategori': 'kategori', 'tanggal': 'tanggal', 'jam': 'jam', 'deskripsi': 'deskripsi', 'wilayah': 'wilayah', 'kontak': 'kontak', 'long': 'long', 'lat': 'lat', });
lyr_PATRAKA_1.set('fieldImages', {'Index': 'Range', 'kategori': 'TextEdit', 'tanggal': 'TextEdit', 'jam': 'TextEdit', 'deskripsi': 'TextEdit', 'wilayah': 'TextEdit', 'kontak': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', });
lyr_PATRAKA_1.set('fieldLabels', {'Index': 'hidden field', 'kategori': 'inline label - visible with data', 'tanggal': 'inline label - visible with data', 'jam': 'inline label - visible with data', 'deskripsi': 'inline label - visible with data', 'wilayah': 'inline label - visible with data', 'kontak': 'inline label - visible with data', 'long': 'hidden field', 'lat': 'hidden field', });
lyr_PATRAKA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
