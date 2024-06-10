import "./Locations.css";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";
import { PackageCard } from "../components/PackageCard";
import { Searchbox } from "../components/Searchbox";
import { useState, useEffect } from "react";

export const Locations = () => {
  const packageInfoRow1 = [
    {
      place: "Chennai",
      info: "Explore the vibrant capital city of Tamil Nadu, Chennai, known for its rich cultural heritage, beautiful temples, and bustling markets. Enjoy a leisurely stroll along Marina Beach, visit historic landmarks like Fort St. George, and savor the authentic South Indian cuisine.",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "Delhi",
      info: "Experience the historical and cultural charm of Delhi, India's capital territory. Discover the architectural marvels of the Red Fort and Qutub Minar, explore the bustling lanes of Chandni Chowk, and indulge in the diverse culinary delights that the city offers.",
      img: goa,
      price: "4000-5000 INR",
    },
    {
      place: "Goa",
      info: "Escape to the sun-kissed beaches and vibrant nightlife of Goa. Enjoy water sports, explore Portuguese colonial architecture, and savor fresh seafood by the Arabian Sea. Whether it's relaxing on sandy shores or partying the night away, Goa has something for everyone.",
      img: kerala,
      price: "4000-5000 INR",
    },
    {
      place: "Gujarat",
      info: "Discover the rich cultural heritage and scenic landscapes of Gujarat. Visit the iconic Sabarmati Ashram in Ahmedabad, explore the ancient city of Dwarka, and marvel at the intricate carvings of the Rani Ki Vav stepwell in Patan. Don't miss sampling the delicious local cuisine.",
      img: rajasthan,
      price: "4000-5000 INR",
    },
    {
      place: "Himachal Pradesh",
      info: "Embark on an adventure in the picturesque landscapes of Himachal Pradesh. Trek through the majestic Himalayas, explore charming hill stations like Shimla and Manali, and experience the tranquility of Buddhist monasteries in Dharamshala. Himachal Pradesh is a paradise for nature lovers and adventure enthusiasts.",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "Jammu and Kashmir",
      info: "Experience the breathtaking beauty of Jammu and Kashmir, often referred to as 'Paradise on Earth'. Admire the stunning landscapes of the Kashmir Valley, cruise on Dal Lake in Srinagar, and explore the historic city of Jammu. Indulge in local delicacies like Wazwan and Kahwa.",
      img: goa,
      price: "4000-5000 INR",
    },
    {
      place: "Karnataka",
      info: "Explore the diverse attractions of Karnataka, from the bustling tech hub of Bengaluru to the ancient ruins of Hampi and the serene beaches of Gokarna. Discover the rich cultural heritage, vibrant festivals, and delectable cuisine that make Karnataka a must-visit destination.",
      img: kerala,
      price: "4000-5000 INR",
    },
    {
      place: "Rajasthan",
      info: "Step into the land of kings and experience the royal heritage of Rajasthan. Marvel at magnificent forts and palaces in Jaipur, Jodhpur, and Udaipur, witness colorful festivals and fairs, and embark on camel safaris in the Thar Desert. Rajasthan offers a glimpse into India's regal past.",
      img: rajasthan,
      price: "4000-5000 INR",
    },
    {
      place: "Uttarakhand",
      info: "Immerse yourself in the natural beauty and spiritual aura of Uttarakhand. Trek through the scenic trails of the Himalayas, visit sacred sites like the Char Dham pilgrimage circuit, and embark on wildlife safaris in Jim Corbett National Park. Uttarakhand is a paradise for nature lovers and spiritual seekers.",
      img: dubai,
      price: "4000-5000 INR",
    },
    {
      place: "Dubai",
      info: "Experience the glitz and glamour of Dubai, a cosmopolitan city known for its futuristic skyscrapers, luxury shopping malls, and iconic landmarks like the Burj Khalifa and Palm Jumeirah. Indulge in thrilling desert safaris, enjoy world-class entertainment, and sample delicious Middle Eastern cuisine.",
      img: dubai,
      price: "4000-5000 INR",
    },
    {
      place: "Europe",
      info: "Embark on a journey through the diverse landscapes and rich cultural heritage of Europe. Explore historic cities like Rome, Paris, and Barcelona, marvel at architectural masterpieces like the Eiffel Tower and Colosseum, and indulge in the art, cuisine, and music that define the continent.",
      img: europe,
      price: "4000-5000 INR",
    },
    {
      place: "Thailand",
      info: "Discover the tropical paradise of Thailand, known for its stunning beaches, vibrant nightlife, and rich cultural heritage. Explore bustling markets in Bangkok, relax on the pristine islands of Phuket and Koh Samui, and experience the warmth and hospitality of Thai culture.",
      img: thailand,
      price: "4000-5000 INR",
    },
    {
      place: "Maldives",
      info: "Escape to the idyllic beaches and crystal-clear waters of the Maldives, a tropical paradise renowned for its overwater bungalows and vibrant marine life. Snorkel among coral reefs, indulge in spa treatments, and watch mesmerizing sunsets over the Indian Ocean.",
      img: maldives,
      price: "4000-5000 INR",
    },
  ];
  


  const [searchField, setSearchField] = useState("");
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newfilteredPlaces = places.filter((place) => {
      return place.place.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPlaces(newfilteredPlaces);
  }, [places, searchField]);

  const handleOnChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
  };
  return (
    <>
      <section className="packages">
        <div className="package-container">
          <h2>
            All Locations
            <hr />
          </h2>
          <Searchbox handleOnChange={handleOnChange} />

          <div className="p-row">
            {filteredPlaces.map((element) => {
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
        </div>
      </section>
    </>
  );
};
