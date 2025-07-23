import React from "react";
import elements from "../elements.json";

export default function Elements() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-18 gap-1 p-4">
        {elements.map((el) => (
          <div
            key={el.atomicNumber}
            style={{
              gridColumn: el.x,
              gridRow: el.y,
              backgroundColor: el.background,
            }}
            className={`p-2 rounded-xl shadow text-center text-sm ${el.color} hover:scale-105 transition-transform duration-200`}
          >
            <div className="text-xs">{el.atomicNumber}</div>
            <div className="text-lg font-bold">{el.symbol}</div>
            <div className="text-[10px]">{el.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
