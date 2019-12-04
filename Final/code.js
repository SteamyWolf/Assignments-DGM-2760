async function getCharacter() {
    try {
        const response = await fetch("lotr.json")
        return await response.json() //Return the JSON object 

    } catch (error) {
        console.error(error)
    }
}


let characterData = {}
getCharacterData().then(data => characterData = data)
console.log(hotelData)

let selectAll = document.querySelectorAll('a') 
selectAll.forEach(() => addEventListener('click', hotelInfo))
console.log(selectAll)


function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#type').textContent = `${hotelChoice.roomTypes[0] + 
        ' ' + hotelChoice.roomTypes[1] + ' ' + hotelChoice.roomTypes[2] + ' ' + 
    hotelChoice.roomTypes[3]}`
    let picturePlacement = document.querySelector('#picture')
    picturePlacement.src = `${hotelChoice.picture}`
}

