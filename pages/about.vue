<template>
  <Page v-if="about" :page="about" />
</template>

<script setup>
  const about = {
    title: 'О проекте',
    text: `<p>Readme отличается от стандартных платформ благодаря своей уникальной особенности: разнообразие форматов публикаций и возможность подписки на обновления других пользователей.</p>
    <p>Наши пользователи могут создавать разнообразные типы контента - от текстовых статей до изображений, видео или аудиозаписей. Это позволяет каждому выразить свои мысли и идеи в формате, который им наиболее удобен. Гибкость форматов стимулирует креативность и позволяет обогатить публикации разнообразием контента.</p>
    <p>Однако наш проект не только о разнообразии контента, но и о взаимодействии между пользователями. Подписка на других участников позволяет создать персонализированную ленту обновлений. Это значит, что пользователи могут выбирать, на чьи публикации они хотят подписаться, чтобы получать самую интересную и актуальную информацию для себя.</p>
    <p>Подписка влияет на контентную ленту пользователя, делая её более индивидуализированной и релевантной. Это отличное решение для тех, кто хочет следить за конкретными авторами или темами, не перегружая ленту ненужной информацией.</p>
    <p>Наш проект стимулирует творчество, обмен идеями и общение между пользователями, обеспечивая персонализированный и разнообразный контент.</p>
    `,
  }
</script>
