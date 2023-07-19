import { Field, Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import Head from "next/head";
import {sendContactForm} from "../../lib/api";

import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useState } from "react";

export default function ContactUs(): JSX.Element {
  const ContactSchema = Yup.object().shape({
    fullname: Yup.string().required("هذه الخانة مطلوبه"),
    email: Yup.string()
    .email("بريد إلكتروني خاطئ")
    .required("لم يتم تقديم بريد إلكتروني."),
    phone: Yup.string().required("هذه الخانة مطلوبه"),
    message: Yup.string().required("هذه الخانة مطلوبه"),
  });

  // const {isSubmitting, setIsSubmitting} = useState(false);


  // const { submitForm  } = useFormikContext();

  // const [SendContactForm, { loading, data }] = useMutation(sendContactForm);

  return (
    <>
      <Head>
        <title>DigiEssaouira | تواصلو معنا</title>
      </Head>
      <div className="mt-48 mb-10 flex justify-center">
        <div className="rounded shadow-2xl w-11/12 sm:w-4/6">
          <div className="bg-primary text-white text-xl font-bold text-center p-2 rounded-t">
          تواصلو معنا
          </div>
          <Formik
            initialValues={{
              fullname: "",
              email: "",
              phone: "",
              city: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { resetForm }) => {
              
                // Enable loading effect
                // setIsSubmitting(true);
                try {
                  // send mail
                  await sendContactForm(values);

                  // reset fields
                  resetForm();

                  // stop loading effect

                  toast('تم إرسال بنجاح', { hideProgressBar: true, autoClose: 2000, type: 'success' })
                } catch (error: any) {
                  // stop loading effect
                  toast('فشل الارسال', { hideProgressBar: true, autoClose: 2000, type: 'error' })
                  console.log(error.message)
                }

                // setIsSubmitting(false);

              

            }}
          >
            {({ errors, touched, isSubmitting }) => (
                <Form className="mt-10 p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full name */}
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">الإسم الكامل: (*)</span>
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
                  
                  {/* Email */}
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">
                    البريد الإلكتروني: (*)
                    </span>
                    <Field
                      name="email"
                      type="text"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-600 ">{errors.email}</div>
                    ) : null}
                  </div>

                  {/* Phone */}
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">
                    الهاتف: (*)
                    </span>
                    <Field
                      name="phone"
                      type="phone"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    {errors.phone && touched.phone ? (
                      <div className="text-red-600 ">{errors.phone}</div>
                    ) : null}
                  </div>

                  {/* City */}
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">المدينة:</span>
                    <Field
                      name="city"
                      type="text"
                      className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
                    />
                    
                  </div>

                  {/* Message */}
                  <div className="py-2 sm:col-span-2">
                    <span className="px-1 text-sm text-gray-600">
                    الرسالة: (*)
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
                  
                  {/* Submit button */}
                  {
                    isSubmitting ?
                    <button
                    disabled={isSubmitting}
                    type="submit"
                    className={"mt-3 sm:col-span-2 text-lg font-semibold bg-gray-400 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white"}
                  >
                    إرسال
                  </button>
                  : 
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className={"mt-3 sm:col-span-2 text-lg font-semibold bg-primary w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-primaryDarker"}
                  >
                    إرسال
                  </button>
                  }
                </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
