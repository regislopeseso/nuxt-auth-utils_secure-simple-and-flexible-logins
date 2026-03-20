<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";

const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession();
</script>

<template>
  <NavBar />
  <NuxtPage />
</template>
