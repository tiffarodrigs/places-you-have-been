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