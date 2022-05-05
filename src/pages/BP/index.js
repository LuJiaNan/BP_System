import { Row } from "antd";
import BPMain from "./components/BPMain";
import BPLeft from "./components/BPLeft";
import BPRight from "./components/BPRight";
import AllRoles from "./components/AllRoles";

import './style/index.less'

const BanPick = props => {
  return (
    <div id="banpick">
      <AllRoles type="bh3" {...props}/>
      <Row>
        <BPLeft {...props}/>
        <BPMain {...props}/>
        <BPRight {...props}/>
      </Row>
    </div>
  );
};

export default BanPick;
