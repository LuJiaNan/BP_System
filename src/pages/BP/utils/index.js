import EmptyImage from "../../../images/empty.png";
import { LEFT, RIGHT } from "./map";

export function createEmptyImagelist(len) {
  if (len <= 0) return [];
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push({
      id: i,
      url: EmptyImage,
      empty: true
    });
  }
  return arr;
}

// 0:left,1:right
export const BPRule = [
  {
    side: 0,
    ban: 1,
    pick: 0
  },
  {
    side: 1,
    ban: 1,
    pick: 0
  },
  {
    side: 0,
    ban: 1,
    pick: 0
  },
  {
    side: 1,
    ban: 1,
    pick: 0
  },
  {
    side: 0,
    ban: 0,
    pick: 1
  },
  {
    side: 1,
    ban: 0,
    pick: 2
  },
  {
    side: 0,
    ban: 0,
    pick: 1
  },
  {
    side: 1,
    ban: 1,
    pick: 0
  },
  {
    side: 0,
    ban: 1,
    pick: 0
  },
  {
    side: 1,
    ban: 1,
    pick: 0
  },
  {
    side: 0,
    ban: 1,
    pick: 0
  },
  {
    side: 1,
    ban: 1,
    pick: 0
  },
  {
    side: 0,
    ban: 1,
    pick: 0
  },
  {
    side: 1,
    ban: 0,
    pick: 1
  },
  {
    side: 0,
    ban: 0,
    pick: 2
  },
  {
    side: 1,
    ban: 0,
    pick: 1
  },
  {
    side: 0,
    ban: 1,
    pick: 0
  },
  {
    side: 1,
    ban: 1,
    pick: 0
  },
  {
    side: 0,
    ban: 1,
    pick: 0
  },
  {
    side: 1,
    ban: 1,
    pick: 0
  },
  {
    side: 0,
    ban: 0,
    pick: 1
  },
  {
    side: 1,
    ban: 0,
    pick: 1
  }
];

export const getSideMap = side => {
  return side == LEFT ? "left" : "right";
};

export { EmptyImage };

export function isLeft(side) {
  return side === LEFT;
}

export function isRight(side) {
  return side === RIGHT;
}
