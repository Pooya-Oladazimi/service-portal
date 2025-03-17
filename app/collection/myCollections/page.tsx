
import { getUserCollectionList } from "@/app/api/actions/collections";
import { Collection } from "@/app/api/actions/types";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import CollectionCard from "@/app/ui/collection/collectionCard";
import { ErrorAlert, SuccessAlert } from "@/app/ui/commons/snippets";


export default async function MyCollections({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  let session = await getServerSession(authOptions);
  if (!session?.user) {
    notFound();
  }

  const collectionCreated = searchParams?.created;

  let collectionsResp = await getUserCollectionList();
  if (!collectionsResp.status) {
    //throw Error(collectionsResp.content);
    notFound();
  }

  let collections = collectionsResp.content as Collection[];

  return (
    <div className="md:col-span-3 bg-white p-4">
      {collectionCreated === "true" &&
        <SuccessAlert message="Collection has been created successfully." />
      }
      {collectionCreated === "false" &&
        <ErrorAlert message="Something went wrong with your collection creation. Please try later." />
      }
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
