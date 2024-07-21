import React from "react";
import { useParams } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import { carComments } from "../data";
import CarCommentItem from "../components/CarCommentItem";

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

  return (
    <div className="py-14 bg-gray-300">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="bg-white p-5 rounded-md shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-2">
            {model} {marka} haqida sharhlar
          </h2>
          <p>Jami sharhlar: {totalComments}</p>
          <p>O'rtacha reyting: {averageRate}</p>
          <div className="mb-4">
            {ratings.map((rating, index) => (
              <ProgressBar
                key={index}
                now={rating}
                label={`${(rating).toFixed(2)}%`}
                className="mb-1"
              />
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
