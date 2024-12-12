import img2 from "./image/img2.jpg"
import img4 from "./image/img4.jpg"
import img14 from "./image/img14.jpg"
function LogImages() {
  return (
    <>
    
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="img-log carousel-item active">
      <img src={img2} className=" d-block w-100" alt="..."/>
    </div>
    <div className="img-log carousel-item">
      <img src={img4} className="d-block w-100" alt="..."/>
    </div>
    <div className="img-log carousel-item">
      <img src={img14} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}
export default LogImages;
