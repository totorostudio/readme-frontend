<template>
  <article class="feed__post post" :class="{
    'post-text': post.type === 'text',
    'post-photo': post.type === 'photo',
    'post-video': post.type === 'video',
    'post-quote': post.type === 'quote',
    'post-link': post.type === 'link',
  }">
    <header class="post__header post__author">
      <NuxtLink :to="'/profile/' + author.id" class="post__author-link" title="Автор">
        <div class="post__avatar-wrapper">
          <img class="post__author-avatar" :src="author.avatar" alt="Аватар пользователя" width="60" height="60">
        </div>
        <div class="post__info">
          <b class="post__author-name">{{ author.userName }}</b>
          <span class="post__time">{{ timeAgo }} назад</span>
        </div>
      </NuxtLink>
    </header>
    <div class="post__main">
      <template v-if="post.type === 'photo'">
        <h2><a href="#">{{ post.title }}</a></h2>
        <div class="post-photo__image-wrapper">
          <img :src="post.image" alt="Фото от пользователя" width="760" height="396">
        </div>
      </template>
      <template v-if="post.type === 'text'">
        <h2><NuxtLink :to="'/' + post.slug">{{ post.title }}</NuxtLink></h2>
        <p v-html="post.content"></p>
        <NuxtLink :to="'/' + post.slug" class="post-text__more-link">Читать далее</NuxtLink>
      </template>
      <template v-if="post.type === 'link'">
        <div class="post-link__wrapper">
          <a class="post-link__external" :href="post.content" title="Перейти по ссылке">
            <div class="post-link__icon-wrapper">
              <img :src="`https://www.google.com/s2/favicons?domain=${domain}`" alt="Иконка">
            </div>
            <div class="post-link__info">
              <h3>{{ post.description }}</h3>
              <span>{{ domain }}</span>
            </div>
            <svg class="post-link__arrow" width="11" height="16">
              <use xlink:href="#icon-arrow-right-ad"></use>
            </svg>
          </a>
        </div>
      </template>
      <template v-if="post.type === 'video'">
        <div class="post-video__block">
          <h2><NuxtLink :to="'/' + post.slug">{{ post.title }}</NuxtLink></h2>
          <div class="post-video__preview">
            <img :src="post.image" alt="Превью к видео" width="760" height="396">
          </div>
          <div class="post-video__control">
            <button class="post-video__play post-video__play--paused button button--video" type="button"><span class="visually-hidden">Запустить видео</span></button>
            <div class="post-video__scale-wrapper">
              <div class="post-video__scale">
                <div class="post-video__bar">
                  <div class="post-video__toggle"></div>
                </div>
              </div>
            </div>
            <button class="post-video__fullscreen post-video__fullscreen--inactive button button--video" type="button"><span class="visually-hidden">Полноэкранный режим</span></button>
          </div>
          <NuxtLink :to="`/${post.slug}`" class="post-video__play-big button">
            <svg class="post-video__play-big-icon" width="27" height="28">
              <use xlink:href="#icon-video-play-big"></use>
            </svg>
            <span class="visually-hidden">Запустить проигрыватель</span>
          </NuxtLink>
        </div>
      </template>
      <template v-if="post.type === 'quote'">
        <blockquote>
          <p>{{ post.content }}</p>
          <cite>{{ post.quoteAuthor }}</cite>
        </blockquote>
      </template>
    </div>
    <footer class="post__footer post__indicators">
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
        <NuxtLink :to="`/${post.slug}#comments_list`" class="post__indicator post__indicator--comments button" href="#" title="Комментарии">
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
    </footer>
  </article>
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

  let domain = '';
  if (post.type === 'link') {
    const url = new URL(post.content);
    domain = url.hostname;
  }
  const currentTime = ref(new Date());
  const timeAgo = computed(() => getTimeDifference(post.date, currentTime.value));

  const author = computed(() => {
    const user = users.find(user => user.id === post.userId);
    return user ? user : {};
  });

</script>
