function EventPage({
  params,
}: {
  params: {
    eventId: string;
  };
}) {
  return (
    <div>
      <h1>Event ID: {params.eventId}</h1>
    </div>
  );
}

export default EventPage;
