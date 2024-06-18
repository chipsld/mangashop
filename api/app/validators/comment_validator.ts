import vine from '@vinejs/vine'

/**
 * Validates the user's creation action
 */
export const createCommentValidator = vine.compile(
  vine.object({
    text: vine.string().minLength(8).confirmed(),
    manga_id: vine.number(),
    user_id: vine.number(),
  })
)
