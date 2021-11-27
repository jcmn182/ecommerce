import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const RatingComponent = ({rate,onClick,style}) => {
    return (
        <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rate > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </div>
    )
}
