<template>
  <section class="page__main page__main--popular">
    <div class="container">
      <h1 class="page__title page__title--popular">{{ title }}</h1>
    </div>
    <div class="popular container">
      <div class="popular__filters-wrapper">
        <div class="popular__sorting sorting">
          <b class="popular__sorting-caption sorting__caption">Сортировка:</b>
          <ul class="popular__sorting-list sorting__list">
            <li class="sorting__item sorting__item--popular">
              <a :class="['sorting__link', {'sorting__link--active': sortingType === 'popular'}]" href="#" @click="changeSorting('popular')">
                <span>Популярность</span>
                <svg class="sorting__icon" width="10" height="12">
                  <use xlink:href="#icon-sort"></use>
                </svg>
              </a>
            </li>
            <li class="sorting__item">
              <a :class="['sorting__link', {'sorting__link--active': sortingType === 'likes'}]" href="#" @click="changeSorting('likes')">
                <span>Лайки</span>
                <svg class="sorting__icon" width="10" height="12">
                  <use xlink:href="#icon-sort"></use>
                </svg>
              </a>
            </li>
            <li class="sorting__item">
              <a :class="['sorting__link', {'sorting__link--active': sortingType === 'date'}]" href="#" @click="changeSorting('date')">
                <span>Дата</span>
                <svg class="sorting__icon" width="10" height="12">
                  <use xlink:href="#icon-sort"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="popular__filters filters">
          <b class="popular__filters-caption filters__caption">Тип контента:</b>
          <ul class="popular__filters-list filters__list">
            <li class="popular__filters-item popular__filters-item--all filters__item filters__item--all">
              <a class="filters__button filters__button--ellipse filters__button--all" :class="{'filters__button--active': postType === 'all'}" href="#" @click.prevent="changePostType('all')">
                <span>Все</span>
              </a>
            </li>
            <li class="popular__filters-item filters__item">
              <a class="filters__button filters__button--photo button" :class="{'filters__button--active': postType === 'photo'}" href="#" @click.prevent="changePostType('photo')">
                <span class="visually-hidden">Фото</span>
                <svg class="filters__icon" width="22" height="18">
                  <use xlink:href="#icon-filter-photo"></use>
                </svg>
              </a>
            </li>
            <li class="popular__filters-item filters__item">
              <a class="filters__button filters__button--video button" :class="{'filters__button--active': postType === 'video'}" href="#" @click.prevent="changePostType('video')">
                <span class="visually-hidden">Видео</span>
                <svg class="filters__icon" width="24" height="16">
                  <use xlink:href="#icon-filter-video"></use>
                </svg>
              </a>
            </li>
            <li class="popular__filters-item filters__item">
              <a class="filters__button filters__button--text button" :class="{'filters__button--active': postType === 'text'}" href="#" @click.prevent="changePostType('text')">
                <span class="visually-hidden">Текст</span>
                <svg class="filters__icon" width="20" height="21">
                  <use xlink:href="#icon-filter-text"></use>
                </svg>
              </a>
            </li>
            <li class="popular__filters-item filters__item">
              <a class="filters__button filters__button--quote button" :class="{'filters__button--active': postType === 'quote'}" href="#" @click.prevent="changePostType('quote')">
                <span class="visually-hidden">Цитата</span>
                <svg class="filters__icon" width="21" height="20">
                  <use xlink:href="#icon-filter-quote"></use>
                </svg>
              </a>
            </li>
            <li class="popular__filters-item filters__item">
              <a class="filters__button filters__button--link button" :class="{'filters__button--active': postType === 'link'}" href="#" @click.prevent="changePostType('link')">
                <span class="visually-hidden">Ссылка</span>
                <svg class="filters__icon" width="21" height="18">
                  <use xlink:href="#icon-filter-link"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="popular__posts">
        <template v-for="post in sortedAndFilteredPosts" :key="post.id">
          <CardLink v-if="post.type === 'link'" :post="post" />
          <CardText v-else-if="post.type === 'text'" :post="post" />
          <CardVideo v-else-if="post.type === 'video'" :post="post" />
          <CardPhoto v-else-if="post.type === 'photo'" :post="post" />
          <CardQuote v-else-if="post.type === 'quote'" :post="post" />
        </template>
      </div>
      <div class="popular__page-links">
        <a class="popular__page-link popular__page-link--prev button button--gray" href="#">Предыдущая страница</a>
        <a class="popular__page-link popular__page-link--next button button--gray" href="#">Следующая страница</a>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { posts } from '~/mocks/posts.js';
  import { sortPosts, filterPosts } from '~/utils/utils.js';

  let title = ref('Популярное');

  let sortingType = ref('popular');
  let postType = ref('all');

  const changePostType = (type) => {
    postType.value = type;
  };

  const changeSorting = (type) => {
    sortingType.value = type;
    if (sortingType.value === 'likes') {
      title.value = 'Любимое';
    } else if (sortingType.value === 'date') {
      title.value = 'Свежее';
    } else {
      title.value = 'Популярное';
    }
  };

  const sortedAndFilteredPosts = computed(() => {
    let sorted = sortPosts([...posts], sortingType.value);
    return filterPosts(sorted, postType.value);
  });

</script>
