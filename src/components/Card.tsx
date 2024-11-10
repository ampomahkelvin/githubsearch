import { UserType } from "../types";
import {
  MapPinIcon,
  LinkIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  userData: UserType;
};

const Card = ({ userData }: Props) => {
  return (
    <div className="mt-6 py-12 bg-light-background rounded-lg shadow-xl dark:bg-dark-background">
      <div className="md:flex w-full">
        <div className="pl-12 flex w-full">
          <img
            src={userData.avatar_url}
            alt=""
            className="rounded-full w-[117px] h-[117px]"
          />
          <div className="px-[41px] w-full">
            <div className="flex flex-col justify-between md:items-center w-full md:flex-row">
              <h1 className="">{userData.name}</h1>
              <div className="dark:text-white">
                Joined{" "}
                {new Date(userData.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
            <h3 className="text-primary dark:text-primary">
              @{userData.login}
            </h3>
            <p className="hidden pt-6 md:flex">
              {userData.bio ? userData.bio : "This profile has no bio"}
            </p>
          </div>
        </div>
      </div>

      <div className="px-12">
        <p className="pt-6 md:hidden">{userData.bio}</p>
        <div className="flex py-4 px-8 my-8 bg-light-card justify-between rounded-lg dark:bg-dark-card">
          <div>
            <h4>Repos</h4>
            <span className="font-bold dark:text-white">
              {userData.public_repos}
            </span>
          </div>
          <div>
            <h4>Followers</h4>
            <span className="font-bold dark:text-white">
              {userData.followers}
            </span>
          </div>
          <div>
            <h4>Following</h4>
            <span className="font-bold dark:text-white">
              {userData.following}
            </span>
          </div>
        </div>

        <ul className="xs:flex xs:flex-col md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 gap-5">
          <li className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <span
              className={
                userData.location ? "dark:text-white" : "text-gray-400"
              }
            >
              {userData.location || "Not available"}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faTwitter} className="text-light-gray" />
            {userData.twitter_username ? (
              <a
                href={`https://twitter.com/${userData.twitter_username}`}
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                @{userData.twitter_username}
              </a>
            ) : (
              <span className="text-gray-400">Not available</span>
            )}
          </li>
          <li className="flex items-center gap-2 hover:underline cursor-pointer">
            <LinkIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <span
              className={
                userData.html_url
                  ? "text-blue-600 dark:text-blue-400 overflow-x-hidden"
                  : "text-gray-400"
              }
            >
              {userData.html_url ? (
                <a href={userData.html_url}>{userData.html_url}</a>
              ) : (
                "Not available"
              )}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <BuildingOffice2Icon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <span
              className={
                userData.company
                  ? "text-black dark:text-white"
                  : "text-gray-400"
              }
            >
              {userData.company || "Not available"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
