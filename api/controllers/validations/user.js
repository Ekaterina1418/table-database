import { body } from 'express-validator'

export const userValidation = [
  body('lasttName', 'Введите имя').isLength({ min: 3 }).isString(),
  body('firstName', 'Введите фамилию').isLength({ min: 3 }).isString(),
]
