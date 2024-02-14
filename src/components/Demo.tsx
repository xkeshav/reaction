'use client';
import { Watch } from "@xkeshav/watch";
import { useState } from "react";

export const Demo = () => {
  const [date, setDate] = useState<Date>(new Date());
  const setNextHour = () => {
    const nextHour = date.getHours() + 1;
    setDate(new Date(date.setHours(nextHour)));
  };

  return (
    <div>
      <h1>Watch Demo (see in console)</h1>
      <button onClick={setNextHour}>Next</button>
      <p>Watch without any props</p> <Watch>{{ date }}</Watch>
      <hr />
      <p>Watch with props</p>
      <Watch from="Demo Component" kind="dir">
        {{ date }}
      </Watch>
    </div>
  );
};