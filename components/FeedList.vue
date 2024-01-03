<template>
  <main class="page__main page__main--feed">
    <div class="container">
      <h1 class="page__title page__title--feed">Моя лента</h1>
    </div>
    <div class="page__main-wrapper container">
      <section class="feed">
        <h2 class="visually-hidden">Лента</h2>
        <div class="feed__main-wrapper">
          <div class="feed__wrapper">
            <template v-for="post in sortedAndFilteredPosts" :key="post.id">
              <FeedPost :post="post" />
            </template>
          </div>
        </div>
        <ul class="feed__filters filters">
          <li class="feed__filters-item filters__item">
            <a class="filters__button" :class="{'filters__button--active': postType === 'all'}" href="#" @click.prevent="changePostType('all')">
              <span>Все</span>
            </a>
          </li>
          <li class="feed__filters-item filters__item">
            <a class="filters__button filters__button--photo button" :class="{'filters__button--active': postType === 'photo'}" href="#" @click.prevent="changePostType('photo')">
              <span class="visually-hidden">Фото</span>
              <svg class="filters__icon" width="22" height="18">
                <use xlink:href="#icon-filter-photo"></use>
              </svg>
            </a>
          </li>
          <li class="feed__filters-item filters__item">
            <a class="filters__button filters__button--video button" :class="{'filters__button--active': postType === 'video'}" href="#" @click.prevent="changePostType('video')">
              <span class="visually-hidden">Видео</span>
              <svg class="filters__icon" width="24" height="16">
                <use xlink:href="#icon-filter-video"></use>
              </svg>
            </a>
          </li>
          <li class="feed__filters-item filters__item">
            <a class="filters__button filters__button--text button" :class="{'filters__button--active': postType === 'text'}" href="#" @click.prevent="changePostType('text')">
              <span class="visually-hidden">Текст</span>
              <svg class="filters__icon" width="20" height="21">
                <use xlink:href="#icon-filter-text"></use>
              </svg>
            </a>
          </li>
          <li class="feed__filters-item filters__item">
            <a class="filters__button filters__button--quote button" :class="{'filters__button--active': postType === 'quote'}" href="#" @click.prevent="changePostType('quote')">
              <span class="visually-hidden">Цитата</span>
              <svg class="filters__icon" width="21" height="20">
                <use xlink:href="#icon-filter-quote"></use>
              </svg>
            </a>
          </li>
          <li class="feed__filters-item filters__item">
            <a class="filters__button filters__button--link button" :class="{'filters__button--active': postType === 'link'}" href="#" @click.prevent="changePostType('link')">
              <span class="visually-hidden">Ссылка</span>
              <svg class="filters__icon" width="21" height="18">
                <use xlink:href="#icon-filter-link"></use>
              </svg>
            </a>
          </li>
        </ul>
      </section>
      <aside class="promo">
        <AsideCard :post="promoPost" />
      </aside>
    </div>
  </main>
</template>

<script setup>
  import { posts } from '~/mocks/posts.js';
  import { sortPosts } from '~/utils/utils.js';

  let postType = ref('all');
  const sortingType = ref('date');
  const promoPost = getRandomPhotoPost(posts);

  const changePostType = (type) => {
    postType.value = type;
  };

  const sortedAndFilteredPosts = computed(() => {
    let sorted = sortPosts([...posts], sortingType.value);
    return filterPosts(sorted, postType.value);
  });

</script>
