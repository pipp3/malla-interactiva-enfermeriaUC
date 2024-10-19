import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
export default function Course({ cc, course, cr, id, code, req }) {
  
  const [completed, setCompleted] = useState(false);

  function handleComplete() {
    setCompleted(!completed);
  }

  return (
    <div className="relative">
      <div
        className={`rounded-lg shadow-sm mb-2 w-32 hover:cursor-pointer ${
          completed ? "opacity-50" : ""
        }`}
        onClick={handleComplete}
      >
      {/* Línea diagonal tachada */}
      {completed && (
        <div className="absolute inset-0 flex items-center justify-center">
           <AiOutlineClose className="w-24 h-24" />
          </div>
        )}
        <div className="flex justify-between bg-slate-400 font-bold px-2 py-1 items-center h-6">
          <p className="text-xs pl-1 text-white">{code}</p>
          <div className="relative inline-block">
            <div className="rounded-full bg-blue-500 h-5 w-5 flex items-center justify-center">
              <p className="text-xs text-white">{id}</p>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center text-center py-2 ${cc} w-full h-12 items-center`}
        >
          <p className="line-clamp-2 text-sm text-white font-medium">
            {course}
          </p>
        </div>
        <div className="flex justify-between p-1 bg-slate-400">
          <div className="flex justify-start">
            {req.map((r) => (
              <div key={r.id} className="mx-[1px] bg-sky-700 text-white p-[1px]">
                <p className="text-xs">{r.id}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            {/* creditos */}
            <p className="h-4 w-4 text-center text-xs text-white font-semibold">{cr}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
