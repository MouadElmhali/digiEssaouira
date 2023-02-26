import Image from "next/image";
import { useEffect, useState } from "react";
import SignInForm from "../../components/SignInForm";
import { useRouter } from "next/router";
import { getCurrentUser } from "../../components/utils";

export default function SignIn(): JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (getCurrentUser()) {
      router.push("/");
    } else {
      setLoaded(true);
    }
  }, []);

  if (!loaded) {
    return <div></div>;
  }

  return (
    <div className="container max-w-full mx-auto py-24 px-6">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-28">
                <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
                  <Image
                    src="/images/logo1.png"
                    alt="Logo"
                    width={150}
                    height={80}
                    objectFit="cover"
                  />
                </div>
                <div className="text-center ">مرحبًا بك</div>
                <SignInForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
