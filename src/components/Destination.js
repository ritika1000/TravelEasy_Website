import img1 from "../assets/jb.jpg";
import img2 from "../assets/jb2.jpg";
import img3 from "../assets/el.jpg";
import img4 from "../assets/el2.png";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="dest">
      <h1>Popular Destination</h1>
      <p> Tours give you the opportunity to see a lot,within a time frame</p>
      <DestinationData
        clName="first-text"
        heading="Jolly Bouy Island, Andaman And Nicobar Islands"
        text=" An island in Mahatma Gandhi Marine National Park, it offers a breath
      taking underwater view of coral and marine life. It is an ideal
      place for snorkeling , sea bathing and basking on the sun kissed
      beach. To reach Jolly buoy island people have to come to Wandoor
      beachThis is located in Mahatma Gandhi National Park. Wandoor beach
      is 30 Kms from Port Blair by road."
        img1={img1}
        img2={img2}
      />
      <DestinationData
        clName="first-text-rev"
        heading="Elephant Beach, Havelock Island, Andaman And Nicobar Islands"
        text=" One of the most amazing places to visit in Andaman for water sports and leisure tour, Elephant Beach should not be missed from your Andaman holiday itinerary. Boasting of heavenly coral reefs and its enthralling underwater marine life, Elephant Beach is a great spot to spend your holiday time in Andaman. Whether you seek relaxing or a bustling escape from the monotony of daily life, Elephant Beach will charm you in all the ways."
        img1={img3}
        img2={img4}
      />
    </div>
  );
};
export default Destination;
