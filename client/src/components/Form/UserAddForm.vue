<template>
  <div class="wrapper">
    <h1 class="title">Новый пользователь</h1>
    <form class="form" @submit.prevent="addUser">
      <div class="form__wrap">
        <input
          class="form__input"
          v-model="firstName"
          type="text"
          placeholder="Имя"
        />
        <input
          class="form__input"
          v-model="lastName"
          type="text"
          placeholder="Фамилия"
        />
      </div>

      <button class="form__button" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useUsersStore } from '../../store/index'
import { onMounted, ref } from 'vue'
const userStore = useUsersStore()
const firstName = ref('')
const lastName = ref('')

const addUser = async () => {
  if (lastName.value.length > 0 && firstName.value.length > 0) {
    await userStore.addUser({
      lastName: lastName.value,
      firstName: firstName.value,
    })

    lastName.value = ''
    firstName.value = ''
    userStore.fetchEntries()
  }
}
</script>

<style scoped>
@import 'form.css';
</style>
