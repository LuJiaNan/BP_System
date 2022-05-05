import { Col } from "antd";
import { usePickList } from "../utils/hooks";
import { LEFT } from "../utils/map";

const BPSide = props => {
  const [arr] = usePickList(LEFT, props);
  return (
    <Col span={6}>
      {arr.map(item => (
        <img src={item.url} key={item.id} className="BPImg" />
      ))}
    </Col>
  );
};

export default BPSide;
