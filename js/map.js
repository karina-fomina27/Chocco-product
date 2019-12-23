ymaps.ready(init);

var placemarks = [
  {
    latitude: 55.74886283,
    longitude: 37.60715846,
    hintContent: '<div class="map_hint">м.Боровицкая</div>',
    balloonContent: [
      '<div class="map__balloon">',
      'Москва, ул.Новый Арбат, д.31/12',
      '<img class="map__mark-img" src="/img/bar.png"',
      '</div>'
    ]
  },
  {
    latitude: 55.76241539,
    longitude: 37.62449626,
    hintContent: '<div class="map_hint">м.Боровицкая</div>',
    balloonContent: [
      '<div class="map__balloon">',
      'Москва, ул.Новый Арбат, д.31/12',
      '<img class="map__mark-img" src="/img/bar.png"',
      '</div>'
    ]
  },
  {
    latitude: 55.76357682,
    longitude: 37.57883433,
    hintContent: '<div class="map_hint">м.Боровицкая</div>',
    balloonContent: [
      '<div class="map__balloon">',
      'Москва, ул.Новый Арбат, д.31/12',
      '<img class="map__mark-img" src="/img/bar.png"',
      '</div>'
    ]
  },
  {
    latitude: 55.74072901,
    longitude: 37.58827571,
    hintContent: '<div class="map_hint">м.Боровицкая</div>',
    balloonContent: [
      '<div class="map__balloon">',
      'Москва, ул.Новый Арбат, д.31/12',
      '<img class="map__mark-img" src="../img/bar.png"',
      '</div>'
    ]
  }
],
   geoObjects = [];

function init() {
  var map = new ymaps.Map('map', {
    center: [55.75399400, 37.62209300],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  for (var i = 0; i < placemarks.length; i++) {
  geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
      hintContent: placemarks[i].hintContent,
      balloonContent: placemarks[i].balloonContent.join('')

    },
      {
        iconLayout: 'default#image',
        iconImageHref: './img/icon_png/hint.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-37, -57]
      });
      
    }
  var clusterer = new ymaps.Clusterer({

  });
  // map.geoObjects.add(placemark);
  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);
}