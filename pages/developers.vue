<template>
  <Page v-if="developers" :page="developers" />
</template>

<script setup>
  const developers = {
    title: 'О разработчиках',
    text: `<p>Проект <strong>Readme</strong> построен на современном и мощном стеке технологий:</p>
      <ul>
        <li><strong>Nuxt.js:</strong> Мы используем Nuxt.js 3, основанный на фреймворке Vue.js 3, для создания мощных и быстрых веб-интерфейсов, обеспечивая при этом высокую производительность и удобство использования.</li>
        <li><strong>Nest.js:</strong> Наш back-end построен на фреймворке Nest.js, который предоставляет эффективные инструменты для создания масштабируемых и модульных приложений на базе Node.js. Этот фреймворк позволяет разработчикам использовать преимущества TypeScript, обеспечивая типизацию и улучшенную читаемость кода.</li>
        <li><strong>NX:</strong> Мы используем микросервисную архитектуру NX для создания и управления нашими сервисами, обеспечивая гибкость, масштабируемость и легкость развертывания новых функций.</li>
        <li><strong>MongoDB и Postgres:</strong> Мы используем MongoDB для хранения гибких и расширяемых данных, а также Postgres для структурированных данных и сложных запросов.</li>
      </ul>
      <p>Этот технологический стек и микросервисная архитектура NX обеспечивают нам надежную основу для разработки и поддержки нашего сервиса, позволяя нам быстро внедрять новые функции и поддерживать высокий уровень производительности.</p>
      <p><strong>Readme</strong> делает возможным обмен идеями и творческим контентом для нашей широкой аудитории. Будущее проекта Readme связано с нашим постоянным стремлением к совершенству и инновациям в мире веб-разработки.</p>
      `,
  }
</script>
