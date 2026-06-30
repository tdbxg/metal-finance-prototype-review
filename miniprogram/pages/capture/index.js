const { money } = require("../../utils/finance");

Page({
  data: {
    imagePath: "",
    recognized: null,
    captures: []
  },

  onShow() {
    this.load();
  },

  load() {
    const state = getApp().getState();
    this.setData({
      captures: state.captures.map((item) => ({
        ...item,
        amountText: money(item.amount)
      }))
    });
  },

  takePhoto() {
    wx.chooseMedia({
      count: 1,
      mediaType: ["image"],
      sourceType: ["album", "camera"],
      success: (res) => {
        const file = res.tempFiles[0];
        this.setData({ imagePath: file.tempFilePath });
        wx.showToast({ title: "已上传", icon: "success" });
      }
    });
  },

  mockRecognize() {
    const recognized = {
      docNo: `DOC-${Date.now().toString().slice(-6)}`,
      type: "收货结算",
      party: "德邦",
      amount: 2595.6,
      confidence: "模拟识别 88%",
      status: "待复核"
    };
    this.setData({
      recognized: {
        ...recognized,
        amountText: money(recognized.amount)
      }
    });
  },

  saveCapture() {
    if (!this.data.recognized) {
      wx.showToast({ title: "请先识别", icon: "none" });
      return;
    }
    const app = getApp();
    const state = app.getState();
    const { amountText, confidence, ...capture } = this.data.recognized;
    state.captures.unshift(capture);
    app.setState(state);
    this.setData({ recognized: null });
    this.load();
    wx.showToast({ title: "已保存", icon: "success" });
  }
});
