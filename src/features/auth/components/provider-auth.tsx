import React from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

interface ProviderAuthProps {
  pending: boolean;
  setPending: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProviderAuth = ({ pending, setPending }: ProviderAuthProps) => {
  const { signIn } = useAuthActions();

  const onProviderSignin = (value: "github" | "google") => {
    setPending(true);
    signIn(value).finally(() => setPending(false));
  };

  return (
    <div className="flex flex-col gap-y-2.5">
      <Button
        variant="outline"
        onClick={() => onProviderSignin("google")}
        disabled={pending}
        size="lg"
        className="w-full relative"
      >
        <FcGoogle className="size-5 absolute top-3 left-2.5" />
        Continue with Google
      </Button>
      <Button
        variant="outline"
        onClick={() => onProviderSignin("github")}
        disabled={pending}
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
