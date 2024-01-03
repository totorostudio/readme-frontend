<template>
  <footer class="post__footer">
    <div class="post__author">
      <NuxtLink :to="'/profile/' + author.id" class="post__author-link" title="Автор">
        <div class="post__avatar-wrapper">
          <img class="post__author-avatar" :src="author.avatar" alt="Аватар пользователя" width="40" height="auto">
        </div>
        <div class="post__info">
          <b class="post__author-name">{{ author.userName }}</b>
          <time class="post__time" datetime="2019-03-30">{{ timeAgo }}</time>
        </div>
      </NuxtLink>
    </div>
    <div class="post__indicators">
      <div class="post__buttons">
        <a class="post__indicator post__indicator--likes button" href="#" title="Лайк">
          <svg class="post__indicator-icon" width="20" height="17">
            <use xlink:href="#icon-heart"></use>
          </svg>
          <svg class="post__indicator-icon post__indicator-icon--like-active" width="20" height="17">
            <use xlink:href="#icon-heart-active"></use>
          </svg>
          <span>{{ post.likes }}</span>
          <span class="visually-hidden">количество лайков</span>
        </a>
        <a class="post__indicator post__indicator--comments button" href="#" title="Комментарии">
          <svg class="post__indicator-icon" width="19" height="17">
            <use xlink:href="#icon-comment"></use>
          </svg>
          <span>{{ post.comments.length }}</span>
          <span class="visually-hidden">post</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import { users } from '~/mocks/users.js';

  const { post } = defineProps({
    post: {
      type: Object,
      required: true,
      default: () => ({})
    }
  });

  const currentTime = ref(new Date());
  const timeAgo = computed(() => getTimeDifference(post.date, currentTime.value));

  const author = computed(() => {
    const user = users.find(user => user.id === post.userId);
    return user ? user : {};
  });

</script>
