// Utils import
import baseUrl from "../baseUrl";

// Package import
import React, { forwardRef, useEffect } from "react";

const FormWrapper = forwardRef(({ array, setter, isOpen, setIsOpen }, ref) => {
  FormWrapper.displayName = FormWrapper;

  useEffect(() => {
    let handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen, ref, setIsOpen]);

  return (
    <div ref={ref} className="absolute z-20 flex w-full flex-col bg-slate-600">
      {array.map((e, index) => (
        <p
          key={index}
          className="pl-1 text-black hover:bg-blue-500"
          onClick={() => {
            setter(e);
            setIsOpen(false);
          }}
        >
          {e}
        </p>
      ))}
    </div>
  );
});

export default FormWrapper;
