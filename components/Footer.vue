<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__container container">
        <div class="footer__site-info">
          <div class="footer__site-nav">
            <ul class="footer__info-pages">
              <li class="footer__info-page" v-for="(page, index) in footerLinks" :key="index">
                <NuxtLink :to="page.url" class="footer__page-link">{{ page.text }}</NuxtLink>
              </li>
            </ul>
          </div>
          <p class="footer__license">
            {{ license }}
          </p>
        </div>
        <div class="footer__my-info">
          <ul class="footer__my-pages">
            <li class="footer__my-page footer__my-page--feed">
              <NuxtLink to="/feed" class="footer__page-link">Моя лента</NuxtLink>
            </li>
            <li class="footer__my-page footer__my-page--popular">
              <NuxtLink to="/" class="footer__page-link">Популярный контент</NuxtLink>
            </li>
          </ul>
          <div v-html="copyright" class="footer__copyright">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const footerLinks = [
      { url: '/about', text: 'О проекте' },
      { url: '/advertising', text: 'Реклама' },
      { url: '/developers', text: 'О разработчиках' },
      { url: '/job', text: 'Работа в Readme' },
      { url: '/user-agreement', text: 'Пользовательское соглашение' },
      { url: '/privacy-policy', text: 'Политика конфиденциальности' }
    ]

  const license = 'При использовании любых материалов с сайта обязательно указание Readme в качестве источника. Все авторские и исключительные права в рамках проекта защищены в соответствии с положениями 4 части Гражданского Кодекса Российской Федерации.';

  const copyright = `<a class="footer__copyright-link" href="https://htmlacademy.ru">
      <span>Разработано HTML Academy</span>
      <svg class="footer__copyright-logo" width="27" height="34">
      <use xlink:href="#icon-htmlacademy"></use>
      </svg>
    </a>`
</script>
