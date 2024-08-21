import { useState, useEffect } from "react";
import BatteryGauge from "react-battery-gauge";

const useBattery = () => {
  const [state, setState] = useState({
    supported: true,
    loading: true,
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });

  useEffect(() => {
    //@ts-ignore
    if (!navigator.getBattery) {
      setState((s) => ({
        ...s,
        supported: false,
        loading: false,
      }));
      return;
    }
    //@ts-ignore
    let battery = null;

    const handleChange = () => {
      setState({
        supported: true,
        loading: false, //@ts-ignore
        level: battery.level, //@ts-ignore
        charging: battery.charging, //@ts-ignore
        chargingTime: battery.chargingTime, //@ts-ignore
        dischargingTime: battery.dischargingTime,
      });
    };
    //@ts-ignore
    navigator.getBattery().then((b) => {
      battery = b;
      handleChange();
      b.addEventListener("levelchange", handleChange);
      b.addEventListener("chargingchange", handleChange);
      b.addEventListener("chargingtimechange", handleChange);
      b.addEventListener("dischargingtimechange", handleChange);
    });

    return () => {
      //@ts-ignore
      if (battery) {
        battery.removeEventListener("levelchange", handleChange);
        battery.removeEventListener("chargingchange", handleChange);
        battery.removeEventListener("chargingtimechange", handleChange);
        battery.removeEventListener("dischargingtimechange", handleChange);
      }
    };
  }, []);

  return state;
};

const Battery = ({ level, charging, chargingTime, dischargingTime }: any) => {
  console.log(charging, "chargingTime");
  return (
    <div className="flex flex-col justify-center ">
      <div className="my-4 flex justify-center">
        <BatteryGauge value={level} size={100} />
      </div>
      <p>
        <span className="text-[orange]">Battert Percent:</span> {level}%
      </p>
      <p>
        <span className="text-[orange]">charging Time:</span>{" "}
        {charging ? "true" : "false"}
      </p>
      <p>
        <span className="text-[orange]">Charging Time:</span> {chargingTime}
      </p>
      <p>
        <span className="text-[orange]">Discharging Time:</span>{" "}
        {dischargingTime}
      </p>
    </div>
  );
};
const Challange70 = () => {
  const { loading, level, charging, chargingTime, dischargingTime } =
    useBattery();
  return (
    <div className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl font-bold">useBattery</h1>
      {!loading ? (
        <Battery //@ts-ignore
          level={level * 100}
          charging={charging}
          chargingTime={chargingTime}
          dischargingTime={dischargingTime}
          customization={{
            batteryBody: {
              strokeWidth: 2,
              cornerRadius: 5,
              fill: "transparent",
              strokeColor: "#f59e0b",
            },
            batteryCap: {
              fill: "#f59e0b",
              strokeWidth: 2,
              strokeColor: "#f59e0b",
              cornerRadius: 2,
            },
            batteryMeter: {
              fill: `url(#batteryGradient)`,
              lowBatteryValue: 20,
              lowBatteryFill: "red",
              outerGap: 1,
              noOfCells: 1,
            },
            readingText: {
              lightContrastColor: "#111",
              darkContrastColor: "#fef08a",
              lowBatteryColor: "red",
              fontFamily: "Arial",
            },
            charger: {
              fill: "green",
              flashThreshold: 30,
            },
          }}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Challange70;
