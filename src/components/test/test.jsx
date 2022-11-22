import React from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function Test() {
  const [equpment, setEqupment] = React.useState([]);

  const equpmentCollection = collection(db, "equpment");
  React.useEffect(() => {
    const getEqupment = async () => {
      const data = await getDocs(equpmentCollection);
      console.log(data);
      setEqupment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(equpment);
    };

    getEqupment();
  }, []);
  return (
    <div>
      {equpment.map((item) => {
        const { imgs } = item;
        return (
          <div>
            <img src={imgs[2]} />
          </div>
        );
      })}
    </div>
  );
}
