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
