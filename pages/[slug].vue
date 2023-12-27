<template>
  <Header />
  <Post v-if="post" :post="post" />
  <Footer />
</template>

<script setup>
  import { useRoute } from '#imports';
  import { posts } from '~/mocks/posts.js';

  const route = useRoute();
  const post = ref(posts.find(p => p.slug === route.params.slug));
</script>
