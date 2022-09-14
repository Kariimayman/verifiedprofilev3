import React, {useState, useEffect} from "react";
import Loader from "./utils/Loader";
import Direct from "./Direct"
import {
  createProfile,
} from "./utils/functions";

const Functions = ({userId}) => {
  const [Id] = useState(userId);
  const [loading, setLoading] = useState(false);

  const createNewProfile = async()=> {
    try {
      setLoading(true);
      await (createProfile());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }  
};
  useEffect(() => {
     createNewProfile()
  }, []);

return (
  <>
    {!loading ? (
      <>
      <Direct ID = {Id}/>
      </>

    ) : (
      <Loader />
    )}
  </>
);
};

export default Functions;