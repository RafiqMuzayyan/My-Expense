export const transactions = [
  {
    id: 1,
    title: "Gaji Bulanan",
    amount: 5000000,
    category: "salary",
    date: "2026-01-01",
    income: true,
    detail: "Gaji bulan Januari dari kantor utama."
  },
  {
    id: 2,
    title: "Makan Siang",
    amount: 25000,
    category: "food",
    date: "2026-01-03",
    income: false,
    detail: "Makan siang di warung dekat kampus."
  },
  {
    id: 3,
    title: "Freelance Project",
    amount: 750000,
    category: "freelance",
    date: "2026-01-05",
    income: true,
    detail: "Pembayaran project landing page klien UMKM."
  },
  {
    id: 4,
    title: "Transport Ojek",
    amount: 18000,
    category: "transport",
    date: "2026-01-06",
    income: false,
    detail: "Ojek online dari rumah ke kampus."
  },
  {
    id: 5,
    title: "Beli Kopi",
    amount: 20000,
    category: "food",
    date: "2026-01-07",
    income: false,
    detail: "Ngopi sambil ngerjain tugas dan coding."
  },
  {
    id: 6,
    title: "Bonus Kantor",
    amount: 1000000,
    category: "bonus",
    date: "2026-01-10",
    income: true,
    detail: "Bonus performa kerja awal tahun."
  },
  {
    id: 7,
    title: "Langganan Netflix",
    amount: 65000,
    category: "subscription",
    date: "2026-01-12",
    income: false,
    detail: "Langganan Netflix paket bulanan."
  },
  {
    id: 8,
    title: "Jual Barang Bekas",
    amount: 300000,
    category: "other_income",
    date: "2026-01-15",
    income: true,
    detail: "Menjual headset lama melalui marketplace."
  },
  {
    id: 9,
    title: "Belanja Bulanan",
    amount: 450000,
    category: "groceries",
    date: "2026-01-18",
    income: false,
    detail: "Belanja kebutuhan dapur dan rumah tangga."
  },
  {
    id: 10,
    title: "Bayar Internet",
    amount: 350000,
    category: "utilities",
    date: "2026-01-20",
    income: false,
    detail: "Pembayaran tagihan internet bulanan."
  },
];

export const categories = [
  // INCOME
  { value: "salary", label: "Salary", type: "income" },
  { value: "freelance", label: "Freelance Project", type: "income" },
  { value: "bonus", label: "Bonus", type: "income" },
  { value: "other_income", label: "Other Income", type: "income" },

  // EXPENSE
  { value: "food", label: "Food & Drink", type: "expense" },
  { value: "transport", label: "Transportation", type: "expense" },
  { value: "subscription", label: "Subscription", type: "expense" },
  { value: "groceries", label: "Groceries", type: "expense" },
  { value: "utilities", label: "Utilities", type: "expense" },
  { value: "shopping", label: "Shopping", type: "expense" },
  { value: "entertainment", label: "Entertainment", type: "expense" },
  { value: "health", label: "Health", type: "expense" },
  { value: "education", label: "Education", type: "expense" },
  { value: "other", label: "Other", type: "expense" },
];

export const barChartData = [
   { name: '01', income: 4500000, expense: 4500000 },
    { name: '02', income: 3800000, expense: 1800000 },
    { name: '03', income: 5200000, expense: 2500000 },
    { name: '04', income: 2800000, expense: 1500000 },
    { name: '05', income: 6100000, expense: 3200000 },
    { name: '06', income: 3500000, expense: 1900000 },
    { name: '07', income: 4800000, expense: 2400000 },
    { name: '08', income: 4200000, expense: 2100000 },
    { name: '09', income: 5500000, expense: 2800000 },
    { name: '10', income: 3200000, expense: 1600000 },
    { name: '11', income: 6500000, expense: 3500000 },
    { name: '12', income: 4300000, expense: 2300000 },
    { name: '13', income: 5800000, expense: 2900000 },
    { name: '14', income: 3600000, expense: 1700000 },
    { name: '15', income: 7200000, expense: 3800000 },
    { name: '16', income: 3400000, expense: 1800000 },
    { name: '17', income: 5100000, expense: 2600000 },
    { name: '18', income: 6000000, expense: 3100000 },
    { name: '19', income: 4100000, expense: 2200000 },
    { name: '20', income: 5400000, expense: 2700000 },
    { name: '21', income: 4900000, expense: 2500000 },
    { name: '22', income: 4400000, expense: 2300000 },
    { name: '23', income: 6300000, expense: 3300000 },
    { name: '24', income: 3700000, expense: 1900000 },
    { name: '25', income: 6800000, expense: 3600000 },
    { name: '26', income: 4000000, expense: 2100000 },
    { name: '27', income: 5600000, expense: 2800000 },
    { name: '28', income: 5000000, expense: 2600000 },
    { name: '29', income: 7500000, expense: 4000000 },
    { name: '30', income: 6200000, expense: 3200000 },
]
