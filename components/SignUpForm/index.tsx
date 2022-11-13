import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { initializeApollo } from "../../apolloClient";
import { REGISTER } from "../../graphql/user/queries";
import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("لم يتم تقديم  اسم االمستخدم"),
  email: Yup.string()
    .email("بريد إلكتروني خاطئ")
    .required("لم يتم تقديم بريد إلكتروني."),
  password: Yup.string().required("لم يتم تقديم كلمة مرور."),
  comfirmpassword: Yup.string()
    .required("لم يتم تقديم كلمة مرور.")
    .when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "يجب أن تكون كلتا كلمة المرور متطابقة"
      ),
    }),
});

export default function SignUpForm() {
  const client = initializeApollo();
  const [register, { data: mutationData, error: registerErrors, loading }] =
    useMutation(REGISTER);
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        comfirmpassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
        register({
          variables: {
            email: values.email,
            userName: values.username,
            password: values.password,
          },
        });
        console.log(registerErrors);
      }}
    >
      {({ errors, touched }) => (
        <Form className="mt-5">
          <div className="mx-auto max-w-lg">
            <div className="py-2">
              <span className="px-1 text-sm text-gray-600">اسم االمستخدم</span>
              <Field
                name="username"
                type="text"
                className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
              />
              {errors.username && touched.username ? (
                <div className="text-red-600 ">{errors.username}</div>
              ) : null}
            </div>
            <div className="py-2">
              <span className="px-1 text-sm text-gray-600">
                البريد الالكتروني
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
            <div className="py-2">
              <span className="px-1 text-sm text-gray-600">كلمة المرور</span>
              <Field
                name="password"
                type="password"
                className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
              />
              {errors.password && touched.password ? (
                <div className="text-red-600 ">{errors.password}</div>
              ) : null}
            </div>
            <div className="py-2">
              <span className="px-1 text-sm text-gray-600">
                تأكيد كلمة المرور
              </span>
              <Field
                name="comfirmpassword"
                type="password"
                className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none"
              />
              {errors.comfirmpassword && touched.comfirmpassword ? (
                <div className="text-red-600 ">{errors.comfirmpassword}</div>
              ) : null}
            </div>
            <div className="flex justify-center  text-center text-gray-500 my-4">
              <span>
                لديك حساب؟
                <Link href={"/signIn"}>
                  <a className="cursor-pointer  text-black border-b-2 border-gray-200 hover:border-primary hover:text-primary">
                    سجل الدخول
                  </a>
                </Link>
              </span>
            </div>
            <button
              type="submit"
              className="mt-3 text-lg font-semibold
                bg-primary w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-primaryDarker"
            >
              إصنع حساب
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
