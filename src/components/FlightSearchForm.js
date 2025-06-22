'use client';

import { Button } from "./ui/server/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/server/card";

export default function FlightSearchForm({ currentDestination }) {
  const handleDestinationChange = (e) => {
    const url = new URL(window.location);
    url.searchParams.set('destination', e.target.value);
    url.searchParams.delete('page'); // Reset to page 1 when destination changes
    window.location.href = url.toString();
  };

  return (
    <Card className="w-full max-w-6xl mb-6">
      <CardHeader>
        <CardTitle>Search Flights</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex gap-4 items-end">
          <div className="flex-1">
            <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
              Source
            </label>
            <input
              type="text"
              id="source"
              value="New Delhi"
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
              Destination
            </label>
            <select
              id="destination"
              name="destination"
              value={currentDestination}
              onChange={handleDestinationChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Hanoi">Hanoi</option>
              <option value="Ho Chi Minh City">Ho Chi Minh City</option>
            </select>
          </div>
          <Button type="submit" className="px-6">
            Search
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 