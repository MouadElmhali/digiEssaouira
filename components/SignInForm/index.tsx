import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { initializeApollo } from "../../apolloClient";
// import { LOGIN } from "../../graphql/user/queries";
import { GET_REGION } from "../../graphql/region/queries";
import { signIn } from "next-auth/react";
// import SignIn from "../../pages/signIn";

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("بريد إلكتروني خاطئ")
    .required("لم يتم تقديم بريد إلكتروني."),
  password: Yup.string().required("لم يتم تقديم كلمة مرور."),
});
const client = initializeApollo();
// const { data } = await client.query({
//   query: LOGIN,
//   variables: {
//     user: { email: "mouad@gmail.com", password: "1234" },
//   },
// });

// const {
//   data: { regions },
// } = await client.query({
//   query: GET_REGION,
// });

// console.log(regions);
export default function SignInForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SigninSchema}
      onSubmit={async (values) => {
        console.log(values);
        const val = {
          redirect: false,
          email: values.email,
          password: values.password,
        };

        const res = signIn("credentials", val)
          .then((error) => console.log(error))
          .catch((error) => console.log(error));

        console.log(res);
      }}
    >
      {({ errors, touched }) => (
        <Form className="mt-5">
          <div className="mx-auto max-w-lg">
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
            <div className="flex justify-center  text-center text-gray-500 my-4">
              <span>
                ليس لديك حساب؟
                <a
                  href="#"
                  className="cursor-pointer  text-black border-b-2 border-gray-200 hover:border-primary hover:text-primary"
                >
                  اصنع واحدا
                </a>{" "}
              </span>
            </div>
            <button
              type="submit"
              className="mt-3 text-lg font-semibold
                bg-primary w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-primaryDarker"
            >
              تسجيل الدخول
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
