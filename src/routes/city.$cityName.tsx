import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/city/$cityName")({
  component: RouteComponent,
});

function RouteComponent() {
  const { cityName } = Route.useParams();

  return <div>City: {cityName}</div>;
}
