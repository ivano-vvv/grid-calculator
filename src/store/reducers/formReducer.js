const initialState = {
  maxWidth: 1200,
  columns: 12,
  minGutter: 24,
  maxGutter: 0,
  margin: 0,
  checkboxes: [
    { divider: 2, value: false },
    { divider: 3, value: false },
    { divider: 4, value: false },
    { divider: 5, value: false },
    { divider: 6, value: false },
    { divider: 7, value: false },
    { divider: 8, value: false },
    { divider: 9, value: false },
    { divider: 10, value: false },
    { divider: 11, value: false },
    { divider: 12, value: false },
  ],
};

export default function FormReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
