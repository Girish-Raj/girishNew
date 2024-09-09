import { FormEvent, useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "../../Context/ToastContext";
import { useThemeProvider } from "../../Context/ThemeContext";
import { Phone } from "../../Page/Login/type";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Button from "../Button";
import PhoneInput, { CountryData } from "react-phone-input-2";
import { api } from "../../Utils/fetch";


type Props = {
  setIsLoginView: Function;
};

function SignupForm({ setIsLoginView }: Props) {
  let navigate = useNavigate();
  const { toast } = useContext(ToastContext);
  const { currentTheme } = useThemeProvider();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const registerFormRef = useRef(null);
  const phone = useRef<Phone | undefined>();

  const [waiting, setWaiting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const register = async (e: FormEvent) => {
    e.preventDefault();
    if (registerFormRef.current) {
      const form = registerFormRef.current as HTMLFormElement;

      const enteredPhone =
        phone.current?.dialCode && phone.current?.phone_number
          ? {
              country_code: `+${phone.current?.dialCode}`,
              phone_number: phone.current?.phone_number,
            }
          : {
              country_code: "",
              phone_number: "",
            };

      if (form && executeRecaptcha) {
        const payload = {
          email: (form.elements.namedItem("email") as HTMLFormElement)?.value,
          password: (form.elements.namedItem("password") as HTMLFormElement)
            ?.value,
          confirmPassword: (
            form.elements.namedItem("confirmPassword") as HTMLFormElement
          )?.value,
          name: (form.elements.namedItem("name") as HTMLFormElement)?.value,
          course: (form.elements.namedItem("course") as HTMLFormElement)?.value,
          ...enteredPhone,
        };

        if (!payload.country_code || !payload.phone_number) {
          toast.error("Please provide mobile number with country code");
          return;
        }

        if (payload.password !== payload.confirmPassword) {
          toast.error("Password do not match");
          return;
        }
        
        if(!payload.course){
          toast.error("Please select a course for signup");
          return;
        }
        
        setWaiting(true);

        try {
          const token = await executeRecaptcha();
          const response = await api("/data/registerfree", "POST", payload, {
            token: token,
          });

          if (response.status == 200) {
            navigate("/", { replace: true });
          } else if (response.status == 498) {
            toast.error(
              "Expired session, please refresh the page and try again"
            );
          } else {
            const res = await response.json();
            toast.error(
              res?.error ||
                "Unable to register, please try again later or contact support"
            );
          }
        } catch (ex) {
          console.log("Error : ", ex);
          toast.error(
            "Unable to register, please try again later or contact support"
          );
        }
        setWaiting(false);
      }
    }
  };

  return (
    <form onSubmit={register} ref={registerFormRef}>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-name"
        >
          Full Name
        </label>
        <input
          type="name"
          name="name"
          required={true}
          className="border border-slate-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
          placeholder="Full Name"
        />
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          required={true}
          className="border border-slate-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
          placeholder="Email"
        />
      </div>

      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required={true}
          className="border border-slate-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
          placeholder="Password"
        />
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-confirmPassword"
        >
          Confirm Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          required={true}
          className="border border-slate-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
          placeholder="Password"
        />
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-confirmPassword"
        >
          Course
        </label>
        <select
          name="course"
          required={true}
          className="border border-slate-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
        >
          <option selected value="" disabled>
            Select Course
          </option>
          <option value="202301">CMT Level 1</option>
          <option value="202302">CMT Level 2</option>
          <option value="202303">CMT Level 3</option>
        </select>
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-confirmPassword"
        >
          Phone number
        </label>
        <PhoneInput
          placeholder="Enter phone number"
          value={
            phone.current?.phone_number
              ? `${phone.current?.dialCode}${phone.current?.phone_number}`
              : ""
          }
          country={"in"}
          containerClass="w-full border border-slate-300 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
          inputClass="!border-none !focus:border-none !focus:outline-none !w-full !ring-0 !bg-transparent"
          buttonClass="!bg-none  !border-none "
          countryCodeEditable={false}
          dropdownClass={
            currentTheme === "light" ? "!bg-white" : "!bg-slate-800 dark border"
          }
          onChange={(value, data) => {
            phone.current = {
              ...(data as CountryData),
              phone_number: value.slice((data as CountryData).dialCode?.length),
            };
          }}
        />
      </div>
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="appearance-none checked:bg-blue-500 ..."
            defaultChecked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <span className="ml-2 text-sm font-semibold text-blueGray-600">
            Show Passwords
          </span>
        </label>
      </div>

      <div className="text-center mt-6">
        <Button
          className="btn py-2 px-4 rounded"
          waiting={waiting || !executeRecaptcha}
        >
          {executeRecaptcha ? "Register" : "Loading"}
        </Button>
      </div>
      <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <button
        className="text-center  text-sm cursor-pointer w-full"
        onClick={() => setIsLoginView(true)}
      >
        <span>Existing User?&nbsp;</span>
        <span className="text-blue-800 dark:text-blue-200 underline">
          Sign In
        </span>
      </button>
    </form>
  );
}

export default SignupForm;
