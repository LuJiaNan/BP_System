import { useState, useEffect } from "react";
import { isLeft, isRight } from "../utils";

const usePickList = (type, props) => {
  const { leftList, rightList, side, url, setLeftList, setRightList } = props;
  const originList = !type ? leftList : rightList;
  const [arr, setList] = useState(originList);
  useEffect(() => {
    let newList = originList.concat();
    if (!type ? isLeft(side) : isRight(side)) {
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].empty && newList[i].url !== url) {
          newList[i].url = url;
          newList[i].empty = false;
          break;
        }
      }
      setList(newList);
      !type ? setLeftList(newList) : setRightList(newList);
    }
  }, [url]);
  return [arr];
};

const useBanList = () => {

}

export {
    usePickList,
    useBanList
}