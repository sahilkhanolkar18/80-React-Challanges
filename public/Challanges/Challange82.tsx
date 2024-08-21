import { useSyncExternalStore, useRef } from "react";
const useNetworkState = () => {
  const cache = useRef({});

  const getSnapshot = () => {
    const online = navigator.onLine;
    const connection = getConnection();

    const nextState = {
      online,
      downlink: connection?.downlink,
      downlinkMax: connection?.downlinkMax,
      effectiveType: connection?.effectiveType,
      rtt: connection?.rtt,
      saveData: connection?.saveData,
      type: connection?.type,
    };

    if (isShallowEqual(cache.current, nextState)) {
      return cache.current;
    } else {
      cache.current = nextState;
      return nextState;
    }
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

const isShallowEqual = (object1: any, object2: any) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const getConnection = () => {
  return (
    navigator?.connection ||
    navigator?.mozConnection ||
    navigator?.webkitConnection
  );
};

const subscribe = (callback: any) => {
  window.addEventListener("online", callback, { passive: true });
  window.addEventListener("offline", callback, { passive: true });

  const connection = getConnection();

  if (connection) {
    connection.addEventListener("change", callback, { passive: true });
  }

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);

    if (connection) {
      connection.removeEventListener("change", callback);
    }
  };
};

const getServerSnapshot = () => {
  throw Error("useNetworkState is a client-only hook");
};

const Challange82 = () => {
  const network = useNetworkState();

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl font-bold mb-4">useNetworkState</h1>

      <table className="table-auto border-separate border-spacing-2 w-[400px] border border-[gray] rounded-lg">
        <tbody>
          {Object.keys(network).map((key) => {
            return (
              <tr key={key} className={key}>
                <th className="px-4 py-2 text-left bg-[#f7a714] text-[white] font-semibold rounded-md">
                  {key}
                </th>
                <td className="px-4 py-2 bg-[#f4f4f4] text-[black] rounded-md">
                  {`${network[key]}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Challange82;
