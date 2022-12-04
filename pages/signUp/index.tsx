import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SignUpForm from "../../components/SignUpForm";
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
              <div className="mt-20">
                <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={80}
                    objectFit="cover"
                  />
                </div>
                <div className="text-center ">مرحبًا بعودتك</div>
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
