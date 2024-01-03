<template>
  <Post v-if="post" :post="post" />
</template>

<script setup>
  import { useRoute } from '#imports';
  import { posts } from '~/mocks/posts.js';

  const route = useRoute();
  const post = ref(posts.find(p => p.slug === route.params.slug));
</script>
