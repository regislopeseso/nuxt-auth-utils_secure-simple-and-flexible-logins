<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession();
</script>

<template>
  <div v-if="loggedIn">
    <UButton @click="($event) => clear()"> Logout </UButton>
    {{ user }}
  </div>
  <div v-else>
    <UButton @click="($event) => openInPopup('/auth/github')"> Login </UButton>
  </div>
</template>
