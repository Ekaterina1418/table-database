import { defineStore } from 'pinia'

export const useUsersStore = defineStore('userStore', {
  state: () => ({
    users: [],
    loading: false,
  }),
  actions: {
    async fetchEntries() {
      try {
        this.loading = true
        const response = await fetch('http://localhost:3000/users')
        if (response.ok) {
          const entries = await response.json()
          this.users = entries
          this.loading = false
        } else {
          console.error('Ошибка при загрузке данных')
        }
      } catch (err) {
        console.log('Ошибка сервера', err)
      }
    },
    async addUser(user) {
      this.users.push(user)
      try {
        const res = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })

        return res
      } catch (err) {
        console.error('Ошибка сервера', err)
      }
    },
    async editUser(updatedUser, index) {
      const response = await fetch(
        `http://localhost:3000/users/${this.users[index]._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser),
        }
      )
      if (response.ok) {
        const savedUser = await response.json()
        this.users[index] = savedUser
      } else {
        console.error('Ошибка при редактировании записи')
      }
    },
    async deleteUser(id) {
      this.users = this.users.filter((user) => user._id !== id)
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        console.error('Ошибка при удалении записи')
      } else {
        console.log('User deleted successfully')
      }
    },
  },
})
