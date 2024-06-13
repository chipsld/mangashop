import type { HttpContext } from '@adonisjs/core/http'
import Comment from '#models/comment'
export default class CommentController {
  async show({ request }: HttpContext) {
    const id = request.params().id
    return Comment.findByOrFail('manga_id', id)
  }

  async store({ request }: HttpContext) {
    return Comment.create({
      text: request.params.name,
    })
  }

  async update({ params, request }: HttpContext) {
    const comment = await Comment.findOrFail(params.id)
    comment.merge(request.all())
    await comment.save()
  }

  async destroy({ params }: HttpContext) {
    const user = await Comment.findOrFail(params.id)
    await user.delete()
  }
}
