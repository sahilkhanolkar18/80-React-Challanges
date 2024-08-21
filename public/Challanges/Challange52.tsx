import { useState, useCallback } from "react";

const useQueue = (initialValue = []) => {
  const [queue, setQueue] = useState<any>(initialValue);

  const add = useCallback((element: any) => {
    setQueue((q) => [...q, element]);
  }, []);

  const remove = useCallback(() => {
    let removedElement;

    setQueue(([first, ...q]) => {
      removedElement = first;
      return q;
    });

    return removedElement;
  }, []);

  const clear = useCallback(() => {
    setQueue([]);
  }, []);

  return {
    add,
    remove,
    clear,
    first: queue[0],
    last: queue[queue.length - 1],
    size: queue.length,
    queue,
  };
};

const QueueDemo = ({ first, last, size, queue }: any) => {
  return (
    <>
      <div className="flex gap-2 justify-center items-center w-full px-4">
        <h2>Front</h2>
        <div className="bg-background rounded-lg h-[80px] w-full flex justify-start items-center px-2 gap-2">
          {queue.map((item: any, i: any) => {
            const isFirst = first === item;
            const isLast = last === item;
            if (isFirst) {
              return (
                <li
                  key={i}
                  className="h-[90%] w-[70px] border border-[#982B1C] rounded-lg list-none flex justify-center items-center"
                >
                  First: {item}
                </li>
              );
            }
            if (isLast) {
              return (
                <li
                  key={i}
                  className="h-[90%] w-[70px] border border-[#7A1CAC] rounded-lg list-none flex justify-center items-center"
                >
                  Last: {item}
                </li>
              );
            }
            return (
              <li
                key={i}
                className="h-[90%] w-[70px] border border-[#EBD3F8] rounded-lg list-none flex justify-center items-center"
              >
                Item: {item}
              </li>
            );
          })}
        </div>
        <h2>Back</h2>
      </div>
      <p className="text-sm">{size} items in the Queue</p>
    </>
  );
};

const Challange52 = () => {
  const { add, remove, clear, first, last, size, queue } = useQueue([1, 2, 3]);

  return (
    <div className="h-full flex flex-col justify-center items-center text-[white] gap-4 w-full">
      <header>
        <h1 className="text-2xl font-semibold">UseQueue</h1>
      </header>
      <div className="flex gap-4 text-[orange] underline">
        <button onClick={() => add((last || 0) + 1)}>Add</button>
        <button onClick={remove}>Remove</button>
        <button onClick={clear}>Clear</button>
      </div>
      <QueueDemo first={first} last={last} size={size} queue={queue} />
    </div>
  );
};

export default Challange52;
