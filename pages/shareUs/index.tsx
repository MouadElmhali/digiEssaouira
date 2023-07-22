import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Head from "next/head";
import {sendContactForm, sendShareUsForm} from "../../lib/api";

import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

export default function ContactUs(): JSX.Element {
  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email("بريد إلكتروني خاطئ")
      .required("لم يتم تقديم بريد إلكتروني."),
    object: Yup.string().required("هذه الخانة مطلوبه"),
    fullname: Yup.string().required("هذه الخانة مطلوبه"),
    message: Yup.string().required("هذه الخانة مطلوبه"),
  });

  // const [SendContactForm, { loading, data }] = useMutation(sendContactForm);

  return (
    <>
      <Head>
        <title>DigiEssaouira | أشارك تجربتي</title>
      </Head>
      <div className="mt-48 mb-10 flex justify-center">
        <div className="rounded shadow-2xl w-11/12 sm:w-4/6">
          <div className="bg-primary text-white text-xl font-bold text-center p-2 rounded-t">
            أشارك تجربتي
          </div>
          <Formik
            initialValues={{
              email: "",
              object: "",
              fullname: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values) => {      
                // Enable loading effect
                try {
                  await sendShareUsForm(values);
                  // stop loading effect

                  toast('تم إرسال بنجاح', { hideProgressBar: false, autoClose: 2000, type: 'success' })
                } catch (error: any) {
                  // stop loading effect
                  toast('فشل الارسال', { hideProgressBar: false, autoClose: 2000, type: 'error' })
                  console.log(error.message)
                }
              
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <>
                <div
                  className="bg-green-400 p-2 rounded mx-3 text-white text-center "
                  style={null ? {} : { display: "none" }}
                >
                  تم إرسال بنجاح
                </div>
                <Form className="mt-10 p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="py-2 sm:col-span-2">
                    <span className="px-1 text-sm text-gray-600">الموضوع: (*)</span>
                    <Field
                      name="object"
                      type="text"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.object && touched.object ? (
                      <div className="text-red-600 ">{errors.object}</div>
                    ) : null}
                  </div>

                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">
                      الإسم الكامل: (*)
                    </span>
                    <Field
                      name="fullname"
                      type="text"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.fullname && touched.fullname ? (
                      <div className="text-red-600 ">{errors.fullname}</div>
                    ) : null}
                  </div>
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">
                      البريد الإلكتروني: (*)
                    </span>
                    <Field
                      name="email"
                      type="email"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-600 ">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="py-2 sm:col-span-2">
                    <span className="px-1 text-sm text-gray-600">
                      شارك تجربتك معنا : (*)
                    </span>
                    <Field
                      name="message"
                      component="textarea"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.message && touched.message ? (
                      <div className="text-red-600 ">{errors.message}</div>
                    ) : null}
                  </div>
                  <div className="py-2 sm:col-span-2">
                    <span className="px-1 text-sm text-gray-600">
                      شارك : (*)
                    </span>
                    <Field
                      name="file"
                      type="file"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                  </div>
                  {
                    isSubmitting ? 
                      <div
                        className="mt-3 sm:col-span-2 text-lg font-semibold
                            h-14 w-full text-white rounded-lg
                            px-6 py-3  bg-[url('/images/Ellipsis-2.1s-200px.gif')] bg-no-repeat bg-center"
                      >
                        
                      </div>
                      :
                      <button
                        type="submit"
                        className="mt-3  sm:col-span-2 text-lg font-semibold
                            bg-primary w-full text-white rounded-lg
                            px-6 py-3  shadow-xl hover:text-white hover:bg-primaryDarker"
                        disabled={isSubmitting}
                      >
                        إرسال
                      </button>

                  }
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
