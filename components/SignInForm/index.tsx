import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { initializeApollo } from "../../apolloClient";
import { LOGIN } from "../../graphql/user/queries";
import { decode } from "jsonwebtoken";
import { useRouter } from "next/router";

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("بريد إلكتروني خاطئ")
    .required("لم يتم تقديم بريد إلكتروني."),
  password: Yup.string().required("لم يتم تقديم كلمة مرور."),
});
const client = initializeApollo();
export default function SignInForm() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  const handleLogin = async (values: { email: any; password: any }) => {
    const { data, error, loading } = await client.query({
      query: LOGIN,
      variables: {
        email: values.email,
        password: values.password,
      },
    });
    if (data) {
      localStorage.setItem("user", JSON.stringify(data.login));
      console.log(decode(data.login));

      document.location.href = "/";
    } else {
      setToggle(true);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SigninSchema}
      onSubmit={handleLogin}
    >
      {({ errors, touched }) => (
        <Form className="mt-5">
          <div className="mx-auto max-w-lg">
            <div
              className="bg-red-400 p-2 rounded mx-3 text-white text-center"
              style={toggle ? {} : { display: "none" }}
            >
              البريد الإلكتروني أو كلمة المرور خاطئة
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
