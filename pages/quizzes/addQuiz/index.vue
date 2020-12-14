<template>
  <div class="respondents">
    <div class="conditions">
      <div
        class="condition-wrapper"
        v-for="(condition, index) in conditions"
        :key="index"
      >
        <div
          v-if="index > 0 && condition.value"
          class="and"
          :class="'and-' + condition.value"
        >
          И
        </div>
        <Condition v-bind:condition="condition" v-bind:index="index" />
      </div>
    </div>
    <div class="add">
      <button @click="addCondition" class="add-button">
        <span class="plus">+</span>
        Нажмите, чтобы добавить условие выборки Все условия связываютс я
        междусобой логическим "И"
      </button>
    </div>
    <div class="buttons">
      <button class="test">Протестировать опрос</button>
      <button class="next">Далее</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    conditions() {
      return this.$store.getters["conditions/conditions"];
    },
  },
  methods: {
    addCondition() {
      this.$store.commit("conditions/addCondition");
      console.log(this.$store.getters["conditions/conditions"]);
    },
  },
};
</script>

<style scoped>
.add {
  padding: 24px;
}

.add-button {
  outline: none;
  width: 100%;
  height: 120px;
  background-color: #fff;
  border: #eee solid 2px;
  border-radius: 8px;
  cursor: pointer;
  color: forestgreen;
  white-space: pre-line;
}

.plus {
  font-size: 50px;
  font-weight: lighter;
}

.condition-wrapper {
  position: relative;
}

.and {
  position: absolute;
  top: -28px;
  left: 32px;

  padding: 12px 20px;
  border-radius: 5px;
}

.and-age {
  background: #f2d9b3;
}

.and-cardType {
  background: #aacafa;
}

.and-cardStatus {
  background: #70c289;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  background: #f5f7fa;
}

.test {
  background: #fff;
  color: forestgreen;
  box-shadow: 0 3px 0 #ebedf2;
}

.next {
  position: relative;
  padding-right: 35px;
  color: #fff;
  background: forestgreen;
}

.next::after {
  top: 14px;
  right: 15px;
  position: absolute;
  content: "";
  background-image: url("~assets/arrow-white.svg");
  background-size: 15px 15px;
  height: 15px;
  width: 15px;
  transform: rotate(-90deg);
}

button {
  outline: none;
  padding: 12px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>