import { useState, useRef, useEffect } from "react";

const useGeolocation = (options = {}) => {
  const [state, setState] = useState({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  });

  const optionsRef = useRef(options);

  useEffect(() => {
    const onEvent = ({ coords, timestamp }: any) => {
      setState({
        loading: false,
        timestamp,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
        error: null,
      });
    };

    const onEventError = (error: any) => {
      setState((s) => ({
        ...s,
        loading: false,
        error,
      }));
    };

    navigator.geolocation.getCurrentPosition(
      onEvent,
      onEventError,
      optionsRef.current
    );

    const watchId = navigator.geolocation.watchPosition(
      onEvent,
      onEventError,
      optionsRef.current
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return state;
};

const Location = () => {
  const state = useGeolocation();

  if (state.loading) {
    return <p>loading... (you may need to enable permissions)</p>;
  }

  if (state.error) {
    return <p>Enable permissions to access your location data</p>;
  }

  return <Demo state={state} />;
};

const Demo = ({ state }: any) => {
  return (
    <div className="table w-[400px] text-left border border-[orange] rounded-md mt-4">
      <div className="table-row-group">
        <div className="table-row border-b border-[orange]">
          <div className="table-cell px-4 py-2 font-bold text-[orange]">
            Timestamp
          </div>
          <div className="table-cell px-4 py-2">{state.timestamp}</div>
        </div>
        <div className="table-row border-b border-[orange]">
          <div className="table-cell px-4 py-2 font-bold text-[orange]">
            Longitude
          </div>
          <div className="table-cell px-4 py-2">{state.longitude}</div>
        </div>
        <div className="table-row border-b border-[orange]">
          <div className="table-cell px-4 py-2 font-bold text-[orange]">
            Latitude
          </div>
          <div className="table-cell px-4 py-2">{state.latitude}</div>
        </div>
        <div className="table-row">
          <div className="table-cell px-4 py-2 font-bold text-[orange]">
            Accuracy
          </div>
          <div className="table-cell px-4 py-2">{state.accuracy}</div>
        </div>
      </div>
    </div>
  );
};

const Challange78 = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl font-bold">useGeolocation</h1>
      <Location />
    </section>
  );
};

export default Challange78;
