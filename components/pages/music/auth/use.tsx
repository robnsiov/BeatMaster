import color from "color";
import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTypeImpl, InputsImpl } from "./types";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRecoilState } from "recoil";
import showAuthFormState from "@/context/show-auth-form";
import { useEffect } from "react";

const useAuth = () => {
  const [formType, setFormType] = useState<FormTypeImpl>("Sing in");
  const [isLoading, setIsLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useRecoilState(showAuthFormState);
  const [showForm, setShowForm] = useState(true);
  const notify = (message: string) => toast.error(message);

  useEffect(() => {
    setShowForm(showOverlay);
  }, [showOverlay]);

  const colors = useCallback(() => {
    const primaryColor =
      document.documentElement.style.getPropertyValue("--primary");
    return {
      formBackground: color(primaryColor).alpha(0.5) as any,
      inputBackground: color(primaryColor).darken(0.3).alpha(0.8) as any,
      inputBorder: color(primaryColor).darken(0.8).alpha(0.4) as any,
      buttonBackground: color(primaryColor).darken(0.5).alpha(0.8) as any,
      buttonBorder: color(primaryColor).darken(0.8).alpha(0.4) as any,
    };
  }, []);

  const validation = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8).max(64),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsImpl>({ resolver: zodResolver(validation) });

  const qyeryFunc = (data: InputsImpl) => {
    const url = formType === "Sign up" ? "/signup" : "/signin";
    return axios(url);
  };

  const handleShowForm = () => {
    setTimeout(() => {
      setShowOverlay(false);
    }, 500);
    setShowForm(false);
  };

  const mutation = useMutation({
    mutationFn: (data: InputsImpl) => qyeryFunc(data),
    onMutate() {
      setIsLoading(true);
    },
    onSettled() {
      setIsLoading(false);
    },
    onSuccess() {
      notify("successfully");
      handleShowForm();
    },
    onError() {
      // duplicate email
      // notify("duplicate email");

      // server error
      notify("server error");
    },
  });

  const onSubmit: SubmitHandler<InputsImpl> = (data) => {
    if (isLoading) return;
    mutation.mutate(data);
  };

  const changeFormType = () => {
    if (isLoading) return;
    setFormType((prev) => (prev === "Sign up" ? "Sing in" : "Sign up"));
  };

  return {
    colors: colors(),
    handleSubmit: handleSubmit(onSubmit),
    register,
    formType,
    isLoading,
    changeFormType,
    errors,
    showOverlay,
    showForm,
    handleShowForm,
  };
};
export default useAuth;
