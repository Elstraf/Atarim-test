import { useGetCurrentWeatherForLocationQuery } from "@/services/weather";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Pin, ThermometerIcon, Waves, Wind } from "lucide-react";
import { Button } from "../ui/button";

type WeatherCardProps = {
  name: string;
  removeSelf: (name: string) => void;
  pinSelf?: (name: string) => void;
};

export const WeatherCard = ({
  name,
  removeSelf,
  pinSelf,
}: WeatherCardProps) => {
  const { data, error, isLoading } = useGetCurrentWeatherForLocationQuery(name);

  if (isLoading) {
    return <>Loading</>;
  }

  if (error || typeof data === "undefined") {
    return <>Error getting data</>;
  }

  return (
    <>
      <div className="flex gap-2">
        <h2 className="mb-2 text-2xl capitalize">
          5 Day forcast {data.location.name}
        </h2>
        {pinSelf ? (
          <Button onClick={() => pinSelf(name)}>
            <Pin />
          </Button>
        ) : (
          <Button onClick={() => removeSelf(name)}>X</Button>
        )}
      </div>
      <div className="flex justify-between gap-8 flex-col md:flex-row">
        {data.forecast.forecastday.map((forecast) => (
          <Card key={forecast.date}>
            <CardHeader>{forecast.date}</CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <h2>{forecast.day.condition.text}</h2>
                <img src={forecast.day.condition.icon} width={150} />
              </div>
              <div className="flex justify-evenly">
                <p className="flex flex-col items-center">
                  <ThermometerIcon />
                  {forecast.day.avgtemp_c}
                </p>
                <p className="flex flex-col items-center">
                  <Wind />
                  {forecast.day.maxwind_mph}
                </p>
                <p className="flex flex-col items-center">
                  <Waves />
                  {forecast.day.avghumidity}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
