
import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  void trpc.hello.prefetch({text: "Ozan"})

return (
  <HydrateClient>
    <Suspense fallback={<p>Yükleniyor...</p>}>
    <ErrorBoundary fallback={<p>Hata...</p>}>
      <PageClient />
    </ErrorBoundary>
    </Suspense>
  </HydrateClient>
)
}
