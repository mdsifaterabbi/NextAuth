"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Member = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  });
  return (
    <div>
      <h1 className="font-bold">Member Client Session data</h1>
      <div>
        <h1>{session?.user?.email}</h1>
        <h1>{session?.user?.role}</h1>
      </div>
    </div>
  );
};

export default Member;
