const { money } = require("../../utils/finance");

Page({
  data: {
    enterprise: {},
    kpis: {},
    orders: [],
    captureCount: 0,
    customerCount: 0,
    materialCount: 0
  },

  onShow() {
    const app = getApp();
    const state = app.getState();
    const income = state.orders.reduce((sum, order) => sum + Number(order.income || 0), 0);
    const cost = state.orders.reduce((sum, order) => sum + Number(order.cost || 0), 0);
    const received = state.orders.reduce((sum, order) => sum + Number(order.received || 0), 0);
    const orders = state.orders.map((order) => {
      const profit = Number(order.income || 0) - Number(order.cost || 0);
      const unpaid = Number(order.income || 0) - Number(order.received || 0);
      return {
        ...order,
        profitText: money(profit),
        unpaidText: money(unpaid)
      };
    });

    this.setData({
      enterprise: state.enterprise,
      kpis: {
        income: money(income),
        cost: money(cost),
        profit: money(income - cost),
        unpaid: money(income - received)
      },
      orders,
      captureCount: state.captures.length,
      customerCount: state.customers.length,
      materialCount: state.materials.length
    });
  }
});
