import TripData from "./TripData";
import "./TripStyles.css";
import img1 from "../assets/pudu.jpg";
import img2 from "../assets/goan.jpg";
import img3 from "../assets/lkd.jpg";
function Trip() {
  return (
    <div className="trip">
      <h2>Recent Trips</h2>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={img1}
          heads="Trip To Puducherry"
          text="A love child of the French and Indian cultures, Pudducherry is a beach-side union territory located in Tamil Nadu.The old Bouganvellia-draped French-style houses, churches and even the newly built French-style shops, bright coloured cafes and restaurants give Puducherry an exotic character to it.It is a place which will never cease to surprise you with its unique style. There are several cafes and restaurants that serve impeccable French cuisine along with some lip-smacking international cuisines as well. As a popular beach-town, Puducherry also offers you with the amazing nightlife through numerous clubs and beach-parties offering great music and delicious cocktails. There is so much to do and explore here, that you will not want to go back and experience more and more of this quaint French town of India. "
        />
        <TripData
          image={img2}
          heads="Trip To Goa"
          text="Goa is the best Indian party hotspot for international tourists, and its nightlife is the 6th celebrated globally amongst couples, watersports lovers and hippies.Sandy beaches, swaying palm and sussegado, the 3 S epitomize the intoxicating spirit of Goa, India’s most famous beach destination. Goa tourism exhibits a scenic blend of old world charm and modern characteristics. With soft sandy beaches and the comfort of hotel & resort rooms, Goa adds an extra charm to any romantic vacation. No wonder, honeymooners throng the place every year.People visit Goa for Casinos. People who enjoy gambling with chilled drinks and music find Goa to be a perfect place. During Christmas and New Year, you’ll find the state enveloped in the festive mood.Goa is affordable for everyone. That’s the reason why tourist find it most attractive as compared to other places in India."
        />
        <TripData
          image={img3}
          heads="Trip To Lakshadweep"
          text="One of world’s most spectacular tropical island systems, Lakshadweep is tucked away at 220-440Kms off the Kerala Coast. The islands offer a precious heritage of ecology and culture. The unique feature of the Islands is its coral reef. The underwater view at Lakshadweep is kaleidoscopic and breathtaking. The lagoon offers excellent potential for water sports like swimming, wind-surfing, diving, snorkeling and kayaking. No wonder, Lakshadweep is fast becoming India’s one of its kind Adventure sport – Nature Tourism location. Each island is fringed by snow white coral sands. The crystal clear water and the abundant marine life enhance the beauty of these islands. Against the vast expanse of the blue sea, the island look like emeralds. The huge shallow calm lagoon on one side with wall like reef made of marine live coral boulders blocks the incoming swells of the outer sea."
        />
      </div>
    </div>
  );
}
export default Trip;
