import { ReactNode, useContext, useState } from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import "react-phone-input-2/lib/style.css";
import SignupForm from '../../Component/LoginComponent/SignupForm';
import Header from "../../Component/Header";
import LoginForm from "../../Component/LoginComponent/LoginForm";
import { DialogContext } from "../../Context/DialogContext";
import TermsOfUse from "../../links/TermsOfUse";
import PrivacyPolicy from "../../links/PrivacyPolicy";
import ContactInfo from "../../links/ContactInfo";


export default function Login() {
  const [isLoginView, setIsLoginView] = useState<boolean>(true);
  const { showDialog } = useContext(DialogContext);

  const hostname =
    (window.location.hostname || "").replace(/www./, "") || "check-point.live";

  const websiteName =
    hostname.substring(0, hostname.lastIndexOf(".")) || "check-point";

  const openLink = (title: string, node: ReactNode) => {
    showDialog({
      title: title,
      content: <section className="ck-content">{node}</section>,
      cancelCta: "Ok",
      disableCancel: true,
      size: "lg",
      scrollable: true,
    });
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdZ5TspAAAAAIHPHnvXpyl1q7AP1ifD1IY0_ue3">
      <Header />

      <div className="container mx-auto">
        <div className=" bg-green-800 text-white text-center text-sm mt-2 p-2 rounded-md">
          For full access to {websiteName}, purchase from Yubha website&nbsp;
          <a
            href="https://www.Yubha.com"
            target="_blank"
            className="text-blue-300 underline"
          >
            www.yubha.com
          </a>
          .
          <br />
          <div className="mt-1">
            To join Yubha Discord channel, click&nbsp;
            <a
              className="text-blue-300 underline"
              target="_blank"
              href="https://discord.com/invite/tjpcKDPM"
            >
              here
            </a>
          </div>
        </div>
        <div
          className="flex z-20 relative bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 p-2 my-20 shadow-lg overflow-auto"
          style={{
            maxWidth: "500px",
            margin: "2% auto",
            maxHeight: "calc(100vH - 180px)",
          }}
        >
          <div className="w-full md:px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full rounded-lg bg-blueGray-200">
              <div className="rounded-t my-2 px-6 pb-2">
                {/* <div className="text-center">
                  <img
                    src="/logo.png"
                    style={{ height: "60px", margin: "0 auto" }}
                  />
                </div> */}
                <div className="text-center">
                  <h3 className="text-blueGray-500 text-lg font-bold">
                    {isLoginView ? "Sign in" : "Register"}
                  </h3>
                </div>
                <hr className="mt-2 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-2 lg:px-10 py-2 pt-0">
                {isLoginView ? (
                  <LoginForm setIsLoginView={setIsLoginView} />
                ) : (
                  <SignupForm setIsLoginView={setIsLoginView} />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" bg-green-800 text-white text-center text-sm mt-2 p-2 rounded-md">
          <div className="">
            To join Yubha Discord channel, click&nbsp;
            <a
              className="text-blue-300 underline"
              target="_blank"
              href="https://discord.com/invite/tjpcKDPM"
            >
              here
            </a>
          </div>
        </div> */}
      </div>
      <footer className="lg:absolute text-center mt-4 w-full p-2 bottom-0 bg-white border-b dark:border-slate-800 dark:bg-slate-800 z-10">
        <button
          className="dark:bg-slate-700 bg-gray-100 p-2 rounded-sm m-2"
          onClick={() =>
            openLink("Terms of Use", <TermsOfUse hostname={hostname} />)
          }
        >
          Terms of Use
        </button>

        <button
          className="dark:bg-slate-700 bg-gray-100 p-2 rounded-sm m-2"
          onClick={() =>
            openLink("Privacy Policy", <PrivacyPolicy hostname={hostname} />)
          }
        >
          Privacy Policy
        </button>
        <button
          className="dark:bg-slate-700 bg-gray-100 p-2 rounded-sm m-2"
          onClick={() =>
            openLink("Contact Information", <ContactInfo hostname={hostname} />)
          }
        >
          Contact Information
        </button>
      </footer>
    </GoogleReCaptchaProvider>
  );
}
