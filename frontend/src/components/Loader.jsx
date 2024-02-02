import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="align-middle d-inline-block ms-2">
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "15px",
          height: "15px",
        }} />
    </div>
    
  );
};

export default Loader;
