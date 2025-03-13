
import { getUserCollectionList } from "@/app/api/actions/collections";
import { Collection } from "@/app/api/actions/types";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { SuccessAlert, ErrorAlert } from "@/app/ui/commons/snippets";


interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function MyCollections({ searchParams }: PageProps) {

  const collectionCreatedSuccess = searchParams?.created === "true";

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
      {collectionCreatedSuccess &&
        <SuccessAlert message="Collection created successfully." />
      }
      {!collectionCreatedSuccess && searchParams?.created &&
        <ErrorAlert message="Could not create the collection. Please try later." />
      }
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
