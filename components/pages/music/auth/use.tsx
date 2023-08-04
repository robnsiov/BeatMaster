import color from "color";
import { useCallback, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTypeImpl, InputsImpl } from "./types";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRecoilState } from "recoil";
import showAuthFormState from "@/context/show-auth-form";
import isAuthenticatedState from "@/context/is-authenticated";
import { MusicApiImpl } from "@/types/music";
import makeToast from "@/utils/request/make-taost";

const useAuth = () => {
  const [formType, setFormType] = useState<FormTypeImpl>("Sing in");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedState);
  const [showAuthForm, setShowAuthForm] = useRecoilState(showAuthFormState);

  const { data } = useQuery({
    queryKey: ["music"],
    queryFn: () => ({} as { data: MusicApiImpl } | undefined),
    enabled: false,
  });

  const colors = useCallback(() => {
    const primaryColor = data?.data.color;

    return {
      formBackground: color(primaryColor).alpha(0.5) as any,
      inputBackground: color(primaryColor).darken(0.3).alpha(0.8) as any,
      inputBorder: color(primaryColor).darken(0.8).alpha(0.4) as any,
      buttonBackground: color(primaryColor).darken(0.5).alpha(0.8) as any,
      buttonBorder: color(primaryColor).darken(0.8).alpha(0.4) as any,
    };
  }, [data?.data.color]);

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

  const mutation = useMutation({
    mutationFn: (data: InputsImpl) => qyeryFunc(data),
    onMutate() {
      setIsLoading(true);
    },
    onSettled() {
      setIsLoading(false);
    },
    onSuccess() {
      makeToast({ msg: "successfully", type: "success" });
      setShowAuthForm(false);
      setIsAuthenticated("isAuthenticated");
      // set token on cookie or localstorage
    },
    onError() {
      // duplicate email
      // makeToast({ msg: "duplicate email", type: "error" });

      // server error
      makeToast({ msg: "server error", type: "error" });
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
    showAuthForm,
    setShowAuthForm,
    isAuthenticated,
  };
};
export default useAuth;
