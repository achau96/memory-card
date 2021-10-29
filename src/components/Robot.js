const Robot = (props) => {
  return (
    <div className="robot" onClick={() => props.robotCheck(props.robot)}>
      <img src={`https://robohash.org/${props.robot.name}`} alt="new" />
      <div>{props.robot.name}</div>
    </div>
  );
};

export default Robot;
