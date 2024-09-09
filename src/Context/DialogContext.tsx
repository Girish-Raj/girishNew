import React, { ReactNode, useState } from "react";
import { createContext } from "react";

import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

type Dialog = {
  title?: string | ReactNode;
  content: string | ReactNode;
  confirmCta?: string;
  cancelCta?: string;
  onConfirm?: Function;
  onCancel?: Function;
  hideFooter?: boolean;
  disableCancel?: boolean;
  scrollable?: boolean;
  size?: "sm" | "lg" | "xl" | "fullscreen";
  dialogClass?: string;
  customFooter?: ReactNode;
};

export const DialogContext = createContext({
  dialog: null,
  showDialog: (dialog: Dialog | null) => {},
} as any);

const modalClasses = "dark:bg-slate-800 border-none";

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialog, showDialog] = useState<Dialog | null>(null);

  const [waiting, setWaiting] = useState<boolean>(false);

  const cancelDialog = async () => {
    setWaiting(true);
    console.log("Closing dialog");
    await dialog?.onCancel?.();
    showDialog(null);
    setWaiting(false);
  };

  const confirmDialog = async () => {
    setWaiting(true);
    try {
      await dialog?.onConfirm?.();
      showDialog(null);
      setWaiting(false);
    } catch (ex) {
      setWaiting(false);
    }
  };

  return (
    <>
      <DialogContext.Provider value={{ showDialog }}>
        {children}
      </DialogContext.Provider>

      <TEModal show={Boolean(dialog)} scrollable={dialog?.scrollable}>
        <TEModalDialog
          className={`rounded-lg ${dialog?.dialogClass || ""}`}
          size={dialog?.size}
        >
          <TEModalContent>
            <TEModalHeader className={modalClasses}>
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                {dialog ? dialog?.title || "Please confirm" : ""}
              </h5>
              {!dialog?.disableCancel && (
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => cancelDialog()}
                  disabled={waiting}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </TEModalHeader>

            <TEModalBody
              className={`${modalClasses} ${dialog?.dialogClass}-body py-4`}
            >
              {dialog ? dialog?.content || "Are you sure?" : ""}
            </TEModalBody>

            {!dialog?.hideFooter ? (
              <TEModalFooter className={modalClasses}>
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    disabled={waiting}
                    className="inline-block rounded bg-primary-100 px-6 pb-2 mx-2 pt-2.5 text-xs font-medium uppercase leading-normal text-sky-700 dark:bg-gray-600 dark:text-white"
                    onClick={() => cancelDialog()}
                  >
                    {dialog?.cancelCta || (dialog?.onConfirm ? "Cancel" : "Ok")}
                  </button>
                </TERipple>

                {dialog?.onConfirm ? (
                  <TERipple rippleColor="light">
                    <button
                      disabled={waiting}
                      className="ml-1 inline-block pb-2 pt-2.5 text-xs font-medium uppercase btn py-2 px-4 bg-sky-800 hover:bg-sky-900 text-white rounded"
                      onClick={() => confirmDialog()}
                    >
                      {dialog?.confirmCta || "Confirm"}
                    </button>
                  </TERipple>
                ) : (
                  <></>
                )}
              </TEModalFooter>
            ) : dialog?.customFooter ? (
              <TEModalFooter className={modalClasses} style={{ zIndex: 1 }}>
                {dialog?.customFooter}
              </TEModalFooter>
            ) : (
              <></>
            )}
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </>
  );
};
