import "./Title.css";

export default function Title({ title }) {
  return (
    <div className="title">
      <h2
        className="h2-title wow fadeup-animation"
        data-wow-duration="0.8s"
        data-wow-delay="0.2s"
      >
        {title}
      </h2>
    </div>
  );
}
