<template>
  <Profile v-if="user" :user="user" />
</template>

<script setup>
  import { useRoute } from '#imports';
  import { users } from '~/mocks/users.js';

  const route = useRoute();
  const user = ref(users.find(user => user.id === route.params.id));

</script>
