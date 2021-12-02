import { Link } from 'react-router-dom';

export default function GNB() {
  return (
    <div className="gnb col-lg-12">
      <div className="left col-lg-3">
        <Link to="/">
          <i className="ic-my-bucket-list yes"></i>
        </Link>
      </div>
      <div className="right">
        <Link to="/sorry">
          <i className="ic-search not-really"></i>
        </Link>

        <Link to="/add-goals">
          <i className="ic-plus-circle yes"></i>
        </Link>

        <Link to="/delete-goals">
          <i className="ic-trash no"></i>
        </Link>

        <Link to="/settings">
          <i className="ic-settings yes"></i>
        </Link>

        <Link to="/sorry ">
          <i className="ic-sun not-really"></i>
        </Link>
      </div>
    </div>
  );
}
