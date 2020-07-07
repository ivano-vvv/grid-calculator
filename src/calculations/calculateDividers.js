export default function calculateDividers(gridConfig) {
  return {
    columnDividers: getDividers(gridConfig.column),
    gutterDividers: getDividers(gridConfig.gutter),
  };

  function getDividers(num) {
    let result = [];

    for (let i = 2; i <= 12; i++) {
      if (checkDividedBy(num, i)) {
        result.push(createDividerObject(i, true));
      } else {
        result.push(createDividerObject(i, false));
      }
    }

    return result;

    function checkDividedBy(num, divider) {
      if (num % divider === 0) {
        return true;
      } else {
        return false;
      }
    }

    function createDividerObject(divider, value) {
      return {
        divider,
        value,
      };
    }
  }
}
