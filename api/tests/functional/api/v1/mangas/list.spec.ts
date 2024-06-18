import { DateTime } from 'luxon'

import { test } from '@japa/runner'

test.group('Mangas list', () => {
  test('get a list of mangas', async ({ client }) => {
    const response = await client.get('/api/v1/mangas')
    response.dumpBody()
    response.assertStatus(200)
    response.assertBody([
      {
        id: 1,
        mal_id: 1,
        title: 'test_manga',
        author: 'test_author',
        cover: 'test_cover.jpg',
        status: 'Finished',
        synopsis: 'test_synopsis',
        publishing: true,
        score: 9.11,
        releaseDate: DateTime.fromJSDate(new Date('2022-01-01')),
        volumes: 20,
        createdAt: '2024-06-18T12:45:04.416+00:00',
        updatedAt: '2024-06-18T12:45:04.416+00:00',
      },
      [],
    ])
  })
})
