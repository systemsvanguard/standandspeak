// src/pages/blog/jitters.tsx
import { Link } from 'react-router-dom';
import sampleImage1 from '/images/computer_kickboxing.webp';
import sampleImage2 from '/images/human_brain.webp'; 
import sampleImage3 from '/images/think_before_speaking.webp'; 
import sampleImage4 from '/images/twain_impromptu_speech.webp'; 

const FunnyQuotes = () => {
  return (
    <div className="mb-5">
      <img
        src="/images/funny_quotes.webp"
        alt="Humorous Public Speaking Quotes"
        className="img-fluid mb-4 rounded"
      />
      <h1>Humorous Public Speaking Quotes</h1><br />


      <p className="h2">"There are two types of speakers: those that are nervous and those that are liars." ~ <em>Mark Twain</em></p><br />

      <img src={sampleImage3} alt="Be surprised .... " className="img-fluid mb-3" style={{ maxWidth: '524px', height: '521px' }} /><br />

      <p className="h2">"Let thy speech be better than silence, or be silent." ~ <em>Dionysius of Halicarnassus</em></p><br />
      <img src={sampleImage1} alt="A computer once beat me at chess .... " className="img-fluid mb-3" style={{ maxWidth: '760px', height: '395px' }} /><br />

      <p className="h2">"There are always three speeches.The one you practiced, the one you gave, and the one you wish you gave" ~ <em>Dale Carnegie</em></p><br />
      <img src={sampleImage2} alt="The human brain never stops until .... " className="img-fluid mb-3" style={{ maxWidth: '467px', height: '443px' }} /><br />
      
      <p className="h2">"Be sincere; be brief; be seated." ~ <em>Unknown</em></p><br />
      <img src={sampleImage4} alt="Impromtu speech .... " className="img-fluid mb-3" style={{ maxWidth: '736px', height: '552px' }} />







      <br />
      <Link to="/" className="btn btn-outline-secondary mt-4">
        ← Back to Home
      </Link>
    </div>
  );
};

export default FunnyQuotes;