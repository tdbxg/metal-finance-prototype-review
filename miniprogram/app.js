App({
  globalData: {
    storageKey: "metalFinanceMiniState"
  },

  onLaunch() {
    const state = wx.getStorageSync(this.globalData.storageKey);
    if (!state) {
      wx.setStorageSync(this.globalData.storageKey, this.seedState());
    }
  },

  getState() {
    return wx.getStorageSync(this.globalData.storageKey) || this.seedState();
  },

  setState(nextState) {
    wx.setStorageSync(this.globalData.storageKey, nextState);
  },

  seedState() {
    return {
      enterprise: {
        name: "顶宏激光钣金",
        tagline: "按图定制 / 样品 / 小批量 / 国内订单"
      },
      customers: [
        { name: "苏州恒远自动化", taxId: "91320500MA00000001", contact: "王经理", phone: "13800000001", level: "A", term: "月结45天", status: "合作中", updatedAt: "2026-06-26" },
        { name: "上海驰越自动化", taxId: "91310000MA1K000001", contact: "李工", phone: "13800000002", level: "A", term: "月结30天", status: "合作中", updatedAt: "2026-06-21" },
        { name: "杭州锐科机器人", taxId: "91330100MA00000003", contact: "陈经理", phone: "13800000003", level: "B", term: "预付50%", status: "打样中", updatedAt: "2026-06-18" },
        { name: "南京德邦输送设备", taxId: "91320100MA00000005", contact: "周经理", phone: "13800000005", level: "B", term: "月结30天", status: "合作中", updatedAt: "2026-06-23" }
      ],
      materials: [
        { name: "冷轧板", type: "碳钢", spec: "1.5mm / 1220x2440", qty: 1680, unit: "kg", price: 5.8, loss: 8 },
        { name: "304 不锈钢板", type: "不锈钢", spec: "2.0mm / 1500x3000", qty: 920, unit: "kg", price: 16.9, loss: 11 },
        { name: "6061 铝板", type: "铝合金", spec: "6.0mm / 1250x2500", qty: 540, unit: "kg", price: 24.5, loss: 13 },
        { name: "镀锌板", type: "碳钢", spec: "1.2mm / 1000x2000", qty: 1260, unit: "kg", price: 6.4, loss: 9 }
      ],
      orders: [
        { id: "SO-2406-018", customer: "苏州恒远自动化", income: 77800, cost: 75250, received: 43800, dueDate: "2026-07-05" },
        { id: "SO-2406-022", customer: "上海驰越自动化", income: 145700, cost: 128300, received: 82000, dueDate: "2026-06-30" },
        { id: "SO-2405-041", customer: "杭州锐科机器人", income: 37300, cost: 32260, received: 37300, dueDate: "2026-06-18" }
      ],
      quote: {
        customerIndex: 0,
        quoteNo: "QT-202606-001",
        overhead: 12,
        margin: 28,
        lines: [
          { part: "BRK-001 支架", qty: 100, materialIndex: 0, weight: 1.8, utilization: 82, cutting: 4.5, bending: 6, cnc: 0, welding: 0.5, surface: 12, packLogistics: 8 },
          { part: "COV-002 外壳", qty: 100, materialIndex: 1, weight: 2.4, utilization: 78, cutting: 6, bending: 10, cnc: 0, welding: 0.8, surface: 18, packLogistics: 10 }
        ],
        histories: []
      },
      captures: [
        { docNo: "NO000000774", type: "收货结算", party: "德邦", amount: 2595.6, status: "待复核" },
        { docNo: "顶宏激光生产单-20260626", type: "生产单", party: "瑞派", amount: 0, status: "已识别" }
      ]
    };
  }
});
