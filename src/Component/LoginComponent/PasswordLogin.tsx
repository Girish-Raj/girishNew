import { FormEvent, useRef, useState, useContext } from "react";

import { ToastContext } from "../../Context/ToastContext";
import { Phone } from "../../Page/Login/type";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Button from "../Button";
import { createFormData, postForm } from "../../Utils/fetch";
import { useNavigate } from "react-router-dom";

function PasswordLogin() {

const navigate = useNavigate()
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { toast } = useContext(ToastContext);

  const [showPassword, setShowPassword] = useState(false);
  const [waiting, setWaiting] = useState<boolean>(false);

  const phone = useRef<Phone | undefined>();

  const formRef = useRef(null);

  const signIn = async (e: FormEvent) => {
     navigate("/quiz_link/12345")
    e.preventDefault();
    if (formRef.current) {
     
      const form = formRef.current as HTMLFormElement;

      if (form && executeRecaptcha) {
        const payload = {
          email: (form.elements.namedItem("email") as HTMLFormElement)?.value,
          password: (form.elements.namedItem("password") as HTMLFormElement)
            ?.value,
        };

        const formData = createFormData(payload);
        console.log(formData,"this is form data");
        setWaiting(true);

        try {
          const token = await executeRecaptcha();
          const response = await postForm("/data/login", formData, "POST", {
            token: token,
          });
      

          //FIXME to do it better
          if (response.url.indexOf("get_user_info") < 0) {
           
       
          } else {
            if (response.status == 401) {
              console.log(response);
            }
            toast.error("Invalid credentials");
          }
        } catch (ex) {
          console.log("Error : ", ex);
          if ((ex as any).status == 498) {
            toast.error(
              "Expired session, please refresh the page and try again"
            );
          } else {
            toast.error("Invalid credentials");
          }
        }
        setWaiting(false);
      }
    }
  };

  return (
    <>
      <form onSubmit={signIn} ref={formRef}>
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
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="appearance-none checked:bg-blue-500 ..."
              defaultChecked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <span className="ml-2 text-sm font-semibold text-blueGray-600">
              Show Password
            </span>
          </label>
        </div>

        <div className="text-center mt-6">
          <Button 
            className="btn py-2 px-4 rounded"
            waiting={waiting || !executeRecaptcha}
          >
            {executeRecaptcha ? "Sign In" : "Loading"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default PasswordLogin;
