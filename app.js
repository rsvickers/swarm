// SECTION variables

const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤',
    killsVampires: false
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤',
    killsVampires: false
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤',
    killsVampires: false
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥',
    killsVampires: false
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
    killsVampires: false
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
    killsVampires: false
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
    killsVampires: false
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
    killsVampires: false
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
    killsVampires: false
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
    killsVampires: false
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
    killsVampires: false
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
    killsVampires: false
}
]

// SECTION functions

function drawPeople() {
    locations.forEach(personsLocation => {

        const peopleAtLocation = people.filter(people => people.location == personsLocation)

        // console.log('people at location', peopleAtLocation);

        let pictureString = ''

        peopleAtLocation.forEach(people => pictureString += people.picture)

        const locationElement = document.getElementById(personsLocation)

        locationElement.innerText = pictureString

    })
}

function changeLocation() {
    people.forEach(person => {
        const randomLocationIndex = Math.floor(Math.random() * locations.length)
        const randomLocation = locations[randomLocationIndex]
        person.location = randomLocation

    })
}

// function vampireHunter() {


//     const randomVampireHunterIndex = Math.floor(Math.random() * people.length)
//     const randomVampireHunter = people[randomVampireHunterIndex]

//     randomVampireHunter.killsVampires = true
//     // console.log('whose the vampire hunter:', people)

// }


function attackPeople(selectedLocation) {
    people.forEach(person => {
        if (person.location == selectedLocation) {
            person.picture = "🦇"
            console.log(person)
            return
        }

    })

    changeLocation()
    drawPeople()


}





// SECTION calling functions
// vampireHunter()
drawPeople() 