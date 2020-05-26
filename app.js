var date=new Date()
var daysInWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var day=date.getDay()
var today=daysInWeek[day]
var hours=date.getHours()
var minutes=date.getMinutes()
document.getElementById("dateAndTime").innerText=(today+" "+hours+":"+minutes);
var weatherInCities=[
    {city:"Hyderabad,Telangana",climateCondition:"sunny",temperature:45},
    {city:"Bhopal,MadhyaPradesh",climateCondition:"sunny",temperature:40},
    {city:"Imphal,Manipur",climateCondition:"cloudy",temperature:15},
    {city:"Agarthala,Tripura",climateCondition:"Rainy",temperature:22},
    {city:"Kohima,Nagaland",climateCondition:"Humid",temperature:21}
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
}
function getFahrenheit(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=(weatherInSelectedCity.temperature*9/5)-32;
}
function getCelsius(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
}
