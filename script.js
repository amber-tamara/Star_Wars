const people = "people"

fetch(`https://swapi.dev/api/${people}`).then((data)=> {
  return data.json()
}).then((data)=> {
    console.log(data.results)
})