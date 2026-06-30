function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function money(value) {
  return `¥${toNumber(value).toLocaleString("zh-CN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`;
}

function quoteLineResult(line, materials, settings) {
  const material = materials[line.materialIndex] || materials[0] || { price: 0, loss: 0 };
  const qty = Math.max(toNumber(line.qty), 0);
  const utilization = Math.max(toNumber(line.utilization), 1) / 100;
  const materialCost = toNumber(line.weight) * toNumber(material.price) / utilization;
  const processCost =
    toNumber(line.cutting) * 2.2 +
    toNumber(line.bending) * 1.8 +
    toNumber(line.cnc) * 95 +
    toNumber(line.welding) * 70 +
    toNumber(line.surface) +
    toNumber(line.packLogistics);
  const unitCost = materialCost + processCost;
  const overhead = unitCost * toNumber(settings.overhead) / 100;
  const targetMargin = Math.min(toNumber(settings.margin), 80) / 100;
  const unitPrice = (unitCost + overhead) / Math.max(1 - targetMargin, 0.1);
  return {
    materialName: material.name,
    unitCost,
    unitPrice,
    totalCost: unitCost * qty,
    totalPrice: unitPrice * qty,
    grossProfit: (unitPrice - unitCost - overhead) * qty
  };
}

function quoteSummary(quote, materials) {
  const settings = { overhead: quote.overhead, margin: quote.margin };
  const results = quote.lines.map((line) => quoteLineResult(line, materials, settings));
  const totalCost = results.reduce((sum, item) => sum + item.totalCost, 0);
  const totalPrice = results.reduce((sum, item) => sum + item.totalPrice, 0);
  const grossProfit = totalPrice - totalCost;
  return {
    lineCount: quote.lines.length,
    totalCost,
    totalPrice,
    grossProfit,
    grossRate: totalPrice ? grossProfit / totalPrice * 100 : 0,
    results
  };
}

module.exports = {
  money,
  quoteLineResult,
  quoteSummary,
  toNumber
};
