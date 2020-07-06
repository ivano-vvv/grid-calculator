export default function getPreviewStyle(gridConfig) {
  let marginByGutter = Math.round(
      (gridConfig.gutter / gridConfig.container) * 100
    ),
    columnStyle = {
      marginRight: `${marginByGutter}%`,
    };

  return { columnStyle };
}
