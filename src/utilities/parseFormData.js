export const parseFormData = (form, options = {}) => {
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)

  // fields yang mau di-parse ke number
  const numberFields = options.numberFields || []

  numberFields.forEach((field) => {
    if (data[field] !== undefined && data[field] !== "") {
      data[field] = parseInt(data[field], 10)
    }
  })

  return data
}