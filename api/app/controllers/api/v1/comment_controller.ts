import type { HttpContext } from '@adonisjs/core/http'
import Comment from '#models/comment'
import { createCommentValidator } from '#validators/comment_validator'
export default class CommentController {
  async show({ params }: HttpContext) {
    const id = params.id
    const mangaId = params.manga_id
    return Comment.query().where('id', id).where('manga_id', mangaId)
  }

  async store({ request }: HttpContext) {
    const data = request.all()
    const payload = await createCommentValidator.validate(data)
    return Comment.create({
      text: payload.text,
      mangaId: payload.manga_id,
      userId: payload.user_id,
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
