<template>
  <header class="header">
    <div class="header__wrapper container">
      <Logo />
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
              <NuxtLink to="/" :class="{'header__page-link': true, 'header__page-link--active': isPopularPage}" title="Популярный контент">
                <span class="visually-hidden">Популярный контент</span>
              </NuxtLink>
            </li>
            <li class="header__my-page header__my-page--feed">
              <NuxtLink to="/feed" v-if="activeUser.isAuth" :class="{'header__page-link': true, 'header__page-link--active': isFeedPage}" title="Моя лента">
                <span class="visually-hidden">Моя лента</span>
              </NuxtLink>
              <NuxtLink to="/login" v-else="activeUser.isAuth" class="header__page-link" title="Моя лента">
                <span class="visually-hidden">Моя лента</span>
              </NuxtLink>
            </li>
          </ul>
          <ul class="header__user-nav">
            <li v-if="activeUser.isAuth" class="header__profile">
              <NuxtLink :to="'/profile/' + activeUser.id" class="header__profile-link">
                <div class="header__avatar-wrapper">
                  <img class="header__profile-avatar" :src="activeUser.avatar" alt="Аватар профиля">
                </div>
                <div class="header__profile-name">
                  <span>{{ activeUser.userName }}</span>
                  <svg class="header__link-arrow" width="10" height="6">
                    <use xlink:href="#icon-arrow-right-ad"></use>
                  </svg>
                </div>
              </NuxtLink>
              <div class="header__tooltip-wrapper">
                <div class="header__profile-tooltip">
                  <ul class="header__profile-nav">
                    <li class="header__profile-nav-item">
                      <NuxtLink :to="'/profile/' + activeUser.id" class="header__profile-nav-link">
                        <span class="header__profile-nav-text">
                          Мой профиль
                        </span>
                      </NuxtLink>
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
            <li v-if="activeUser.isAuth">
              <NuxtLink to="/add" class="header__post-button button button--transparent">Пост</NuxtLink>
            </li>
            <template v-else="activeUser.isAuth">
              <li class="header__authorization">
                <NuxtLink to="/login" class="header__user-button header__authorization-button button">Войти</NuxtLink>
              </li>
              <li class="header__authorization">
                <NuxtLink to="/register" class="header__user-button header__register-button button button--transparent header__user-button--active">Присоединиться</NuxtLink>
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { currentUser } from '~/mocks/users.js';

  const activeUser = ref(currentUser);
  const route = useRoute();

  const isPopularPage = computed(() => {
    return route.path === '/';
  });

  const isFeedPage = computed(() => {
    return route.path === '/feed';
  });

</script>
