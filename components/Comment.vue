<template>
  <div class="comments__avatar">
    <NuxtLink :to="'/profile/' + comment.userId" class="user__avatar-link">
      <img class="comments__picture" :src="comment.avatar" alt="Аватар пользователя">
    </NuxtLink>
  </div>
  <div class="comments__info">
    <div class="comments__name-wrapper">
      <NuxtLink :to="'/profile/' + comment.userId" class="comments__user-name">
        <span>{{ comment.userName }}</span>
      </NuxtLink>
      <time class="comments__time" :datetime="comment.date">{{ comment.timeAgo }}</time>
    </div>
    <p class="comments__text">
      {{ comment.text }}
    </p>
  </div>
</template>

<script setup>
  const { comment } = defineProps({
    comment: {
      type: Object,
      required: true,
      default: () => ({})
    }
  });
</script>
