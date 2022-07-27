export default {
  option: {
    state: {
      labelWidth: 0,
      selectIndex: 0,
    },
    getters: {},
    actions: {
      getVipList({ commit }) {},
    },
    mutations: {
      UPDATE_LABEL_WIDTH(state, labelWidth) {
        state.labelWidth = labelWidth;
      },
      UPDATE_SELECT_INDEX(state, data) {
        state.selectIndex = data;
      },
    },
  },
  paths: ["selectIndex"],
};
