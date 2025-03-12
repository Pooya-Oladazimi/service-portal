import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import './style.css';


export default async function UserProfileMenu() {

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <a href="/api/auth/signin" className="btn !bg-[#F8F8F8] !text-[#445669]">Login</a>
        </div>
      </>
    );
  }


  return (
    <>
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/img/blank.jpg" alt="user photo" />
      </button>
      <div className="z-50 hidden my-4 text-base list-none bg-gray-200 divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">{session?.user.username}</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{session?.user.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="profile-menu-item">Dashboard</a>
          </li>
          <li>
            <a href="/collection/myCollections/" className="profile-menu-item">My Collections</a>
          </li>
          <li>
            <a href="/api/auth/signout" className="profile-menu-item">Sign out</a>
          </li>
        </ul>
      </div>
    </>
  );
}
