import { Col } from "antd";
import { usePickList } from "../utils/hooks";
import { RIGHT } from "../utils/map";

const BPSide = props => {
  const [arr] = usePickList(RIGHT, props);
  return (
    <Col span={6}>
      {arr.map(item => (
        <img src={item.url} key={item.id} className="BPImg" />
      ))}
    </Col>
  );
};

export default BPSide;
