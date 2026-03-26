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
      <UButton
        @click="
          clear();
          navigateTo('/login');
        "
      >
        Logout
      </UButton>

      {{ user?.name }}
    </div>

    <div v-else>
      <UButton
        as-child
        class="mr-5"
      >
        <NuxtLink to="/login"> Login </NuxtLink>
      </UButton>
      <UButton as-child>
        <NuxtLink to="/register"> Register </NuxtLink>
      </UButton>
    </div>
  </UCard>
</template>
