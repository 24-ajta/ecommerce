import {RingLoader} from "react-spinners";
import {css} from '@emotion/react';

const override = css `
  display: "block",
  margin: "0 auto",
  borderColor: "red",
`;

function LoadingComponent() {
//   let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("red");

  return (
    // <div className="sweet-loading">
    //   {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
    //   {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

    //   <ClipLoader
    //     color={color}
    //     loading={loading}
    //     cssOverride={override}
    //     size={150}
    //     aria-label="Loading Spinner"
    //     data-testid="loader"
    //   />
    // </div>
//     <div className="d-flex justify-content-center">
//   <div className="spinner-border text-primary" role="status">
//     <span className="visually-hidden">Loading...</span>
//   </div>
// </div>
<div className="loader-container">
        <RingLoader css={override} color="orange" loading={true}/>
        {/* <ClipLoader css={override} size={150} color={'#36D7B7'} loading={true}/> */}
    </div>
  );
}

export default LoadingComponent;