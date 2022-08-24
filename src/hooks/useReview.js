import { useEffect, useState } from "react";

const useReview = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return [datas, setDatas];
};

export default useReview;
