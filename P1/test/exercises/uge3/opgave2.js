const fetch = require('node-fetch')

const getPlanetforFirstSpeciesInFirstMovieForPerson = (id) => {
    fetch('https://swapi.dev/api/people/1/').then(res => res.json())
    .then(n => {
        fetch(n.films[0]).then(res => res.json())
        .then(f => {
            fetch(f.species[0]).then(res => res.json())
            .then(s => {
                fetch(s.homeworld).then(res => res.json())
                .then(p => {
                    console.log({name: n.name , title: f.title, species: s.name, planet:p.name})
                })
            })
        })
    })
    .catch(err => console.log(err))
    
}

const getPlanetforFirstSpeciesInFirstMovieForPersonAsync = async(id) => {
    try{
    const n = await fetch('https://swapi.dev/api/people/1/').then(res => res.json())
    const f = await fetch(n.films[0]).then(res => res.json())
    const s = await fetch(f.species[0]).then(res => res.json())
    const p = await fetch(s.homeworld).then(res => res.json())
    return {name: n.name , title: f.title, species: s.name, planet:p.name}
   
    } catch (err) {
        console.log(err)
    }

}


getPlanetforFirstSpeciesInFirstMovieForPerson(1)
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1).then(data => console.log(data))
