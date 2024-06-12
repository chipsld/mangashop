import type { HttpContext } from '@adonisjs/core/http'
import Comment from '#models/comment'
export default class CommentController {
  async show({ params }: HttpContext) {
    const { id } = params
    return Comment.findByOrFail('manga_id', id)
  }
  async store({ request }: HttpContext) {
    return Comment.create({
      text: request.params.name,
    })
  }

  /**
   * Handle the form submission to update a specific post by id
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Handle the form submission to delete a specific post by id.
   */
  async destroy({ params }: HttpContext) {
    const user = await Comment.findOrFail(params.id)
    await user.delete()
  }
}
