import { FormEvent, useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "../../Context/ToastContext";
import { useThemeProvider } from "../../Context/ThemeContext";
import { Phone } from "../../Page/Login/type";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Button from "../Button";
import PhoneInput, { CountryData } from "react-phone-input-2";
import { api } from "../../Utils/fetch";

function OtpLogin() {
  const { currentTheme } = useThemeProvider();
  const { executeRecaptcha } = useGoogleReCaptcha();
  let navigate = useNavigate();
  const { toast } = useContext(ToastContext);

  const [mobileView, setMobileView] = useState(true);
  const [waiting, setWaiting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const phone = useRef<Phone | undefined>();

  const otpRef = useRef<HTMLInputElement | null>(null);

  const isSameMobileNumber = ({
    country_code,
    mobile_number,
  }: {
    country_code: string;
    mobile_number: string;
  }) => {
    try {
      const mobileStr = sessionStorage.getItem("otp_mobile");
      if (mobileStr) {
        const mobile = JSON.parse(mobileStr) as { [key: string]: string };
        return (
          mobile?.country_code == country_code &&
          mobile?.mobile_number == mobile_number
        );
      } else {
        return false;
      }
    } catch (ex) {
      return false;
    }
  };

  const sendOtp = async () => {
    if (!executeRecaptcha) {
      return;
    }
    if (!phone.current?.dialCode || !phone.current?.phone_number) {
      toast.error("Please provide mobile number with country code");
      return;
    }

    const mobilePayload = {
      country_code: `+${phone.current?.dialCode}`,
      mobile_number: phone.current?.phone_number,
    };

    try {
      if (isSameMobileNumber(mobilePayload)) {
        toast.success("Otp sent to the number if registered.");
        return setMobileView(false);
      }

      setWaiting(true);
      const token = await executeRecaptcha();
      const response = await api("/data/generate_otp", "POST", mobilePayload, {
        token: token,
      });

      if (response.status == 200) {
        const res = await response.json();
        toast.success(res?.success || "Otp sent to the number if registered.");
        setMobileView(false);
        try {
          sessionStorage.setItem("otp_mobile", JSON.stringify(mobilePayload));
        } catch (ex) {}
      } else if (response.status == 498) {
        toast.error("Expired session, please refresh the page and try again");
      } else {
        const res = await response.json();
        toast.error(res?.error || "Error while sending OTP over WhatsApp");
      }
    } catch (ex) {
      toast.error("Error while sending OTP over WhatsApp");
    }
    setWaiting(false);
  };

  const verifyOtp = async () => {
    if (!executeRecaptcha) {
      return;
    }
    const otp = otpRef.current?.value;
    if (!otp) {
      return toast.error("Please enter OTP");
    } else if (+otp != +otp) {
      return toast.error("Please enter valid OTP");
    }

    setWaiting(true);
    try {
      const token = await executeRecaptcha();
      const response = await api(
        "/data/validate_otp",
        "POST",
        {
          country_code: `+${phone.current?.dialCode}`,
          mobile_number: phone.current?.phone_number,
          user_otp: otp,
        },
        {
          token: token,
        }
      );

      if (response.status == 200) {
        toast.success("Otp verified. Signing in...");
        navigate("/", { replace: true });
        try {
          sessionStorage.removeItem("otp_mobile");
        } catch (ex) {}
      } else if (response.status == 498) {
        toast.error("Expired session, please refresh the page and try again");
      } else {
        const res = await response.json();
        toast.error(res?.error || "Invalid OTP, please try again");
      }
    } catch (ex) {
      toast.error("Invalid OTP, please try again");
    }
    setWaiting(false);
    setMobileView(false);
  };

  const signIn = async (e: FormEvent) => {
    e.preventDefault();
    mobileView ? await sendOtp() : await verifyOtp();
  };

  return (
    <>
      <form onSubmit={signIn}>
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-confirmPassword"
          >
            Mobile number
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
              currentTheme === "light"
                ? "!bg-white"
                : "!bg-slate-800 dark border"
            }
            disabled={!mobileView}
            onChange={(value, data) => {
              phone.current = {
                ...(data as CountryData),
                phone_number: value.slice(
                  (data as CountryData).dialCode?.length
                ),
              };
            }}
          />
        </div>

        {mobileView ? (
          <p className="text-sm text-center mt-4 p-2 opacity-60">
            Please note that you will only receive <b>OTP via WhatsApp</b> if
            you have provided mobile number while registration or scheduling
            quiz
          </p>
        ) : (
          <p className="text-right">
            <span
              className="text-blue-800 font-bold dark:text-blue-200 underline text-sm cursor-pointer"
              onClick={() => setMobileView(true)}
            >
              Edit
            </span>
          </p>
        )}

        {!mobileView && (
          <>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Enter OTP
              </label>
              <input
                ref={otpRef}
                type={showPassword ? "text" : "password"}
                name="password"
                required={true}
                className="border border-slate-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
                placeholder="Otp sent over WhatsApp"
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
                  Show
                </span>
              </label>
            </div>
          </>
        )}

        <div className="text-center mt-6">
          <Button
            className="btn py-2 px-4 rounded"
            waiting={waiting || !executeRecaptcha}
          >
            {mobileView ? "Send OTP" : "Submit OTP"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default OtpLogin;