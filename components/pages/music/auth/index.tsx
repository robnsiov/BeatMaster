"use client";
import useAuth from "./use";
import LoadingIcon from "../../home/icons/loading";
import cls from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "@mantine/hooks";
import Modal from "@/components/shared/modal";

const Auth = () => {
  const {
    colors,
    handleSubmit,
    register,
    formType,
    isLoading,
    changeFormType,
    errors,
    showAuthForm,
    setShowAuthForm,
    isAuthenticated,
  } = useAuth();

  return (
    <>
      <Modal
        open={showAuthForm && isAuthenticated !== "isAuthenticated"}
        setOpen={setShowAuthForm}
      >
        <div
          style={{ background: colors.formBackground }}
          className="p-5 w-full max-w-md"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-center flex-col"
            autoComplete="off"
          >
            <label className="w-full mb-1.5 cursor-pointer">
              <span className="text-white text-sm mb-1">Email</span>
              <input
                spellCheck={false}
                {...register("email")}
                className={cls(
                  `w-full 
            p-2 outline-none duration-200 transition-all
            text-zinc-300 border-2 focus:!border-primary`,
                  {
                    "outline-2 outline-offset-[-2px] outline-red-500":
                      errors.email,
                  }
                )}
                style={{
                  background: colors.inputBackground,
                  borderColor: colors.inputBorder,
                }}
              />
            </label>
            <label className="w-full mb-1.5 cursor-pointer">
              <span className="text-white text-sm mb-1">Password</span>
              <input
                spellCheck={false}
                {...register("password")}
                className={cls(
                  `w-full 
            p-2 outline-none duration-200 transition-all
            text-zinc-300 border-2 focus:!border-primary`,
                  {
                    "outline-2 outline-offset-[-2px] outline-red-500":
                      errors.password,
                  }
                )}
                style={{
                  background: colors.inputBackground,
                  borderColor: colors.inputBorder,
                }}
              />
            </label>

            <div className="w-full flex justify-between items-center mt-4">
              <span
                className={cls(
                  `text-white text-sm mr-2 cursor-pointer hover:underline 
              hover:decoration-slate-100 transition-all duration-200`,
                  isLoading
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer opacity-100"
                )}
                onClick={changeFormType}
              >
                {formType === "Sing in"
                  ? "Don't have an account? Sign up"
                  : "Have an account? Sign in"}
              </span>
              <button
                className={cls(
                  `whitespace-nowrap px-3 py-2 text-white 
                transition-all duration-200 hover:!bg-primary
                flex justify-center items-center text-sm`,
                  isLoading ? "cursor-not-allowed" : "cursor-pointer"
                )}
                type="submit"
                style={{
                  background: colors.buttonBackground,
                  borderColor: colors.buttonBorder,
                }}
              >
                <span>{formType}</span>
                <div
                  className={cls(
                    `transition-all duration-300
                     scale-90 aspect-square relative`,
                    isLoading ? "ml-5 mr-2" : "ml-0 mr-0"
                  )}
                >
                  <LoadingIcon isFetching={isLoading} />
                </div>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default Auth;
