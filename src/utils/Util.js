const isEmptyArr = (arr) => {
  if (arr == undefined && arr == null && arr.length > 0) {
    return true;
  }

  return false;
};

const dumpLog = (message) => {
  console.log(message);
};

export { isEmptyArr, dumpLog };
