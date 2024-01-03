<template>
  <article class="popular__post post post-text">
    <header class="post__header">
      <h2><NuxtLink :to="`/${post.slug}`">{{ post.title }}</NuxtLink></h2>
    </header>
    <div class="post__main">
      <p v-html="post.content"></p>
      <div class="post-text__more-link-wrapper">
        <NuxtLink :to="`/${post.slug}`" class="post-text__more-link">Читать далее</NuxtLink>
      </div>
    </div>
    <CardFooter :post="post" />
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
