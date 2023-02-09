import React from "react";

export default function Input({
  type,
  name,
  error,
  onChange,
  value,
  placeholder,
}) {
  return (
    <>
      <div className="flex justify-center mt-6 px-[100px]">
        <input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="py-[20px] placeholder:text-[#6e827f] rounded-[10px] px-5 text-base w-full"
        />
      </div>
      {error && (
        <span style={{ color: "red", paddingLeft: "100px" }}>{error}</span>
      )}
    </>
  );
}
