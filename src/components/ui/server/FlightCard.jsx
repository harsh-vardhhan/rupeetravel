import { CircularProgressBar } from "../../../component/PrecipitationChart";
import LuggagePolicyButton from "./LuggagePolicyButton";
import FlightWeatherButton from "../../../component/FlightWeatherButton";

function formatDateWithSuffix(dateString) {
  const date = new Date(dateString);
  if (isNaN(date)) return dateString;
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export default function FlightCard({
  flight,
  getSourceCode,
  getDestinationCode,
  showRain = false,
  getRainColor,
  Button,
  showWeatherButton,
  precipitationData,
  destinationOptions,
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
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-200 hover:border-blue-200"
    >
      {/* Airline & Date Row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-400 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {flight.airline.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm leading-tight">
              {flight.airline}
            </p>
            <p className="text-xs text-gray-500">
              {formatDateWithSuffix(flight.date)}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-emerald-600">
            ₹{flight.price_inr.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500">per person</p>
        </div>
      </div>

      {/* Route & Time Row */}
      <div className="flex items-center justify-between mb-3 py-3 bg-gray-50 rounded-lg px-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="text-center">
            <p className="font-semibold text-gray-900 text-sm">
              {getSourceCode(flight.origin)}
            </p>
            <p className="text-xs text-gray-500">{flight.origin}</p>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-full h-px bg-gray-300"></div>
            <div className="absolute bg-white border-2 border-blue-500 rounded-full w-3 h-3"></div>
            <div className="absolute text-xs text-gray-600 top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              {flight.duration}
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold text-gray-900 text-sm">
              {getDestinationCode(flight.destination)}
            </p>
            <p className="text-xs text-gray-500">{flight.destination}</p>
          </div>
        </div>
        {/* Rain Probability Circular Progress */}
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
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              flight.flight_type === "direct"
                ? "bg-green-100 text-green-800"
                : "bg-orange-100 text-orange-800"
            }`}
          >
            {flight.flight_type}
          </span>

          <div className="flex items-center gap-1">
            <span className="text-sm">🍽️</span>
            <span
              className={`text-xs font-medium ${
                flight.free_meal ? "text-green-600" : "text-gray-400"
              }`}
            >
              {flight.free_meal ? "Meal included" : "No meal"}
            </span>
          </div>
        </div>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <a
            href={getFlightHref(flight)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors inline-block"
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
