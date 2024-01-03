<template>
  <article class="popular__post post post-quote">
    <header class="post__header">
      <h2><NuxtLink :to="`/${post.slug}`">{{ post.title }}</NuxtLink></h2>
    </header>
    <div class="post__main">
      <blockquote>
        <p>
          {{ post.content }}
        </p>
        <cite>{{ post.quoteAuthor }}</cite>
      </blockquote>
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
