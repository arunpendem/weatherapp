var date=new Date()
var daysInWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var day=date.getDay()
var today=daysInWeek[day]
var hours=date.getHours()
var minutes=date.getMinutes()
document.getElementById("dateAndTime").innerText=(today+" "+hours+":"+minutes);
var weatherInCities=[
    {city:"Hyderabad,Telangana",climateCondition:"sunny",precipitation:"20%",temperature:45,Latitude:"17.3850'N",Longitude:"78.4867'E"},
    {city:"Bhopal,MadhyaPradesh",climateCondition:"sunny",precipitation:"23%",temperature:40,Latitude:"23.2599'N",Longitude:"77.4126'E"},
    {city:"Imphal,Manipur",climateCondition:"cloudy",precipitation:"90%",temperature:15,Latitude:"24.8170'N",Longitude:"93.9368'E"},
    {city:"Agarthala,Tripura",climateCondition:"Rainy",precipitation:"92%",temperature:22,Latitude:"23.8315'N",Longitude:"91.2868'E"},
    {city:"Kohima,Nagaland",climateCondition:"Humid",precipitation:"100%",temperature:21,Latitude:"25.6751'N",Longitude:"94.1086'E"}
]
function getWeather(){
    var list=document.getElementById("list")
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
    })
    document.getElementById("climate").innerText=weatherInSelectedCity.climateCondition;
    document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
    document.getElementById("city").innerText=selectedCityFromList;
    document.getElementById("Latitude").innerText=weatherInSelectedCity.Latitude;
    document.getElementById("Longitude").innerText=weatherInSelectedCity.Longitude;
    document.getElementById("precipitation").innerText=weatherInSelectedCity.precipitation;
}
function getFahrenheit(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=(weatherInSelectedCity.temperature*9/5)+32;
}
function getCelsius(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
}
