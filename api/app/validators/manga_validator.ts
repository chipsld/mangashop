import vine from '@vinejs/vine'

/**
 * Validates the user's creation action
 */
export const createUserValidator = vine.compile(
  vine.object({
    title: vine.string(),
    author: vine.string(),
    synopsis: vine.string(),
    price: vine.string(),
  })
)
