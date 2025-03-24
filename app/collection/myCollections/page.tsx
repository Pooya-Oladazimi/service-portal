
import { getUserCollectionList } from "@/app/api/actions/collections";
import { Collection } from "@/app/api/actions/types";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import CollectionCard from "@/app/ui/collection/collectionCard";
import { CollectionListMessages } from "@/app/ui/collection/collectionListMessages";
import { Suspense } from "react";


export default async function MyCollections() {

  //let session = await getServerSession(authOptions);
  //if (!session?.user) {
  //  notFound();
  //}


  let collectionsResp = await getUserCollectionList();
  if (!collectionsResp.status) {
    //throw Error(collectionsResp.content);
    return "";
  }

  let collections = collectionsResp.content as Collection[];


  return (
    <div className="md:col-span-3 bg-white p-4 dark:bg-gray-800" key={"my_collection"}>
      <Suspense> <CollectionListMessages /> </Suspense>
      <p className="header-2">My Collections</p>
      <a href="/collection/new/" className="btn">Create Collection</a>
      {collections.map((col: Collection) => {
        return (
          <>
            <div className="pt-5" key={"collections-list-container"}>
              <CollectionCard collection={col} />
            </div>
          </>
        )
      })}
    </div>
  );
}
