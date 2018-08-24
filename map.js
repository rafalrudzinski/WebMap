require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/Layer",
  "dojo/domReady!"
],
  function (
    Map, SceneView,
    Layer
  ) {

    var map = new Map({
      basemap: "topo"
    });

    var view = new SceneView({
      container: "map",
      map: map,
      zoom: 11.5,
      center: [-115.1, 36.15]
    });

    Layer.fromPortalItem({
      portalItem: {
        id: "0ea536ac5cd04f6084d945b467d5d058"
      }
    }).then(addLayer)
      .otherwise(rejection);

    function addLayer(lyr) {
      map.add(lyr);
    }

    function rejection(err) {
      console.log("Layer failed to load: ", err)
    }

  });