// Glossary:
// 💡 - a note
// 🦖 - an action
// ---

// 💡 for simulating database changes over time
const db1 = require('../db1')
const db2 = require('../db2')
const db3 = require('../db3')
// ---

const createApi = require('../api')

describe.skip('db test', () => {
  it('fetches all movies', async () => {
    // given
    let api

    {
      // 🦖 1) run test once and comment out:
      // 👉 check the snapshot
      api = createApi(db1)
    }

    {
      // 🦖 2) uncomment after the first run and run again
      // 👉 the test should turn red
      // 👉 fix it
      // 👉 check the snapshot
      // api = createApi(db2)
    }

    {
      // 🦖 3) uncomment after the second run and run again
      // 👉 the test should turn red
      // 👉 fix it
      // api = createApi(db3)
    }

    // when
    const movies = await api.getAll()

    // then
    expect(movies).toMatchSnapshot();

    {
      // 🦖 4) update the db and try running again
      // 👉 it won't work
      // 👉 remove the assertion above
      // 👉 add custom matcher to make it work again
    }
  })
})
