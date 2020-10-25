//INSTATIATING WEATHER & Storage
const weather = new Weather()
const ui= new UI()
const storage = new Storage()



//INSTANTIATING STORAGE
const cityStorage = localStorage.getItem('city')

//VALUATING CITY VALUE
const city= document.getElementById('city')




//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', loadCity)
document.getElementById('city').addEventListener('keyup',(e)=>{
  const cityText = e.target.value

  // console.log(cityText);

  if(cityText === ''){
    var elems = document.querySelector('.collapsible');
    var instances = M.Collapsible.init(elems,{

      inDuration: 200,

  })
  instances.close();
  }
})

function loadCity(){
  

  if(localStorage.getItem('city') !== null){
    city.value = cityStorage
  }
}


//FUNCTION TO OPEN COLLAPSIBLE
document.getElementById('form').addEventListener('submit', function() {

  //Setting storage
  storage.setCity(city.value)


  var elems = document.querySelector('.collapsible');
  var instances = M.Collapsible.init(elems,{
    accordion:true,
    inDuration: 200,
    
    
})
instances.open();

})





document.getElementById('form').addEventListener('submit',pasteWeather)


function pasteWeather(e){
  
  weather.fetchWeather(city.value)
  .then(data=> {
    if(data.message === "Nothing to geocode"){
      var elems = document.querySelector('.collapsible');
      var instances = M.Collapsible.init(elems,{
  
        inDuration: 5,
  
    })
    instances.close();

      M.toast({html: 'Nothing to display! Please put a city,town or state name'})
    }
    else if(data.message === "city not found"){

      var elems = document.querySelector('.collapsible');
      var instances = M.Collapsible.init(elems,{
  
        inDuration: 5,
  
    })
    instances.close();

      M.toast({html: 'Not a recognized city, please check your spelling'})
    }
    else{
      {
        ui.paint(data)
      }
    }
    
    // console.log(data.list[0].dt),
    // console.log(data.list[1].dt)
  }
    // ui.paint(data)
    
    )


  e.preventDefault()
}

