<template>
  <main class="page__main page__main--publication">
    <div class="container">
      <h1 class="page__title page__title--publication">{{ post.title }}</h1>
      <article class="post post-text">
      <section class="post-details">
        <h2 class="visually-hidden">Публикация</h2>
        <div class="post-details__wrapper post-photo">
          <div class="post-details__main-block post post--details">
            <div class="post-details__image-wrapper post-photo__image-wrapper" v-if="post.type === 'photo'">
              <img :src="post.image" alt="Фото от пользователя" width="760" height="507">
            </div>
            <div class="post__main">
              <p v-html="post.content"></p>
            </div>
            <div class="post__indicators">
              <div class="post__buttons">
                <a class="post__indicator post__indicator--likes button" @click.prevent="toggleLike" title="Лайк">
                  <svg :class="{'heart--liked': post.likedByUser}" class="post__indicator-icon" width="20" height="17">
                    <use :xlink:href="post.likedByUser ? '#icon-heart-active' : '#icon-heart'"></use>
                  </svg>
                  <span>{{ post.likes }}</span>
                  <span class="visually-hidden">количество лайков</span>
                </a>
                <NuxtLink to="#comments_list" class="post__indicator post__indicator--comments button" title="Комментарии">
                  <svg class="post__indicator-icon" width="19" height="17">
                    <use xlink:href="#icon-comment"></use>
                  </svg>
                  <span>{{ post.comments.length }}</span>
                  <span class="visually-hidden">количество комментариев</span>
                </NuxtLink>
                <a class="post__indicator post__indicator--repost button" href="#" title="Репост">
                  <svg class="post__indicator-icon" width="19" height="17">
                    <use xlink:href="#icon-repost"></use>
                  </svg>
                  <span>{{ post.repostsCount }}</span>
                  <span class="visually-hidden">количество репостов</span>
                </a>
              </div>
              <span class="post__view">{{ post.viewCount }} просмотров</span>
            </div>
            <ul class="post__tags">
              <li v-for="(tag, index) in post.tags" :key="index">
                <a :href="`#${tag}`">#{{ tag }}</a>
              </li>
            </ul>
            <div class="comments">
              <form @submit.prevent="submitComment" class="comments__form form" action="#" method="post">
                <div class="comments__my-avatar">
                  <img class="comments__picture" :src="currentUserNow.avatar" alt="Аватар пользователя">
                </div>
                <div :class="['form__input-section', { 'form__input-section--error': isValidationErrorVisible }]">
                  <textarea v-model="newCommentText" class="comments__textarea form__textarea form__input" placeholder="Ваш комментарий" id="comments_list"></textarea>
                  <label class="visually-hidden">Ваш комментарий</label>
                  <button v-if="isValidationErrorVisible" @click="showValidationError" class="form__error-button button" type="button">!</button>
                  <div v-show="isValidationErrorVisible" class="form__error-text">
                    <h3 class="form__error-title">Ошибка валидации</h3>
                    <p class="form__error-desc">Это поле обязательно к заполнению</p>
                  </div>
                </div>
                <button class="comments__submit button button--green" type="submit">Отправить</button>
              </form>
              <div class="comments__list-wrapper">
                <ul class="comments__list">
                  <li v-for="(comment, index) in computedComments" :key="index" class="comments__item user">
                    <Comment :comment="comment" />
                  </li>
                 </ul>
              </div>
            </div>
          </div>
          <UserDetails :author="author" />
        </div>
      </section>
      </article>
    </div>
  </main>
</template>

<script setup>
  import { onMounted, onUnmounted, ref, computed } from 'vue';
  import { currentUser, users } from '~/mocks/users.js';
  import { getTimeDifference } from '~/utils/utils.js';

  const { post } = defineProps({
    post: {
      type: Object,
      required: true,
      default: () => ({})
    }
  });

  const currentUserNow = ref(currentUser);
  const currentTime = ref(new Date());

  // Метод для обновления времени
  const updateCurrentTime = () => {
    currentTime.value = new Date();
  };

  // Обновляет дату комментария каждую минуту
  onMounted(() => {
    const intervalId = setInterval(updateCurrentTime, 60000);
    onUnmounted(() => {
      clearInterval(intervalId);
    });
  });

  const computedComments = computed(() =>
    post.comments.map(comment => ({
      ...comment,
      timeAgo: getTimeDifference(comment.date, currentTime.value),
      avatar: users.find(user => user.id === comment.userId).avatar,
      userName: users.find(user => user.id === comment.userId).userName,
    }))
  );

  // Функция для увеличения числа лайков
  function toggleLike() {
    post.likes += post.likedByUser ? -1 : 1;
    post.likedByUser = !post.likedByUser;
  }

  // Отслеживание текста нового комментария
  const newCommentText = ref('');
  const isValidationErrorVisible = ref(false);

  // Функция для добавления нового комментария
  function addComment() {
    if (newCommentText.value.trim() !== '') {
    const newComment = {
      id: post.comments.length + 1,
      text: newCommentText.value,
      userName: currentUserNow.value.userName,
      avatar: currentUserNow.value.avatar,
      date: new Date().toISOString(),
    };
    post.comments.push(newComment);
    newCommentText.value = '';
    }
  }

  function submitComment() {
    if (newCommentText.value.trim() !== '') {
      addComment();
      isValidationErrorVisible.value = false;
    } else {
      isValidationErrorVisible.value = true;
    }
  }

  const author = computed(() => {
    const user = users.find(user => user.id === post.userId);
    return user ? user : {};
  });

</script>

<style>
  .heart--liked {
    fill: rgb(195, 8, 8);
  }

  .post__tags li {
  margin-right: 8px;
}
</style>
