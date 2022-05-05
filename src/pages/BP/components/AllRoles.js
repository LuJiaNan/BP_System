import getFiles from "../utils/getImages.js";
import { CannotPicked } from "../style";

const imageList = getFiles.getImageFiles("src/pages/BP/image/");
const AllRoles = props => {
  const { setUrl, setSide, rule, saveRule } = props;
  // useEffect(() => {
  //   setSide(rule[0].side);
  // });
  const contentList = imageList.concat();
  const pick = (item, url) => {
    const { id, disabled } = item;
    if (disabled) return;
    setUrl(url);
    let newRule = rule.concat();
    newRule.shift();
    setSide(newRule[0].side);
    saveRule(newRule);
    // 图片只能选一次
    contentList.find(i => i.id == id).disabled = true;
    // 怎么去切换side
  };
  return (
    <div id="allroles">
      {contentList.map(item => (
        <div
          key={item.id}
          className="headPic-block"
          style={item.disabled && CannotPicked}
        >
          <img
            className="headPic"
            src={require(`../image/${item.url}`).default}
            width={50}
            onClick={e => pick(item, e.target.currentSrc)}
          />
        </div>
      ))}
    </div>
  );
};

export default AllRoles;
