'use client'

import { useState, useEffect } from "react";
import { getCurrentDate } from "../libs/toolkit";
import { Loading } from "../ui/commons/snippets";

type Publication = {
  doi: string,
  doi_url: string,
  title: string,
  metadata: {
    resource_type: {
      title: string
    }
  },
  created: string
}

export default function Publications() {
  const [loading, setLoading] = useState<boolean>(true);
  const [publicationsInfo, setPublicationsInfo] = useState<Publication[]>([]);


  useEffect(() => {
    const publicatons = async () => {
      try {
        let publicationsApi = await fetch("https://zenodo.org/api/records?communities=ts4nfdi&sort=publication-desc");
        let publicationsApiJson = await publicationsApi.json();
        setPublicationsInfo(publicationsApiJson["hits"]["hits"]);
        setLoading(false);
      } catch {
        setPublicationsInfo([]);
        setLoading(false);
      }
    }
    publicatons();
  }, []);


  return (
    <div className="col-span-3">
      {loading && <Loading />}
      {
        (publicationsInfo).map((pub: Publication, i: number) => {
          return (
            <div className='card' key={pub.doi}>
              <a href={pub.doi_url} target="_blank" key={"title"}>{`${i + 1}. ${pub.title}`}</a>
              <span className='name-badge' key={"type"}>{pub.metadata.resource_type.title}</span>
              <br />
              <small key={"created_at"}>{getCurrentDate(pub.created)}</small>
              <br />
            </div>
          )
        })
      }
    </div>
  );
}
