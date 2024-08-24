import React from "react";

// images
import like from "../img/like.svg";
import commentUsersImg from "../img/comment-users.png";

const CarCommentItem = ({ id, model, marka, author, rate, liked, comment }) => {
  const renderStars = (value) => {
    const rate = value === 0 ? 5 : value;
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            width="24"
            height="24"
            fill="none"
            key={index}
            className="size-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="1.5"
              stroke="#fbc02d"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={rate > index ? "#fbc02d" : "transparent"}
              d="M11.1737 3.08049C11.4355 2.46458 11.5664 2.15663 11.7487 2.06179C11.9071 1.9794 12.093 1.9794 12.2513 2.06179C12.4336 2.15663 12.5646 2.46458 12.8264 3.08049L14.9117 7.9863C14.9892 8.16838 15.0279 8.25941 15.0878 8.32913C15.1407 8.39082 15.2055 8.44016 15.2778 8.47394C15.3596 8.51212 15.4541 8.52258 15.6432 8.5435L20.7371 9.10727C21.3766 9.17804 21.6963 9.21342 21.8387 9.36591C21.9623 9.49836 22.0197 9.68383 21.9939 9.86721C21.9643 10.0783 21.7255 10.304 21.2478 10.7554L17.4427 14.3512C17.3015 14.4846 17.2308 14.5513 17.1862 14.6326C17.1466 14.7046 17.1218 14.7844 17.1136 14.8669C17.1042 14.9602 17.1239 15.0577 17.1633 15.2528L18.2261 20.507C18.3596 21.1666 18.4263 21.4964 18.332 21.6855C18.25 21.8498 18.0996 21.9644 17.9253 21.9953C17.7247 22.0309 17.4462 21.8625 16.8891 21.5256L12.452 18.842C12.2874 18.7424 12.205 18.6927 12.1175 18.6731C12.04 18.6559 11.96 18.6559 11.8825 18.6731C11.795 18.6927 11.7127 18.7424 11.548 18.842L7.11095 21.5256C6.5539 21.8625 6.27537 22.0309 6.07474 21.9953C5.90046 21.9644 5.75 21.8498 5.66808 21.6855C5.57378 21.4964 5.64049 21.1666 5.77392 20.507L6.83669 15.2528C6.87614 15.0577 6.89586 14.9602 6.88649 14.8669C6.8782 14.7844 6.85347 14.7046 6.81389 14.6326C6.76916 14.5513 6.69855 14.4846 6.55734 14.3512L2.75231 10.7554C2.27461 10.304 2.03575 10.0783 2.00605 9.86721C1.98027 9.68383 2.03773 9.49836 2.16138 9.36591C2.30374 9.21342 2.6235 9.17804 3.26302 9.10727L8.35689 8.5435C8.54596 8.52258 8.64048 8.51212 8.72222 8.47394C8.79454 8.44016 8.85929 8.39082 8.91229 8.32913C8.97217 8.25941 9.01087 8.16838 9.08828 7.9863L11.1737 3.08049Z"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <li key={id} className="flex flex-col bg-white rounded-xl shadow-md">
      {/* details */}
      <div className="p-5 pb-2.5 space-y-3.5 grow">
        <div className="space-y-2.5">
          {/* comment owner */}
          <h3 className="text-111 text-xl font-bold">Muallif: {author}</h3>

          {/* car */}
          <p>
            <span className="text-teal-500 font-semibold">
              {model} {marka}
            </span>
            <span className="font-medium"> haqida sharx</span>
          </p>

          {/* rating */}
          <div className="flex items-center gap-2.5">
            <span className="font-medium leading-none">Baho:</span>

            {renderStars(rate)}
          </div>
        </div>

        {/* comment */}
        <p className="line-clamp-3">{comment}</p>
      </div>

      {/* content bottom */}
      <div className="flex justify-between items-center border-t py-2.5 px-5">
        <div className="flex items-center gap-2.5">
          <img
            width={68}
            height={28}
            alt="comment user"
            src={commentUsersImg}
            className="w-[68px] h-7"
          />

          <p>{liked} kishi yoqtirdi</p>
        </div>

        {/* toggle useful btn */}
        <button className="inline-flex space-x-2 p-1">
          <img
            width={20}
            src={like}
            height={20}
            className="size-5"
            alt="like icon"
          />
        </button>
      </div>
    </li>
  );
};

export default CarCommentItem;
