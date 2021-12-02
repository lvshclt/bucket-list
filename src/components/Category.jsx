export default function Category({ number, classification, importance }) {
  function func(classification) {
    let answer = classification.toLowerCase();
    answer = answer.replace(/\s+/g, '-');
    return answer;
  }

  return (
    <div className="classification col-lg-3">
      <span className="num col-lg-1">{number}</span>
      <div className="category">
        <div className={`label ${func(classification)}`}>{classification}</div>
        <div className="shadow"></div>
        <div className={`importance ${func(classification)}`}>
          <span>{importance}</span>
        </div>
      </div>
    </div>
  );
}
