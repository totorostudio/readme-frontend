<template>
  <header class="header">
    <div class="header__wrapper container">
      <div class="header__logo-wrapper">
        <nuxt-link to="/">
          <img class="header__logo" src="/img/logo.svg" alt="Логотип readme" width="128" height="24">
        </nuxt-link>
        <p class="header__topic">
          micro blogging
        </p>
      </div>
      <form class="header__search-form form" action="#" method="get">
        <div class="header__search">
          <label class="visually-hidden">Поиск</label>
          <input class="header__search-input form__input" type="search">
          <button class="header__search-button button" type="submit">
            <svg class="header__search-icon" width="18" height="18">
              <use xlink:href="#icon-search"></use>
            </svg>
            <span class="visually-hidden">Начать поиск</span>
          </button>
        </div>
      </form>
      <div class="header__nav-wrapper">
        <nav class="header__nav">
          <ul class="header__my-nav">
            <li class="header__my-page header__my-page--popular">
              <nuxt-link to="/" :class="{'header__page-link': true, 'header__page-link--active': isPopularPage}" title="Популярный контент">
                <span class="visually-hidden">Популярный контент</span>
              </nuxt-link>
            </li>
            <li class="header__my-page header__my-page--feed">
              <a v-if="currentUserNow.isAuth" class="header__page-link" href="/feed" title="Моя лента">
                <span class="visually-hidden">Моя лента</span>
              </a>
              <a v-else="currentUserNow.isAuth" class="header__page-link" href="/register" title="Моя лента">
                <span class="visually-hidden">Моя лента</span>
              </a>
            </li>
          </ul>
          <ul class="header__user-nav">
            <li v-if="currentUserNow.isAuth" class="header__profile">
              <a class="header__profile-link" href="#">
                <div class="header__avatar-wrapper">
                  <img class="header__profile-avatar" :src="currentUserNow.avatar" alt="Аватар профиля">
                </div>
                <div class="header__profile-name">
                  <span>{{ currentUserNow.userName }}</span>
                  <svg class="header__link-arrow" width="10" height="6">
                    <use xlink:href="#icon-arrow-right-ad"></use>
                  </svg>
                </div>
              </a>
              <div class="header__tooltip-wrapper">
                <div class="header__profile-tooltip">
                  <ul class="header__profile-nav">
                    <li class="header__profile-nav-item">
                      <a class="header__profile-nav-link" href="#">
                            <span class="header__profile-nav-text">
                              Мой профиль
                            </span>
                      </a>
                    </li>
                    <li class="header__profile-nav-item">
                      <a class="header__profile-nav-link" href="#">
                            <span class="header__profile-nav-text">
                              Сообщения
                              <i class="header__profile-indicator">2</i>
                            </span>
                      </a>
                    </li>
                    <li class="header__profile-nav-item">
                      <a class="header__profile-nav-link" href="#">
                            <span class="header__profile-nav-text">
                              Выход
                            </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li v-if="currentUserNow.isAuth">
              <a class="header__post-button button button--transparent" href="/add">Пост</a>
            </li>
            <li v-else="currentUserNow.isAuth">
              <!--<a class="header__post-button button button--transparent" href="/register">Зарегистрироваться</a>-->
              <a class="header__user-button header__register-button button button--transparent" href="/register">Присоединиться</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { currentUser } from '~/mocks/users.js';

  const currentUserNow = ref(currentUser);
  const route = useRoute();

  const isPopularPage = computed(() => {
    return route.path === '/';
  });
</script>
