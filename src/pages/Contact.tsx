import ThousandKicks from '/images/10K_kick_practice.webp';

export default function Contact() {
  return (
    <div className="text-center">
      <h1>Contact Me</h1>
      <h4><small><i className="bi bi-chat-dots"></i>   <i> Let's talk! How can my facilitation, presentation, public speaking, and tech skills help you? </i></small></h4>
      <p>
      <i className="bi bi-geo-alt-fill"></i>  Brampton, Ontario, Canada <br />
      <i className="bi bi-telephone-fill"></i>  Phone: <strong>416-312-9703</strong> <br /> 
      <i className="bi bi-envelope-fill"></i>  Email: <strong>ryan  @  RyanHunter.ca </strong> <br /> 
      <i className="bi bi-github"></i>  <a href="https://github.com/systemsvanguard" className="link_no_underline">GitHub</a> : <em><small>github.com/systemsvanguard</small></em> <br />
      <i className="bi bi-linkedin"></i>  <a href="https://www.linkedin.com/in/ryan-hunter-4a166013/" className="link_no_underline">LinkedIn</a> : <em><small>Linkedin for Ryan Hunter</small></em><br />
      </p>
      <br />      
      <img src={ThousandKicks} alt="Stand and Speak with Confidence!" className="img-fluid mb-3 rounded" style={{ maxWidth: '378px', height: '227px' }} />
      <br />
    </div>
  );
}
