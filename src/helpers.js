const helpers = (() => {
  const verifyInputs = (inputs) => {
    if (inputs.some((inp) => !inp || inp.length === 0)) {
      return false;
    }
    return true;
  };

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  return { verifyInputs, removeAllChildNodes };
})();

export default helpers;
