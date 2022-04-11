async function getHotelData() {
  try {
    const response = await fetch('/10-hotel/hotel.json')
    return await response.json() //Return the JSON object

  } catch (error) {
    console.error(error) //passing the error object to .error
  }

}

let hotelData = {} //filled with data 

getHotelData().then(data => {
  return hotelData = data, //returns an empty object but takes longer because its asynchronous
  console.log(hotelData)
})

const buttonsAll = document.querySelectorAll('.buttonDiv__button')
buttonsAll.forEach(button => {
  button.addEventListener('click', hotelInfo)
})

console.log(buttonsAll)

document.querySelector('#button__estate').addEventListener('click', hotelInfo) //no parenthesis because you're not calling the function, your passing it as a parameter
//functions are first class objects that can be passed around

function hotelInfo(event) {
 let hotelChoice = hotelData.hotels.find(hotel => {
 return event.target.id === hotel.id
 })

 //nameImageAddressDiv
 document.querySelector('.main__name').textContent = hotelChoice.name

//  document.querySelector('.main__figure').innerHTML = `<img src="/10-hotel/images/${hotelChoice.picture}" alt="${hotelChoice.name}" class="main__figureImage">` 
 document.querySelector('.main__nameImageAddressDiv').style.backgroundImage = `url('/10-hotel/images/${hotelChoice.picture}')`
 document.querySelector('.main__nameImageAddressDiv').style.backgroundRepeat = 'no-repeat'
 document.querySelector('.main__nameImageAddressDiv').style.backgroundSize = 'cover'
 document.querySelector('.main__nameImageAddressDiv').style.backgroundPosition = 'center'


 document.querySelector('.main__addressDiv').textContent = hotelChoice.address

 //amnListBookDiv
 document.querySelector('.main__amnListDiv').innerHTML = `Rooms: ${hotelChoice.rooms} <br>
 Room Types: ${hotelChoice.roomtypes} <br>
 Gym: ${hotelChoice.gym} <br>
 Pool: ${hotelChoice.pool} <br>
 Breakfast: ${hotelChoice.breakfast} <br>
 `
}
