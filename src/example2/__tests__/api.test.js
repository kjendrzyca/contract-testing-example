// Glossary:
// 💡 - a note
// 🦖 - an action
// ---

const axios = require('axios')

const apiUrl = `https://ghibliapi.herokuapp.com`
// 🦖 1) uncomment after running all tests agains the real API
// const apiUrl = `http://localhost:3001`

const filmResource = `/films`
const peopleResource = `/people`

it('fetches data from films api', async () => {
  const ghibliMovies = (
    await axios.get(`${apiUrl}${filmResource}`)
  ).data

  console.log(ghibliMovies)
})

describe('Ghibli movies and people', () => {
  it.skip('fetches data from films api', async () => {
    // when
    const ghibliMovies = (
      await axios.get(`${apiUrl}${filmResource}`)
    ).data

    // then
    expect(ghibliMovies.length).not.toEqual(0)

    const movie = ghibliMovies[0]
    expect(movie.id).toEqual(expect.any(String))
    expect(movie.title).toEqual(expect.any(String))
    expect(movie.description).toEqual(expect.any(String))
    expect(movie.director).toEqual(expect.any(String))
    expect(movie.people[0]).toEqual(`${apiUrl}${peopleResource}/`)
  })

  it.skip('fetches data from people api', async () => {
    // given
    const ghibliMovies = (
      await axios.get(`${apiUrl}${filmResource}`)
    ).data
    const movie = ghibliMovies[0]
    const peopleApi = movie.people[0]

    // when
    const ghibliPeople = (
      await axios.get(peopleApi)
    ).data

    // then
    const character = ghibliPeople[0]
    expect(character.id).toEqual(expect.any(String))
    expect(character.name).toEqual(expect.any(String))
    expect(character.age).toEqual(expect.any(String))
    expect(character.films[0].startsWith(`${apiUrl}${filmResource}`)).toEqual(true)
  })
})
