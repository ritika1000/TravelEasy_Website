import "./HeroStyles.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg " src={props.HeroImg} />
        <div className="hero-txt">
          <h1> {props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btntxt}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;
