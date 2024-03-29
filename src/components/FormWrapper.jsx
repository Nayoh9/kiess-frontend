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
    <div
      ref={ref}
      className="absolute z-20 flex w-full flex-col items-start border border-solid bg-white"
    >
      {array.map((e, index) => (
        <button
          key={index}
          className="w-full pl-1 text-left text-blackTextColor hover:bg-kiessColor"
          onClick={() => {
            setter(e);
            setIsOpen(false);
          }}
        >
          {e}
        </button>
      ))}
    </div>
  );
});

export default FormWrapper;
