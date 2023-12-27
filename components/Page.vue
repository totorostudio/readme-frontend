<template>
  <main class="page__main page__main--publication">
    <div class="container">
      <h1 class="page__title page__title--publication">{{ page.title }}</h1>
      <article class="post post-text">
        <section class="post-details">
          <h2 class="visually-hidden">Публикация</h2>
          <div class="post-details__wrapper post-photo">
            <div class="post-details__main-block post post--details">
              <div class="post__main">
                <p v-html="page.text"></p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  </main>
</template>

  <script setup>
    const { page } = defineProps({
      page: {
        type: Object,
        required: true,
        default: () => ({})
      }
    });
    console.log(page);
  </script>

  <style>
    .heart--liked {
      fill: rgb(195, 8, 8);
    }

    .post__tags li {
    margin-right: 8px;
  }
  </style>
