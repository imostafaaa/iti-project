///import required modules from the API///
require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Home",
  "esri/geometry/Mesh",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/geometry/Point",
  "esri/tasks/RouteTask",
  "esri/tasks/support/RouteParameters",
  "esri/tasks/support/FeatureSet",
  "esri/widgets/Popup",
  "esri/support/actions/ActionButton",
  "esri/PopupTemplate",
  "esri/request",
  "esri/tasks/ClosestFacilityTask",
  "esri/tasks/support/ClosestFacilityParameters",
  "esri/tasks/support/DataFile",
  "esri/tasks/Locator",
  "esri/widgets/Locate",
  "esri/symbols/WebStyleSymbol",
  "esri/widgets/Fullscreen",
  "esri/form/FormTemplate",
  "esri/widgets/FeatureForm",
  "esri/widgets/Expand",
  "esri/widgets/Search",
  "esri/tasks/ServiceAreaTask",
  "esri/tasks/support/ServiceAreaParameters",
  "esri/geometry/geometryEngine",
  "esri/tasks/support/DataLayer",
  "esri/views/layers/support/FeatureFilter",
  "esri/tasks/support/Query",
  "esri/layers/SceneLayer",
], function (
  esriConfig,
  Map,
  MapView,
  WebScene,
  SceneView,
  FeatureLayer,
  Home,
  Mesh,
  GraphicsLayer,
  Graphic,
  Point,
  RouteTask,
  RouteParameters,
  FeatureSet,
  Popup,
  ActionButton,
  PopupTemplate,
  esriRequest,
  ClosestFacilityTask,
  ClosestFacilityParameters,
  DataFile,
  Locator,
  Locate,
  WebStyleSymbol,
  Fullscreen,
  FormTemplate,
  FeatureForm,
  Expand,
  Search,
  ServiceAreaTask,
  ServiceAreaParams,
  geometryEngine,
  DataLayer,
  FeatureFilter,
  Query,
  SceneLayer,
) {
  esriConfig.apiKey =
    "AAPK4728ec761e924d25b37d58342f5b56d2BSZjOmgKCGrCo9Ak2iPEeI8LW77VgUyQATiYux_gU2EhZyOJ4etxSCaVI8vubqsB";
  let modeURL =
    "https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World/retrieveTravelModes?f=json&token=mMsuK-HGJVs6_-fPFrlzkiQZdf0uSpHtmD4UgrmKbsg8BDbWbAQyFowtCejOuKRPeNw3i6LLWjas2qu61lJEsFMj8UpES_9m_cywBT5IVsE4zZV_IoanjIqWgGvbj6-STCMYd10_w7fR6RSxDQD57w..";

    let layer3d = new SceneLayer({
      url:"https://services9.arcgis.com/SKX4Ho42BPrgC7Qi/arcgis/rest/services/PyramidModel_WSL1/SceneServer",
      
    })
    
     ///create feature layer///
  let featureLayer1 = new FeatureLayer({
    url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/World_Countries_Cities/FeatureServer/1",
    definitionExpression: "CNTRY_NAME  = 'Egypt'",
    minScale: 20000000,
    maxScale: 3000000,
  });
  // Add this action to the popup so it is always available in this view
  let markAStop = new ActionButton({
    // This text is displayed as a tooltip
    title: "Mark a Stop",
    // The ID by which to reference the action in the event handler
    id: "mark-stop",
    // Sets the icon font used to style the action button
    className: "esri-icon-blank-map-pin",
  });
  let popupTemplate1 = new PopupTemplate({
    actions: [markAStop],
    title: "The Monument Info :",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "NAME_AR",
            label: "الأسم:",
          },
          {
            fieldName: "NAME_EN",
            label: "Name:",
          },
          {
            fieldName: "TYPE",
            label: "Type:",
          },
          { fieldName: "LINK", label: "More Info:" },
          {
            fieldName: "Description",
            label: "Description:",
          },
        ],
      },
    ],
  });

  let myRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "TYPE",
    uniqueValueInfos: [
      {
        value: "Islamic",
        symbol: {
          type: "picture-marker",
          url: "https://image.flaticon.com/icons/png/128/568/568848.png",
          width: "10px",
          height: "30px",
        },
      },
      {
        value: "Pharonic",
        symbol: {
          type: "picture-marker",
          url: "https://image.flaticon.com/icons/png/128/3752/3752975.png",
          width: "30px",
          height: "30px",
        },
      },
      {
        value: "Modern",
        symbol: {
          type: "picture-marker",
          url: "https://image.flaticon.com/icons/png/128/3448/3448618.png",
          width: "30px",
          height: "30px",
        },
      },
      {
        value: "Christian",
        symbol: {
          type: "picture-marker",
          url: "https://image.flaticon.com/icons/png/128/767/767827.png",
          width: "30px",
          height: "30px",
        },
      },
      {
        value: "Jewish",
        symbol: {
          type: "picture-marker",
          url: "https://image.flaticon.com/icons/png/128/3706/3706608.png",
          width: "25px",
          height: "25px",
        },
      },
    ],
  };

  myRenderer2 = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "CAPACITY",
    uniqueValueInfos: [
      {
        value: "100",
        symbol: {
          type: "picture-marker",
          url: "https://image.flaticon.com/icons/png/128/190/190411.png",
        },
      },
      {
        value: "130",
        symbol: {
          type: "picture-marker",
          url: "https://image.flaticon.com/icons/png/128/753/753340.png",
        },
      },
    ],
  };
  let featureLayer2 = new FeatureLayer({
    url: "https://services9.arcgis.com/S990USlhfgpUmWKm/arcgis/rest/services/AllMonument_Modern/FeatureServer/0",
    popupTemplate: popupTemplate1,
    minScale: 3000000,
    minScale: 20000000,
    definitionExpression: "",
    renderer: myRenderer,
  });

  ///create maps and views///
  let map1 = new Map({
    basemap: "arcgis-streets-relief",
    layers: [featureLayer1, featureLayer2,layer3d],
    graphics: [],
  });

  


  let sceneView1 = new SceneView({
    container: "idSceneView",
    map: map1,
    graphics: [],
    
  });

  ///query the cities and visualize it on map as single items then add each to a DDL///
  let cityDDL = document.getElementById("idCitiesDDL");
  featureLayer1.on("layerview-create", function () {
    featureLayer1.queryFeatures().then(function (data) {
      cityDDL.style.visibility = "visible";

      for (let i = 1; i < data.features.length; i++) {
        let opt = document.createElement("option");
        opt.value = data.features[i].attributes.CITY_NAME;
        opt.textContent = data.features[i].attributes.CITY_NAME;
        cityDDL.appendChild(opt);
      }
    });
  });
  // zoom to cairo when layer view created
  featureLayer1.on("layerview-create", function (event) {
    featureLayer1.queryExtent().then(function (result) {
      featureLayer1.queryFeatures().then(function (results) {
        for (let i = 0; i < results.features.length; i++) {
          if (results.features[i].attributes.CITY_NAME == "Cairo") {
            sceneView1.goTo(
              {
                center: [
                  results.features[i].geometry.longitude,
                  results.features[i].geometry.latitude,
                ],
                zoom: 5,
              },
              { duration: 7000 }
            );
          }
        }
      });
    });
  });

  ///query the monuments type and visualize it on map as single items then add each to a DDL///
  let typeDDL = document.getElementById("idTypeDDL");
  featureLayer2.on("layerview-create", function () {
    featureLayer2.queryFeatures().then(function (data) {
      typeDDL.style.visibility = "visible";
      while (typeDDL.options.length > 1) {
        typeDDL.remove(1);
      }
      let typeArr = [];
      for (let i = 1; i < data.features.length; i++) {
        let opt = document.createElement("option");
        opt.value = data.features[i].attributes.TYPE;
        opt.textContent = data.features[i].attributes.TYPE;

        if (typeArr.includes(opt.textContent)) {
          continue;
        } else {
          typeArr.push(opt.textContent);
          typeDDL.appendChild(opt);
        }
      }
    });
  });

  ///showing only a cpecific type using the DDl///
  featureLayer2.queryFeatures().then(function (data) {
    typeDDL.addEventListener("change", function () {
      var type = typeDDL.options[typeDDL.selectedIndex].value;
      for (let i = 0; i < data.features.length; i++) {
        if (type === data.features[i].attributes.TYPE) {
          featureLayer2.definitionExpression = `TYPE  = '${type}'`;
        }
      }
    });
  });
  // go to the specific place u will choose it
  featureLayer2.queryFeatures().then(function (data) {
    idTypeDDL.addEventListener("change", function (newData) {
      if (this.value == "ALL") {
        featureLayer2.definitionExpression = "";
        featureLayer2.queryExtent().then(function (results) {
          sceneView1.goTo(results.extent, { duration: 2500 });
        });
      } else {
        featureLayer2.definitionExpression = "TYPE = '" + this.value + "'";
        featureLayer2.queryExtent().then(function (results) {
          sceneView1.goTo(results.extent, { duration: 2500 });
        });
      }
    });
  });

  ///////////////add wedgets//////////////////
  let home2 = new Home({
    view: sceneView1,
  });

  let fullscreen = new Fullscreen({
    view: sceneView1,
  });

  var locateWidget = new Locate({
    view: sceneView1, // Attaches the Locate button to the view
  });

  const expand = new Expand({
    container: document.getElementById("form"),
    content: document.getElementById("opt"),
  });

  let searchWidget = new Search({
    view: sceneView1,
    popupTemplate: {
      actions: [markAStop],
      // goToOverride: function (sceneView1, goToParams) {
      //   //goToParams.options.duration = updatedDuration;
      //   return sceneView1.goTo({center:selectedResult.geometry,  zoom:15 }, { duration: 2500 });
      // },
    },
    activeMenu: "source",
    searchAllEnabled: false,
    includeDefaultSources: false,

    sources: [
      {
        layer: featureLayer2,
        name: "Point FS",
        searchFields: ["NAME_EN", "NAME_AR"],
        displayField: "NAME_EN",

        exactMatch: false,
        outFields: ["Description", "Category", "TYPE"],
        name: "Enter the place :- ",
        placeholder: "ُEnter certain atrraction",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0,
        locator: new Locator({
          url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer",
        }),
      },
    ],
  });
  searchWidget.on("select-result",  function (event) {

    sceneView1.goTo({center:[event.result.feature.geometry.longitude,event.result.feature.geometry.latitude],
        zoom:18 },
       { duration: 3000 });
  })

  //sceneView1.ui.add(home1, "top-left");
  sceneView1.ui.add(home2, "top-left");
  sceneView1.ui.add(locateWidget, "top-left");
  sceneView1.ui.add(fullscreen, "bottom-right");
  sceneView1.ui.add(searchWidget, {
    position: "top-right",
    index: 1,
  });

  sceneView1.ui.add(expand, "top-right");

  ///navigating to a specific city using the DDl///
  featureLayer1.queryFeatures().then(function (data) {
    cityDDL.addEventListener("change", function () {
      var city = cityDDL.options[cityDDL.selectedIndex].value;
      for (let i = 0; i < data.features.length; i++) {
        if (city === data.features[i].attributes.CITY_NAME) {
          sceneView1.goTo(
            {
              center: [
                data.features[i].geometry.longitude,
                data.features[i].geometry.latitude,
              ],
              zoom: 9,
            },
            { duration: 3000 }
          );
        }
      }
    });
  });

  var myRoute = new RouteTask({
    url: "https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
  });
  var mygraphicLayer = new GraphicsLayer();
  // console.log(routeParams)
  map1.add(mygraphicLayer);
  let routeParams = new RouteParameters({
    stops: new FeatureSet(),
    returnDirections: true,
    directionsLanguage: "en",
  });
  let routeResult = new Graphic();
  let stop = new Graphic();
  function addStops(point) {
    stop = {
      geometry: point,
      symbol: {
        type: "picture-marker",
        url: "https://js.arcgis.com/3.28/esri/dijit/Search/images/search-pointer.png",
        width: "30px",
        height: "30px",
      },
    };

    mygraphicLayer.add(stop);

    routeParams.stops.features.push(stop);
    routeResult = {};
    if (routeParams.stops.features.length >= 2) {
      myRoute.solve(routeParams).then(function (route) {
        routeResult = route.routeResults[0].route;
        routeResult.symbol = {
          type: "simple-line",
          color: [5, 150, 255],
          width: 3,
        };
        mygraphicLayer.add(routeResult);
        sceneView1.goTo(
          {
            center: [routeResult.geometry.extent, routeResult.geometry.extent],
          },
          { duration: 2000 }
        );

        var ul = document.getElementById("dir");
        route.routeResults[0].directions.features.forEach((feature) => {
          var li = document.createElement("li");
          li.textContent = feature.attributes.text;
          ul.appendChild(li);
        });
      });
    }
  }
  sceneView1.on("pointer-move", function (event) {
    sceneView1.hitTest(event).then(function (response) {
      if (response.results.length) {
        let graphic1 = response.results.filter(function (result) {
          // check if the graphic belongs to the layer of interest
          return result.graphic.layer === featureLayer2;
        })[0].graphic;
        sceneView1.popup.open({
          location: graphic1.geometry.centroid,
          features: [graphic1],
        });
      } else {
        sceneView1.popup.close();
      }
    });
  });

  ///popup actions///
  sceneView1.popup.on("trigger-action", function (event) {
    if (event.action.id == "mark-stop") {
      sceneView1.popup.location.z=undefined
      addStops(sceneView1.popup.location);

      sceneView1.popup.close();
    }
  });
  ////////////////////////// reset button /////////////////////
  document.getElementById("reset").addEventListener("click", function () {
    mygraphicLayer.remove(routeResult);
    mygraphicLayer.graphics.removeAll();
    routeParams.stops = new FeatureSet();
    document.getElementById("dir").innerHTML = "";
  });
  ///travel modde////

  document.getElementById("btnWalk").addEventListener("click", function () {
    let geoJson = {};
    esriRequest(modeURL, {
      responseType: "json",
    }).then(function (response) {
      // The requested data
      geoJson = response.data;
      mygraphicLayer.remove(routeResult);
      routeParams.travelMode = geoJson.supportedTravelModes[5];
      myRoute.solve(routeParams).then(function (route) {
        routeResult = route.routeResults[0].route;
        routeResult.symbol = {
          type: "simple-line",
          color: [5, 150, 255],
          width: 3,
        };
        mygraphicLayer.add(routeResult);
        // sceneView1.graphics.add(routeResult)

        var ul = document.getElementById("dir");
        ul.innerHTML = "";
        route.routeResults[0].directions.features.forEach((feature) => {
          var li = document.createElement("li");
          li.textContent = feature.attributes.text;

          ul.appendChild(li);
        });
      });
    });
  });
  document.getElementById("btnCar").addEventListener("click", function () {
    let geoJson = {};
    esriRequest(modeURL, {
      responseType: "json",
    }).then(function (response) {
      // The requested data
      geoJson = response.data;
      mygraphicLayer.remove(routeResult);
      routeParams.travelMode = geoJson.supportedTravelModes[0];
      myRoute.solve(routeParams).then(function (route) {
        routeResult = route.routeResults[0].route;
        routeResult.symbol = {
          type: "simple-line",
          color: [5, 150, 255],
          width: 3,
        };
        mygraphicLayer.add(routeResult);
        // sceneView1.graphics.add(routeResult)

        var ul = document.getElementById("dir");
        ul.innerHTML = "";
        route.routeResults[0].directions.features.forEach((feature) => {
          var li = document.createElement("li");
          li.textContent = feature.attributes.text;

          ul.appendChild(li);
        });
      });
    });
  });

  featureLayer2.queryFeatures().then(function (data) {
    document.getElementById("btnRcmnd").addEventListener("click", function () {
      var type = typeDDL.options[typeDDL.selectedIndex].value;
      switch (type) {
        case "Islamic":
          for (let i = 0; i < data.features.length; i++) {
            if (
              data.features[i].attributes.NAME_AR == "مسجد عمرو بن العاص" ||
              data.features[i].attributes.NAME_AR == "مسجد محمد علي" ||
              data.features[i].attributes.NAME_AR == "جامع الحاكم بأمر الله" ||
              data.features[i].attributes.NAME_AR == "المسجد الازهر" ||
              data.features[i].attributes.NAME_AR == "باب زويلة"
              // data.features[i].attributes.NAME_AR == "مسجد الحسين" ||
              // data.features[i].attributes.NAME_AR == "متحف الخزف الإسلامي" ||
            ) {
              addStops(data.features[i].geometry);
              
            } else {
            }
          }
          break;
        case "Christian":
          addStops(data.features[3].geometry);
          addStops(data.features[5].geometry);
          break;
        case "Pharonic":
          for (let i = 0; i < data.features.length; i++) {
            if (
              // data.features[i].attributes.NAME_AR == "هرم زوسر المدرج" ||
              data.features[i].attributes.NAME_AR == "الهرم الأكبر" ||
              data.features[i].attributes.NAME_AR == "المتحف المصري الكبير" ||
              data.features[i].attributes.NAME_AR == "المتحف المصري" ||
              data.features[i].attributes.NAME_AR == "المتحف القومي للحضارة المصرية"
              
              ) {
              addStops(data.features[i].geometry);
            } else {
            }
          }
          break;

        case "Jewish":
          for (let i = 0; i < data.features.length; i++) {
            if (
              data.features[i].attributes.NAME_AR == "معبد بن عذرا" ||
              data.features[i].attributes.NAME_AR == "معبد موسى الدرعى" 
              
            ) {
              addStops(data.features[i].geometry);
            } else {
            }
          }
          break;
          
        
        case "Modern":
          for (let i = 0; i < data.features.length; i++) {
            if (
              data.features[i].attributes.NAME_AR == "متحف المركبات الملكية" ||
              //data.features[i].attributes.NAME_AR == "متحف الامير محمد علي " ||
              data.features[i].attributes.NAME_AR == "قصر البارون" ||
              data.features[i].attributes.NAME_AR == "متحف قصر عابدين"
            ) {
              addStops(data.features[i].geometry);
            } else {
            }
          }
          break;
        default:
          break;
      }
    });
  });

  ////////////////////// locator ////////////////////
  var myLocator = new Locator({
    url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
  });
  function findPlaces(point, category) {
    
    //servicePolygon[0].visible=false
    myLocator
      .addressToLocations({
        categories: category,
        location: point,
        maxLocations: 5,
        outFields: ["*"],
      })
      .then(function (places) {
        //mygraphicLayer.removeAll();
        places.forEach((place) => {
          var myGraphic = new Graphic({
            attributes: place.attributes,
            geometry: place.location,
            symbol: {
              type: "simple-marker",
              color: "red",
              size: 10,
            },
            popupTemplate: {
              actions: [markAStop],
              title: "{PlaceName}",
              content: "{LongLabel}",
            },
          });
          mygraphicLayer.add(myGraphic);
          sceneView1.on("click", function (event) {
            sceneView1.popup.close()
          })
        });
      });
  }

  servicesList = [
    "Hotel",
    "ATM",
    "Food",
    "Market",
    "Hospital",
    "Pharmacy",
    "Police Staion",
    "Metro Station",
    "Bus Station",
    "Shopping Center",
    "Embassy",
  ];
  for (let i = 0; i < servicesList.length; i++) {
    var servicesDDL = document.getElementById("services");
    var servicesOpt = document.createElement("option");
    servicesOpt.textContent = servicesList[i];
    servicesDDL.appendChild(servicesOpt);
  }

  let category;
  // let myPoint
  servicesDDL.addEventListener("change", function () {
    category = this.value;
    //sceneView1.on("click", function (event) {
    locateWidget.on("locate", function (locateEvent) {
      findPlaces(locateEvent, category);
    });
  });

  //******************* Service Area ****************//
  let serviceAreaTask = new ServiceAreaTask({
    url: "https://route-api.arcgis.com/arcgis/rest/services/World/ServiceAreas/NAServer/ServiceArea_World/solveServiceArea",
  });
 
  locateWidget.on("locate", function (locateEvent) {
    myPoint =locateWidget.graphic.geometry
    // myPoint = new Point({
    //   latitude: locateEvent.position.coords.latitude,
    //   longitude: locateEvent.position.coords.longitude,
    //   spatialReference : {
    //           wkid: 4326,
    //           wkt: 'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]',
    //          },
      
    //   type: "point",
    // });
   
    findPlaces(myPoint, category);
    //console.log(myPoint)
    //console.log(locateEvent.mapPoint)
    addStops(myPoint)
    

    const locationGraphic = createGraphic(myPoint);
    
    const Travelmode = "Walking Distance";
    const driveTimeCutoffs = [10]; // Minutes
    serviceAreaParams = createServiceAreaParams(
      locationGraphic,
      driveTimeCutoffs,
      Travelmode,
      sceneView1.spatialReference
    );
    executeServiceAreaTask(serviceAreaParams);

    function createGraphic(point) {
      // mygraphicLayer.removeAll();
      // sceneView1.graphics.removeAll();
      var pp = new Graphic({
        geometry: point,
        // symbol: {
        //   type: "simple-marker",
        //   color: "white",
        //   size: 6,
        // },
        // popupTemplate: {
        //   actions: [markAStop],
         
        // },
       
      });
     

      mygraphicLayer.add(pp);
      return pp;
    }

    function createServiceAreaParams(
      locationGraphic,
      driveTimeCutoffs,
      outSpatialReference
    ) {
      // Create one or more locations (facilities) to solve for
      const featureSet = new FeatureSet({
        features: [locationGraphic],
      });

      const taskParameters = new ServiceAreaParams({
        facilities: featureSet,
        defaultBreaks: driveTimeCutoffs,
        trimOuterPolygon: true,
      });
      return taskParameters;
    }
    
    function executeServiceAreaTask(serviceAreaParams) {
      return serviceAreaTask.solve(serviceAreaParams).then(function (result) {
        if (result.serviceAreaPolygons.length) {
          // Draw each service area polygon////
          result.serviceAreaPolygons.forEach(function (graphic) {
            graphic.symbol = {
              type: "simple-fill",
              color: "rgba(255,50,50,.25)",
            };
            mygraphicLayer.add(graphic, 0);
            return result.serviceAreaPolygons[0];
          });
          ///////////////////////////////  intersect  ////////////////////////////
          // featureLayer2.queryFeatures().then(function (data) {
          //   let count = 0;
          //   data.spatialReference = {
          //     wkid: 4326,
          //     wkt: 'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]',
          //   };
          //   for (let i = 0; i < data.features.length; i++) {
          //     data.features[i].layer.spatialReference = {
          //       wkid: 4326,
          //       wkt: 'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]',
          //     };
          //     data.features[i].geometry.spatialReference = {
          //       wkid: 4326,
          //       wkt: 'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]',
          //     };
          //   }
          //   //servicePolygon[0].visible = false;
          //   console.log(data.features[0])
          //   for (let i = 0; i < data.features.length; i++) {
          //     //featuresArr.push(data.features[i].geometry)
          //     let isNear = geometryEngine.distance(
          //       servicePolygon[0].geometry,
          //       data.features[i].geometry
          //     );
          //     //console.log(data.features[i].visible)
          //     if (isNear > 4926066) {
          //       console.log(count++);
          //       console.log(data.features[i].visible)
          //       //data.features[i].symbol.color
          //       //data.features[i].visible = false;
          //       //data.features[i].symbol.color.a=.01

          //       console.log(data.features[i].visible)
          //       data.features[i].symbol ={
          //         type: "picture-marker",
          //         url: "https://image.flaticon.com/icons/png/128/753/753340.png",
          //       }
          //     }
          //   }
           
          // });
        }
      });
    }
   
  });
  

  ///////////////////////////////  capacity  ////////////////////////////
  let checkBtn = false;
  featureLayer2.queryFeatures().then(function (data) {
    document
      .getElementById("btnCapacity")
      .addEventListener("click", function () {
        if (checkBtn == false) {
          featureLayer2.renderer = myRenderer2;
          checkBtn = true;
        } else {
          featureLayer2.renderer = myRenderer;
          checkBtn = false;
        }
      });
  });
});
