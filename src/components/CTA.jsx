import React from "react";
import carIcon from '../img/carIcon.png'
import telegramIcon from '../img/telegramIcon.png'

const CTA = () => {
  return (
    <div className="py-20 bg-detailBg bg-cover">
      <div className="w-full max-w-base mx-auto px-5">
        <div className="w-full max-w-md text-white space-y-4">
          <h2 className="text-2xl leading-7 font-bold sm:text-3xl md:leading-9">
            Biz bilan bog'lanish
          </h2>
          <p className="opacity-80 font-medium">Saytga o'z mashinangiz elonini joylamoqchimisiz yoki sayt bo'yicha takliflaringiz bor bo'lsa quyidagi linklar orqali bog'lanishingiz mumkin</p>
          <div className="flex items-center space-x-4">
            <a className="inline-flex items-center px-3 py-3 bg-main rounded-lg space-x-2 sm:px-8 sm:space-x-4" href="https://t.me/Andarov_B">
                <img className="w-6 h-6" width={24} height={24} src={telegramIcon} alt="Telegram Icon" />
                <span className="font-semibold">Telegram</span>
            </a>
            <a className="inline-flex items-center px-3 py-3 bg-main rounded-lg space-x-2 sm:px-8 sm:space-x-4" href="https://t.me/Andarov_B">
                <img className="w-6 h-6" width={24} height={24} src={carIcon} alt="Ad Icon" />
                <span className="font-semibold">Elon joylash</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
