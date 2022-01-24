Describe : ListOfPlaces()

Test: The functions should create an object called ListOfPlaces.
Code:
ListOfPlaces = {
  this.places = {};
}
Expected Outcome: ListOfPlaces = {places}

Describe: ListOfPlace.prototype.addPlace(place)
Test: This function will add place to ListOfPlaces.
Code:
ListOfPlaces.prototype.addPlace(place)
Expected Outcome: ListOfPlaces.place = {}

Describe: ListOfPlace.prototype.assignId()
Test:this function will assign a unique id for each place
Code:ListOfPlace.prototype.assignId()
Expected_Outcome: Assign an ID

Describe: ListOfPlace.prototype.findPlace()
Test: This function will find a place in the ListOfPlaces
Code:ListOfPlace.prototype.findPlace(id)
Expected_Outcome: Find place

Describe: ListOfPlace.prototype.deletePlace()
Test: This function will find delete a place in the ListOfPlaces
Code:ListOfPlace.prototype.deletePlace(id)
Expected_Outcome: Delete place


Describe : Place()

Test: the constructor Place should have location,landmark,time_of the year as arguments
code:Place()
expected_outcome:function Place(location,landmark,timeOfYear){
  this.location=location;
  this.landmark= landmark;
  this .timeOfYear=timeOfYear
}

Test:To create an instance of object of type Place
code:let Miami = new Place("Florida","SouthBeach","Summer")
Expected_Outcome: Miami = {
    location = "Florida", landmark = "SouthBeach", timeOfYear = "Summer"}

Describe : Place.prototype.notes()

Test: To add notes property to the place object
Code:
Place.prototype.notes = function(notes){
  return this.notes = notes
}
Expected outcome: Add notes property