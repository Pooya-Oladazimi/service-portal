'use client';

import { SuccessAlert, ErrorAlert } from "../commons/snippets";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { deleteParamsFromUrl } from "@/app/libs/urlFactory";


export function CollectionListMessages() {

  const searchParams = useSearchParams();
  const router = useRouter();

  const [collectionCreated, setCollectionCreated] = useState<string | null>(searchParams.get('created'));
  const [collectionDeleted, setCollectionDeleted] = useState<string | null>(searchParams.get('deleted'));
  const [collectionEdited, setCollectionEdited] = useState<string | null>(searchParams.get('edited'));

  useEffect(() => {
    setTimeout(() => {
      setCollectionCreated("");
      setCollectionDeleted("");
      setCollectionEdited("");
      deleteParamsFromUrl(router, ['created', 'deleted', 'edited']);
    }, 3000);
  }, []);

  return (
    <>
      {collectionCreated === "true" &&
        <SuccessAlert message="Collection has been created successfully." />
      }
      {collectionCreated === "false" &&
        <ErrorAlert message="Something went wrong with your collection creation. Please try later." />
      }
      {collectionEdited === "true" &&
        <SuccessAlert message="Collection has been edited successfully." />
      }
      {collectionEdited === "false" &&
        <ErrorAlert message="Something went wrong with your collection edition. Please try later." />
      }
      {collectionDeleted === "true" &&
        <SuccessAlert message="Collection has been deleted successfully." />
      }
      {collectionDeleted === "false" &&
        <ErrorAlert message="Something went wrong with your collection deletion. Please try later." />
      }
    </>
  );
}
