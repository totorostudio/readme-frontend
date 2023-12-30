<template>
<div class="post-details__user user">
    <div class="post-details__user-info user__info">
      <div class="post-details__avatar user__avatar">
        <a class="post-details__avatar-link user__avatar-link" href="#">
          <img class="post-details__picture user__picture" :src="author.avatar" alt="Аватар пользователя">
        </a>
      </div>
      <div class="post-details__name-wrapper user__name-wrapper">
        <a class="post-details__name user__name" href="#">
          <span>{{ author.userName }}</span>
        </a>
        <time class="post-details__time user__time" datetime="2014-03-20">{{ getTimeDifference(author.regDate) }} на сайте</time>
      </div>
    </div>
    <div class="post-details__rating user__rating">
      <p class="post-details__rating-item user__rating-item user__rating-item--subscribers">
        <span class="post-details__rating-amount user__rating-amount">{{ author.subscribers }}</span>
        <span class="post-details__rating-text user__rating-text">подписчиков</span>
      </p>
      <p class="post-details__rating-item user__rating-item user__rating-item--publications">
        <span class="post-details__rating-amount user__rating-amount">{{ postsCount }}</span>
        <span class="post-details__rating-text user__rating-text">публикаций</span>
      </p>
    </div>
    <div class="post-details__user-buttons user__buttons">
      <button class="user__button user__button--subscription button button--main" type="button">Подписаться</button>
    </div>
  </div>
  </template>

  <script setup>
    import { posts } from '~/mocks/posts.js';

    const { author } = defineProps({
      author: {
        type: Object,
        required: true,
        default: () => ({})
      }
    });

    const postsCount = computed(() =>
      posts.reduce((acc, post) => post.userId === author.id ? acc + 1 : acc, 0)
    );
  </script>
