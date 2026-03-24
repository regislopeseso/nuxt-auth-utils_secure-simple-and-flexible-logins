<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession();
</script>

<template>
  <UCard class="flex justify-end">
    <div
      v-if="loggedIn"
      class="flex items-center gap-4"
    >
      <UButton @click="($event) => clear()"> Logout </UButton>
      {{ user?.name }}
    </div>
    <div v-else>
      <UButton @click="($event) => openInPopup('/auth/github')">
        Login
      </UButton>
    </div>
  </UCard>
</template>
