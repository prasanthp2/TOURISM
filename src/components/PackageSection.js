import "./PackageSection.css";
import { Link } from "react-router-dom";
import { PackageCard } from "./PackageCard";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";

export const PackageSection = () => {
  const packageInfoRow1 = [
    {
      place: "himachal",
      info: "Explore the breathtaking landscapes of Himachal Pradesh, nestled in the Himalayas. From lush green valleys to snow-capped peaks, experience the serenity of nature at its best.",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "goa",
      info: "Discover the vibrant beaches and rich culture of Goa, India's favorite holiday destination. Relax under the sun, indulge in water sports, and experience the lively nightlife.",
      img: goa,
      price: "4000-5000 INR",
    },
    {
      place: "kerala",
      info: "Experience the tranquil backwaters, lush tea plantations, and pristine beaches of Kerala, known as 'God's Own Country.' Immerse yourself in the unique culture and cuisine of this picturesque state.",
      img: kerala,
      price: "4000-5000 INR",
    },
    {
      place: "rajasthan",
      info: "Journey through the royal heritage of Rajasthan, exploring majestic forts, opulent palaces, and vibrant markets. Get immersed in the colorful culture and rich history of the Land of Kings.",
      img: rajasthan,
      price: "4000-5000 INR",
    },
  ];
  const packageInfoRow2 = [
    {
      place: "dubai",
      info: "Experience the dazzling cityscape and luxurious lifestyle of Dubai, a global hub for shopping, entertainment, and innovation. From towering skyscrapers to desert adventures, Dubai offers something for everyone.",
      img: dubai,
      price: "4000-5000 INR",
    },
    {
      place: "europe",
      info: "Embark on a journey through Europe's iconic cities and scenic landscapes. From the romantic streets of Paris to the historic landmarks of Rome, Europe is a treasure trove of cultural experiences.",
      img: europe,
      price: "4000-5000 INR",
    },
    {
      place: "thailand",
      info: "Discover the exotic beauty and vibrant culture of Thailand, known for its pristine beaches, ornate temples, and delicious cuisine. Dive into the crystal-clear waters or explore bustling markets - Thailand has it all.",
      img: thailand,
      price: "4000-5000 INR",
    },
    {
      place: "maldives",
      info: "Escape to the tropical paradise of the Maldives, where crystal-clear waters meet powdery white sands. Relax in luxurious overwater villas, snorkel among vibrant coral reefs, and indulge in gourmet dining.",
      img: maldives,
      price: "4000-5000 INR",
    },
  ];
  return (
    <>
      <div className="container3">
        <section className="packages" id="packages">
          <h1>Best Selling Destinations!</h1>
          <div className="outerbox">
            <h2>
              Domestic
              <hr />
            </h2>
            <div className="row1">
              {packageInfoRow1.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <h2>
              International
              <hr />
            </h2>
            <div className="row2">
              {packageInfoRow2.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <div className="morebtn">
              <Link to="/locations">
                <button className="more-btn">Explore all</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
