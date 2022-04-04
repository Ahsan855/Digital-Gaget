import { useEffect, useState } from "react";

const useReviwes = () => {
  const [reviwe, setReviwe] = useState([]);
  useEffect(() => {
    fetch("reviwe.json")
      .then((res) => res.json())
      .then((data) => setReviwe(data));
  }, []);
  return [reviwe, setReviwe];
};

export default useReviwes;
