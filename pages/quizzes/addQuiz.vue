<template>
  <div class="container">
    <div>
      <ul>
        <li>
          <nuxt-link
            no-prefetch
            active-class="active"
            class="link"
            to="/quizzes/addQuiz/params"
          >
            Параметры
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            no-prefetch
            active-class="active"
            class="link"
            to="/quizzes/addQuiz/questions"
          >
            Вопросы
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            no-prefetch
            active-class="active"
            class="link"
            to="/quizzes/addQuiz/logic"
          >
            Логика</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            no-prefetch
            active-class="active"
            class="link"
            to="/quizzes/addQuiz/conditions"
          >
            Условия
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            no-prefetch
            active-class="active"
            class="link"
            exact
            to="/quizzes/addQuiz/"
          >
            Респонденты</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div class="content">
      <h1 class="title">Добавить опрос</h1>
      <nuxt-child />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 25px 0;
}

.link {
  text-decoration: none;
  color: forestgreen;
  padding: 10px 20px;
}

.active {
  font-weight: bold;
  color: black;
  border-bottom: forestgreen 3px solid;
}

.content {
  border-top: #a5db30 1px solid;
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.08);
}

.title {
  margin: 0;
  color: #aaaaaa;
  font-size: 18px;
  padding: 28px 28px 14px;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

li {
  list-style-type: none;
  padding-bottom: 13px;
}
</style>
