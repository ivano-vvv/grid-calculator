export default function convertUserValues(valuesObject) {
  return {
    maxContainerWidth: Number(valuesObject.maxWidth),
    amountOfColumns: Number(valuesObject.columns),
    minGutterWidth: Number(valuesObject.minGutter),
    maxGutterWidth: Number(valuesObject.maxGutter),
    margin: Number(valuesObject.margin),
    dividers: getDividersArray(valuesObject.checkboxes),
  };

  function getDividersArray(dividersObject) {
    let result = [];

    for (let d of dividersObject) {
      if (d.value) {
        result.push(d.divider);
      }
    }

    return result;
  }
}
