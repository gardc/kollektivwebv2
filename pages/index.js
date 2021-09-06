import {
  allPeople,
  getPostPerson,
  liteBadPeople,
  StortBadPeople,
} from "../services/logic";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>KollektivWeb</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#3B82F6" />
      </Head>

      {/* Nav */}
      <div className="bg-blue-500 text-white flex justify-center">
        <div className="container mx-auto flex items-center py-3 px-2">
          <h1 className="text-xl font-bold">KollektivWeb</h1>
          <p className="ml-2 py-0.5 px-2 flex justify-center items-center bg-gray-200 bg-opacity-25 rounded-lg">
            v2
          </p>{" "}
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex justify-center">
        <div className="container grid grid-cols-6 mt-4 ">
          <PostCard className="col-span-3 sm:col-span-2">
            <p className="text-4xl">🍽️</p>
            <h2 className="mt-2 text-l">
              Kjøkken: <b>{getPostPerson(2, 5, allPeople)}</b>
            </h2>
          </PostCard>
          <PostCard className="col-span-3 sm:col-span-2">
            <p className="text-4xl">🗑️</p>
            <h2 className="mt-2 text-l">
              Søppel: <b>{getPostPerson(4, 5, allPeople)}</b>
            </h2>
          </PostCard>
          <PostCard className="col-span-3 sm:col-span-2">
            <p className="text-4xl">🪣</p>
            <h2 className="mt-2 text-l">
              Gulv og stue: <b>{getPostPerson(3, 5, allPeople)}</b>
            </h2>
          </PostCard>
          <PostCard className="col-span-3">
            <p className="text-4xl">👨</p>
            <h2 className="mt-2 text-l">
              Lite bad: <b>{getPostPerson(0, 2, liteBadPeople)}</b>
            </h2>
          </PostCard>
          <PostCard className="col-span-6 sm:col-span-3">
            <p className="text-4xl">👩</p>
            <h2 className="mt-2 text-l">
              Stort bad: <b>{getPostPerson(0, 3, StortBadPeople)}</b>
            </h2>
          </PostCard>
        </div>
      </div>
    </div>
  );
}

const PostCard = (props) => {
  return (
    <div className={`rounded-md shadow-md px-5 py-3 flex flex-col justify-center items-center mx-2 my-2 ${props.className}`}>
      {props.children}
    </div>
  );
};
