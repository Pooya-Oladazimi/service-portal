import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { notFound } from "next/navigation";



export default async function UserDashboard() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    notFound();
  }
  return (
    <div className="md:col-span-3 row-span-1">
      <p>{`Welcome ${session.user.username}`}</p>
    </div>
  );
}
