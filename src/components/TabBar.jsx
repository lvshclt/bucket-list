import useFetch from '../hooks/useFetch';

export default function TabBar() {
  const goals = useFetch('http://localhost:3001/lines').length;

  return (
    <div className="bar col-lg-12">
      <div className="bar-classification col-lg-3">분류</div>
      <div className="bar-goals col-lg-6">
        <span>목표</span>
        <div className="num-of-goals">{goals}</div>
      </div>
      <div className="bar-status col-lg-3">상태</div>
    </div>
  );
}
