<template>
  <article class="popular__post post post-text">
    <header class="post__header">
        <h2><nuxt-link :to="`/${post.slug}`">{{ post.title }}</nuxt-link></h2>
    </header>
    <div class="post__main">
      <p v-html="post.content"></p>
      <div class="post-text__more-link-wrapper">
        <nuxt-link :to="`/${post.slug}`" class="post-text__more-link">Читать далее</nuxt-link>
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
