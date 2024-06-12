import vine from '@vinejs/vine'
import { uniqueRule } from '#validators/rules/unique'

/**
 * Validates the user's creation action
 */
export const createUserValidator = vine.compile(
  vine.object({
    text: vine.string().minLength(8).confirmed(),
    manga_id: vine.string().minLength(8).confirmed(),
    user_id: vine.string(),
  })
)
