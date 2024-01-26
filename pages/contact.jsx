import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Fiverr_Icon from "../components/Fiverr_Icon";
import Footer from "../components/Footer";
import { Modal } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, control, reset } = useForm({
    shouldUseNativeValidation: true,
  });

  const mutation = useMutation(
    (payload) => {
      return axios.post("api/email", payload);
    },
    {
      onSuccess: () => {
        reset({
          senderName: "",
          senderEmail: "",
          message: "",
        });
      },
    }
  );

  const formSubmit = (data) => {
    mutation.mutate(data);
  };

  let output = undefined;

  if (mutation.isLoading) {
    output = (
      <div role="status">
        <svg
          aria-hidden="true"
          class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    output = (
      <button type="submit" className="button">
        {" "}
        SEND MESSAGE{" "}
      </button>
    );
  }

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">Perú</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">Arequipa</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Company:</span>
                <span className="text-LightGray md:text-sm">Freelance</span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">
                  maralhcn@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <span className="text-LightGray text-sm">Mario Huaypuna</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">+51 928014504</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://github.com/osamajavaid"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/iosamajavaid/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/iosamajavaid" target='_blank' rel="noreferrer"><FaTwitter /></a> */}
          {/* <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://www.fiverr.com/codeworthy" target='_blank' rel="noreferrer"><Fiverr_Icon /></a> */}
          {/* <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="#" target='_blank' rel="noreferrer"><SiUpwork /></a> */}
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <div>
              <form onSubmit={handleSubmit(formSubmit)}>
                <div className="flex flex-col w-full">
                  <div className="userIcon relative mb-6">
                    <div
                      id="icon"
                      className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                    >
                      <HiUser />
                    </div>
                    <input
                      type="text"
                      {...register("senderName", { required: true })}
                      className="input_stylings"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <div className="mailIcon relative mb-6">
                    <div
                      id="icon"
                      className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                    >
                      <HiMail />
                    </div>
                    <input
                      type="text"
                      {...register("senderEmail", { required: true })}
                      className="input_stylings"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <div className="textIcon relative mb-6">
                    <div
                      id="icon"
                      className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                    >
                      <BsChatTextFill />
                    </div>
                    <Controller
                      name="message"
                      control={control}
                      rules={{
                        required: true,
                        validate: {
                          maxLength: (value) => value.length >= 1,
                        },
                      }}
                      render={({ field }) => (
                        <textarea
                          cols={50}
                          className="input_stylings"
                          placeholder="Message"
                          rows={6}
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="my-4">{output}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        // wrapClassName='bg-red-800'
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">In Progress</h1>
          <a
            className="underline text-Snow"
            target="_blank"
            href="https://github.com/osamajavaid/portfolio"
          >
            Be the one to integrate this!
          </a>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
