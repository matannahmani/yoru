/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Suspense } from "react";
import { api } from "~/utils/base";
import CountryCard from "./card";

async function CountryCardLoader({ name }: { name: string }) {
  const data = await api.example.country.query({
    name,
  });
  return <CountryCard data={data} name={name} />;
}

export default async function Page({ params }: { params: { name: string } }) {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <CountryCardLoader name={params.name} />
      </Suspense>
    </main>
  );
}
