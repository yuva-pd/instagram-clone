import React, { useState, useEffect } from "react";
import stateContext from "./stateContext";
import Auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

function State(props) {
  const [data, setData] = useState({});
  const [allusers, setAllusers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    firestore()
      .collection("users")
      .get()
      .then((snapshot) => {
        const userArray = [];
        snapshot.forEach((doc) => {
          if (doc && doc.exists) {
            // setAllusers([...allusers, doc.data()]);
            console.log(doc.id, " => ", doc.data());
            console.log(Auth().currentUser.uid);
            userArray.push(doc.data());
            if (doc.id === Auth().currentUser.uid) {
              setData(doc.data());
            }
          }
        });
        setAllusers(userArray);
        setIsLoading(false);
      });
  }, []);

  return (
    <stateContext.Provider value={{ data: data, allusers: allusers }}>
      {props.children}
      {!isLoading ? alert(data.email) : null}
    </stateContext.Provider>
  );
}

export default State;
