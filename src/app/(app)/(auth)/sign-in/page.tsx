import { caller } from "@/trpc/server";

import { redirect } from "next/navigation";

import { SignInView } from "@/modules/ui/views/sign-in-view";

export const dynamic = "force-dynamic";

const Page = async () => {
  const session = await caller.auth.session();

  if (session.user) {
    redirect("/");
  }

  return (
    <div>
      <SignInView />
    </div>
  );
};

export default Page;
