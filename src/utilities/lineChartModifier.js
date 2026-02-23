export const lineChartModifier = (data = []) => {
  if (!data.length) return data

  const firstPadding = {
    label: "",
    income: 0,
    expense: 0,
  }

  const lastItem = data[data.length - 1]

  const lastPadding = {
    label: "",
    income: lastItem.income,
    expense: lastItem.expense,
  }

  return [firstPadding, ...data, lastPadding]
}