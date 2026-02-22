import { categories } from "@/components/dashboard/table/data";

export const getCategoryLabel = (value) => {
  if (!value) return "-";

  const found = categories.find((cat) => cat.value === value);
  return found ? found.label : value;
};