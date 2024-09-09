import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Transition from "../Utils/Transition";


import { JsxElement } from "typescript";
import { DialogContext } from "../Context/DialogContext";
import { api } from "../Utils/fetch";
import { CourseContext } from "../Context/CourseContext";


type Props = {
  align: string;
};

function DropdownProfile({ align }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { showDialog } = useContext(DialogContext);
  const { user } = useContext(CourseContext);
  let navigate = useNavigate();

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const signOut = () => {
    showDialog({
      title: "Please confirm",
      content: "Are you sure you want to logout?",
      disableCancel: true,
      confirmCta: "Ok",
      onConfirm: async () => {
        await api("/data/logout");
        localStorage.removeItem("__session");
        setDropdownOpen(!dropdownOpen);
        navigate("/signin", { replace: true });
      },
    });
  };

  const seeAllCourses = () => {
    showDialog({
      title: "Courses",
   

      onCancel: async () => {
        window.location.reload();
      },
    });
  };

  const viewGuide = () => {
    showDialog({
      title: "Checkpoint Website Navigation Guide",
     
      cancelCta: "Ok",
      disableCancel: true,
      size: "xl",
      scrollable: true,
    });
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: Event) => {
      if (dropdown.current) {
        if (
          // @ts-ignore: Unreachable code error
          !dropdownOpen ||
          // @ts-ignore: Unreachable code error
          dropdown.current.contains(target) ||
          // @ts-ignore: Unreachable code error
          trigger?.current.contains(target)
        )
          return;

        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img
          className="w-8 h-8 rounded-full"
      
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="truncate capitalize mx-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
            {user}
          </span>
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className={`safari-dd origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === "right" ? "right-0" : "left-0"
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        appear={undefined}
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-2 mb-1 border-b border-slate-200 dark:border-slate-700">
            <div className="font-medium text-slate-800 dark:text-slate-100 capitalize">
              {user}
            </div>
            {/* <div className="text-xs text-slate-500 dark:text-slate-400 italic">
              Administrator
            </div> */}
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-sky-700 hover:text-sky-800 dark:hover:text-sky-400 flex items-center py-2 px-2"
                to=""
                onClick={() => {
                  viewGuide();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                Navigation Guide
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center py-2 px-2"
                to=""
                onClick={() => {
                  seeAllCourses();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                <div>
                  <h2 className="font-medium text-sm text-sky-700 hover:text-sky-800 dark:hover:text-sky-400">
                    Other Courses
                  </h2>

                  <p className="text-xs font-light">(Free Demo)</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-sky-700 hover:text-sky-800 dark:hover:text-sky-400 flex items-center py-2 px-2"
                to=""
                onClick={() => signOut()}
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownProfile;
