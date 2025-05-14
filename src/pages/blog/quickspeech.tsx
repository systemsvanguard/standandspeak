// src/pages/blog/quickspeech.tsx
import { Link } from 'react-router-dom';

const QuickSpeech = () => {
  return (
    <div className="mb-5">
      <img
        src="/images/how_to_create_a_speech_quickly.webp"
        alt="How to Write a Speech Quickly"
        className="img-fluid mb-4 rounded"
      />
      <h1>How to Write a Speech Quickly?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, urna nec pretium sagittis...</p>
      <p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod...</p>

      <br />
      <Link to="/" className="btn btn-outline-secondary mt-4">
        ← Back to Home
      </Link>
    </div>
  );
};

export default QuickSpeech;