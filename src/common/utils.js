export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function FromData(date){
  const data = new Date(date*1000);
  let YY = data.getFullYear() + '-';
  let MM = (data.getMonth() + 1) + '-';
  let DD = data.getDate();
  return YY + MM + DD;
}
