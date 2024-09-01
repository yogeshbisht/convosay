"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const { signOut } = useAuthActions();

  return (
    <div>
      <h1>Welcome to home page of ConvoSay</h1>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
};

export default HomePage;
