const defaultState = {
  orders: [
    {
      id: "SO-2406-018",
      customer: "苏州恒远自动化",
      month: "2026-06",
      type: "small_batch",
      qty: 100,
      region: "江苏苏州",
      revenue: {
        processing: 38600,
        material: 17800,
        surface: 9600,
        packing: 3200,
        shipping: 8600,
        tooling: 0,
      },
      costs: {
        material: 21300,
        laser: 4200,
        bending: 3600,
        cnc: 8800,
        welding: 4600,
        deburring: 1800,
        surface: 7600,
        packing: 2300,
        logistics: 6800,
        labor: 9200,
        depreciation: 3600,
        platform: 0,
        financeFee: 450,
      },
      received: 43800,
      dueDate: "2026-07-05",
      paymentMethod: "银行转账",
    },
    {
      id: "SO-2406-022",
      customer: "上海驰越自动化",
      month: "2026-06",
      type: "batch",
      qty: 500,
      region: "上海",
      revenue: {
        processing: 72000,
        material: 41500,
        surface: 18500,
        packing: 4200,
        shipping: 3000,
        tooling: 6500,
      },
      costs: {
        material: 48600,
        laser: 9800,
        bending: 7600,
        cnc: 0,
        welding: 11200,
        deburring: 4200,
        surface: 14900,
        packing: 3200,
        logistics: 2600,
        labor: 18800,
        depreciation: 7400,
        platform: 0,
        financeFee: 0,
      },
      received: 82000,
      dueDate: "2026-06-30",
      paymentMethod: "银行转账",
    },
    {
      id: "SO-2405-041",
      customer: "杭州锐科机器人",
      month: "2026-05",
      type: "sample",
      qty: 12,
      region: "浙江杭州",
      revenue: {
        processing: 16800,
        material: 5200,
        surface: 3600,
        packing: 1300,
        shipping: 6200,
        tooling: 4200,
      },
      costs: {
        material: 6800,
        laser: 1600,
        bending: 980,
        cnc: 6200,
        welding: 1450,
        deburring: 620,
        surface: 2750,
        packing: 880,
        logistics: 5100,
        labor: 3900,
        depreciation: 1800,
        platform: 0,
        financeFee: 180,
      },
      received: 37300,
      dueDate: "2026-06-18",
      paymentMethod: "银行转账",
    },
    {
      id: "SO-2405-033",
      customer: "深圳铭创医疗",
      month: "2026-05",
      type: "batch",
      qty: 200,
      region: "广东深圳",
      revenue: {
        processing: 45600,
        material: 22600,
        surface: 7800,
        packing: 2600,
        shipping: 1800,
        tooling: 0,
      },
      costs: {
        material: 25800,
        laser: 5200,
        bending: 4200,
        cnc: 10600,
        welding: 3600,
        deburring: 1900,
        surface: 6100,
        packing: 1700,
        logistics: 1500,
        labor: 9800,
        depreciation: 3600,
        platform: 0,
        financeFee: 0,
      },
      received: 80400,
      dueDate: "2026-06-03",
      paymentMethod: "银行转账",
    },
  ],
  payables: [
    { supplier: "宝钢材料代理", category: "材料", amount: 48600, paid: 20000, dueDate: "2026-06-28", invoice: "待开票" },
    { supplier: "宁波阳极氧化厂", category: "表面处理", amount: 14900, paid: 14900, dueDate: "2026-06-20", invoice: "已收票" },
    { supplier: "顺丰国际", category: "物流", amount: 6800, paid: 0, dueDate: "2026-07-03", invoice: "待开票" },
    { supplier: "东莞精密外协", category: "CNC 外协", amount: 8800, paid: 3000, dueDate: "2026-07-10", invoice: "未到票" },
  ],
  inventory: [
    { name: "冷轧板", material: "碳钢", thickness: "1.5mm", spec: "1220x2440", qty: 1680, unit: "kg", price: 5.8, loss: 8 },
    { name: "304 不锈钢板", material: "不锈钢", thickness: "2.0mm", spec: "1500x3000", qty: 920, unit: "kg", price: 16.9, loss: 11 },
    { name: "6061 铝板", material: "铝合金", thickness: "6.0mm", spec: "1250x2500", qty: 540, unit: "kg", price: 24.5, loss: 13 },
    { name: "镀锌板", material: "碳钢", thickness: "1.2mm", spec: "1000x2000", qty: 1260, unit: "kg", price: 6.4, loss: 9 },
  ],
  captureHistory: [
    { docNo: "INV-20260619-088", type: "供应商应付", party: "宝钢材料代理", orderId: "SO-2406-022", amount: 48600, status: "已复核" },
    { docNo: "PAY-20260621-014", type: "客户收款", party: "上海驰越自动化", orderId: "SO-2406-022", amount: 42000, status: "已入账" },
  ],
  invoices: [
    {
      direction: "output",
      invoiceType: "digital_e_invoice",
      invoiceNumber: "25502000000123456789",
      issueDate: "2026-06-20",
      counterparty: "上海驰越自动化",
      taxId: "91310000MA1K000001",
      orderId: "SO-2406-022",
      goodsName: "钣金加工服务",
      amountExTax: 72000,
      taxRate: 13,
      taxAmount: 9360,
      totalAmount: 81360,
      status: "issued",
      matchStatus: "matched",
      source: "manual",
    },
    {
      direction: "input",
      invoiceType: "special_vat",
      invoiceNumber: "033002600111",
      issueDate: "2026-06-19",
      counterparty: "宝钢材料代理",
      taxId: "91310000MA1K000002",
      orderId: "SO-2406-022",
      goodsName: "冷轧板",
      amountExTax: 43008.85,
      taxRate: 13,
      taxAmount: 5591.15,
      totalAmount: 48600,
      status: "pending_review",
      matchStatus: "amount_mismatch",
      source: "ocr",
    },
    {
      direction: "input",
      invoiceType: "ordinary_vat",
      invoiceNumber: "24402000000987654321",
      issueDate: "2026-06-25",
      counterparty: "宁波阳极氧化厂",
      taxId: "91330200MA1K000003",
      orderId: "SO-2406-018",
      goodsName: "表面处理服务",
      amountExTax: 7169.81,
      taxRate: 6,
      taxAmount: 430.19,
      totalAmount: 7600,
      status: "verified",
      matchStatus: "matched",
      source: "excel",
    },
  ],
};

let state = structuredClone(defaultState);

const today = new Date("2026-06-26T00:00:00+08:00");

const currency = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  maximumFractionDigits: 0,
});

const sampleDocuments = {
  material: {
    docType: "payable",
    orderId: "SO-2406-022",
    party: "宝钢材料代理",
    category: "材料",
    amount: 28600,
    date: "2026-06-26",
    docNo: "INV-20260626-126",
    confidence: "96%",
    preview: "增值税发票 | 冷轧板 / 镀锌板 | 订单 SO-2406-022",
  },
  surface: {
    docType: "cost",
    orderId: "SO-2406-018",
    party: "宁波阳极氧化厂",
    category: "表面处理",
    amount: 7600,
    date: "2026-06-25",
    docNo: "OUT-20260625-031",
    confidence: "93%",
    preview: "外协结算单 | 阳极氧化 / 喷粉 | 订单 SO-2406-018",
  },
  receipt: {
    docType: "receipt",
    orderId: "SO-2405-041",
    party: "杭州锐科机器人",
    category: "客户收款",
    amount: 22000,
    date: "2026-06-26",
    docNo: "BOC-20260626-442",
    confidence: "91%",
    preview: "银行回单 | 对公转账 | 订单 SO-2405-041",
  },
};

const categoryCostKey = {
  材料: "material",
  表面处理: "surface",
  物流: "logistics",
  "CNC 外协": "cnc",
};

const importTemplates = {
  orders: {
    filename: "订单利润导入模板.csv",
    fields: ["订单编号", "客户", "订单类型", "月份", "交付区域", "数量", "收入", "材料成本", "加工成本", "外协成本", "包装物流", "已收款", "应收日期"],
    rows: [
      ["SO-2406-099", "苏州样例客户", "小批量", "2026-06", "江苏苏州", "80", "68000", "18000", "22000", "6000", "3500", "30000", "2026-07-15"],
      ["SO-2406-100", "深圳样例客户", "批量单", "2026-06", "广东深圳", "300", "128000", "42000", "36000", "12000", "5800", "64000", "2026-07-20"],
    ],
  },
  invoices: {
    filename: "发票清单导入模板.csv",
    fields: ["发票方向", "发票类型", "发票号码", "开票日期", "往来单位", "税号", "关联订单", "商品服务名称", "不含税金额", "税率", "税额", "价税合计", "发票状态"],
    rows: [
      ["销项", "数电票", "25502000000111111111", "2026-06-28", "苏州样例客户", "91320000MA00000001", "SO-2406-099", "钣金加工服务", "60000", "13", "7800", "67800", "已开票"],
      ["进项", "增值税专票", "033002600222", "2026-06-28", "佛山板材供应商", "91440600MA00000002", "SO-2406-099", "钢板", "23008.85", "13", "2991.15", "26000", "待复核"],
    ],
  },
  payables: {
    filename: "应付账款导入模板.csv",
    fields: ["供应商", "费用类别", "应付金额", "已付金额", "付款日期", "发票状态"],
    rows: [
      ["佛山板材供应商", "材料", "26000", "10000", "2026-07-05", "待开票"],
      ["东莞喷粉外协厂", "表面处理", "8600", "0", "2026-07-08", "未到票"],
    ],
  },
  inventory: {
    filename: "材料库存导入模板.csv",
    fields: ["材料名称", "材质", "厚度", "规格", "库存数量", "单位", "单价", "损耗率"],
    rows: [
      ["冷轧板", "碳钢", "2.0mm", "1220x2440", "1200", "kg", "5.9", "8"],
      ["304 不锈钢板", "不锈钢", "1.5mm", "1500x3000", "680", "kg", "17.2", "10"],
    ],
  },
};

const defaultQuoteLines = [
  {
    part: "BRK-001 支架",
    qty: 100,
    materialPrice: 18,
    weight: 1.8,
    utilization: 82,
    cutMinutes: 4.5,
    bends: 6,
    cncHours: 0.35,
    weldHours: 0.2,
    surface: 16,
    packingLogistics: 13,
  },
  {
    part: "COV-002 外壳",
    qty: 100,
    materialPrice: 16.8,
    weight: 2.4,
    utilization: 78,
    cutMinutes: 6,
    bends: 10,
    cncHours: 0.1,
    weldHours: 0.35,
    surface: 22,
    packingLogistics: 16,
  },
];

let quoteLines = structuredClone(defaultQuoteLines);

function sumObject(obj) {
  return Object.values(obj).reduce((sum, value) => sum + Number(value || 0), 0);
}

function orderRevenue(order) {
  return sumObject(order.revenue);
}

function orderCost(order) {
  return sumObject(order.costs);
}

function orderGross(order) {
  return orderRevenue(order) - orderCost(order);
}

function typeName(type) {
  return { small_batch: "小批量", sample: "样品单", batch: "批量单" }[type] || type;
}

function typeTag(type) {
  const cls = type === "sample" ? "warn" : "";
  return `<span class="tag ${cls}">${typeName(type)}</span>`;
}

function directionName(direction) {
  return { output: "销项", input: "进项" }[direction] || direction;
}

function invoiceStatusName(status) {
  return {
    imported: "已导入",
    pending_review: "待复核",
    verified: "已认证/已复核",
    issued: "已开票",
    abnormal: "异常",
    red_lettered: "红冲",
    voided: "作废",
  }[status] || status;
}

function matchStatusName(status) {
  return {
    matched: "已匹配",
    missing_order: "缺订单",
    amount_mismatch: "金额不一致",
    counterparty_mismatch: "往来单位不一致",
    tax_amount_mismatch: "税额不一致",
    duplicate_invoice: "疑似重复",
  }[status] || status;
}

function mapInvoiceDirection(value) {
  return value === "销项" ? "output" : "input";
}

function mapInvoiceType(value) {
  if (value.includes("数电")) return "digital_e_invoice";
  if (value.includes("专票")) return "special_vat";
  if (value.includes("普票")) return "ordinary_vat";
  return "other";
}

function mapInvoiceStatus(value) {
  if (value.includes("已开")) return "issued";
  if (value.includes("认证") || value.includes("已复核")) return "verified";
  if (value.includes("异常")) return "abnormal";
  if (value.includes("红")) return "red_lettered";
  return "pending_review";
}

function inferInvoiceMatch(row) {
  const order = state.orders.find((item) => item.id === row.orderId);
  if (!order) return "missing_order";
  if (order.customer !== row.counterparty && row.direction === "output") return "counterparty_mismatch";
  return "matched";
}

function renderKpis() {
  const revenue = state.orders.reduce((sum, order) => sum + orderRevenue(order), 0);
  const cost = state.orders.reduce((sum, order) => sum + orderCost(order), 0);
  const gross = revenue - cost;
  const received = state.orders.reduce((sum, order) => sum + order.received, 0);
  const ar = revenue - received;
  const dueSoon = state.orders.filter((order) => orderRevenue(order) - order.received > 0).length;

  const data = [
    ["订单收入", revenue, `${state.orders.length} 个订单`],
    ["订单毛利", gross, `毛利率 ${((gross / revenue) * 100).toFixed(1)}%`],
    ["未收款", ar, "定金/尾款跟踪"],
    ["待收订单", dueSoon, "需要跟进回款"],
  ];

  document.querySelector("#kpiGrid").innerHTML = data
    .map(([label, value, note]) => `<article class="kpi"><span>${label}</span><strong>${currency.format(value)}</strong><em>${note}</em></article>`)
    .join("");
}

function renderOrders() {
  const filter = document.querySelector("#orderFilter").value;
  const orders = filter === "all" ? state.orders : state.orders.filter((order) => order.type === filter);
  document.querySelector("#orderRows").innerHTML = orders
    .map((order) => {
      const revenue = orderRevenue(order);
      const cost = orderCost(order);
      const gross = revenue - cost;
      const margin = revenue ? (gross / revenue) * 100 : 0;
      const unpaid = revenue - order.received;
      return `
        <tr>
          <td><strong>${order.id}</strong><span class="subtext">${order.region}</span></td>
          <td>${order.customer}</td>
          <td>${typeTag(order.type)}</td>
          <td>${order.region}</td>
          <td class="money">${currency.format(revenue)}</td>
          <td class="money">${currency.format(cost)}</td>
          <td class="money ${gross >= 0 ? "positive" : "negative"}">${currency.format(gross)}</td>
          <td>${margin.toFixed(1)}%</td>
          <td class="money">${currency.format(order.received)}</td>
          <td class="money ${unpaid > 0 ? "negative" : "positive"}">${currency.format(unpaid)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderMonthlyBars() {
  const months = {};
  state.orders.forEach((order) => {
    months[order.month] ||= { revenue: 0, cost: 0, gross: 0 };
    months[order.month].revenue += orderRevenue(order);
    months[order.month].cost += orderCost(order);
    months[order.month].gross += orderGross(order);
  });
  const maxRevenue = Math.max(...Object.values(months).map((item) => item.revenue));
  document.querySelector("#monthlyBars").innerHTML = Object.entries(months)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, item]) => {
      const width = Math.max(8, (item.revenue / maxRevenue) * 100);
      return `
        <div class="bar-row">
          <strong>${month.slice(5)}月</strong>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
          <span class="money">${currency.format(item.gross)}</span>
        </div>
        <span class="subtext">收入 ${currency.format(item.revenue)} / 成本 ${currency.format(item.cost)}</span>
      `;
    })
    .join("");
}

function renderCustomerRank() {
  const customers = {};
  state.orders.forEach((order) => {
    customers[order.customer] ||= { revenue: 0, gross: 0, count: 0 };
    customers[order.customer].revenue += orderRevenue(order);
    customers[order.customer].gross += orderGross(order);
    customers[order.customer].count += 1;
  });
  document.querySelector("#customerRank").innerHTML = Object.entries(customers)
    .sort((a, b) => b[1].gross - a[1].gross)
    .map(([name, item]) => {
      const margin = item.revenue ? (item.gross / item.revenue) * 100 : 0;
      return `<div class="rank-item"><div><strong>${name}</strong><span class="subtext">${item.count} 单 / 毛利率 ${margin.toFixed(1)}%</span></div><span class="money">${currency.format(item.gross)}</span></div>`;
    })
    .join("");
}

function renderReceivables() {
  document.querySelector("#arList").innerHTML = state.orders
    .map((order) => {
      const unpaid = orderRevenue(order) - order.received;
      const overdue = unpaid > 0 && new Date(`${order.dueDate}T00:00:00+08:00`) < today;
      return { order, unpaid, overdue };
    })
    .filter((item) => item.unpaid > 0)
    .sort((a, b) => b.unpaid - a.unpaid)
    .map(({ order, unpaid, overdue }) => `
      <div class="mini-row">
        <div>
          <strong>${order.customer}</strong>
          <span class="subtext">${order.id} / ${order.paymentMethod} / 应收 ${order.dueDate}</span>
        </div>
        <span class="tag ${overdue ? "danger" : "warn"}">${overdue ? "已逾期" : "待收"} ${currency.format(unpaid)}</span>
      </div>
    `)
    .join("");

  document.querySelector("#apList").innerHTML = state.payables
    .map((payable) => {
      const unpaid = payable.amount - payable.paid;
      const overdue = unpaid > 0 && new Date(`${payable.dueDate}T00:00:00+08:00`) < today;
      return `
        <div class="mini-row">
          <div>
            <strong>${payable.supplier}</strong>
            <span class="subtext">${payable.category} / ${payable.invoice} / 应付 ${payable.dueDate}</span>
          </div>
          <span class="tag ${overdue ? "danger" : unpaid > 0 ? "warn" : ""}">${unpaid > 0 ? currency.format(unpaid) : "已付清"}</span>
        </div>
      `;
    })
    .join("");
}

function renderInventory() {
  document.querySelector("#inventoryRows").innerHTML = state.inventory
    .map((item) => {
      const amount = item.qty * item.price;
      return `
        <tr>
          <td><strong>${item.name}</strong></td>
          <td>${item.material}</td>
          <td>${item.thickness}</td>
          <td>${item.spec}</td>
          <td>${item.qty.toLocaleString("zh-CN")} ${item.unit}</td>
          <td>${currency.format(item.price)}</td>
          <td class="money">${currency.format(amount)}</td>
          <td>${item.loss}%</td>
        </tr>
      `;
    })
    .join("");
}

function renderTaxInvoices() {
  const taxKpis = document.querySelector("#taxKpis");
  const invoiceRows = document.querySelector("#invoiceRows");
  const queue = document.querySelector("#invoiceMatchQueue");
  if (!taxKpis || !invoiceRows || !queue) return;

  const outputTax = state.invoices
    .filter((invoice) => invoice.direction === "output")
    .reduce((sum, invoice) => sum + Number(invoice.taxAmount || 0), 0);
  const inputTax = state.invoices
    .filter((invoice) => invoice.direction === "input")
    .reduce((sum, invoice) => sum + Number(invoice.taxAmount || 0), 0);
  const pendingReview = state.invoices.filter((invoice) => invoice.status === "pending_review").length;
  const unmatched = state.invoices.filter((invoice) => invoice.matchStatus !== "matched").length;

  taxKpis.innerHTML = [
    ["销项税额", outputTax, "客户订单开票"],
    ["进项税额", inputTax, "材料/外协/物流"],
    ["待复核发票", pendingReview, "OCR/Excel 导入后确认"],
    ["匹配异常", unmatched, "不自动入账"],
  ]
    .map(([label, value, note]) => `<article class="kpi"><span>${label}</span><strong>${typeof value === "number" && label.includes("税额") ? currency.format(value) : value}</strong><em>${note}</em></article>`)
    .join("");

  invoiceRows.innerHTML = state.invoices
    .map((invoice) => {
      const tagClass = invoice.matchStatus === "matched" ? "" : "warn";
      return `
        <tr>
          <td>${directionName(invoice.direction)}</td>
          <td><strong>${invoice.invoiceNumber}</strong><span class="subtext">${invoice.issueDate} / ${invoice.invoiceType}</span></td>
          <td>${invoice.counterparty}<span class="subtext">${invoice.taxId}</span></td>
          <td>${invoice.orderId || "未匹配"}</td>
          <td class="money">${currency.format(invoice.amountExTax)}</td>
          <td class="money">${currency.format(invoice.taxAmount)}<span class="subtext">${invoice.taxRate}%</span></td>
          <td class="money">${currency.format(invoice.totalAmount)}</td>
          <td><span class="tag ${tagClass}">${invoiceStatusName(invoice.status)} / ${matchStatusName(invoice.matchStatus)}</span></td>
        </tr>
      `;
    })
    .join("");

  const items = state.invoices.filter((invoice) => invoice.status === "pending_review" || invoice.matchStatus !== "matched");
  queue.innerHTML = items.length
    ? items
        .map((invoice) => `
          <div class="mini-row">
            <div>
              <strong>${invoice.counterparty}</strong>
              <span class="subtext">${directionName(invoice.direction)} / ${invoice.invoiceNumber} / ${invoice.orderId || "缺订单"}</span>
            </div>
            <span class="tag warn">${matchStatusName(invoice.matchStatus)}</span>
          </div>
        `)
        .join("")
    : `<div class="mini-row"><strong>暂无待复核</strong><span class="tag">正常</span></div>`;
}

function renderCaptureOrders() {
  const select = document.querySelector("#captureOrder");
  if (!select) return;
  select.innerHTML = state.orders
    .map((order) => `<option value="${order.id}">${order.id} / ${order.customer}</option>`)
    .join("");
}

function renderCaptureHistory() {
  const history = document.querySelector("#captureHistory");
  if (!history) return;
  history.innerHTML = state.captureHistory
    .map((item) => `
      <div class="mini-row">
        <div>
          <strong>${item.party}</strong>
          <span class="subtext">${item.type} / ${item.orderId} / ${item.docNo}</span>
        </div>
        <span class="tag">${item.status} ${currency.format(item.amount)}</span>
      </div>
    `)
    .join("");
}

function renderImportFields() {
  const type = document.querySelector("#importType")?.value || "orders";
  const target = document.querySelector("#importFields");
  if (!target) return;
  target.innerHTML = importTemplates[type].fields
    .map((field) => `<div class="mini-row"><strong>${field}</strong><span class="tag">必填</span></div>`)
    .join("");
  const status = document.querySelector("#importStatus");
  if (status && !window.XLSX) status.textContent = "Excel库未加载时仍可导入CSV";
}

function renderImportPreview(rows = []) {
  const target = document.querySelector("#importPreview");
  if (!target) return;
  if (!rows.length) {
    target.innerHTML = `<div class="mini-row"><strong>暂无预览</strong><span class="subtext">选择 Excel/CSV 后显示</span></div>`;
    return;
  }
  target.innerHTML = rows
    .slice(0, 5)
    .map((row, index) => `<div class="mini-row"><strong>第 ${index + 1} 行</strong><span class="subtext">${Object.values(row).join(" / ")}</span></div>`)
    .join("");
}

function setRecognition(values) {
  const form = document.querySelector("#recognitionForm");
  Object.entries(values).forEach(([key, value]) => {
    const field = form.elements[key];
    if (field) field.value = value;
  });
  document.querySelector("#documentPreview").innerHTML = `<div class="upload-copy"><strong>${values.preview}</strong><span>已提取金额、日期、往来单位、关联订单</span></div>`;
  document.querySelector("#captureStatus").textContent = "已识别，待确认";
}

function applyCapture() {
  const formData = new FormData(document.querySelector("#recognitionForm"));
  const values = Object.fromEntries(formData.entries());
  const amount = Number(values.amount || 0);
  const order = state.orders.find((item) => item.id === values.orderId);
  if (!order || !amount) {
    document.querySelector("#captureStatus").textContent = "请确认订单和金额";
    return;
  }

  if (values.docType === "receipt") {
    order.received += amount;
  } else if (values.docType === "payable") {
    state.payables.unshift({
      supplier: values.party,
      category: values.category,
      amount,
      paid: 0,
      dueDate: values.date,
      invoice: values.docNo ? "已识别" : "待复核",
    });
  } else {
    const key = categoryCostKey[values.category] || "platform";
    order.costs[key] = Number(order.costs[key] || 0) + amount;
  }

  state.captureHistory.unshift({
    docNo: values.docNo || `DOC-${Date.now()}`,
    type: values.docType === "receipt" ? "客户收款" : values.docType === "cost" ? "订单成本" : "供应商应付",
    party: values.party,
    orderId: values.orderId,
    amount,
    status: "已写入",
  });

  document.querySelector("#captureStatus").textContent = "已写入财务数据";
  renderAll();
}

function previewUpload(file) {
  const preview = document.querySelector("#documentPreview");
  if (!file) return;
  if (file.type.startsWith("image/")) {
    const url = URL.createObjectURL(file);
    preview.innerHTML = `<img src="${url}" alt="上传票据预览" />`;
    window.setTimeout(() => URL.revokeObjectURL(url), 5000);
  } else {
    preview.innerHTML = `<div class="upload-copy"><strong>${file.name}</strong><span>PDF 已接收，等待识别</span></div>`;
  }
  setRecognition({
    ...sampleDocuments.material,
    docNo: `SCAN-${String(Date.now()).slice(-6)}`,
    preview: `${file.name} | 模拟识别为材料发票`,
  });
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadImportTemplate() {
  const type = document.querySelector("#importType").value;
  const template = importTemplates[type];
  const rows = [template.fields, ...template.rows];
  downloadCsv(template.filename, rows);
  document.querySelector("#importStatus").textContent = "模板已生成";
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  if (row.some((value) => value.trim() !== "")) rows.push(row);
  return rows;
}

function rowsToObjects(rows) {
  const headers = rows[0]?.map((header) => header.trim()) || [];
  return rows.slice(1).map((row) =>
    Object.fromEntries(headers.map((header, index) => [header, (row[index] || "").trim()]))
  );
}

function mapOrderType(value) {
  if (value === "样品单") return "sample";
  if (value === "批量单") return "batch";
  return "small_batch";
}

async function readImportRows() {
  const file = document.querySelector("#csvInput").files[0];
  if (!file) return [];
  const fileName = file.name.toLowerCase();
  if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
    if (!window.XLSX) {
      document.querySelector("#importStatus").textContent = "Excel 解析库未加载，请先另存为 CSV";
      return [];
    }
    const workbook = XLSX.read(await file.arrayBuffer(), { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
    return rowsToObjects(rows.map((row) => row.map((cell) => String(cell))));
  }
  const text = await file.text();
  return rowsToObjects(parseCsv(text.replace(/^\ufeff/, "")));
}

async function previewImportFile() {
  const rows = await readImportRows();
  renderImportPreview(rows);
  document.querySelector("#importStatus").textContent = rows.length ? `已读取 ${rows.length} 行` : "未读取到数据";
}

async function importCsvData() {
  const type = document.querySelector("#importType").value;
  const rows = await readImportRows();
  if (!rows.length) {
    document.querySelector("#importStatus").textContent = "请先选择 Excel/CSV 文件";
    return;
  }

  if (type === "orders") {
    rows.forEach((row) => {
      state.orders.push({
        id: row["订单编号"] || `SO-${Date.now()}`,
        customer: row["客户"] || "未命名客户",
        month: row["月份"] || "2026-06",
        type: mapOrderType(row["订单类型"]),
        qty: Number(row["数量"] || 0),
        region: row["交付区域"] || "",
        revenue: {
          processing: Number(row["收入"] || 0),
          material: 0,
          surface: 0,
          packing: 0,
          shipping: 0,
          tooling: 0,
        },
        costs: {
          material: Number(row["材料成本"] || 0),
          laser: Number(row["加工成本"] || 0),
          bending: 0,
          cnc: 0,
          welding: 0,
          deburring: 0,
          surface: Number(row["外协成本"] || 0),
          packing: Number(row["包装物流"] || 0),
          logistics: 0,
          labor: 0,
          depreciation: 0,
          platform: 0,
          financeFee: 0,
        },
        received: Number(row["已收款"] || 0),
        dueDate: row["应收日期"] || "2026-07-01",
        paymentMethod: "银行转账",
      });
    });
  } else if (type === "invoices") {
    rows.forEach((row) => {
      const invoice = {
        direction: mapInvoiceDirection(row["发票方向"] || "进项"),
        invoiceType: mapInvoiceType(row["发票类型"] || ""),
        invoiceNumber: row["发票号码"] || `INV-${Date.now()}`,
        issueDate: row["开票日期"] || "2026-07-01",
        counterparty: row["往来单位"] || "未命名单位",
        taxId: row["税号"] || "",
        orderId: row["关联订单"] || "",
        goodsName: row["商品服务名称"] || "",
        amountExTax: Number(row["不含税金额"] || 0),
        taxRate: Number(row["税率"] || 0),
        taxAmount: Number(row["税额"] || 0),
        totalAmount: Number(row["价税合计"] || 0),
        status: mapInvoiceStatus(row["发票状态"] || "待复核"),
        matchStatus: "matched",
        source: "excel",
      };
      invoice.matchStatus = inferInvoiceMatch(invoice);
      state.invoices.push(invoice);
    });
  } else if (type === "payables") {
    rows.forEach((row) => {
      state.payables.push({
        supplier: row["供应商"] || "未命名供应商",
        category: row["费用类别"] || "材料",
        amount: Number(row["应付金额"] || 0),
        paid: Number(row["已付金额"] || 0),
        dueDate: row["付款日期"] || "2026-07-01",
        invoice: row["发票状态"] || "待开票",
      });
    });
  } else {
    rows.forEach((row) => {
      state.inventory.push({
        name: row["材料名称"] || "未命名材料",
        material: row["材质"] || "",
        thickness: row["厚度"] || "",
        spec: row["规格"] || "",
        qty: Number(row["库存数量"] || 0),
        unit: row["单位"] || "kg",
        price: Number(row["单价"] || 0),
        loss: Number(row["损耗率"] || 0),
      });
    });
  }

  document.querySelector("#importStatus").textContent = `已导入 ${rows.length} 行`;
  renderAll();
  renderImportPreview(rows);
}

function quoteSettings() {
  return {
    overhead: Number(document.querySelector("#quoteOverhead")?.value || 0),
    margin: Number(document.querySelector("#quoteMargin")?.value || 0),
  };
}

function quoteLineCost(line, scaleDiscount = 1) {
  const material = (line.materialPrice * line.weight) / Math.max(line.utilization / 100, 0.01);
  const process =
    line.cutMinutes * 3.2 +
    line.bends * 1.8 +
    line.cncHours * 120 +
    line.weldHours * 90 +
    line.surface +
    line.packingLogistics;
  return (material + process) * scaleDiscount;
}

function quoteLineResult(line, settings, scaleDiscount = 1) {
  const directCost = quoteLineCost(line, scaleDiscount);
  const unitCost = directCost * (1 + settings.overhead / 100);
  const unitPrice = unitCost / Math.max(1 - settings.margin / 100, 0.01);
  return {
    unitCost,
    unitPrice,
    totalCost: unitCost * line.qty,
    totalPrice: unitPrice * line.qty,
  };
}

function updateQuoteLine(index, key, value) {
  const numericKeys = new Set(["qty", "materialPrice", "weight", "utilization", "cutMinutes", "bends", "cncHours", "weldHours", "surface", "packingLogistics"]);
  quoteLines[index][key] = numericKeys.has(key) ? Number(value || 0) : value;
  renderQuote();
}

function addQuoteLine() {
  quoteLines.push({
    part: `NEW-${String(quoteLines.length + 1).padStart(3, "0")} 新零件`,
    qty: 50,
    materialPrice: 18,
    weight: 1,
    utilization: 82,
    cutMinutes: 3,
    bends: 4,
    cncHours: 0,
    weldHours: 0,
    surface: 10,
    packingLogistics: 8,
  });
  renderQuote();
}

function removeQuoteLine(index) {
  if (quoteLines.length <= 1) return;
  quoteLines.splice(index, 1);
  renderQuote();
}

function renderQuoteLines(settings) {
  document.querySelector("#quoteLineRows").innerHTML = quoteLines
    .map((line, index) => {
      const result = quoteLineResult(line, settings);
      return `
        <tr>
          <td><input value="${line.part}" data-quote-index="${index}" data-quote-key="part" /></td>
          <td><input type="number" value="${line.qty}" data-quote-index="${index}" data-quote-key="qty" /></td>
          <td><input type="number" step="0.01" value="${line.materialPrice}" data-quote-index="${index}" data-quote-key="materialPrice" /></td>
          <td><input type="number" step="0.01" value="${line.weight}" data-quote-index="${index}" data-quote-key="weight" /></td>
          <td><input type="number" value="${line.utilization}" data-quote-index="${index}" data-quote-key="utilization" /></td>
          <td><input type="number" step="0.1" value="${line.cutMinutes}" data-quote-index="${index}" data-quote-key="cutMinutes" /></td>
          <td><input type="number" value="${line.bends}" data-quote-index="${index}" data-quote-key="bends" /></td>
          <td><input type="number" step="0.1" value="${line.cncHours}" data-quote-index="${index}" data-quote-key="cncHours" /></td>
          <td><input type="number" step="0.1" value="${line.weldHours}" data-quote-index="${index}" data-quote-key="weldHours" /></td>
          <td><input type="number" step="0.1" value="${line.surface}" data-quote-index="${index}" data-quote-key="surface" /></td>
          <td><input type="number" step="0.1" value="${line.packingLogistics}" data-quote-index="${index}" data-quote-key="packingLogistics" /></td>
          <td class="money">${currency.format(result.unitPrice)}</td>
          <td class="money">${currency.format(result.totalPrice)}</td>
          <td><button class="icon-button" type="button" data-remove-quote="${index}" title="删除零件">删</button></td>
        </tr>
      `;
    })
    .join("");
}

function renderQuote() {
  const settings = quoteSettings();
  renderQuoteLines(settings);

  const lineResults = quoteLines.map((line) => quoteLineResult(line, settings));
  const totalCost = lineResults.reduce((sum, line) => sum + line.totalCost, 0);
  const totalPrice = lineResults.reduce((sum, line) => sum + line.totalPrice, 0);
  const gross = totalPrice - totalCost;
  const marginRate = totalPrice ? (gross / totalPrice) * 100 : 0;

  document.querySelector("#quoteSummary").innerHTML = `
    <div class="quote-row"><strong>报价单</strong><span>${document.querySelector("#quoteNo")?.value || ""}</span></div>
    <div class="quote-row"><strong>零件行数</strong><span>${quoteLines.length} 行</span></div>
    <div class="quote-row"><strong>内部成本</strong><span class="money">${currency.format(totalCost)}</span></div>
    <div class="quote-row"><strong>客户报价</strong><span class="money">${currency.format(totalPrice)}</span></div>
    <div class="quote-row"><strong>预计毛利</strong><span class="money positive">${currency.format(gross)} / ${marginRate.toFixed(1)}%</span></div>
  `;

  document.querySelector("#quoteResults").innerHTML = [10, 50, 100, 500]
    .map((qty) => {
      const scaleDiscount = qty >= 500 ? 0.86 : qty >= 100 ? 0.91 : qty >= 50 ? 0.96 : 1;
      const baseQtyTotal = quoteLines.reduce((sum, line) => sum + line.qty, 0) || 1;
      const unitSetPrice = quoteLines.reduce((sum, line) => {
        const adjusted = quoteLineResult({ ...line, qty }, settings, scaleDiscount);
        return sum + adjusted.totalPrice;
      }, 0) / Math.max(quoteLines.length, 1);
      return `
        <div class="quote-row">
          <div>
            <strong>${qty} 套</strong>
            <span class="subtext">按当前 ${baseQtyTotal} 件结构估算，批量折扣 ${Math.round(scaleDiscount * 100)}%</span>
          </div>
          <span class="money">${currency.format(unitSetPrice)}</span>
        </div>
      `;
    })
    .join("");
}

function exportCsv() {
  const status = document.querySelector("#exportStatus");
  const rows = [["订单", "客户", "类型", "交付区域", "收入", "成本", "毛利", "毛利率", "已收", "未收"]];
  state.orders.forEach((order) => {
    const revenue = orderRevenue(order);
    const cost = orderCost(order);
    const gross = revenue - cost;
    rows.push([
      order.id,
      order.customer,
      typeName(order.type),
      order.region,
      revenue,
      cost,
      gross,
      `${((gross / revenue) * 100).toFixed(1)}%`,
      order.received,
      revenue - order.received,
    ]);
  });
  downloadCsv("metal-order-profit.csv", rows);
  if (status) {
    status.textContent = `已生成 ${state.orders.length} 单`;
    window.setTimeout(() => {
      status.textContent = "";
    }, 3000);
  }
}

function downloadCsv(filename, rows) {
  const csv = rows.map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function renderAll() {
  renderKpis();
  renderOrders();
  renderMonthlyBars();
  renderCustomerRank();
  renderReceivables();
  renderInventory();
  renderQuote();
  renderCaptureOrders();
  renderCaptureHistory();
  renderImportFields();
  renderTaxInvoices();
}

document.querySelector("#orderFilter").addEventListener("change", renderOrders);
document.querySelector("#quoteBtn").addEventListener("click", renderQuote);
document.querySelector("#addQuoteLineBtn").addEventListener("click", addQuoteLine);
document.querySelector("#quoteOverhead").addEventListener("input", renderQuote);
document.querySelector("#quoteMargin").addEventListener("input", renderQuote);
document.querySelector("#quoteCustomer").addEventListener("input", renderQuote);
document.querySelector("#quoteNo").addEventListener("input", renderQuote);
document.querySelector("#quoteLineRows").addEventListener("change", (event) => {
  const index = event.target.dataset.quoteIndex;
  const key = event.target.dataset.quoteKey;
  if (index != null && key) updateQuoteLine(Number(index), key, event.target.value);
});
document.querySelector("#quoteLineRows").addEventListener("click", (event) => {
  const index = event.target.dataset.removeQuote;
  if (index != null) removeQuoteLine(Number(index));
});
document.querySelector("#exportBtn").addEventListener("click", exportCsv);
document.querySelector("#downloadTemplateBtn").addEventListener("click", downloadImportTemplate);
document.querySelector("#importCsvBtn").addEventListener("click", importCsvData);
document.querySelector("#csvInput").addEventListener("change", previewImportFile);
document.querySelector("#importType").addEventListener("change", () => {
  renderImportFields();
  renderImportPreview();
  document.querySelector("#importStatus").textContent = "";
});
document.querySelector("#applyCaptureBtn").addEventListener("click", applyCapture);
document.querySelector("#documentInput").addEventListener("change", (event) => {
  previewUpload(event.target.files[0]);
});
document.querySelectorAll(".doc-sample").forEach((button) => {
  button.addEventListener("click", () => setRecognition(sampleDocuments[button.dataset.doc]));
});
document.querySelector("#seedBtn").addEventListener("click", () => {
  state = structuredClone(defaultState);
  quoteLines = structuredClone(defaultQuoteLines);
  renderAll();
});

renderAll();
