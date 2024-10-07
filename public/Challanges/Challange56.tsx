import { useState, useCallback } from "react";
import { DeleteIcon, EditIcon } from "~/assets/svgIcons";
const useList = (defaultList = []) => {
  const [list, setList] = useState(defaultList);

  const set = useCallback((l: any) => {
    setList(l);
  }, []);

  const push = useCallback((element: any) => {
    //@ts-ignore

    setList((l) => [...l, element]);
  }, []);

  const removeAt = useCallback((index: any) => {
    setList((l) => [...l.slice(0, index), ...l.slice(index + 1)]);
  }, []);

  const insertAt = useCallback((index: any, element: any) => {
    //@ts-ignore

    setList((l) => [...l.slice(0, index), element, ...l.slice(index)]);
  }, []);

  const updateAt = useCallback((index: any, element: any) => {
    //@ts-ignore

    setList((l) => l.map((e, i) => (i === index ? element : e)));
  }, []);

  const clear = useCallback(() => setList([]), []);

  return [list, { set, push, removeAt, insertAt, updateAt, clear }];
};

const Challange56 = () => {
  //@ts-ignore
  const [list, { set, push, removeAt, insertAt, updateAt, clear }] = useList([
    //@ts-ignore
    "First", //@ts-ignore
    "Second", //@ts-ignore
    "Third",
  ]);

  return (
    <div className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl text-semibold">UseList</h1>
      <div className="flex gap-4 text-[orange] underline">
        <button //@ts-ignore
          disabled={list.length < 1} //@ts-ignore
          className={list.length < 1 ? "text-[grey] underline" : ""}
          onClick={() => insertAt(1, "Inserted After First")}
        >
          Insert After First
        </button>
        <button //@ts-ignore
          disabled={list.length < 2} //@ts-ignore
          className={list.length < 2 ? "text-[grey] underline" : ""}
          onClick={() => removeAt(1)}
        >
          Remove Second Item
        </button>
        <button className="link" onClick={() => set([1, 2, 3])}>
          set([1, 2, 3])
        </button>
        <button className="link" onClick={() => clear()}>
          Clear
        </button>
      </div>
      <DemoList
        list={list}
        removeAt={removeAt}
        push={push}
        updateAt={updateAt}
      />
    </div>
  );
};

const DemoList = ({ list, removeAt, push, updateAt }: any) => {
  const [value, setValue] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setValue(list[index]); // Pre-fill the input with the current value
  };

  const handleUpdate = () => {
    if (value && editIndex !== null) {
      updateAt(editIndex, value);
      setEditIndex(null);
      setValue("");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="w-[420px] flex gap-2 ">
        <input
          type="text"
          placeholder={editIndex !== null ? "Edit Item" : "Add New"}
          className="w-full border border-[orange] px-2 py-2 rounded-md text-[black]"
          onChange={(e: any) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="bg-[#f59f00fb] rounded-sm px-6"
          onClick={
            editIndex !== null
              ? handleUpdate
              : () => {
                  if (value) {
                    push(value);
                    setValue("");
                  }
                }
          }
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      {list.map((title: any, index: any) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center bg-[#8C3061] rounded-sm py-2 px-2"
          >
            <p className="font-semibold">{title}</p>
            <div className="flex gap-2">
              <button
                className="bg-[#EB3678] p-2.5 rounded-full"
                onClick={() => handleEdit(index)}
              >
                <EditIcon />
              </button>
              <button
                className="bg-[#EB3678] p-2.5 rounded-full"
                onClick={() => removeAt(index)}
              >
                <DeleteIcon color={"#EBD3F8"} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Challange56;
