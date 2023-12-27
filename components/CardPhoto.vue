<template>
  <article class="popular__post post post-photo">
    <header class="post__header">
      <h2><nuxt-link :to="`/${post.slug}`">{{ post.title }}</nuxt-link></h2>
    </header>
    <div class="post__main">
        <div class="post-photo__image-wrapper">
            <img :src="post.image" alt="Фото от пользователя" width="360" height="240">
        </div>
    </div>
    <CardFooter />
  </article>
</template>

<script setup>
  const { post } = defineProps({
    post: {
      type: Object,
      required: true,
      default: () => ({})
    }
  });
</script>
