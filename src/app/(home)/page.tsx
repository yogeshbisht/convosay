"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/user-button";

const HomePage = () => {
  const { signOut } = useAuthActions();

  return (
    <div>
      <h1>Welcome to home page of ConvoSay</h1>
      <UserButton />
    </div>
  );
};

export default HomePage;
