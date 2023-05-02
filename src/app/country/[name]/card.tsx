/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

async function CountryCard({ name, data }: { data: any; name: string }) {
  return (
    <div>
      <h1>Country: {name}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default CountryCard;
