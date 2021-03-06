



// Logic for ListOfPlaces

function ListOfPlaces() {
  this.places = {}
  this.currentId=0;
  
}
ListOfPlaces.prototype.assignId=function(){
  this.currentId += 1;
  return this.currentId;
};

ListOfPlaces.prototype.addPlace=function(place){
  place.id=this.assignId()
  this.places[place.id]=place; 

};

ListOfPlaces.prototype.findPlace = function(id){
  if (this.places[id] != undefined){
    return this.places[id];
  }
  return false;
  }

ListOfPlaces.prototype.deletePlace= function(id){
  if(this.places[id] === undefined){
    return false
  }
  delete this.places[id];
  return true;
}

// Logic for Place

function Place(location,landmark,timeOfYear){
  this.location=location;
  this.landmark=landmark;
  this.timeOfYear=timeOfYear;
}

Place.prototype.notes = function(notes){
  return this.notes = notes
}



// UI logic
let listOfPlaces = new ListOfPlaces();

function displayPlace(listOfPlacesToDisplay){
  let placeslist = $("ul#show-places");
  let htmlDisplayPlace="";
  Object.keys(listOfPlacesToDisplay.places).forEach(function(key){
    const placeObj= listOfPlacesToDisplay.findPlace(key);
    htmlDisplayPlace += "<li id=" + placeObj.id + ">" + placeObj.location + "</li>";
  });
  placeslist.html(htmlDisplayPlace);
}

function showPlace(placeId){
  const place = listOfPlaces.findPlace(placeId);
  $("#output").show();
  $("#place-name").html(place.location);
  $("#landmark-visited").html(place.landmark);
  $("#time-of-year").html(place.timeOfYear);
  let buttons=$("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id="+place.id+">Delete</button>");
}

function attachPlaceListeners() {
  $("ul#show-places").on("click","li",function(){
    showPlace(this.id);
  });
  $("#buttons").on("click",".deleteButton",function(){
    listOfPlaces.deletePlace(this.id);
    $("#output").hide();
    displayPlace(listOfPlaces);

  });
}

$(document).ready(function(){
  attachPlaceListeners();
  $("form#input").submit(function(event){
    event.preventDefault();

  let nameInput = $("#name-input").val();
  let landmarkInput = $("#landmark-input").val();
  let timeInput = $("#time-input").val();

      // The next three lines are new:
      $("#name-input").val("");
      $("#landmark-input").val("");
      $("#time-input").val("");

  let newPlace = new Place(nameInput,landmarkInput,timeInput);
  listOfPlaces.addPlace(newPlace);
  displayPlace(listOfPlaces);
  })
})
