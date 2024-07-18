<template>
  <div class="wrapper">
    <table class="table">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td data-cell="Имя">
            <input class="input" v-model="user.firstName" type="text" />
          </td>
          <td data-cell="Фамилия">
            <input class="input" v-model="user.lastName" type="text" />
          </td>

          <td data-cell="Действия">
            <button
              class="table__button"
              @click="userStore.editUser(user, index)"
            >
              Редактировать
            </button>
            <button
              class="table__button"
              @click="userStore.deleteUser(user._id)"
            >
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useUsersStore } from '../../store/index'
const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
})

const userStore = useUsersStore()
</script>

<style scoped>
@import 'table.css';
</style>
