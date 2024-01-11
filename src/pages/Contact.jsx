import React from "react";
import { contactInfos } from "../data";

const Contact = () => {
    return (
    <div className="pb-12">
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className="text-4xl leading-10 text-111 font-bold mt-5 mb-8">
          Boglanish
        </h1>

        {/* short infos */}
        <ul className="grid grid-cols-3 gap-7 mb-10">
          {
            contactInfos.map((contactInfo)=>{
                return(
                    <li key={contactInfo.id} className="p-5 rounded-3xl flex items-center shadow-lg border">
                        <img className="mr-5" src={contactInfo.img} alt={contactInfo.title} />
                        <div>
                            <h3 className="text-lg font-bold mb-1">{contactInfo.title}</h3>
                            <p>{contactInfo.text}</p>
                        </div>
                    </li>
                )
            })
          }
        </ul>

        {/* all infos */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-bold leading-6 text-111 mb-5">Umumiy ma'lumotlar:</h2>

            <div className="space-y-3">
                <div>
                    <h3 className="text-sm leading-5 text-[#515456]">To'liq nomi:</h3>
                    <p className="text-base font-medium leading-6 text-111">"Moshina bozor" MCHJ</p>
                </div>
                <div>
                    <h3 className="text-sm leading-5 text-[#515456]">To'liq manzil:</h3>
                    <p className="text-base font-medium leading-6 text-111">Andijon viloyati, Andijon shahar, Qo'shariq daxasi 22-uy</p>
                </div>
                <div>
                    <h3 className="text-sm leading-5 text-[#515456]">INN:</h3>
                    <p className="text-base font-medium leading-6 text-111">540508146785</p>
                </div>
                <div>
                    <h3 className="text-sm leading-5 text-[#515456]">Bosh direktor:</h3>
                    <p className="text-base font-medium leading-6 text-111">Andarov Bektur Ibroximjon o'g'li</p>
                </div>
            </div>
          </div>
          <div className="w-full max-w-[600px] bg-gray-400">
          <iframe className="w-full h-[400px] border-0" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6497.36229050489!2d72.34037696855025!3d40.808700407126736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1704911053862!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
