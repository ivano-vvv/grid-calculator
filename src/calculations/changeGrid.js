export function calculateGridWithNewContainer(delta, gridConfig) {
  if (delta < 0) {
    return decreaseContainer(gridConfig);
  } else if (delta > 0) {
    return increaseContainer(gridConfig);
  }

  function decreaseContainer(gridConfig) {
    let result = { ...gridConfig },
      tempColumn = 0,
      tempGutter = 0;

    while (continueLoop(result)) {
      result.container--;

      tempColumn = calculateColumn(
        result.container,
        result.gutter,
        result.amountOfColumn
      );

      if (Number.isInteger(tempColumn)) {
        return { ...result, column: tempColumn };
      }

      tempGutter = calculateGutter(
        result.container,
        result.column,
        result.amountOfColumn
      );

      if (Number.isInteger(tempGutter)) {
        return { ...result, gutter: tempGutter };
      }
    }

    return gridConfig;
  }

  function increaseContainer(gridConfig) {
    let result = { ...gridConfig },
      tempColumn = 0,
      tempGutter = 0;

    while (continueLoop(result)) {
      result.container++;

      tempColumn = calculateColumn(
        result.container,
        result.gutter,
        result.amountOfColumn
      );

      if (Number.isInteger(tempColumn)) {
        return { ...result, column: tempColumn };
      }

      tempGutter = calculateGutter(
        result.container,
        result.column,
        result.amountOfColumn
      );

      if (Number.isInteger(tempGutter)) {
        return { ...result, gutter: tempGutter };
      }
    }

    return gridConfig;
  }
}

export function calculateGridWithNewColumnAmount(delta, gridConfig) {
  if (delta < 0) {
    return decreaseAmount(gridConfig);
  } else if (delta > 0) {
    return increaseIncrease(gridConfig);
  }

  function decreaseAmount(gridConfig) {
    let result = { ...gridConfig },
      tempColumn = 0,
      tempGutter = 0;

    while (continueLoop(result)) {
      result.amountOfColumn--;
      while (continueLoop(result)) {
        tempColumn = calculateColumn(
          result.container,
          result.gutter,
          result.amountOfColumn
        );

        if (Number.isInteger(tempColumn)) {
          return { ...result, column: tempColumn };
        }

        tempGutter = calculateGutter(
          result.container,
          result.column,
          result.amountOfColumn
        );

        if (Number.isInteger(tempGutter)) {
          return { ...result, gutter: tempGutter };
        }

        result.container--;
      }
    }

    return gridConfig;
  }

  function increaseIncrease(gridConfig) {
    let result = { ...gridConfig },
      tempColumn = 0,
      tempGutter = 0;

    while (continueLoop(result)) {
      result.amountOfColumn++;
      while (continueLoop(result)) {
        tempColumn = calculateColumn(
          result.container,
          result.gutter,
          result.amountOfColumn
        );

        if (Number.isInteger(tempColumn)) {
          return { ...result, column: tempColumn };
        }

        tempGutter = calculateGutter(
          result.container,
          result.column,
          result.amountOfColumn
        );

        if (Number.isInteger(tempGutter)) {
          return { ...result, gutter: tempGutter };
        }

        result.container++;
      }
    }

    return gridConfig;
  }
}

function continueLoop(gridConfig) {
  return containerIsBiggerThanColumns(gridConfig) &&
    allParametersArePositive(gridConfig) &&
    allParametersAreLessThanMax(gridConfig)
    ? true
    : false;

  function containerIsBiggerThanColumns(gridConfig) {
    if (gridConfig.container > gridConfig.column * gridConfig.amountOfColumn) {
      return true;
    } else {
      return false;
    }
  }

  function allParametersArePositive(gridConfig) {
    if (
      gridConfig.container > 0 &&
      gridConfig.gutter > 0 &&
      gridConfig.column > 0 &&
      gridConfig.amountOfColumn > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  function allParametersAreLessThanMax(gridConfig) {
    if (
      gridConfig.container < 5000 &&
      gridConfig.gutter < gridConfig.column &&
      gridConfig.column < gridConfig.container / gridConfig.amountOfColumn &&
      gridConfig.amountOfColumn < 24
    ) {
      return true;
    } else {
      return false;
    }
  }
}

function calculateColumn(container, gutter, amount) {
  return (container - gutter * (amount + 1)) / amount;
}

function calculateGutter(container, column, amount) {
  return (container - column * amount) / (amount - 1);
}
