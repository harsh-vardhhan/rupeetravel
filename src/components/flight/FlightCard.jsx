import { CircularProgressBar } from '../flight/PrecipitationChart';
import LuggagePolicyButton from './LuggagePolicyButton';
import FlightWeatherButton from '../flight/FlightWeatherButton';

function formatDateWithSuffix(dateString) {
  const date = new Date(dateString);
  if (isNaN(date)) return dateString;
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export default function FlightCard({
  flight,
  getSourceCode,
  getDestinationCode,
  showRain = false,
  getRainColor,
  showWeatherButton,
  precipitationData,
  destinationOptions
}) {
  const getFlightHref = (flight) => {
    if (flight.link && flight.link.trim() !== "") {
      return flight.link;
    }
    return `https://www.google.com/search?q=${encodeURIComponent(`flights from ${flight.origin} to ${flight.destination} ${flight.date} one way`)}`;
  };

  return (
    <div
      key={flight.id}
      // CHANGE: Added dark mode border color
      className="bg-card rounded-xl shadow-sm border border-border dark:border-gray-800 p-4 hover:shadow-md transition-all duration-200 hover:border-blue-200"
    >
      {/* Airline & Date Row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-400 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {flight.airline.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-card-foreground text-sm leading-tight">
              {flight.airline}
            </p>
            <p className="text-xs text-muted-foreground">
              {formatDateWithSuffix(flight.date)}
            </p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          {/* CHANGE: Added dark mode color for price */}
          <p className="text-xl font-bold text-emerald-600 dark:text-emerald-500">
            ₹{flight.price_inr.toLocaleString()}
          </p>
          <p className="text-xs text-muted-foreground">per person</p>

          {/* Luggage Price Section with Dark Mode Fixes */}
          {flight.airline === "Vietjet" && flight.min_checked_luggage_price && (
            // CHANGE: Added dark mode border color
            <div className="mt-1.5 border-t border-dashed border-gray-200 dark:border-gray-700 pt-1.5 text-xs">
              <p className="text-muted-foreground dark:text-gray-400">
                {/* CHANGE: Updated text to be more specific */}
                with {flight.min_checked_luggage_weight} bag:{" "}
                {/* CHANGE: Added brighter text color for dark mode */}
                <span className="font-bold text-card-foreground dark:text-gray-200">
                  ₹{flight.total_with_min_luggage.toLocaleString()}
                </span>
              </p>
              {/* CHANGE: Added brighter text color for dark mode */}
              <p className="text-[11px] text-gray-500 dark:text-gray-500 -mt-0.5">
                (+₹{flight.min_checked_luggage_price.toLocaleString()} for baggage)
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Route & Time Row */}
      <div className="flex items-center justify-between mb-3 py-3 bg-muted rounded-lg px-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="text-center">
            <p className="font-semibold text-card-foreground text-sm">
              {getSourceCode(flight.origin)}
            </p>
            <p className="text-xs text-muted-foreground">{flight.origin}</p>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            {/* CHANGE: Added dark mode border color */}
            <div className="w-full h-px bg-border dark:bg-gray-700"></div>
            {/* CHANGE: Added dark mode border color */}
            <div className="absolute bg-card border-2 border-blue-500 dark:border-blue-400 rounded-full w-3 h-3"></div>
            <div className="absolute text-xs text-muted-foreground top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              {flight.duration}
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold text-card-foreground text-sm">
              {getDestinationCode(flight.destination)}
            </p>
            <p className="text-xs text-muted-foreground">{flight.destination}</p>
          </div>
        </div>
        {showRain && getRainColor && (
          <div className="ml-4 flex-shrink-0 flex flex-col items-center">
            <CircularProgressBar
              value={parseInt(flight.rain_probability, 10)}
              color={getRainColor(parseInt(flight.rain_probability, 10))}
              label="Rain"
            />
          </div>
        )}
      </div>

      {/* Features Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <div className="flex items-center gap-3">
          {/* CHANGE: Added dark mode variants for status badges */}
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            flight.flight_type === 'direct'
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
              : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
          }`}>
            {flight.flight_type}
          </span>

          <div className="flex items-center gap-1">
            <span className="text-sm">🍽️</span>
            {/* CHANGE: Added dark mode variants for meal text */}
            <span className={`text-xs font-medium ${
              flight.free_meal 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-muted-foreground'
            }`}>
              {flight.free_meal ? 'Meal included' : 'No meal'}
            </span>
          </div>
        </div>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <a
            href={getFlightHref(flight)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors inline-block"
          >
            Search Flight
          </a>
          <LuggagePolicyButton airline={flight.airline} />
          <FlightWeatherButton
            precipitationData={precipitationData}
            destination={flight.destination}
            showWeatherButton={showWeatherButton}
            destinationOptions={destinationOptions}
            flight={flight}
          />
        </div>
      </div>
    </div>
  );
}