function promiseDelay (ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    })
  }
  async function requestAllWithDelay (items, delay, asyncFunc) {
    let responses = [];
    for (const item of items) {
      try {
        const response = await asyncFunc(item);
        const data = await response;
        responses.push(data);
      } catch (err) {
        responses.push(null);
      }
      await promiseDelay(delay);
    }
    return responses;
  }

  export default requestAllWithDelay;

