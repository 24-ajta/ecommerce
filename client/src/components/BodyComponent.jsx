import smartphone1 from '../images/smartphone.jpg';
import dress from '../images/dress.jpg';
import perfume from '../images/perfume.jpg';
function BodyComponent(){
return (
    <>
    {/*carousel*/}
{/* <div
  id="carouselExampleControls"
  className="carousel slide mt-5"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={dress} height={"1216px"} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={smartphone1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={perfume} height={"1216px"} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
<div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={dress} height={"1216px"} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src={perfume} height={"1216px"} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src={smartphone1} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
)
}
export default BodyComponent;