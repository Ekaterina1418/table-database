<template>
  <div class="main-content">
    <user-add-form @addUser="userStore.addUser" />
    <div v-if="userStore.loading">Загрузка</div>
    <user-table :users="users" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import UserAddForm from './components/Form/UserAddForm.vue'
import UserTable from './components/Table/UsersTable.vue'

import { useUsersStore } from './store/index'
const userStore = useUsersStore()

userStore.fetchEntries()
const users = computed(() => {
  return userStore.users
})
</script>

<style>
@import './assets/main.css';
</style>
