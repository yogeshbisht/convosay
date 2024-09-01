import { useAuthActions } from "@convex-dev/auth/react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

const ProviderAuth = () => {
  const { signIn } = useAuthActions();

  const handlerProviderSignin = (value: "github" | "google") => {
    signIn(value);
  };

  return (
    <div className="flex flex-col gap-y-2.5">
      <Button
        variant="outline"
        onClick={() => {}}
        disabled={false}
        size="lg"
        className="w-full relative"
      >
        <FcGoogle className="size-5 absolute top-3 left-2.5" />
        Continue with Google
      </Button>
      <Button
        variant="outline"
        onClick={() => handlerProviderSignin("github")}
        disabled={false}
        size="lg"
        className="w-full relative"
      >
        <FaGithub className="size-5 absolute top-3 left-2.5" />
        Continue with Github
      </Button>
    </div>
  );
};

export default ProviderAuth;
