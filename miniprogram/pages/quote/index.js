const { money, quoteSummary } = require("../../utils/finance");

Page({
  data: {
    quote: {},
    customerNames: [],
    materialNames: [],
    historyNames: [],
    historyLabel: "选择历史报价",
    summary: {},
    lineResults: []
  },

  onShow() {
    this.load();
  },

  load() {
    const app = getApp();
    const state = app.getState();
    const quote = state.quote;
    const summary = quoteSummary(quote, state.materials);
    this.setData({
      quote,
      customerNames: state.customers.map((item) => item.name),
      materialNames: state.materials.map((item) => `${item.name} / ¥${item.price}/${item.unit}`),
      historyNames: quote.histories.map((item) => item.name),
      historyLabel: quote.histories.length ? "选择历史报价" : "暂无历史",
      summary: {
        ...summary,
        totalCostText: money(summary.totalCost),
        totalPriceText: money(summary.totalPrice),
        grossProfitText: money(summary.grossProfit),
        grossRateText: `${summary.grossRate.toFixed(1)}%`
      },
      lineResults: summary.results.map((item) => ({
        ...item,
        unitPriceText: money(item.unitPrice)
      }))
    });
  },

  updateQuote(patch) {
    const app = getApp();
    const state = app.getState();
    state.quote = { ...state.quote, ...patch };
    app.setState(state);
    this.load();
  },

  onCustomerChange(event) {
    this.updateQuote({ customerIndex: Number(event.detail.value) });
  },

  onQuoteInput(event) {
    const key = event.currentTarget.dataset.key;
    const numeric = key === "overhead" || key === "margin";
    this.updateQuote({ [key]: numeric ? Number(event.detail.value || 0) : event.detail.value });
  },

  onLineInput(event) {
    const index = Number(event.currentTarget.dataset.index);
    const key = event.currentTarget.dataset.key;
    const value = key === "part" ? event.detail.value : Number(event.detail.value || 0);
    const lines = this.data.quote.lines.map((line, lineIndex) => lineIndex === index ? { ...line, [key]: value } : line);
    this.updateQuote({ lines });
  },

  onMaterialChange(event) {
    const index = Number(event.currentTarget.dataset.index);
    const lines = this.data.quote.lines.map((line, lineIndex) => lineIndex === index ? { ...line, materialIndex: Number(event.detail.value) } : line);
    this.updateQuote({ lines });
  },

  addLine() {
    const lines = this.data.quote.lines.concat({
      part: `NEW-${String(this.data.quote.lines.length + 1).padStart(3, "0")} 新零件`,
      qty: 1,
      materialIndex: 0,
      weight: 1,
      utilization: 85,
      cutting: 1,
      bending: 0,
      cnc: 0,
      welding: 0,
      surface: 0,
      packLogistics: 0
    });
    this.updateQuote({ lines });
  },

  removeLine(event) {
    const index = Number(event.currentTarget.dataset.index);
    const lines = this.data.quote.lines.filter((_, lineIndex) => lineIndex !== index);
    this.updateQuote({ lines });
  },

  saveHistory() {
    const app = getApp();
    const state = app.getState();
    const customer = state.customers[state.quote.customerIndex];
    state.quote.histories = [
      {
        name: `${state.quote.quoteNo} / ${customer ? customer.name : "客户"}`,
        savedAt: new Date().toISOString().slice(0, 10),
        quote: JSON.parse(JSON.stringify({ ...state.quote, histories: [] }))
      },
      ...state.quote.histories
    ].slice(0, 12);
    app.setState(state);
    wx.showToast({ title: "已保存历史", icon: "success" });
    this.load();
  },

  onHistoryChange(event) {
    const index = Number(event.detail.value);
    const history = this.data.quote.histories[index];
    if (!history) return;
    this.updateQuote({
      ...history.quote,
      histories: this.data.quote.histories
    });
  }
});
