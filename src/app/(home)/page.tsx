"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import UserButton from "@/features/auth/components/user-button";

const HomePage = () => {
  const { signOut } = useAuthActions();

  return (
    <div>
      <UserButton />
    </div>
  );
};

export default HomePage;
