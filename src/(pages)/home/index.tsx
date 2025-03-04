import { Container } from "@/common/Layouts/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WeatherCard } from "@/components/WeatherCard";
import { addItem, removeItem, weatherArray } from "@/slices/weatherSlice";
import { store } from "@/store";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const HomePage = () => {
  const dispatch = useDispatch();

  const locations = weatherArray(store.getState());

  const [input, setInput] = useState("");

  const [city, setCity] = useState("");

  const handleInputChange = (e: string) => {
    setInput(e);
  };

  const handleOnClick = () => {
    setCity(input);
    setInput("");
  };

  const removeCity = (name: string) => {
    dispatch(removeItem(name));
  };

  const pinCity = (name: string) => {
    dispatch(addItem(name));
    setCity("");
  };

  return (
    <Container>
      <div className="flex flex-col gap-4 items-center mt-8">
        <h1 className="text-2xl">Weather Forcast</h1>
        <Input
          placeholder="Please enter a city. EG.. Skelton"
          onChange={(e) => handleInputChange(e.target.value)}
          value={input}
        />
        <Button
          className="bg-blue-500"
          onClick={() => handleOnClick()}
          disabled={input.length <= 0}
        >
          Search
        </Button>

        {city.length > 0 && (
          <WeatherCard name={city} removeSelf={removeCity} pinSelf={pinCity} />
        )}

        <div className="flex flex-col gap-2">
          {locations.map((loco) => (
            <WeatherCard name={loco} key={loco} removeSelf={removeCity} />
          ))}
        </div>
      </div>
    </Container>
  );
};
