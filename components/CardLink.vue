<template>
  <article class="popular__post post post-link">
    <header class="post__header">
        <h2><nuxt-link :to="`/${post.slug}`">{{ post.title }}</nuxt-link></h2>
    </header>
    <div class="post__main">
        <div class="post-link__wrapper">
            <a class="post-link__external" :href="post.content" title="Перейти по ссылке">
                <div class="post-link__info-wrapper">
                    <div class="post-link__icon-wrapper">
                        <img :src="`https://www.google.com/s2/favicons?domain=${domain}`" alt="Иконка">
                    </div>
                    <div class="post-link__info">
                        <h3>{{ post.description }}</h3>
                    </div>
                </div>
                <span>{{ domain }}</span>
            </a>
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

  const url = new URL(post.content);
  const domain = url.hostname;
</script>
