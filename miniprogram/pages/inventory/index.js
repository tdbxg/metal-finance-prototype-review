Page({
  data: {
    materials: [],
    importStatus: "材料价格变化频繁，正式版建议按材料名称+规格覆盖更新。"
  },

  onShow() {
    this.load();
  },

  load() {
    const state = getApp().getState();
    this.setData({ materials: state.materials });
  },

  chooseMaterialFile() {
    wx.chooseMessageFile({
      count: 1,
      type: "file",
      extension: ["xlsx", "xls", "csv"],
      success: (res) => {
        const file = res.tempFiles[0];
        this.setData({ importStatus: `已选择：${file.name}。正式版会解析材料、规格、单价、库存并覆盖更新。` });
      }
    });
  },

  addMaterial() {
    const app = getApp();
    const state = app.getState();
    state.materials.unshift({
      name: "新材料",
      type: "待分类",
      spec: "待补充",
      qty: 0,
      unit: "kg",
      price: 0,
      loss: 0
    });
    app.setState(state);
    this.load();
    wx.showToast({ title: "已新增", icon: "success" });
  }
});
