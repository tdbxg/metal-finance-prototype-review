Page({
  data: {
    customers: [],
    importStatus: "支持从微信聊天文件选择客户 Excel/CSV，当前原型先记录文件名，后续接解析服务。"
  },

  onShow() {
    this.load();
  },

  load() {
    const state = getApp().getState();
    this.setData({ customers: state.customers });
  },

  chooseCustomerFile() {
    wx.chooseMessageFile({
      count: 1,
      type: "file",
      extension: ["xlsx", "xls", "csv"],
      success: (res) => {
        const file = res.tempFiles[0];
        this.setData({ importStatus: `已选择：${file.name}。正式版会解析后按税号/客户名称更新档案。` });
      }
    });
  },

  addCustomer() {
    const app = getApp();
    const state = app.getState();
    const nextNumber = state.customers.length + 1;
    state.customers.unshift({
      name: `新客户 ${nextNumber}`,
      taxId: "",
      contact: "待补充",
      phone: "",
      level: "C",
      term: "预付30%",
      status: "新客户",
      updatedAt: new Date().toISOString().slice(0, 10)
    });
    app.setState(state);
    this.load();
    wx.showToast({ title: "已新增", icon: "success" });
  }
});
