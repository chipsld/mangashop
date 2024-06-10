import Manga from '#models/manga'
import Factory from '@adonisjs/lucid/factories'

export const MangaFactory = Factory.define(Manga, ({ faker }) => {
  return {
    title: faker.internet.email().toLocaleLowerCase(),
    author: 'password',
    synopsis: faker.person.firstName(),
    lastName: faker.person.lastName(),
  }
}).build()
