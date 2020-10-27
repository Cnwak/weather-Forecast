class UI{
  constructor(){
    // 1
    this.temp1 = document.getElementById('temp1')
    this.description1 = document.getElementById('description1')
    this.humidity1 = document.getElementById('humidity1')
    this.wind1 = document.getElementById('wind1')
    this.main1 = document.getElementById('main1')
    this.date1 = document.getElementById('date1')
    this.icon1= document.getElementById('icon1')
    this.cityName= document.getElementById('cityName')



    // 2
    this.temp2 = document.getElementById('temp2')
    this.description2= document.getElementById('description2')
    this.humidity2 = document.getElementById('humidity2')
    this.wind2 = document.getElementById('wind2')
    this.main2 = document.getElementById('main2')
    this.date2 = document.getElementById('date2')
    this.icon2= document.getElementById('icon2')
    

    // 3
    this.temp3 = document.getElementById('temp3')
    this.description3= document.getElementById('description3')
    this.humidity3 = document.getElementById('humidity3')
    this.wind3 = document.getElementById('wind3')
    this.main3 = document.getElementById('main3')
    this.date3 = document.getElementById('date3')
    this.icon3= document.getElementById('icon3')

    // 4
    this.temp4 = document.getElementById('temp4')
    this.description4= document.getElementById('description4')
    this.humidity4 = document.getElementById('humidity4')
    this.wind4 = document.getElementById('wind4')
    this.main4 = document.getElementById('main4')
    this.date4 = document.getElementById('date4')
    this.icon4= document.getElementById('icon4')


    // 5
    this.temp5 = document.getElementById('temp5')
    this.description5= document.getElementById('description5')
    this.humidity5 = document.getElementById('humidity5')
    this.wind5 = document.getElementById('wind5')
    this.main5 = document.getElementById('main5')
    this.date5 = document.getElementById('date5')
    this.icon5= document.getElementById('icon5')
  }


  paint(details){
    // 1  
    
    
    this.temp1.innerHTML= `<i class="fa fa-thermometer-quarter fa-4x blue-text darken-2" aria-hidden="true"></i><h2 id="temp" class="margin">${details.list[0].main.temp}°c</h2> `
    this.icon1.setAttribute('src',`http://openweathermap.org/img/w/${details.list[0].weather[0].icon}.png`)
    this.description1.textContent= `${details.list[0].weather[0].description}`
    this.humidity1.textContent= `Humidity: ${details.list[0].main.humidity}%`
    this.wind1.innerHTML=`<i class="fas fa-wind"></i>:  ${details.list[0].wind.speed}km/h`
    this.main1.textContent= `${details.list[0].weather[0].main}`
    this.date1.textContent= new Date(details.list[0].dt_txt).toDateString()
    this.cityName.textContent= `${details.city.name},${details.city.country}`


    // 2
    
    this.temp2.innerHTML= `<i class="fa fa-thermometer-quarter fa-4x light-blue-text darken-2" aria-hidden="true"></i><h2 id="temp" class="margin">${details.list[6].main.temp}°c</h2> `
    this.icon2.setAttribute('src',`http://openweathermap.org/img/w/${details.list[6].weather[0].icon}.png`)
    this.description2.textContent= `${details.list[6].weather[0].description}`
    this.humidity2.textContent= `Humidity: ${details.list[6].main.humidity}%`
    this.wind2.innerHTML= `<i class="fas fa-wind"></i>:   ${details.list[6].wind.speed}km/h`
    this.main2.textContent= `${details.list[6].weather[0].main}`
    this.date2.textContent= new Date(details.list[6].dt_txt).toDateString()
  

    //3
    this.temp3.innerHTML= `<i class="fa fa-thermometer-quarter fa-4x cyan-text darken-2" aria-hidden="true"></i><h2 id="temp" class="margin">${details.list[14].main.temp}°c</h2> `
    this.icon3.setAttribute('src',`http://openweathermap.org/img/w/${details.list[18].weather[0].icon}.png`)
    this.description3.textContent= `${details.list[18].weather[0].description}`
    this.humidity3.textContent= `Humidity: ${details.list[18].main.humidity}%`
    this.wind3.innerHTML= `<i class="fas fa-wind"></i>:   ${details.list[18].wind.speed}km/h`
    this.main3.textContent= `${details.list[18].weather[0].main}`
    this.date3.textContent= new Date(details.list[18].dt_txt).toDateString()


    //4
    this.temp4.innerHTML= `<i class="fa fa-thermometer-quarter fa-4x teal-text darken-2" aria-hidden="true"></i><h2 id="temp" class="margin">${details.list[22].main.temp}°c</h2> `
    this.icon4.setAttribute('src',`http://openweathermap.org/img/w/${details.list[22].weather[0].icon}.png`)
    this.description4.textContent= `${details.list[22].weather[0].description}`
    this.humidity4.textContent= `Humidity: ${details.list[22].main.humidity}%`
    this.wind4.innerHTML= `<i class="fas fa-wind"></i>: ${details.list[22].wind.speed}km/h`
    this.main4.textContent= `${details.list[22].weather[0].main}`
    this.date4.textContent= new Date(details.list[22].dt_txt).toDateString()


    //5
    this.temp5.innerHTML= `<i class="fa fa-thermometer-quarter fa-4x indigo-text darken-2" aria-hidden="true"></i><h2 id="temp" class="margin">${details.list[35].main.temp}°c</h2> `
    this.icon5.setAttribute('src',`http://openweathermap.org/img/w/${details.list[35].weather[0].icon}.png`)
    this.description5.textContent= `${details.list[35].weather[0].description}`
    this.humidity5.textContent= `Humidity: ${details.list[35].main.humidity}%`
    this.wind5.innerHTML= `<i class="fas fa-wind"></i>: ${details.list[35].wind.speed}km/h`
    this.main5.textContent= `${details.list[35].weather[0].main}`
    this.date5.textContent= new Date(details.list[35].dt_txt).toDateString()
  }
  }
