import {ClipLoader,RingLoader} from "react-spinners";
import {css} from '@emotion/react';

const override=css`
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  `;
function LoaderComponent(){
return(
    <div className="loader-container">
        <RingLoader color="#36d7b7" loading={true}/>
        <ClipLoader css={override} size={150} color={'#36D7B7'} loading={true}/>
    </div>
);


}
export default LoaderComponent;