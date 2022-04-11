async function getHotelData() {
  try {
    const response = await fetch('/10-hotel/hotel.json')
    return await response.json() //Return the JSON object

  } catch (error) {
    console.error(error) //passing the error object to .error
  }

}

let hotelData = {} //trying to get an empty object
getHotelData().then(data => {
  return hotelData = data, //returns an empty object but takes longer because its asynchronous
  console.log(hotelData)
})

const buttonsAll = document.querySelectorAll('.buttonDiv__button').addEventListener('click', hotelInfo)

for (button in buttonsAll) {
 
}
document.querySelector('#button__estate').addEventListener('click', hotelInfo) //no parenthesis because you're not calling the function, your passing it as a parameter
//functions are first class objects that can be passed around

function hotelInfo(event) {
  let hotelChoice = hotelData.hotels.find(hotel => {
    return event.target.id === hotel.name
  })
  //find a match 

  //query selectors to get text content and template literals, 
}