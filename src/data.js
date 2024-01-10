import {v4 as uuidv4} from 'uuid'

// car model icons
import chevrolet from './img/model/chevrolet.svg'
import toyota from './img/model/toyota.svg'
import mers from './img/model/mers.svg'
import audi from './img/model/audi.svg'
import kia from './img/model/kia.svg'

// car markas images
import malibu from './img/malibu.jpg'
import malibu2 from './img/malibu2.jpg'
import malibu3 from './img/malibu3.jpg'
import malibu4 from './img/malibu4.jpg'
import onix from './img/onix.jpg'
import onix2 from './img/onix2.jpg'
import onix3 from './img/onix3.jpg'
import onix4 from './img/onix4.jpg'
import tracker from './img/tracker.jpg'
import tracker2 from './img/tracker2.jpg'
import tracker3 from './img/tracker3.jpg'
import tracker4 from './img/tracker4.jpg'
import captiva from './img/captiva.jpg'
import captiva2 from './img/captiva2.jpg'
import captiva3 from './img/captiva3.jpg'
import captiva4 from './img/captiva4.jpg'
import cobalt from './img/cobalt.jpg'
import cobalt2 from './img/cobalt2.jpg'
import cobalt3 from './img/cobalt3.jpg'
import cobalt4 from './img/cobalt4.jpg'
import damas from './img/damas.jpg'
import damas2 from './img/damas2.jpg'
import damas3 from './img/damas3.jpg'
import damas4 from './img/damas4.jpg'
import matiz from './img/matiz.jpg'
import matiz2 from './img/matiz2.jpg'
import matiz3 from './img/matiz3.jpg'
import matiz4 from './img/matiz4.jpg'
import ravon from './img/ravon.jpg'
import ravon2 from './img/ravon2.jpg'
import ravon3 from './img/ravon3.jpg'
import ravon4 from './img/ravon4.jpg'
import monza from './img/monza.jpg'
import monza2 from './img/monza2.jpg'
import monza3 from './img/monza3.jpg'
import monza4 from './img/monza4.jpg'
import nexia from './img/nexia.jpg'
import nexia2 from './img/nexia2.jpg'
import nexia3 from './img/nexia3.jpg'
import nexia4 from './img/nexia4.jpg'
import gentra from './img/gentra.jpg'
import gentra2 from './img/gentra2.jpg'
import gentra3 from './img/gentra3.jpg'
import gentra4 from './img/gentra4.jpg'
import labo from './img/labo.jpg'
import labo2 from './img/labo2.jpg'
import labo3 from './img/labo3.jpg'
import labo4 from './img/labo4.jpg'
import spark from './img/spark.jpg'
import spark2 from './img/spark2.jpg'
import spark3 from './img/spark3.jpg'
import spark4 from './img/spark4.jpg'

// audi
import audiA1 from './img/audiA1.jpg'
import audiA1second from './img/audiA1second.jpg'
import audiA1third from './img/audiA1third.jpg'
import audiA1firth from './img/audiA1firth.jpg'
import audiA4 from './img/audiA4.jpg'
import audiA4second from './img/audiA4second.jpg'
import audiA4third from './img/audiA4third.jpg'
import audiA4firth from './img/audiA4firth.jpg'
import audiA5 from './img/audiA5.jpg'
import audiA5second from './img/audiA5second.jpg'
import audiA5third from './img/audiA5third.jpg'
import audiA5firth from './img/audiA5firth.jpg'
import audiQ5 from './img/audiQ5.jpg'
import audiQ5second from './img/audiQ5second.jpg'
import audiQ5third from './img/audiQ5third.jpg'
import audiQ5firth from './img/audiQ5firth.jpg'
import audiQ7 from './img/audiQ7.jpg'
import audiQ7second from './img/audiQ7second.jpg'
import audiQ7third from './img/audiQ7third.jpg'
import audiQ7firth from './img/audiQ7firth.jpg'

// kia
import kiaK5 from './img/kiaK5.jpg'
import kiaK5second from './img/kiaK5second.jpg'
import kiaK5third from './img/kiaK5third.jpg'
import kiaK5firth from './img/kiaK5firth.jpg'
import kiaSorento from './img/kiaSorento.jpg'
import kiaSorento2 from './img/kiaSorento2.jpg'
import kiaSorento3 from './img/kiaSorento3.jpg'
import kiaSorento4 from './img/kiaSorento4.jpg'
import kiaSportage1 from './img/kiaSportage1.jpg'
import kiaSportage2 from './img/kiaSportage2.jpg'
import kiaSportage3 from './img/kiaSportage3.jpg'
import kiaSportage4 from './img/kiaSportage4.jpg'

// mers
import mersAMG from './img/mersAMG.jpg'
import mersAMG2 from './img/mersAMG2.jpg'
import mersAMG3 from './img/mersAMG3.jpg'
import mersAMG4 from './img/mersAMG4.jpg'
import mersGLC from './img/mersGLC.jpg'
import mersGLC2 from './img/mersGLC2.jpg'
import mersGLC3 from './img/mersGLC3.jpg'
import mersGLC4 from './img/mersGLC4.jpg'
import mersMaybach from './img/mersMaybach.jpg'
import mersMaybach2 from './img/mersMaybach2.jpg'
import mersMaybach3 from './img/mersMaybach3.jpg'
import mersMaybach4 from './img/mersMaybach4.jpg'

// tayota
import tayotaCamry from './img/tayotaCamry.jpg'
import tayotaCamry2 from './img/tayotaCamry2.jpg'
import tayotaCamry3 from './img/tayotaCamry3.jpg'
import tayotaCamry4 from './img/tayotaCamry4.jpg'
import tayotaCrown from './img/tayotaCrown.jpg'
import tayotaCrown2 from './img/tayotaCrown2.jpg'
import tayotaCrown3 from './img/tayotaCrown3.jpg'
import tayotaCrown4 from './img/tayotaCrown4.jpg'

export const cars = [
    // chevrolet
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Malibu',
        year: 2019,
        run: 32000,
        price: 252000000,
        place: 'Andijon',
        color: 'oq',
        images: [malibu, malibu2, malibu3, malibu4],
        date: '23.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Onix',
        year: 2023,
        run: 10000,
        price: 180000000,
        place: 'Buxoro',
        color: 'qora',
        images: [onix2,onix, onix3, onix4],
        date: '20.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Tracker-2',
        year: 2023,
        run: 8300,
        price: 230000000,
        place: 'Samarqand',
        color: 'qora',
        images: [tracker, tracker2, tracker3, tracker4],
        date: '09.01.2024'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Captiva',
        year: 2018,
        run: 83000,
        price: 258000000,
        place: 'Namangan',
        color: 'white',
        images: [captiva, captiva2, captiva3, captiva4],
        date: '29.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Cobalt',
        year: 2020,
        run: 83000,
        price: 142000000,
        place: 'Jizzax',
        color: 'qora',
        images: [cobalt, cobalt2, cobalt3, cobalt4],
        date: '25.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Damas',
        year: 2018,
        run: 65748,
        price: 93000000,
        place: 'Fargona',
        color: 'oq',
        images: [damas, damas2, damas3, damas3, damas4],
        date: '31.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Matiz',
        year: 2012,
        run: 200748,
        price: 42000000,
        place: 'Sirdaryo',
        color: 'och kulrang',
        images: [matiz, matiz2, matiz3, matiz4],
        date: '03.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Ravon',
        year: 2019,
        run: 62748,
        price: 102000000,
        place: 'Andijon',
        color: 'qora',
        images: [ravon, ravon2, ravon3, ravon4],
        date: '27.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Monza',
        year: 2023,
        run: 0,
        price: 189000000,
        place: 'Buxoro',
        color: 'qora',
        images: [monza2, monza, monza3, monza4],
        date: '10.01.2024'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Nexia 2',
        year: 2012,
        run: 290000,
        price: 74000000,
        place: 'Jizzax',
        color: 'oq',
        images: [nexia, nexia2, nexia3, nexia4],
        date: '29.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Gentra',
        year: 2019,
        run: 120000,
        price: 144000000,
        place: 'Fargona',
        color: 'oq',
        images: [gentra, gentra2, gentra3, gentra4],
        date: '31.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Labo',
        year: 2022,
        run: 12000,
        price: 94000000,
        place: 'Fargona',
        color: 'oq',
        images: [labo, labo2, labo3, labo4],
        date: '24.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Chevrolet',
        logo: chevrolet,
        marka: 'Spark',
        year: 2020,
        run: 250000,
        price: 74000000,
        place: 'Fargona',
        color: 'oq',
        images: [spark, spark2, spark3, spark4],
        date: '23.12.2023'
    },

    // audi
    {
        id: uuidv4(),
        model: 'Audi',
        logo: audi,
        marka: 'A1',
        year: 2019,
        run: 120000,
        price: 250000000,
        place: 'Fargona',
        color: 'kulrang',
        images: [audiA1, audiA1second, audiA1third, audiA1firth],
        date: '27.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Audi',
        logo: audi,
        marka: 'A4',
        year: 2020,
        run: 119000,
        price: 462000000,
        place: 'Andijon',
        color: 'oq',
        images: [audiA4, audiA4second, audiA4third, audiA4firth],
        date: '31.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Audi',
        logo: audi,
        marka: 'A5',
        year: 2021,
        run: 89000,
        price: 562000000,
        place: 'Samarqand',
        color: 'kulrang',
        images: [audiA5, audiA5second, audiA5third, audiA5firth],
        date: '08.01.2024'
    },
    {
        id: uuidv4(),
        model: 'Audi',
        logo: audi,
        marka: 'Q5',
        year: 2022,
        run: 69000,
        price: 592000000,
        place: 'Sirdaryo',
        color: "ko'k",
        images: [audiQ5, audiQ5second, audiQ5third, audiQ5firth],
        date: '23.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Audi',
        logo: audi,
        marka: 'Q7',
        year: 2022,
        run: 69000,
        price: 703000000,
        place: 'Andijon',
        color: "kulrang",
        images: [audiQ7, audiQ7second, audiQ7third, audiQ7firth],
        date: '01.01.2024'
    },

    // kia
    {
        id: uuidv4(),
        model: 'Kia',
        logo: kia,
        marka: 'K5',
        year: 2022,
        run: 179000,
        price: 353000000,
        place: 'Namangan',
        color: "oq",
        images: [kiaK5, kiaK5second, kiaK5third, kiaK5firth],
        date: '05.01.2024'
    },
    {
        id: uuidv4(),
        model: 'Kia',
        logo: kia,
        marka: 'Sorento',
        year: 2022,
        run: 129000,
        price: 453000000,
        place: 'Toshkent',
        color: "oq",
        images: [kiaSorento, kiaSorento2, kiaSorento3, kiaSorento4],
        date: '06.01.2024'
    },
    {
        id: uuidv4(),
        model: 'Kia',
        logo: kia,
        marka: 'Sportage',
        year: 2023,
        run: 89000,
        price: 499000000,
        place: 'Andijon',
        color: "oq",
        images: [kiaSportage1, kiaSportage2, kiaSportage3, kiaSportage4],
        date: '09.01.2024'
    },

    // mers
    {
        id: uuidv4(),
        model: 'Mersedes',
        logo: mers,
        marka: 'AMG',
        year: 2023,
        run: 29000,
        price: 799000000,
        place: 'Buxoro',
        color: "qora",
        images: [mersAMG, mersAMG2, mersAMG3, mersAMG4],
        date: '23.12.2023'
    },
    {
        id: uuidv4(),
        model: 'Mersedes',
        logo: mers,
        marka: 'GLC',
        year: 2021,
        run: 119000,
        price: 499000000,
        place: 'Samarqand',
        color: "qora",
        images: [mersGLC, mersGLC2, mersGLC3, mersGLC4],
        date: '08.01.2024'
    },
    {
        id: uuidv4(),
        model: 'Mersedes',
        logo: mers,
        marka: 'Maybach',
        year: 2022,
        run: 79000,
        price: 2499000000,
        place: 'Andijon',
        color: "qora",
        images: [mersMaybach, mersMaybach2, mersMaybach3, mersMaybach4],
        date: '10.01.2024'
    },

    // tayota
    {
        id: uuidv4(),
        model: 'Tayota',
        logo: toyota,
        marka: 'Camry',
        year: 2022,
        run: 139000,
        price: 599000000,
        place: 'Buxoro',
        color: "ko'k",
        images: [tayotaCamry, tayotaCamry2, tayotaCamry3, tayotaCamry4],
        date: '01.01.2024'
    },
    {
        id: uuidv4(),
        model: 'Tayota',
        logo: toyota,
        marka: 'Crown',
        year: 2023,
        run: 0,
        price: 789000000,
        place: 'Andijon',
        color: "Qizil (black-line)",
        images: [tayotaCrown, tayotaCrown2, tayotaCrown3, tayotaCrown4],
        date: '08.01.2024'
    },
];

import nomer from './img/news/nomer.jpeg'
import roewe from './img/news/roewe.jpeg'
import sony from './img/news/sony.jpeg'
import uzAM from './img/news/uzAM.jpeg'
import volga from './img/news/volga.jpeg'
import xitoy from './img/news/xitoy.jpeg'

export const news = [
    {
        id: uuidv4(),
        img: xitoy,
        title: "2023 yilda eng ko‘p avtomobilni qaysi davlat eksport qilgani ma’lum bo‘ldi",
        date: '09-01-2024',
        text: "2023 yilning oxiriga kelib, Xitoy tashqi bozorlarga jo‘natmalarning ko‘payishi hamda global elektromobil sanoatining o‘sishi tufayli birinchi marta dunyodagi eng yirik avtomobil eksportchisiga aylanishi mumkin. Bu haqda Nikkei ma’lum qildi, deya xabar beradi Kazinform. Xitoy avtomobil ishlab chiqaruvchilar assosiasiyasining (CAAM) dastlabki ma’lumotlariga ko‘ra, Xitoy joriy yil yanvar-noyabr oylari davomida 4,41 million avtomobil eksport qilgan.Yaponiya joriy yilning 11 oyida 3,99 million dona avtomobil eksport qildi va 2023 yil oxiriga kelib jami eksport hajmi taxminan 4,3 millionga yetishi mumkin. Nashrning yozishicha, yanvardan oktyabrgacha Xitoy Rossiyaga 730 ming dona avtomobil eksport qilgan, bu o‘tgan yilga nisbatan yetti barobar ko‘pdir.O‘z navbatida, Meksikaga avtomobil yetkazib berish yiliga 71 foizga o‘sdi va 330 mingtani tashkil etdi. Xitoy joriy yilda elektr va boshqa muqobil energiya vositalarining global eksportini kengaytirdi. Xitoyning yangi elektromobillari eksporti 2023 yilning birinchi 11 oyida 1,09 million donani tashkil etdi, bu o‘tgan yilning shu davriga nisbatan 83,5 foizga ko‘pdir."
    },
    {
        id: uuidv4(),
        img: nomer,
        title: "Yangi avtomobilga raqam olish va ro'yxatdan o'tkazish qancha?",
        date: '08-01-2024',
        text: "Qonunchilikka ko'ra, avtomototransport vositalariga ro'yxatdan o'tkazish davlat raqami belgilarini berishda hamda ularni ro'yxatdan o'tkazishda quyidagi to'lovlar undirilishi belgilangan: Avtotransport vositalariga ro'yxatdan o'tkazish davlat raqami belgilari (RO'DRB) uchun BHMning 3,5 baravari (1 mln 190 ming so'm) miqdorida; Avtomototransport vositalarini va ularning tirkamalari (yarim tirkamalari)ni ro'yxatdan o'tkazish va qayta ro'yxatdan o'tkazish uchun BHMning10 foizi (34 ming so'm) miqdorida; Avtomototransport vositasi ro'yxatdan o'tkazilganligi to'g'risida guvohnomani berish uchun BHMning 70 foizi (238 ming so'm) miqdorida."
    },
    {
        id: uuidv4(),
        img: sony,
        title: "Sony o‘zining ilk elektromobilini namoyish etdi",
        date: '07-01-2024',
        text: "Sony o‘zining ilk elektromobilini namoyish etdi. Uni sahnaga DualSense geympadi bilan boshqarib chiqarishdi. Elektromobil ustida Honda bilan birgalikda ishlashgan. Mashina ichida tirbandlikda turganda zerikib qolmaslik uchun top o‘yinlar ham o‘rnatilgan."
    },
    {
        id: uuidv4(),
        img: roewe,
        title: "Roewe D5X DMH taqdim etildi",
        date: '07-01-2024',
        text: "Roewe’ning yangi modeli bir martalik to‘liq quvvatlanish va to‘la benzin baki bilan CLTC sikli bo‘yicha 1300 km masofa bosib o‘ta oladi. Avtomobil 100 kmga 5,25 litr benzin sarf qiladi. 100 km tezlikka esa 6,9 soniyada chiqadi. Hozircha uning narxi ma’lum qilinmadi."
    },
    {
        id: uuidv4(),
        img: volga,
        title: "Rossiyada “Volga” avtomobilining ehtimoliy dizayni suratlari internetda tarqaldi",
        date: '07-01-2024',
        text: "Rossiyada “Volga” avtomobilining ehtimolli dizayni suratlari Internetda tarqaldi. Rossiyada ushbu qadimiy markadagi yangilangan avtomobillar Xitoy kompaniyalaridan biri ishtirokida ishlab chiqarilishi mumkin"
    },
    {
        id: uuidv4(),
        img: uzAM,
        title: "UzAuto Motors avtomobillarni o‘z egalariga topshirishni vaqtincha to‘xtatib turadi",
        date: '04-01-2024',
        text: "“UzAuto Motors” avtomobillarni o‘z egasiga topshirishni vaqtincha to‘xtatib turadi. Bu haqda kompaniya matbuot xizmati xabar berdi. “4−8-yanvar kunlari „Chevrolet“ dilerlik markazlarida rejalashtirilgan inventarizasiya ishlari olib boriladi. Shu sababli, ushbu davr mobaynida avtomobillarni o‘z egasiga topshirish vaqtincha to‘xtatiladi”, — deyiladi kompaniya xabarida."
    },
    {
        id: uuidv4(),
        img: kiaSorento,
        title: "“Inomarka”larning faqat dilerlar tomonidan sotilishi tartibi qayta tiklanishi mumkin",
        date: '29-12-2023',
        text: "O‘zbekiston hukumati 2023 yil 15 avgustdagi qarori bilan, import qilingan avtomobillarni faqat ishlab chiqaruvchi korxonaning rasmiy dileri tomonidan sotilishiga oid talabni bekor qilgan va bu avtomobil bozorida raqobat muhitini yaxshilashda muhim qadam deb baholangan edi. Ma’lum bo‘lishicha, oradan yarim yil o‘tmay, bu tartibni tiklash masalasi ko‘rib chiqilmoqda. Bu haqda Kun.uz xabar berdi. Shu kunlarda ijtimoiy tarmoqlarda Vazirlar Mahkamasining “Respublika hududiga yengil avtomobillar olib kirishni va ularning muvofiqligini baholash tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida”gi qarori loyihasi tarqaldi. Loyiha project.gov.uz portaliga idoralararo kelishuv uchun joylangani aytilmoqda. Loyihada yangi import avtotransport vositalari faqat yuridik shaxslar – ishlab chiqaruvchi korxonalarning rasmiy dilerlari tomonidan servis markazlarini tashkil etish sharti bilan sotilishi nazarda tutilgan. Shuningdek, bir yilda 50 donadan ko‘p elektromobil sotgan tadbirkorlik sub’ektlariga ularni quvvatlash stansiyasini tashkil etish va uzluksiz ishlashini ta’minlash majburiyati yuklatilishi mumkin. Qaror loyihasiga ko‘ra, jismoniy shaxslar tomonidan 1 yilda 1 marta o‘z ehtiyoji uchun, o‘z nomiga rasmiylashtirilgan holda olib kiriladigan transport vositalari majburiy sertifikatlashgan ozod etiladi. Ayni paytda, jismoniy shaxslar tomonidan avtotransport vositalarini tijorat maqsadida respublikaga olib kirish taqiqlanishi mumkin. Jismoniy shaxs transport vositasini olib kirayotganida tijoriy maqsadni ko‘zlaganiga qanday baho berilishiga aniqlik kiritilmagan. Shuningdek, davlat korxonalari va tadbirkorlik sub’ektlari tomonidan o‘z ehtiyojlari uchun olib kiriladigan, respublika hududida sotish uchun mo‘ljallanmagan transport vositalarini ham majburiy sertifikatlashdan ozod etish taklif etilmoqda. Bunda, jismoniy shaxslardan farqli o‘laroq, korxonalarga sertifikatlashdan ozod etiladigan import transport vositalari soni bo‘yicha cheklov belgilanmagan. Respublika hududiga tijorat maqsadlarida olib kiriladigan transport vositalari, elektrobus va eletromobillarga xorijiy davlatlarining mavjud sertifikatlari yoki akkreditasiyalangan laboratoriyalari tomonidan taqdim etilgan sinov bayonnomalari asosida hamda O‘zbekiston Respublikasida akkreditasiyalangan laboratoriyalarning imkoniyatlaridan kelib chiqqan holda, transport vositasining turini ma’qullash hujjatlarini rasmiylashtirishga ruxsat berilishi mumkin. Davlat reestriga kiritilgan transport vositasining turini ma’qullash hujjatlari asosida, jismoniy va yuridik shaxslar tomonidan o‘z extiyoji uchun 1 kalendar yilida respublika hududiga 1 dona takroran olib kirilgan (import) shu turdagi transport vositalari qayta sinovdan o‘tkazilmasdan va sertifikatlashtirmasdan, erkin muomalaga chiqarilishi ko‘zda tutilmoqda."
    }
]

import location from './img/location.svg'
import call from './img/call.svg'
import hour from './img/hour.svg'

export const contactInfos = [
    {
        id: uuidv4(),
        img: location,
        title: 'Manzil',
        text: "Andijon shahar, Qo'shariq 22-uy"
    },
    {
        id: uuidv4(),
        img: call,
        title: 'Telefon',
        text: "+998(88) 169-00-33"
    },
    {
        id: uuidv4(),
        img: hour,
        title: 'Ish vaqti',
        text: "24/7"
    }
]