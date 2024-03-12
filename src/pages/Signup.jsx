import "animate.css";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { FaRegFlag } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startCreatingUserWithEmailPassword } from "../store/auth/thunks";


const Signup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    dispatch(startCreatingUserWithEmailPassword(data));
    reset();
  });
  return (
    <div className="w-full h-full animate__animated animate__fadeIn animate__faster">
      <div className=" bg-amazonclone-light_blu :w-[100%] flex items-center p-5">
        <img
          className=" object-contain w-[90px] h-[30px] "
          src={"../../../public/images/amazon.png"}
          alt=""
        />
      </div>

      <div className="">
        <p className="p-3 font-medium text-xl">
          Create account{" "}
          <span className="text-sm ">Are you new to Amazon?</span>
        </p>
        <div>
          <form onSubmit={onSubmit} className="flex flex-col p-3 gap-1">
            <p className="p-1 text-sm">Name</p>
            <input
              className="rounded border border-slate-300 p-1"
              type="text"
              placeholder="name"
              name="displayName"
              {...register("displayName", {
                required: {
                  value: true,
                  message: "The name is required",
                },
                minLength: {
                  value: 2,
                  message: "The name must be at least 2 characters",
                },
                maxLength: {
                  value: 20,
                  message: "The name must not contain more than 20 characters",
                },
              })}
            />

            {errors.name && (
              <span className="text-red-600 font-semibold text-xs block">
                {errors.name.message}
              </span>
            )}
            <p className="p-1 text-sm">Email</p>
            <input
              className="rounded border border-slate-300 p-1"
              type="email"
              placeholder="email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600 font-semibold text-xs block">
                {errors.email.message}
              </span>
            )}
            <p className="p-1 text-sm">Password</p>
            <input
              className="rounded border border-slate-300 p-1"
              type="password"
              placeholder="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: " The password is required",
                },
                minLength: {
                  value: 6,
                  message: "The name must be at least 6 characters",
                },
                maxLength: {
                  value: 15,
                  message: "The name must not contain more than 15 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-600 font-semibold text-xs block">
                {errors.password.message}
              </span>
            )}
            <button
              disabled={isCheckingAuthentication}
              className="rounded border border-[#FEBD69] bg-yellow-300 text-base p-1 mt-3 "
              type="submit"
            >
              Register
            </button>
            {errorMessage && (
              <span className="text-red-900 font-semibold text-xs rounded border bg-red-200 p-1  flex justify-center items-center">
                {errorMessage}
              </span>
            )}
            <p className="text-sm leading-4 p-3">
              By continuing, you agree to Amazon's Terms of Use and Sale .
              Please see our Privacy Notice , Cookie Notice , and Interest-Based
              Ads Notice .
            </p>

            <p className="text-xs p-3 ">
              ¿Do you already have an account?{" "}
              <Link to={"login"} className="font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="bg-amazonclone text-white">
        <div className="bg-amazonclone p-3 text-white">
          <div className="bg-amazonclone flex justify-center items-center gap-6 pt-3 text-white">
            <div className="flex justify-center items-center  gap-2">
              <div>
                <TbWorld />
              </div>
              <div>Castellano</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div>
                <FaRegFlag />
              </div>
              <div>España</div>
            </div>
          </div>
        </div>
        <div className="bg-amazonclone text-white flex text-[10px] w-full p-5 justify-center flex-wrap sm:p-0 ">
          <div className="pl-3">Conditions of Use and Salea</div>
          <div className="pl-3">Notice of Privacy</div>
          <div className="pl-3">Legal area</div>
          <div className="pl-3">Cookies</div>
          <div className="pl-3">Interest-based advertising</div>
        </div>
        <div className="bg-amazonclone text-white flex justify-center w-full pb-5">
          <div className="text-[9px]">© 2024, Dayana Cruz</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
