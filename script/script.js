const gridConfig = {
  resultContainerWidth: 1200,
  resultColumnWidth: 78,
  resultColumnsAmount: 12,
  resultGutterWidth: 24,
};

startProcessOverGridConfig();

const userValues = {
  maxContainerWidth: 0,
  amountOfColumns: 0,
  minGutterWidth: 0,
  maxGutterWidth: 0,
  dividers: [],
};

document.getElementById("calculateButton").onclick = function () {
  getUserValuesForGridConfig(userValues);

  getGridConfigByUserValues(userValues);

  startProcessOverGridConfig();
};

// --- FUNCTIONS ---

function displayResult(
  resultContainerWidth,
  resultColumnWidth,
  resultColumnsAmount,
  resultGutterWidth
) {
  document.getElementById(
    "result__container-width"
  ).innerHTML = resultContainerWidth;
  document.getElementById("result__column-width").innerHTML = resultColumnWidth;
  document.getElementById("result__columns").innerHTML = resultColumnsAmount;
  document.getElementById("result__gutter-width").innerHTML = resultGutterWidth;
}

function checkDividedBy(num, divider) {
  if (num % divider == 0) {
    return true;
  } else {
    return false;
  }
}

function checkDividedByEachParameter(num) {
  let result = [];

  for (let i = 2; i <= 12; i++) {
    if (checkDividedBy(num, i)) {
      result.push(i);
    }
  }

  return result;
}

function switchOffAllIndicators() {
  for (let i = 2; i <= 12; i++) {
    let IdName = "column-divided-by-" + i + "__indicator";

    document.getElementById(IdName).classList.add("indicator__value_off");
    document.getElementById(IdName).classList.remove("indicator__value_on");
  }

  for (let i = 2; i <= 12; i++) {
    let IdName = "gutter-divided-by-" + i + "__indicator";

    document.getElementById(IdName).classList.add("indicator__value_off");
    document.getElementById(IdName).classList.remove("indicator__value_on");
  }
}

function switchOnIndicators(
  setOfIndicatorsForColumn,
  setOfIndicatorsForGutter
) {
  setOfIndicatorsForColumn.forEach((element) => {
    let IdName = "column-divided-by-" + element + "__indicator";

    document.getElementById(IdName).classList.remove("indicator__value_off");
    document.getElementById(IdName).classList.add("indicator__value_on");
  });

  setOfIndicatorsForGutter.forEach((element) => {
    let IdName = "gutter-divided-by-" + element + "__indicator";

    document.getElementById(IdName).classList.remove("indicator__value_off");
    document.getElementById(IdName).classList.add("indicator__value_on");
  });
}

function startProcessOverGridConfig() {
  let setOfIndicatorsForColumn = checkDividedByEachParameter(
      gridConfig.resultColumnWidth
    ),
    setOfIndicatorsForGutter = checkDividedByEachParameter(
      gridConfig.resultGutterWidth
    );

  switchOffAllIndicators();

  switchOnIndicators(setOfIndicatorsForColumn, setOfIndicatorsForGutter);

  displayResult(
    gridConfig.resultContainerWidth,
    gridConfig.resultColumnWidth,
    gridConfig.resultColumnsAmount,
    gridConfig.resultGutterWidth
  );
}

function getUserValuesForGridConfig(userValues) {
  userValues.maxContainerWidth = Number(
    document.getElementById("maxContainerWidth").value
  );
  userValues.amountOfColumns = Number(document.getElementById("columns").value);
  userValues.minGutterWidth = Number(
    document.getElementById("minGutterWidth").value
  );
  userValues.maxGutterWidth = Number(
    document.getElementById("maxGutterWidth").value
  );

  for (let i = 2; i <= 12; i++) {
    let idName = "dividedBy" + i;
    if (document.getElementById(idName).checked == true) {
      userValues.dividers.push(i);
    }
  }
}

function assignGridConfig(maxContainerWidth, amountOfColumns, gutterWidth) {
  let w = maxContainerWidth,
    a = amountOfColumns,
    g = gutterWidth;

  while (
    Math.floor(calculateColumnWidth(w, a, g)) !=
      calculateColumnWidth(w, a, g) &&
    w >= 0
  ) {
    w--;
  }

  c = calculateColumnWidth(w, a, g);

  gridConfig.resultContainerWidth = w;
  gridConfig.resultColumnWidth = c;
  gridConfig.resultColumnsAmount = a;
  gridConfig.resultGutterWidth = g;
}

function calculateColumnWidth(w, a, g) {
  return (w - a * g + g) / a;
}

function findRightGridConfig(w, a, g, c) {
  while (Math.floor(c) !== c && g <= c) {
    g++;
    c = calculateColumnWidth(w, a, g);
  }
}

function getGridConfigByUserValues(userValues) {
  let maxW = userValues.maxContainerWidth,
    A = userValues.amountOfColumns,
    minG = userValues.minGutterWidth,
    maxG = userValues.maxGutterWidth,
    d = userValues.dividers;

  if (maxG == 0) {
    maxG = maxW / A;
  }

  let gridMaxW = getGridConfigWithMaxW(maxW, A, minG, maxG, d),
    gridMinG = getGridConfigWithMinG(maxW, A, minG, maxG, d);

  if (gridMaxW != false && gridMinG != false) {
    if (getGridDividerFactor(gridMaxW) >= getGridDividerFactor(gridMinG)) {
      gridConfig.resultContainerWidth = gridMaxW.w;
      gridConfig.resultColumnWidth = gridMaxW.c;
      gridConfig.resultColumnsAmount = gridMaxW.a;
      gridConfig.resultGutterWidth = gridMaxW.g;
    } else {
      gridConfig.resultContainerWidth = gridMinG.w;
      gridConfig.resultColumnWidth = gridMinG.c;
      gridConfig.resultColumnsAmount = gridMinG.a;
      gridConfig.resultGutterWidth = gridMinG.g;
    }
  } else if (gridMaxW == false && gridMinG == false) {
    window.alert("Please, choose other parameters");
  } else if (gridMaxW != false) {
    gridConfig.resultContainerWidth = gridMaxW.w;
    gridConfig.resultColumnWidth = gridMaxW.c;
    gridConfig.resultColumnsAmount = gridMaxW.a;
    gridConfig.resultGutterWidth = gridMaxW.g;
  } else {
    gridConfig.resultContainerWidth = gridMinG.w;
    gridConfig.resultColumnWidth = gridMinG.c;
    gridConfig.resultColumnsAmount = gridMinG.a;
    gridConfig.resultGutterWidth = gridMinG.g;
  }

  userValues = {};
}

function getGridConfigWithMaxW(maxW, A, minG, maxG, d) {
  let W = maxW,
    result = {},
    c = calculateColumnWidth(W, A, minG);

  while (
    Math.floor(calculateColumnWidth(W, A, minG)) !=
      calculateColumnWidth(W, A, minG) ||
    checkDividedByArray(c, d) != true
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
    Math.floor(calculateColumnWidth(W, A, G)) !=
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
    if (num % array[i] != 0) {
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
