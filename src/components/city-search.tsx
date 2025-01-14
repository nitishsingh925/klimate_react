import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2, Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { useLocationSearch } from "@/hooks/use-weather";
import { useNavigate } from "@tanstack/react-router";

const CitySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { data: locations, isLoading } = useLocationSearch(query);

  console.log(locations);

  const navigate = useNavigate();

  const handleSelect = (cityData: string) => {
    const [lat, lon, name, country] = cityData.split("|");
    setOpen(false);

    navigate({ to: `/city/${name}?lat=${lat}&lon=${lon}` });
  };
  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => setOpen(true)}
        className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
      >
        <Search className="mr-2 h-4 w-4" />
        Search cities...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search cities"
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {query.length > 2 && !isLoading && (
            <CommandEmpty>No Cities found.</CommandEmpty>
          )}
          <CommandGroup heading="Favorites">
            <CommandItem>Calender</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Recent Searches">
            <CommandItem>Calender</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Suggestions">
            {isLoading && (
              <div className="flex items-center justify-center p-4">
                <Loader2 className=" h-4 w-4 animate-spin" />
              </div>
            )}

            {locations?.map((location) => (
              <CommandItem
                key={`${location.lat}-${location.lon}`}
                value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                onSelect={handleSelect}
              >
                <Search className="mr-2 h-4 w-4" />
                <span>{location.name}</span>
                {location.state && (
                  <span className="text-xs text-muted-foreground">
                    , {location.state}
                  </span>
                )}
                <span className="text-xs text-muted-foreground">
                  {" "}
                  , {location.country}
                </span>
              </CommandItem>
            ))}

            <CommandItem>Calender</CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CitySearch;
