import "./Services.css";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const serviceInfoRow1 = [
    {
      header: "Best Flights",
      info: "Find the best flight deals to your dream destination. Whether you're traveling to Himachal or Goa, we offer competitive prices and convenient booking options.",
      icon: "fas fa-plane-departure",
    },
    {
      header: "Best deals",
      info: "Discover the best deals for your trip, whether it's a luxurious stay in Rajasthan or a budget-friendly getaway in Kerala. We ensure you get the most value for your money.",
      icon: "fas fa-rupee-sign",
    },
    {
      header: "Railway Bookings",
      info: "Book your train tickets hassle-free with our railway booking service. Whether you're exploring the scenic beauty of Himachal or the cultural heritage of Rajasthan, we've got you covered.",
      icon: "fas fa-subway",
    },
  ];
  const serviceInfoRow2 = [
    {
      header: "Food And Drinks",
      info: "Indulge in the authentic flavors of your destination with our curated selection of food and drinks. From delicious seafood in Goa to spicy street food in Thailand, we cater to all tastes.",
      icon: "fas fa-utensils",
    },
    {
      header: "Hotels",
      info: "Choose from a wide range of hotels for your stay, whether it's a luxurious resort in the Maldives or a cozy guesthouse in Himachal. We ensure a comfortable and memorable stay.",
      icon: "fas fa-hotel",
    },
    {
      header: "Safe Travels",
      info: "Travel with peace of mind knowing that your safety is our top priority. We provide comprehensive safety measures for all our destinations, ensuring a worry-free travel experience.",
      icon: "fas fa-clinic-medical",
    },
  ];

  return (
    <>
      <div className="container4">
        <section className="service" id="services">
          <h1>Have a look at our services!</h1>
          <div className="row2">
            {serviceInfoRow1.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
          <div className="row1">
            {serviceInfoRow2.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};