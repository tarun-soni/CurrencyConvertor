export const wait = timeout =>
  new Promise((resolve, reject) => setTimeout(resolve, timeout))
