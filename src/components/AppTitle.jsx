export default function AppTitle(props) {
  const { title = 'Box-office', subtitle = 'Search for any show or actor' } =
    props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
