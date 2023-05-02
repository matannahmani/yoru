function DiscoverPage({
  params,
}: {
  params: {
    country: string;
    city: string;
  };
}) {
  return (
    <div>
      <h1>
        Discover {params.city}, {params.country}
      </h1>
    </div>
  );
}

export default DiscoverPage;
