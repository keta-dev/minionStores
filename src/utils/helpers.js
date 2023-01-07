export const formatPrice = (number) => {
   return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number / 100)
}

export const getUniqueValues = (data, type) => {
    let uniqueValues = data.map((item) => item[type])
    return ['all', ...new Set(uniqueValues)];
}
