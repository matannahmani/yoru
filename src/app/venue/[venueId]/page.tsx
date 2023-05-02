function VenuePage({
  params,
}: {
  params: {
    venueId: string;
  };
}) {
  return (
    <div>
      <h1>Venue ID: {params.venueId}</h1>
    </div>
  );
}

export default VenuePage;
