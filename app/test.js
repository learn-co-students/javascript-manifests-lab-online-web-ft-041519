// index.js


//API at localhost:3000/dogs
[
  {
    "dogName": "Luca",
    "dogBreed": "German Shephard",
    "id": 1
  },
  {
    "dogName": "Lola",
    "dogBreed": "Cocker Spaniel",
    "id": 2
  }
]

BASE_URL = "http://localhost:3000/dogs"

//this is a very simple GET request, give only URL
fetch(BASE_URL)
.then(response => response.json)
.then(data => {
//how go through the data and console log the dogs
  data.forEach( d=> {
    console.log(d.dogName)
  })
})

//POST request
//give 1) URL, 2) method telling it's a post request, 3) header, 4) body
//give some sort of object you will stringify
//has error handling like GET with .catch

//hard coding a new dogObject for illustration
let dogObject = {
  dogName: "Nancy",
  dogBreed: "bulldog"
}

// can check the dogObject with JSON.stringify(dogObject)
let configObject = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"},
    body: JSON.stringify(dogObject)  //kinda object of json.response
  }

fetch(BASE_URL, configObject)
.then(response => response.json)
.then(function(data){
  console.log(data)
})
.catch(err => console.log(err.message)}


class Dog {
  constructor(dogName, dogBreed) {
    ... 
  }

  //instance method
  render(){
    return `
      <li>${this.dogName} - ${this.dogBreed}</li>
    `
  }
}

dogs = my json
dogs.forEach
dog = new Dog(d...)
dog.render()