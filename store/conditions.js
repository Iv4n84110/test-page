export const state = () => ({
  conditions: [
    {
      value: "age",
      params: [
        [10, 20],
        [30, 40]
      ]
    },
    {
      value: "cardType",
      params: ["Gold", "Silver", "Platinum"]
    },
    {
      value: "cardStatus",
      params: ["frozen", "active"]
    }
  ]
});

export const mutations = {
  addCondition(state) {
    state.conditions.push({
      value: "",
      params: []
    });
  },

  removeCondition(state, condition) {
    state.conditions = state.conditions.filter(el => {
      return el !== condition;
    });
  },

  setValue(state, { condition, value }) {
    state.conditions = state.conditions.map(el => {
      if (el === condition) {
        el.value = value;
        el.params = [[]];
      }
      return el;
    });
  },

  addParam(state, condition) {
    state.conditions = state.conditions.filter(el => {
      if (el === condition) {
        el.params.push([]);
      }
      return el;
    });
  },

  setParam(state, { condition, index, value }) {
    state.conditions = state.conditions.map(el => {
      if (el === condition) {
        el.params[index] = value;
      }
      return el;
    });
  },

  setAge(state, { condition, index, col, value }) {
    state.conditions = state.conditions.map(el => {
      if (el === condition) {
        el.params[index][col] = value;
      }
      return el;
    });
  }
};

export const getters = {
  conditions: s => s.conditions
};
