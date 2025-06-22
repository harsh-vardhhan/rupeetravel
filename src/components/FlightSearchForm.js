'use client';

import { Button } from "./ui/server/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/server/card";

export default function FlightSearchForm({ currentDestination }) {
  const handleDestinationChange = (e) => {
    const url = new URL(window.location);
    url.searchParams.set('destination', e.target.value);
    url.searchParams.delete('page');
    window.location.href = url.toString();
  };

  return (
    <Card className="w-full max-w-full sm:max-w-6xl mb-2 sm:mb-4 shadow-none border border-gray-100">
      <CardHeader className="py-2 px-3">
        <CardTitle className="text-sm sm:text-base">Search Flights</CardTitle>
      </CardHeader>
      <CardContent className="py-2 px-3">
        <form className="flex flex-col gap-2">
          <div>
            <label htmlFor="source" className="block text-xs font-medium text-gray-700 mb-0.5">
              Source
            </label>
            <input
              type="text"
              id="source"
              value="New Delhi"
              disabled
              className="w-full px-2 py-1 border border-gray-200 rounded bg-gray-100 text-gray-600 text-xs"
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-xs font-medium text-gray-700 mb-0.5">
              Destination
            </label>
            <select
              id="destination"
              name="destination"
              value={currentDestination}
              onChange={handleDestinationChange}
              className="w-full px-2 py-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
            >
              <option value="Hanoi">Hanoi</option>
              <option value="Ho Chi Minh City">Ho Chi Minh City</option>
            </select>
          </div>
          <Button type="submit" className="w-full py-1.5 text-sm mt-1">
            Search
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}