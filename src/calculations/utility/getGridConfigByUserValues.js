export default function getGridConfigByUserValues(userValues) {
  let maxW = userValues.maxContainerWidth - userValues.margin,
    A = userValues.amountOfColumns,
    minG = userValues.minGutterWidth,
    maxG = userValues.maxGutterWidth,
    d = userValues.dividers,
    gridConfig = {};

  if (maxG === 0) {
    maxG = maxW / A;
  }

  let gridMaxW = getGridConfigWithMaxW(maxW, A, minG, maxG, d),
    gridMinG = getGridConfigWithMinG(maxW, A, minG, maxG, d);

  if (gridMaxW !== false && gridMinG !== false) {
    if (getGridDividerFactor(gridMaxW) >= getGridDividerFactor(gridMinG)) {
      gridConfig.container = gridMaxW.w;
      gridConfig.column = gridMaxW.c;
      gridConfig.amountOfColumn = gridMaxW.a;
      gridConfig.gutter = gridMaxW.g;
    } else {
      gridConfig.container = gridMinG.w;
      gridConfig.column = gridMinG.c;
      gridConfig.amountOfColumn = gridMinG.a;
      gridConfig.gutter = gridMinG.g;
    }
  } else if (gridMaxW === false && gridMinG === false) {
    return false;
  } else if (gridMaxW !== false) {
    gridConfig.container = gridMaxW.w;
    gridConfig.column = gridMaxW.c;
    gridConfig.amountOfColumn = gridMaxW.a;
    gridConfig.gutter = gridMaxW.g;
  } else {
    gridConfig.container = gridMinG.w;
    gridConfig.column = gridMinG.c;
    gridConfig.amountOfColumn = gridMinG.a;
    gridConfig.gutter = gridMinG.g;
  }

  return gridConfig;

  function calculateColumnWidth(w, a, g) {
    return (w - a * g + g) / a;
  }

  function getGridConfigWithMaxW(maxW, A, minG, maxG, d) {
    let W = maxW,
      result = {},
      c = calculateColumnWidth(W, A, minG);

    while (
      Math.floor(calculateColumnWidth(W, A, minG)) !==
        calculateColumnWidth(W, A, minG) ||
      checkDividedByArray(c, d) !== true
    ) {
      minG++;
      c = calculateColumnWidth(W, A, minG);
      checkDividedByArray(c, d);

      if (minG === maxG) {
        break;
      }
    }

    if (minG === maxG) {
      return false;
    } else {
      result.w = W;
      result.a = A;
      result.g = minG;
      result.c = c;
      result.d = d;
      return result;
    }
  }

  function getGridConfigWithMinG(maxW, A, minG, maxG, d) {
    let G = minG,
      W = maxW,
      result = {},
      c = calculateColumnWidth(W, A, G);

    while (
      Math.floor(calculateColumnWidth(W, A, G)) !==
        calculateColumnWidth(W, A, G) ||
      checkDividedByArray(c, d) === false
    ) {
      W--;
      c = calculateColumnWidth(W, A, minG);
      checkDividedByArray(c, d);

      if (W === G) {
        break;
      }
    }

    if (W === G) {
      return false;
    } else {
      result.w = W;
      result.a = A;
      result.g = minG;
      result.c = calculateColumnWidth(W, A, minG);
      result.d = d;
      return result;
    }
  }

  function checkDividedByArray(num, array) {
    let result = true;

    for (let i = 0; i < array.length; i++) {
      if (num % array[i] !== 0) {
        result = false;
      }
    }

    return result;
  }

  function getGridDividerFactor(gridConfig) {
    let c = gridConfig.c,
      g = gridConfig.g,
      counter = 0;

    for (let i = 2; i <= 12; i++) {
      if (c % i === 0 && g % i === 0) {
        counter++;
      }
    }

    return counter;
  }
}
