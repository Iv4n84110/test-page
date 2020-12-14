<template>
  <nav class="navbar">
    <nuxt-link no-prefetch to="/" class="logo" />
    <div class="links-wrapper">
      <ul>
        <li>
          <nuxt-link
            no-prefetch
            active-class="active"
            class="link quizzes"
            to="/quizzes"
          >
            <span>Опросы</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link no-prefetch active-class="active" class="link users" to="/users"
            ><span>Пользователи</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            no-prefetch
            active-class="active"
            class="link black-lists"
            to="/blackLists"
          >
            <span>Черные списки</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            no-prefetch
            active-class="active"
            class="link call-center"
            to="/callCenter"
            ><span>Колл-центр</span></nuxt-link
          >
        </li>
      </ul>
    </div>

    <div class="question">?</div>
  </nav>
</template>

<style scoped>
.navbar {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid #ccc 1px;
  padding: 20px 10px 30px;
  max-height: 1000px;
}
.links-wrapper {
  margin-top: 40px;
  height: 100%;
  margin-bottom: 40px;
}
.logo {
  display: block;
  background-color: red;
  min-width: 50px;
  min-height: 50px;
  border-radius: 25px;
}

.link {
  position: relative;
  border: transparent 2px solid;
  display: block;
  text-decoration: none;
  color: #333;
  border-radius: 5px;
  height: 110px;
  width: 130px;
  box-sizing: border-box;
}

.link:hover {
  border: #a5db30 2px solid;
}

.link:hover > span {
  color: #a5db30;
}

.active {
  background-color: #f5f5f5;
  font-weight: bold;
}

.question {
  position: relative;
  text-align: center;
  border: 2px solid #000;
  border-radius: 50px;
  min-width: 25px;
  min-height: 25px;
  padding: 10px;
  color: forestgreen;
  font-size: 25px;
}

.link::before {
  top: 15px;
  content: "";
  position: absolute;
  background-size: 50px 50px;
  width: 50px;
  height: 50px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0);
}

.quizzes::before {
  background-image: url("~assets/file.svg");
}

.quizzes:hover::before {
  background-image: url("~assets/file-active.svg");
}

.users::before {
  background-image: url("~assets/users.svg");
}

.users:hover::before {
  background-image: url("~assets/users-active.svg");
}

.black-lists::before {
  background-image: url("~assets/user-minus.svg");
}

.black-lists:hover::before {
  background-image: url("~assets/user-minus-active.svg");
}

.call-center::before {
  background-image: url("~assets/phone.svg");
}

.call-center:hover::before {
  background-image: url("~assets/phone-active.svg");
}

span {
  box-sizing: border-box;
  padding: 7px;
  position: absolute;
  width: 100%;

  color: #000;
  font-size: 15px;
  text-align: center;

  top: 75%;
  transform: translate(0, -50%);
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
  margin: 20px 0;
}
</style>