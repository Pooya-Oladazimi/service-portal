
import { getUserCollectionList } from "@/app/api/actions/collections";
import { Collection } from "@/app/api/actions/types";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";


export default async function MyCollections() {

  let session = await getServerSession(authOptions);
  if (!session?.user) {
    notFound();
  }

  let collectionsResp = await getUserCollectionList();
  if (!collectionsResp.status) {
    //throw Error(collectionsResp.content);
    notFound();
  }

  let collections = collectionsResp.content as Collection[];

  return (
    <div className="md:col-span-3 content-panel">
      <p className="header-2">My Collections</p>
      <a href="/collection/new/" className="btn">Create Collection</a>
      <br />
      {collections.map((col: Collection) => {
        return (
          <div>
            {col.id}
          </div>
        )
      })}

    </div>
  );
}
