"use client";
import { Fragment } from "react";
import Form from "./Form";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import { Cross, X } from "lucide-react";

function Contact({isOpen, isClose}) {
  return (
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={isClose} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
          />

          <div className="fixed inset-0 z-10 w-screen">
            <DialogPanel 
            transition
            className="flex justify-center items-center min-h-full p-20">
              <div className="transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95">
                <section className="bg-foreground border rounded-2xl w-[26rem] lg:w-4xl">
                  <div className="flex justify-end p-4 items-center" onClick={()=>isClose(true)}>
                  <X size={20} className="hover:bg-white hover:text-secondary-foreground rounded"/>
                  </div>
                  <div className="px-4 sm:px-6 lg:px-12 py-8">
                    
                    <div>
                      <div className="p-8">
                        <DialogTitle
                          as="h2"
                          className="text-2xl font-semibold mb-6 text-primary"
                        >
                          Send a Message
                        </DialogTitle>

                        <Form />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>

  );
}

export default Contact;
