<template>
  <article class="popular__post post ">
    <header class="post__header">
      <h2><nuxt-link :to="`/${post.slug}`">{{ post.title }}</nuxt-link></h2>
    </header>
    <div class="post__main">
        <div class="post-video__block">
            <div class="post-video__preview">
                <img :src="post.image" alt="Превью к видео" width="360" height="188">
            </div>
            <nuxt-link :to="`/${post.slug}`" class="post-video__play-big button">
                <svg class="post-video__play-big-icon" width="14" height="14">
                    <use xlink:href="#icon-video-play-big"></use>
                </svg>
                <span class="visually-hidden">Запустить проигрыватель</span>
            </nuxt-link>
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
