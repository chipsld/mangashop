/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const CommentController = () => import('#controllers/api/v1/comment_controller')

// Lazy loading controllers
const SessionsController = () => import('#controllers/api/v1/users/sessions_controller')
const RegistrationsController = () => import('#controllers/api/v1/users/registrations_controller')
const MangaController = () => import('#controllers/api/v1/manga_controller')

router
  .group(() => {
    // Mangas

    // Users
    router
      .group(() => {
        router.group(() => {
          router.post('login', [SessionsController, 'store']).use(middleware.guest())
          router.post('registrations', [RegistrationsController, 'store']).use(middleware.guest())
        })
        router
          .group(() => {
            router.delete('logout', [SessionsController, 'destroy'])
            router.delete('registrations', [RegistrationsController, 'destroy'])
          })
          .use(middleware.auth())
      })
      .prefix('users')

    router
      .group(() => {
        router.get('', [MangaController, 'index']).use(middleware.guest())
      })
      .prefix('mangas')

    router
      .resource('mangas.comments', CommentController)
      .only(['show', 'update', 'store', 'destroy'])
  })
  .prefix('api/v1')
