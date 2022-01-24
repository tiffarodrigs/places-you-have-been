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
Code:ListOfPlace.prototype.findPlace()
Expected_Outcome: Find place


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
