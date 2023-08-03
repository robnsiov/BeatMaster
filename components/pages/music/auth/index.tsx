"use client";
import color from "color";

const Auth = () => {
  return (
    <>
      <div
        className="absolute inset-0 z-[200] bg-[#1011138c] 
      backdrop-blur-sm flex justify-center items-center px-2"
      >
        <div
          style={{ background: color("#0C254D").alpha(0.5) ?? "" }}
          className="p-5 w-full max-w-sm rounded-md"
        >
          <form className="w-full flex justify-center items-center flex-col">
            <label className="w-full mb-1.5">
              <span className="text-white text-sm mb-1">Email</span>
              <input
                className="w-full 
            p-2 outline-none rounded-md  text-zinc-300 border-2"
                style={{
                  background: color("#0C254D").darken(0.3).alpha(0.8) ?? "",
                  borderColor: color("#0C254D").darken(0.8).alpha(0.4) ?? "",
                }}
              />
            </label>
            <label className="w-full mb-3">
              <span className="text-white text-sm mb-1">Password</span>
              <input
                className="w-full 
            p-2 outline-none rounded-md  text-zinc-300 border-2"
                style={{
                  background: color("#0C254D").darken(0.3).alpha(0.8) ?? "",
                  borderColor: color("#0C254D").darken(0.8).alpha(0.4) ?? "",
                }}
              />
            </label>

            <div className="w-full flex justify-between items-center">
              <span
                className="text-white text-sm mr-2 cursor-pointer hover:underline 
              hover:decoration-slate-100"
              >
                Have an account? Login
              </span>
              <button
                className="rounded-md px-3 py-2 text-white hover:!bg-primary"
                style={{
                  background: color("#0C254D").darken(0.5).alpha(0.8) ?? "",
                  borderColor: color("#0C254D").darken(0.8).alpha(0.4) ?? "",
                }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Auth;
