import "animate.css";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { FaRegFlag } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLoginWithEmailPassword } from "../store/auth/thunks";

const LoginPage = () => {
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    dispatch(startLoginWithEmailPassword(data));
    reset();
  });

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <div className=" bg-amazonclone-light_blu flex items-center p-5 sm:bg-white">
        <img
          className=" object-contain w-[90px] h-[30px] sm:hidden "
          src={"../../../public/images/amazon.png"}
          alt=""
        />
      </div>

      <div className="sm:flex sm:justify-center sm:items-center hidden">
        <img
          src={"../../public/images/logo amazon.jpg"}
          className="object-contain w-[150px] h-[60px] "
        />
      </div>

      <div className="p-3 sm:text-center">
        <h3 className="text-2xl font-bold sm:text-lg">Welcome!</h3>
      </div>
      <div className="sm:rounded sm:border sm:border-slate-300 sm:m-36 sm:mt-0 sm:p-3 sm:mb-1 xl:w-[400px] xl:m-auto lg:w-[400px] lg:m-auto md:w-[400px] md:m-auto ">
        <p className="p-3 font-medium sm:text-sm">
          Login are you already a custumer?
        </p>
        <div>
          <form onSubmit={onSubmit} className="flex flex-col p-3 gap-1">
            <p className="p-1 text-sm sm:text-xs">Email</p>
            <input
              className="rounded border border-slate-300 p-1"
              type="text"
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

            <p className="p-1 text-sm sm:text-xs">Password</p>
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
              disabled={isAuthenticating}
              className="rounded border border-[#FEBD69] bg-yellow-300 text-base p-1 mt-3 sm:text-sm"
              type="submit"
            >
              Continue
            </button>
            {errorMessage && (
              <span className="text-red-900 font-semibold text-xs rounded border bg-red-200 p-1  flex justify-center items-center">
                {errorMessage}
              </span>
            )}
            <p className="text-sm leading-4 p-3 sm:text-xs">
              By continuing, you agree to Amazon's Terms of Use and Sale .
              Please see our Privacy Notice , Cookie Notice , and Interest-Based
              Ads Notice .
            </p>

            <p className="text-xs p-3 ">
              Don't have account?{" "}
              <Link to={"/signup"} className="font-bold">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="bg-amazonclone text-white sm:bg-white sm:text-black">
        <div className="bg-amazonclone p-3 text-white sm:bg-white sm:text-black ">
          <div className="bg-amazonclone flex justify-center items-center gap-6 pt-3 text-white sm:bg-white sm:text-black">
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
        <div className="bg-amazonclone text-white flex text-[10px] w-full p-5 justify-center flex-wrap sm:p-0 sm:bg-white sm:text-black ">
          <div className="pl-3">Conditions of Use and Salea</div>
          <div className="pl-3">Notice of Privacy</div>
          <div className="pl-3 sm:hidden">Legal area</div>
          <div className="pl-3 sm:hidden">Cookies</div>
          <div className="pl-3 sm:hidden">Interest-based advertising</div>
        </div>
        <div className="bg-amazonclone text-white flex justify-center w-full pb-5 sm:bg-white sm:text-black sm:p-1">
          <div className="text-[9px]">© 2024, Dayana Cruz</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
