<template>
  <article class="profile__post post" :class="{
    'post-text': post.type === 'text',
    'post-photo': post.type === 'photo',
    'post-video': post.type === 'video',
    'post-quote': post.type === 'quote',
    'post-link': post.type === 'link',
  }">
    <template v-if="post.type === 'photo'">
      <header class="post__header">
        <h2><NuxtLink :to="'/' + post.slug">{{ post.title }}</NuxtLink></h2>
      </header>
      <div class="post__main">
        <div class="post-photo__image-wrapper">
          <img :src="post.image" alt="Фото от пользователя" width="760" height="396">
        </div>
      </div>
    </template>
    <template v-if="post.type === 'text'">
      <header class="post__header">
        <h2><NuxtLink :to="'/' + post.slug">{{ post.title }}</NuxtLink></h2>
      </header>
      <div class="post__main">
        <p v-html="post.content"></p>
        <NuxtLink :to="'/' + post.slug" class="post-text__more-link">Читать далее</NuxtLink>
      </div>
    </template>
    <template v-if="post.type === 'quote'">
      <div class="post__main">
        <blockquote>
          <p>
            {{ post.content }}
          </p>
          <cite>{{ post.quoteAuthor }}</cite>
        </blockquote>
      </div>
    </template>
    <template v-if="post.type === 'video'">
      <header class="post__header">
        <h2><NuxtLink :to="`/${post.slug}`">{{ post.title }}</NuxtLink></h2>
      </header>
      <div class="post__main">
        <div class="post-video__block">
          <div class="post-video__preview">
            <img :src="post.image" alt="Превью к видео" width="680" height="355">
          </div>
          <NuxtLink :to="`/${post.slug}`" class="post-video__play-big button">
            <svg class="post-video__play-big-icon" width="14" height="14">
              <use xlink:href="#icon-video-play-big"></use>
            </svg>
            <span class="visually-hidden">Запустить проигрыватель</span>
          </NuxtLink>
        </div>
      </div>
    </template>
    <template v-if="post.type === 'link'">
      <header class="post__header">
        <h2><NuxtLink :to="`/${post.slug}`">{{ post.title }}</NuxtLink></h2>
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
    </template>
    <footer class="post__footer">
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
          <a class="post__indicator post__indicator--repost button" href="#" title="Репост">
            <svg class="post__indicator-icon" width="19" height="17">
              <use xlink:href="#icon-repost"></use>
            </svg>
            <span>{{ post.repostsCount }}</span>
            <span class="visually-hidden">количество репостов</span>
          </a>
        </div>
        <time class="post__time" :datetime="post.date">{{ timeAgo }} назад</time>
      </div>
      <ul class="post__tags">
        <li v-for="(tag, index) in post.tags" :key="index">
          <a :href="`#${tag}`">#{{ tag }}</a>
        </li>
      </ul>
    </footer>
    <div class="comments">
      <template v-if="mode === 'default'">
        <a class="comments__button button" href="#" @click.prevent="mode = 'show'">Показать комментарии</a>
      </template>
      <template v-if="mode === 'show' || mode === 'all'">
        <div class="comments__list-wrapper">
          <ul class="comments__list">
            <li v-for="(comment, index) in mode === 'show' ? computedComments.slice(0, 2) : computedComments" :key="index" class="comments__item user">
              <Comment :comment="comment" />
            </li>
          </ul>
          <a v-if="(mode === 'show') && (computedComments.length > 2)" class="comments__more-link" href="#" @click.prevent="mode = 'all'">
            <span>Показать все комментарии</span>
            <sup class="comments__amount"> {{ computedComments.length }}</sup>
          </a>
        </div>
      </template>
    </div>
    <form v-if="mode !== 'default'" class="comments__form form" action="#" method="post">
      <div class="comments__my-avatar">
        <img class="comments__picture" :src="activeUser.avatar" alt="Аватар пользователя">
      </div>
      <textarea class="comments__textarea form__textarea" placeholder="Ваш комментарий"></textarea>
      <label class="visually-hidden">Ваш комментарий</label>
      <button class="comments__submit button button--green" type="submit">Отправить</button>
    </form>
  </article>
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

  let domain = '';
  if (post.type === 'link') {
    const url = new URL(post.content);
    domain = url.hostname;
  }

  let mode = ref('default');
  const currentTime = ref(new Date());
  const timeAgo = computed(() => getTimeDifference(post.date, currentTime.value));
  const activeUser = ref(currentUser);

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
      userName: activeUser.value.userName,
      avatar: activeUser.value.avatar,
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
