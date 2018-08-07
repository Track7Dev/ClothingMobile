export const Run = (func, time) => {
  return  new Promise((resolve, reject) => {
      setTimeout(() => resolve(func), time);
    });
}