import { DocumentData, Firestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getAccounts } from "../components/utils";

export const useGetAccounts = (db: Firestore) => {
  const [accounts, setAccounts] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAccounts(db);
      setAccounts(data.map((account) => ({ ...account })));
    };
    fetchData();
  }, []);

  return accounts;
};
