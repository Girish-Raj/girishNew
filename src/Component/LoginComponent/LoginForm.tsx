import { useState } from "react";
import PasswordLogin from "./PasswordLogin";
import OtpLogin from "./OtpLogin";

type Props = {
  setIsLoginView: (value: boolean) => void;  // Specify boolean type for clarity
};

function LoginForm({ setIsLoginView }: Props) {
  const [isPasswordView, setIsPasswordView] = useState<boolean>(true);

  const toggleView = (): void => {
    setIsPasswordView((prevView) => !prevView);
  };

  return (
    <>
      {/* Render PasswordLogin or OtpLogin based on state */}
      {isPasswordView ? <PasswordLogin /> : <OtpLogin />}

      {/* Toggle between password and OTP view */}
      <button
        className="mt-6 text-center text-blue-800 dark:text-blue-200 text-sm underline cursor-pointer w-full"
        onClick={toggleView}
      >
        {isPasswordView
          ? "Or sign in using WhatsApp OTP"
          : "Or sign in using password"}
      </button>

      {/* Divider */}
      <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

      {/* Switch to Registration View */}
      <button
        className="text-center text-sm cursor-pointer w-full"
        onClick={() => setIsLoginView(false)}
      >
        <span>New User?&nbsp;</span>
        <span className="text-blue-800 dark:text-blue-200 underline">
          Register for Free Trial (Limited Access)
        </span>
      </button>
    </>
  );
}

export default LoginForm;
