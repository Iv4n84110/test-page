<template>
  <div class="param">
    <div v-if="condition.value === 'age'" class="row">
      <div class="column-1">
        <div>
          <span v-if="index" class="or or-age">или</span>
          <span>Диапазон {{ index + 1 }}</span>
        </div>
      </div>
      <div class="column-2">
        <span>от </span>
        <input
          type="number"
          :value="param[0]"
          @change="setAge(condition, index, 0, $event)"
          class="age-input"
        />
        <span>до </span>
        <input
          type="number"
          :value="param[1]"
          @change="setAge(condition, index, 1, $event)"
          class="age-input"
        />
      </div>
    </div>

    <div v-if="condition.value === 'cardType'" class="row">
      <div class="column-1">
        <div>
          <span v-if="index > 0" class="or or-cardType">или</span>
          <span>Тип {{ index + 1 }}</span>
        </div>
      </div>
      <div class="column-2">
        <select :value="param" @change="setParam(condition, index, $event)">
          <option disabled value="">Выберите один из вариантов</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Platinum">Platinum</option>
        </select>
      </div>
    </div>

    <div v-if="condition.value === 'cardStatus'" class="row">
      <div class="column-1">
        <div>
          <span v-if="index > 0" class="or or-cardStatus">или</span>
          <span>Статус {{ index + 1 }}</span>
        </div>
      </div>
      <div class="column-2">
        <select :value="param" @change="setParam(condition, index, $event)">
          <option disabled value="">Выберите один из вариантов</option>
          <option value="active">Активна</option>
          <option value="frozen">Заморожена</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["condition", "index", "param"],

  methods: {
    setParam(condition, index, e) {
      this.$store.commit("conditions/setParam", {
        condition,
        index,
        value: e.target.value,
      });
    },

    setAge(condition, index, col, e) {
      this.$store.commit("conditions/setAge", {
        condition,
        index,
        col,
        value: +e.target.value,
      });
    },
  },
};
</script>

<style scoped>
.param {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  margin-bottom: 16px;
  align-items: center;
  justify-items: center;
}

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.column-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 30%;
}

.column-2 {
  flex-basis: 70%;
}

.age-input {
  width: 50px;
}

.or {
  padding: 12px 12px;
  border-radius: 5px;
}

.or-age {
  background: #f2d9b3;
}

.or-cardType {
 background: #aacafa;
}

.or-cardStatus {
  background: #70c289;
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
</style>