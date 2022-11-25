export default function ErrorCustom({ error, children }) {
  if (error) {
    return <div>{error}</div>;
  }
  return children;
}
