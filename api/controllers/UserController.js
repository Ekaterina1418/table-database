import UserModel from '../models/User.js'

export const add = async (req, res) => {
  try {
    const doc = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    })
    const user = await doc.save()

    return res.json(user)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Не удалось создать пользователя',
    })
  }
}

export const getAll = async (req, res) => {
  try {
    const users = await UserModel.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: 'Не удалось получить пользователей' })
  }
}

export const update = async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
      { new: true }
    )
    res.json(updatedUser)
  } catch (err) {
    res.status(500).json({ message: 'Не удалось обновить пользователя' })
  }
}

export const remove = async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id)

    if (!deletedUser) {
      return res.status(404).json({ error: 'Пользователь не найден' })
    }
    return res.status(204).send()
  } catch (err) {
    res.status(500).json({ error: 'Ошибка сервера' })
  }
}
