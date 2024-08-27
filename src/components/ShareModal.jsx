import React from "react";

// components
import ModalFrame from "./ModalFrame";
import CopyButton from "./CopyButton";

// redux
import { useDispatch } from "react-redux";
import { updateModalValue, closeModal } from "../store/slices/modalsSlice";

// images
import chatIcon from "../img/icon/chat-multicolor.svg";
import emailIcon from "../img/icon/gmail-multicolor.svg";
import copyIcon from "../img/icon/copy-document-folder.svg";
import facebookIcon from "../img/icon/facebook-circle-multicolor.svg";
import telegramIcon from "../img/icon/telegram-communication-chat-interaction-network-connection.svg";

const ShareModal = ({
  description = "",
  title = "Ulashish",
  subject = "Sarlavha",
  message = "Xabar matni",
  link = "https://example.com",
}) => {
  const dispatch = useDispatch();
  const handleCloseModal = () => dispatch(closeModal("shareModal"));

  // encode url
  const fullMessage = `${message} ${link}`;
  const encodeLink = encodeURIComponent(link);
  const encodeMsg = encodeURIComponent(message);
  const encodeSubject = encodeURIComponent(subject);
  const encodeFullMsg = encodeURIComponent(fullMessage);

  // social share URLs
  const smsURL = `sms:?&body=${encodeFullMsg}`;
  const emailURL = `mailto:?subject=${encodeSubject}&body=${encodeFullMsg}`;
  const telegramURL = `https://t.me/share/url?text=${encodeMsg}&url=${encodeLink}`;
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeLink}`;

  return (
    <ModalFrame
      title={title}
      className="space-y-3.5"
      description={description}
      onClose={handleCloseModal}
    >
      {/* list */}
      <ul>
        {/* telegram */}
        <li>
          <a
            target="_blank"
            href={telegramURL}
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-3.5 pl-0 rounded-lg transition-[background-color,padding] duration-300 hover:pl-3.5 hover:bg-gray-100"
          >
            <img
              width={40}
              height={40}
              src={telegramIcon}
              alt="telegram multicolor logo icon"
              className="size-10 bg-white p-1.5 border border-111/25 rounded-lg"
            />

            {/* title */}
            <h3 className="font-medium">Telegram orqali ulashish</h3>
          </a>
        </li>

        {/* facebook */}
        <li>
          <a
            target="_blank"
            href={facebookURL}
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-3.5 pl-0 rounded-lg transition-[background-color,padding] duration-300 hover:pl-3.5 hover:bg-gray-100"
          >
            <img
              width={40}
              height={40}
              src={facebookIcon}
              alt="facebook multicolor logo icon"
              className="size-10 bg-white p-1.5 border border-111/25 rounded-lg"
            />

            {/* title */}
            <h3 className="font-medium">Facebook orqali ulashish</h3>
          </a>
        </li>

        {/* email */}
        <li>
          <a
            target="_blank"
            href={emailURL}
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-3.5 pl-0 rounded-lg transition-[background-color,padding] duration-300 hover:pl-3.5 hover:bg-gray-100"
          >
            <img
              width={40}
              height={40}
              src={emailIcon}
              alt="email multicolor logo icon"
              className="size-10 bg-white p-1.5 border border-111/25 rounded-lg"
            />

            {/* title */}
            <h3 className="font-medium">E-pochta orqali ulashish</h3>
          </a>
        </li>

        {/* sms */}
        <li>
          <a
            href={smsURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-3.5 pl-0 rounded-lg transition-[background-color,padding] duration-300 hover:pl-3.5 hover:bg-gray-100"
          >
            <img
              width={40}
              height={40}
              src={chatIcon}
              alt="sms multicolor logo icon"
              className="size-10 bg-white p-1.5 border border-111/25 rounded-lg"
            />

            {/* title */}
            <h3 className="font-medium">SMS orqali ulashish</h3>
          </a>
        </li>
      </ul>

      {/* divider (line) */}
      <div className="divider"></div>

      {/* copy btn */}
      <CopyButton
        text={link}
        title="Havoladan nusxa olish"
        notificationText="Havoladan nusxa olindi"
        className="flex items-center gap-5 w-full p-3.5 pl-0 rounded-lg transition-[background-color,padding.opacity] duration-300 hover:pl-3.5 hover:bg-gray-100 disabled:opacity-50"
      >
        <img
          width={40}
          height={40}
          src={copyIcon}
          alt="multicolor copy icon"
          className="size-10 bg-white p-1.5 border border-111/25 rounded-lg"
        />

        {/* title */}
        <h3 className="font-medium">Havoladan nusxa olish</h3>
      </CopyButton>
    </ModalFrame>
  );
};

export default ShareModal;
