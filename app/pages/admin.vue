<script setup>
definePageMeta({
  middleware: ["auth"]
});

const { data } = useFetch("/api/admin");
</script>

<template>
  <div> {{ data.sensitive }} </div>
</template>
