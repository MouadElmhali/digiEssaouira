import Image from "next/image";
import SignUpForm from "../../components/SignUpForm";

export default function SignIn(): JSX.Element {
  return (
    <div className="container max-w-full mx-auto py-24 px-6">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-6">
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
