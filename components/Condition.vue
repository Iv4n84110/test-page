<template>
  <div class="condition" :class="condition.value || 'default'">
    <div class="row">
      <div class="column-1">
        <span class="header" :class="'header-' + condition.value"
          >Условие {{ index + 1 }}</span
        >
      </div>
      <div class="column-2">
        <select
          :value="condition.value"
          @change="setValue(condition, $event)"
          class="condition-select"
        >
          <option disabled value="">Выберите один из вариантов</option>
          <option value="age">Возраст респондента</option>
          <option value="cardType">Тип карты лояльности</option>
          <option value="cardStatus">Статус карты лояльности</option>
        </select>
      </div>
    </div>
    <div class="params">
      <Param
        v-for="(param, i) in condition.params"
        :key="i"
        v-bind:condition="condition"
        v-bind:index="i"
        v-bind:param="param"
      />
    </div>

    <div class="row">
      <div class="column-1" />
      <div class="column-2">
        <div class="buttons-wrapper" :class="condition.value ? '' : 'flex-end'">
          <button
            v-if="condition.value"
            @click="addParam(condition)"
            class="add"
          >
            Добавить {{ translete(condition.value) }}
          </button>
          <button @click="removeCondition(condition)" class="delete">
            Удалить условие
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["condition", "index"],

  methods: {
    translete(type) {
      switch (type) {
        case "age":
          return "диапазон";
          break;
        case "cardType":
          return "тип";
          break;
        case "cardStatus":
          return "статус";
          break;
      }
    },
    ...mapMutations({
      removeCondition: "conditions/removeCondition",
      addParam: "conditions/addParam",
    }),
    setValue(condition, e) {
      this.$store.commit("conditions/setValue", {
        condition,
        value: e.target.value,
      });
    },
  },
};
</script>

<style scoped>
.condition {
  padding: 20px 28px 14px;
  border-bottom: solid #ccc 1px;
}

.row {
  display: flex;
  flex-direction: row;
}

.column-1 {
  flex-basis: 30%;
}

.column-2 {
  flex-basis: 70%;
}

.condition-select {
  width: 100%;
}

.header {
  font-weight: bold;
  font-size: 18px;
}

.params {
  margin: 30px 0;
}

.age {
  background-color: #fcfae8d5;
}

.header-age {
  color: #7a4900fe;
}

.header-cardType {
  color: #3041db;
}

.header-cardStatus {
  color: #199125;
}

.cardType {
  background-color: #e8f0fcd5;
}

.cardStatus {
  background-color: #e8fceed5;
}

.default {
  background-color: #f5f5f5d5;
}

.buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.add {
  color: #a5db30;
}

.add::before {
  background-image: url("~assets/plus.svg");
  background-size: 12px 12px;
  width: 12px;
  height: 12px;
  top: 13px;
  left: 10px;
}

.delete {
  color: #db3044;
}

.delete::before {
  background-image: url("~assets/bin.svg");
  background-size: 18px 18px;
  width: 18px;
  height: 18px;
  top: 9px;
  left: 8px;
}

.flex-end {
  justify-content: flex-end;
}
input,
select {
  padding: 8px 10px;
  outline: none;
  display: inline-flex;
  border: #eee solid 2px;
  border-radius: 8px;
  cursor: text;
}

button {
  padding: 10px;
  padding-left: 28px;
  background: #fff;
  border-radius: 8px;
  border: 2px solid;
  outline: none;
  cursor: pointer;
  position: relative;
}

button::before {
  
  content: "";
  position: absolute;
}
</style>