import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async store({ request }: HttpContext) {
    const user = await User.findOrFail(request.params().id)
    const token = await User.accessTokens.create(user)

    return token
  }
}
