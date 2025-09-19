export function formatCurrency(amount: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseFloat(amount));
}

export function toBoolean(str: string) {
  return str.toLocaleLowerCase() === "true";
}
