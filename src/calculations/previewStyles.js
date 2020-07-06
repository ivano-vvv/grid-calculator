export default function getPreviewStyle(gridConfig) {
  let marginByGutter = Math.round(
      (gridConfig.gutter / gridConfig.container) * 100
    ),
    paddingByMargin = Math.round(
      (gridConfig.margin / gridConfig.container) * 100
    ),
    previewStyle = {
      padding: `0 ${paddingByMargin}%`,
    },
    columnStyle = {
      marginRight: `${marginByGutter}%`,
    };

  return { previewStyle, columnStyle };
}
