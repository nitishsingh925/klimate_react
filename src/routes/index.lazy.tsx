import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { createLazyFileRoute } from "@tanstack/react-router";
import { RefreshCw } from "lucide-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { coordinates, error, getLocation, isLoading } = useGeolocation();
  console.log(coordinates);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className=" text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          // onClick={handleRefresh}
          // disabled={}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
