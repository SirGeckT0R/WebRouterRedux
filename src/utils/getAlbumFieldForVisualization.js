export default function getAlbumFieldForVisualization(element) {
  const value = {
    title: { type: 'string', text: element.title, isMainField: true },
  };
  return value;
}
