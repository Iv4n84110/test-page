<template>
  <section>
    <h1>Опросы</h1>

    <ul>
      <li>
        <nuxt-link no-prefetch active-class="active"  to="/quizzes" >Список опросов</nuxt-link>
      </li>
      <li> <nuxt-link no-prefetch active-class="active"  to="/quizzes/addQuiz" exact>Добавить опрос</nuxt-link></li>
    </ul>
  </section>
</template>