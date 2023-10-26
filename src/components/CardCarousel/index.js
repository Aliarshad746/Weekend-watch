import { useRef } from "react"
import Card from "../Card"
import "./cardCarousel.css"

function CardCarousel({dataItems = []}) {
    const ref = useRef(null);

    const handleMove = (type) => {
        const box = ref.current;
        const width = box.clientWidth;

        if(type === 'left'){
            box.scrollLeft = box.scrollLeft - width;
        }else{
            console.log('right')
            box.scrollLeft = box.scrollLeft + width;
        }
    }
  return (
    <div className="card-carousel-container">
        <button className="card-btn-carousel left" onClick={() => handleMove('left')}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="card-btn-carousel right" onClick={() => handleMove('right')}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      <div className="carousel-card-list-container" ref={ref}>
        {dataItems?.map((item) => <Card key={item?.id} cardData={item}/>)}
      </div>
    </div>
  )
}

export default CardCarousel