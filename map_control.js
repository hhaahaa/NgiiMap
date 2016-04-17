$(document).ready(onReady);
var map = null;

function onReady() {
    map = L.map('map', {
        crs: L.Proj.CRS.TMS.NgiiMap,
        continuousWorld: true,
        worldCopyJump: false,
        zoomControl: true
    });


    var baseLayers = {
        'Normal Map': L.Proj.TileLayer.TMS.provider('NgiiMap.Normal').addTo(map),
        'White Map': L.Proj.TileLayer.TMS.provider('NgiiMap.White'),
        'Big Font Map': L.Proj.TileLayer.TMS.provider('NgiiMap.LowView'),
        'Low Color Map': L.Proj.TileLayer.TMS.provider('NgiiMap.LowColor'),
        'English Map': L.Proj.TileLayer.TMS.provider('NgiiMap.English')
    };

    L.control.layers(baseLayers, null, {collapsed: false}).addTo(map);
    map.setView([37.56635278, 126.9779528], 9);

    var latlng2 = new L.LatLng(38.0, 127.5);
    var xy2 = L.Proj.CRS.TMS.Naver.project(latlng2);
    L.marker(latlng2).addTo(map)
             .bindPopup("latlng: " + latlng2 + ", xy: " + xy2.toString())
             .openPopup();

    // three markers
    // 서울시청
    // 37.56635278, 126.9779528
    L.marker([37.56635278, 126.9779528]).addTo(map)
             .bindPopup("서울시청")
             .openPopup();

    L.control.scale().addTo(map);

    var locationFilter = new L.LocationFilter().addTo(map);
}