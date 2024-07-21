import React from "react";
import { useParams } from "react-router-dom";
import { carComments } from "../data";
import CarCommentItem from "../components/CarCommentItem";
import ProgressBar from "../components/ProgressBar"; // Import the custom ProgressBar
import {Link} from 'react-router-dom';

const calculateProgress = (comments) => {
  const total = comments.length;
  const ratings = [1, 2, 3, 4, 5].map(
    (rate) => (comments.filter((comment) => comment.rate === rate).length / total) * 100
  );
  return ratings;
};

const CarComment = () => {
  const { model, marka } = useParams();
  const comments = carComments.filter(
    (comment) => comment.model === model && comment.marka === marka
  );

  const ratings = calculateProgress(comments);
  const totalComments = comments.length;
  const averageRate = (comments.reduce((acc, comment) => acc + comment.rate, 0) / totalComments).toFixed(1);

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

  return (
    <div className="py-14 bg-gray-300">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="relative bg-white p-5 rounded-md shadow-md mb-4">
          <Link to="/elon/sharx" className="absolute right-5 bg-blue-400 px-5 py-2 rounded-md !text-white font-medium">Sharx qoldirish</Link>
          <h2 className="text-xl font-semibold mb-2">
            {model} {marka} haqida sharhlar
          </h2>
          <div className="mb-4">
            <p>Jami sharhlar: {totalComments}</p>
            <p>O'rtacha reyting: {averageRate}</p>
          </div>
          <div className="mb-4">
            {ratings.map((rating, index) => (
              <div className="flex items-center space-x-4 ">
                <div className="flex">{renderStars(index+1)}</div>

                <ProgressBar
                  key={index}
                  value={rating}
                  label={`${rating.toFixed(2)}%`}
                />
              </div>
            ))}
          </div>
        </div>
        <ul className="flex flex-col space-y-5">
          {comments.map((comment) => (
            <CarCommentItem key={comment.id} {...comment} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarComment;
