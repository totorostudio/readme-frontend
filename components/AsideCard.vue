<template>
  <article class="promo__block" :style="{ backgroundImage: 'url(' + post.image + ')'}">
    <div class="promo__overlay"></div>
    <h2 class="visually-hidden">Промо блок</h2>
    <p class="promo__text">
      {{ post.title }}
    </p>
    <NuxtLink :to="'/' + post.slug" class="promo__link" href="#">Подробнее</NuxtLink>
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

<style scoped>
.promo__block {
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.promo__overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border-radius: inherit;
}

.promo__text, .promo__link {
  position: relative;
  z-index: 1;
}
</style>
