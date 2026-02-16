export default function toRupiah(value = 0) {
  const number = Number(value) || 0

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number)
}