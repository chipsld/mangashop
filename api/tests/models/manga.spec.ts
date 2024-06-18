import { DateTime } from 'luxon'

import { test } from '@japa/runner'
import Manga from '#models/manga'

test.group('Model Manga', (group) => {
  const subject = new Manga()

  group.each.setup(async () => {
    subject.fill({
      mal_id: 1,
      title: 'test_manga',
      author: 'test_author',
      cover: 'test_cover.jpg',
      status: 'Finished',
      synopsis: 'test_synopsis',
      publishing: true,
      score: 9.11,
      release_date: DateTime.fromJSDate(new Date('2022-01-01')),
      volumes: 20,
    })
    await subject.save()
  })

  test('it returns an instance of Manga', ({ expect }) => {
    expect(subject).toBeInstanceOf(Manga)
  })
})
