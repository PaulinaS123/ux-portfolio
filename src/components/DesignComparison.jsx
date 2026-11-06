
function DesignComparison({
  title,
  description,
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  annotations,
  variant,
}) {
  const annotationClasses = [
    "annotation-one",
    "annotation-two",
    "annotation-three",
    "annotation-four",
  ];

  return (
    <div className={`design-comparison ${variant || ""}`}>
      <div className="iteration-intro">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="poll-iteration-layout">
        {/* Before */}
        <figure className="poll-screen poll-before">
          <figcaption>BEFORE / RECONSTRUCTED</figcaption>
          <img
            src={beforeImage}
            alt={beforeAlt}
            loading="lazy"
          />
        </figure>

        {/* After and annotations */}
        <div className="poll-after-group">
          <figure className="poll-screen poll-after">
            <figcaption>AFTER / FINAL DESIGN</figcaption>
            <img
              src={afterImage}
              alt={afterAlt}
              loading="lazy"
            />
          </figure>

          <div className="poll-annotations">
            {annotations.map((item, index) => (
              <div
                className={`poll-annotation ${
                  annotationClasses[index] || ""
                }`}
                key={index}
              >
                <svg
                  viewBox="0 0 90 24"
                  aria-hidden="true"
                >
                  <path d="M90 12 H5" />
                  <path d="M5 12 L15 5 M5 12 L15 19" />
                </svg>

                <div>
                  <h4>
                    {String(index + 1).padStart(2, "0")} / {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignComparison;
