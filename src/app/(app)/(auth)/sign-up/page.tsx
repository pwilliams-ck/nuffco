import { caller } from "@/trpc/server";

import { redirect } from "next/navigation";

import { SignUpView } from "@/modules/ui/views/sign-up-view";

export const dynamic = "force-dynamic";

const Page = async () => {
  const session = await caller.auth.session();

  if (session.user) {
    redirect("/");
  }
  return (
    <div>
      <SignUpView />
    </div>
  );
};

export default Page;
