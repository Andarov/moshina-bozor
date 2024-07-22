import React, { useEffect, useState } from "react";
import like from '../img/like.svg'
import SignInModal from "./SingInModal";

const CarCommentItem = ({ id, model, marka, author, rate, liked, comment }) => {
  // Yulduzcha rangini belgilash uchun
  const getStarColor = (rate) => {
    if (rate <= 2) return "text-red-500";
    if (rate === 3) return "text-yellow-500";
    if (rate === 4) return "text-green-300";
    if (rate === 5) return "text-green-700";
    return "text-gray-500";
  };

  // Vaziyatga qarab yulduzchalar holati
  const renderStars = (rate) => {
    const totalStars = 5; 
    const stars = [];
    const starColor = getStarColor(rate);
    for (let i = 0; i < totalStars; i++) {
      if (i < rate) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${starColor}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.43 4.399a1 1 0 00.95.69h4.657c.969 0 1.371 1.24.588 1.81l-3.757 2.73a1 1 0 00-.364 1.118l1.43 4.398c.3.921-.755 1.688-1.54 1.118l-3.757-2.73a1 1 0 00-1.175 0l-3.757 2.73c-.784.57-1.84-.197-1.54-1.118l1.43-4.398a1 1 0 00-.364-1.118L2.173 9.826c-.784-.57-.38-1.81.588-1.81h4.657a1 1 0 00.95-.69l1.43-4.399z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-gray-400`}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.43 4.399a1 1 0 00.95.69h4.657c.969 0 1.371 1.24.588 1.81l-3.757 2.73a1 1 0 00-.364 1.118l1.43 4.398c.3.921-.755 1.688-1.54 1.118l-3.757-2.73a1 1 0 00-1.175 0l-3.757 2.73c-.784.57-1.84-.197-1.54-1.118l1.43-4.398a1 1 0 00-.364-1.118L2.173 9.826c-.784-.57-.38-1.81.588-1.81h4.657a1 1 0 00.95-.69l1.43-4.399z" />
          </svg>
        );
      }
    }
    return stars;
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleLikeClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  return (
    <>
      <li key={id} className="flex flex-col bg-white p-5 rounded-xl shadow-md">
        {/* comment info */}
        <div>
          <h3 className="text-111 text-[20px] font-bold leading-7">
            Author: {author}
          </h3>
          <p>
            <span className="text-blue-700 font-semibold">{model} {marka}</span> haqida sharx
          </p>
          <div className="flex gap-2">
            <span>Baxo:</span>
            <div className="flex items-center">
              {renderStars(rate)}
            </div>
          </div>
        </div>
        {/* comment */}
        <p className="my-3 grow">{comment}</p>
        {/* like */}
        <div className="flex justify-between items-center border-t pt-2">
          <div>{liked}ta odam yoqtirdi</div>
          <button className="inline-flex space-x-2" onClick={handleLikeClick}>
            <span>Foydali</span>
            <img className="w-5 h-5" src={like} alt="" />
          </button>
        </div>
      </li>

      {/* Modal */}
      <SignInModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default CarCommentItem;
