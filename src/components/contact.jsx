import React from "react";

export default function contact() {
  return (
    <form className="w-[100vw] h-[100vh]   bg-[#f2f2ff] flex flex-col items-center	 justify-center  ">
      <div className=" w-[90%] flex flex-col items-start justify-start gap-2">
        <div className="  flex flex-col gap-2 ">
          <input
            placeholder="Name"
            type="text"
            style={{
              boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
            }}
          />
          <input
            placeholder="Email"
            type="email"
            style={{
              boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
            }}
          />
        </div>
        <textarea
          className="w-[80%] h-[300px]"
          style={{
            boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
          }}
        ></textarea>
        <div className="flex flex-row gap-2">
          <h1>gmail@.com</h1>
          <h1>instagram</h1>
          <h1>facebook</h1>
          <h1>twitter</h1>
          <h1>phone number:555 555 55 </h1>
        </div>
      </div>
    </form>
  );
}
