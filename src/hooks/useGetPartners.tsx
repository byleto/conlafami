import { DocumentData, Firestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getPartners } from "../components/utils";

export const useGetPartners = (db: Firestore) => {
  const [partners, setPartners] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPartners(db);
      setPartners(data.map((partner) => ({ ...partner, id: partner.dni })));
    };
    fetchData();
  }, []);

  return partners;
};
