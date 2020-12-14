<template>
  <div class="header">
    <div class="row">
      <div class="search">
        <input
          id="search"
          type="text"
          class="search-field"
          placeholder="Поиск по системе"
        />
        <label for="search" class="search-icon" />
      </div>
      <div class="user">
        <div class="user-avatar"></div>
        <div class="user-info">
          <p class="user-name">Alexander C.</p>
          <p class="user-role">Администратор</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="directories">
        <nuxt-link to="/" class="home" active-class="home-active" exact>
        </nuxt-link>
        <ul>
          <li v-for="(dir, index) in this.parse(this.$nuxt.$route.name)" :key="index">
            <nuxt-link
              class="directory"
              active-class="directory-active"
              :to="dir.path"
              :exact="dir.path !== '/quizzes/addQuiz'"
              >{{ dir.name }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    parse(str) {
      let splited = str.split("-");
      let index = splited.indexOf("addQuiz");
      let sliced = index > 0 ? splited.slice(0, index + 1) : splited;
      let prevPath;
      let maped = sliced.map((el, i) => {
        prevPath = i === 0 ? "/" + el : prevPath + "/" + el;
        switch (el) {
          case "quizzes":
            return { name: "Опросы", path: prevPath };
            break;
          case "users":
            return { name: "Пользователи", path: prevPath };
            break;
          case "blackLists":
            return { name: "Черные списки", path: prevPath };
            break;
          case "callCenter":
            return { name: "Колл-центр", path: prevPath };
            break;
          case "addQuiz":
            return { name: "Добавить опрос", path: prevPath };
            break;
          default:
            return null;
        }
      });
      let filtered = maped.filter((el) => el !== null);
      return filtered;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.user {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: fuchsia;
}

.user-info {
  min-width: 100px;
  padding: 7px;
  display: flex;
  flex-direction: column;
}
.user-name {
  font-weight: bold;
  font-size: 16px;
  margin: 0px;
}

.user-role {
  margin: 0px;
  font-size: 12px;
}

.search {
  width: 100%;
  margin-right: 200px;
  display: inline-flex;
  align-items: center;
  border: #eee solid 2px;
  border-radius: 8px;
  cursor: text;
}

.search-icon {
  background-image: url("~assets/search.svg");
  background-size: 30px 30px;
  padding-right: 12px;
  width: 30px;
  height: 100%;
  cursor: text;
  background-repeat: no-repeat;
  background-position: center;
}

.directories {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin-top: 15px;
}

.home {
  background-image: url("~assets/home.svg");
  background-size: 20px 20px;
  padding-right: 12px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
}

.home:hover,
.home-active {
  filter: invert(0.5);
}

.directory {
  color: black;
  text-decoration: none;
}

.directory:hover {
  text-decoration: underline;
}
.directory:hover,
.directory-active {
  color: #ccc;
}

input {
  box-sizing: border-box;
  padding: 5px 14px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}
ul {
  margin: 0;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
}

li {
  list-style-type: none;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 10px;
}

li::before {
  position: absolute;
  top: 35%;

  left: -14px;
  line-height: 100%;
  background-image: url("~assets/arrow.svg");
  background-size: 12px 12px;
  transform: rotate(-90deg);
  width: 12px;
  height: 12px;
  content: "";
}
</style>