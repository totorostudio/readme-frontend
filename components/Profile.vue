<template>
  <main class="page__main page__main--profile">
    <h1 class="visually-hidden">Профиль</h1>
    <div class="profile profile--default">
      <div class="profile__user-wrapper">
        <div class="profile__user user container">
          <div class="profile__user-info user__info">
            <div class="profile__avatar user__avatar">
              <img class="profile__picture user__picture" :src="user.avatar" alt="Аватар пользователя">
            </div>
            <div class="profile__name-wrapper user__name-wrapper">
              <span class="profile__name user__name">{{ user.userName }}</span>
              <time class="profile__user-time user__time" datetime="2014-03-20">{{ timeAgo }} на сайте</time>
            </div>
          </div>
          <div class="profile__rating user__rating">
            <p class="profile__rating-item user__rating-item user__rating-item--publications">
              <span class="user__rating-amount">556</span>
              <span class="profile__rating-text user__rating-text">публикаций</span>
            </p>
            <p class="profile__rating-item user__rating-item user__rating-item--subscribers">
              <span class="user__rating-amount">{{ user.subscribers }}</span>
              <span class="profile__rating-text user__rating-text">подписчиков</span>
            </p>
          </div>
          <div v-if="isActiveUserProfile" class="profile__user-buttons user__buttons">
            <NuxtLink to="/add" class="profile__user-button user__button user__button--writing button button--green">Опубликовать новый пост</NuxtLink>
          </div>
          <div v-else class="profile__user-buttons user__buttons">
            <button class="profile__user-button user__button user__button--subscription button button--main" type="button">Подписаться</button>
          </div>
        </div>
      </div>
      <div class="profile__tabs-wrapper tabs">
        <div class="container">
          <div class="profile__tabs filters">
            <b class="profile__tabs-caption filters__caption">Показать:</b>
            <ul class="profile__tabs-list filters__list tabs__list">
              <li class="profile__tabs-item filters__item">
                <a class="profile__tabs-link filters__button filters__button--active tabs__item tabs__item--active button">Посты</a>
              </li>
              <li class="profile__tabs-item filters__item">
                <a class="profile__tabs-link filters__button tabs__item button" href="#">Лайки</a>
              </li>
              <li class="profile__tabs-item filters__item">
                <a class="profile__tabs-link filters__button tabs__item button" href="#">Подписки</a>
              </li>
            </ul>
          </div>
          <div class="profile__tab-content">
            <section class="profile__posts tabs__content tabs__content--active">
              <h2 class="visually-hidden">Публикации</h2>
              <template v-for="post in sortedAndFilteredPosts" :key="post.id">
                <ProfilePost :post="post"/>
              </template>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { posts } from '~/mocks/posts.js';
  import { sortPosts, getTimeDifference } from '~/utils/utils.js';
  import { currentUser } from '~/mocks/users.js';

  const { user } = defineProps({
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  });

  let postType = ref('all');
  const sortingType = ref('date');
  const activeUser = ref(currentUser);
  const currentTime = ref(new Date());

  const isActiveUserProfile = activeUser.value.id === user.id;

  const timeAgo = computed(() => getTimeDifference(user.regDate, currentTime.value));

  const sortedAndFilteredPosts = computed(() => {
    let sorted = sortPosts([...posts], sortingType.value);
    return filterPosts(sorted, postType.value, user.id);
  });

</script>
