const express = require('express')
const morgan = require('morgan')

const port = process.env.PORT || 3001
const app = express()

app.use(morgan('tiny'))

app.get('/', (req, res) => res.send('pact example server'))

app.get('/films', (req, res) => res.json([
  {
    id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    title: 'Castle in the Sky',
    description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
    director: 'Hayao Miyazaki',
    people: [ `http://localhost:${port}/people/` ],
  }
]))

app.get('/people', (req, res) => res.json([
  {
    id: 'ba924631-068e-4436-b6de-f3283fa848f0',
    name: 'Ashitaka',
    age: 'late teens',
    films: [`http://localhost:${port}/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6`]
  }
]))

app.listen(port, error => {
  if (error) {
    throw error
  }
  console.log('SERVER: ProductService listening at', port)
})
