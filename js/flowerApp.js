var redRoses = new app.singleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/redRoses.jpg",
    link: "redRose"
  });
  
var rainbowRoses = new app.singleFlower({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link: "rainbowRose"
 });
  
var heirloomRoses = new app.singleFlower({
    name: "Heirloom roses",
    price: 19.95,
    img: "images/heirloomPinkRoses.jpg",
    link: "heirloomRose"
 });
 
var flowerGroup = new app.FlowersCollection([
    redRoses, rainbowRoses, heirloomRoses
]);

var flowerGroupView = new app.allFlowersView({
    collection: flowerGroup
});

$("#allFlowers").html(flowerGroupView.render().el);

//European FLowers

var tantalizingTulips = new app.europeanFlower({
    price: 20,
    color: "White"
});

var fluerDeLis = new app.europeanFlower({
    price: 25,
    color: "Red"
});

tantalizingTulips.set("originCountry","Holland");

var europeanFlowersGroup = new app.EuropeanFlowersCollection([tantalizingTulips,fluerDeLis]);

console.log(europeanFlowersGroup.toJSON());

//state flowers

var wash = new app.stateFlower({
    state: "Washington",
    flower: "Rhododendron macrophyllum"
});

var ore = new app.stateFlower({
    state: "Oregon",
    flower: "Oregon Grape"
  });

var stateFlowerGroup = new app.stateFlowerCollection([
    wash, ore
]); 

var stateFlowerGroupView = new app.allStateFlowerView({
    collection: stateFlowerGroup
});

$("#stateFlowers").html(stateFlowerGroupView.render().el);

var flowerRouter = new app.Router();

Backbone.history.start();