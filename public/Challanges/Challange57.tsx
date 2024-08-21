import React from "react";

const initialState = {
  team: "Utah Jazz",
  wins: 2138,
  losses: 1789,
  championships: 0,
};

const isPlainObject = (value: any) => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

const useObjectState = (initialValue: any) => {
  const [state, setState] = React.useState(initialValue);

  const handleUpdate = React.useCallback((arg: any) => {
    if (typeof arg === "function") {
      setState((s: any) => {
        const newState = arg(s);

        if (isPlainObject(newState)) {
          return {
            ...s,
            ...newState,
          };
        }
      });
    }

    if (isPlainObject(arg)) {
      setState((s: any) => ({
        ...s,
        ...arg,
      }));
    }
  }, []);

  return [state, handleUpdate];
};

const Challange57 = () => {
  const [state, setState] = useObjectState(initialState);

  const handleAddWin = () => {
    setState({
      wins: state.wins + 1,
    });
  };

  const handleAddLoss = () => {
    setState({
      losses: state.losses + 1,
    });
  };

  const handleAddChampionship = () => {
    setState({
      championships: state.championships + 1,
    });
  };

  const handleReset = () => {
    setState(initialState);
  };
  console.log(state);

  return (
    <div className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-bold text-xl">UseObjectState</h1>
      <div className="text-[orange] underline flex justify-center items-center gap-4">
        <button onClick={handleAddWin}>Add Win</button>
        <button onClick={handleAddLoss}>Add Loss</button>
        <button onClick={handleAddChampionship}>Add Championship</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <table className="table-auto border-separate border border-[lightgray] w-[450px] text-center">
        <thead>
          <tr className="bg-[#8f6517]">
            <th className="px-4 py-2">Team</th>
            <th className="px-4 py-2">Wins</th>
            <th className="px-4 py-2">Losses</th>
            <th className="px-4 py-2">Championships</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="border px-4 py-2">{state.team}</td>
            <td className="border px-4 py-2">{state.wins}</td>
            <td className="border px-4 py-2">{state.losses}</td>
            <td className="border px-4 py-2">{state.championships}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Challange57;
