// src/pages/blog/tips12.tsx
import { Link } from 'react-router-dom';

const Tips12 = () => {
  return (
    <div className="mb-5">
      <img
        src="/images/12_tips_to_improve_speaking.webp"
        alt="More Tips To Improve Your Public Speaking"
        className="img-fluid mb-4 rounded"
      />
      <h1>More Tips To Improve Your Public Speaking</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, urna nec pretium sagittis...</p>
      <p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod...</p>

      <br />
      <Link to="/" className="btn btn-outline-secondary mt-4">
        ← Back to Home
      </Link>
    </div>
  );
};

export default Tips12;