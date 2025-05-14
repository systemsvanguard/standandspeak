import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  import { Helmet } from 'react-helmet';
// reusable components 
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteOfTheDay from './components/QuoteOfTheDay';
// main pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tags from './pages/Tags';
// Blog pages
import Competency from './pages/blog/competency';
import DontFear from './pages/blog/dontfear';
import FunnyQuotes from './pages/blog/funnyquotes';
import GetBetter from './pages/blog/getbetter';
import Glossophobia from './pages/blog/glossophobia';
import ExorciseFear from './pages/blog/exorcisefear';
import ImprovePS from './pages/blog/improveps';
import JackofAll from './pages/blog/jackofall';
import Jitters from './pages/blog/jitters';
import KnownUnknown from './pages/blog/knownunknown';
import QuickSpeech from './pages/blog/quickspeech';
import Quotes1 from './pages/blog/quotes1';
import Kaizen from './pages/blog/kaizen';
import Procrastinate from './pages/blog/procrastinate';
// import Tips12 from './pages/blog/tips12';
import StPatrick from './pages/blog/stpatrick';
// Ensure to keep this as the last link.  404 Not Found Page. I opted NOT to use Switch.
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    //--
    <>
      {/*
      <Helmet>
        <title>Stand and Speak Confidently</title>
        <meta name="description" content="A blog dedicated to public speaking and presentation skills." />
      </Helmet>    
      */}
        <Router>
          <NavBar />
          <Header />
          <QuoteOfTheDay />
          <div className="container">
            <Routes>
              {/* Main pages   */}
              <Route path="/" element={<Home />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* Blog article routes  */}
              <Route path="/competency" element={<Competency />} />
              <Route path="/dontfear" element={<DontFear />} />
              <Route path="/funnyquotes" element={<FunnyQuotes />} />
              <Route path="/getbetter" element={<GetBetter />} />
              <Route path="/glossophobia" element={<Glossophobia />} />
              <Route path="/exorcisefear" element={<ExorciseFear />} />
              <Route path="/improveps" element={<ImprovePS />} />
              <Route path="/jackofall" element={<JackofAll />} />
              <Route path="/jitters" element={<Jitters />} />
              <Route path="/knownunknown" element={<KnownUnknown />} />
              <Route path="/quickspeech" element={<QuickSpeech />} />
              <Route path="/quotes1" element={<Quotes1 />} />
              <Route path="/kaizen" element={<Kaizen />} />
              <Route path="/procrastinate" element={<Procrastinate />} />
              {/*  <Route path="/tips12" element={<Tips12 />} />    */}
              <Route path="/stpatrick" element={<StPatrick />} />
              {/* add fallback 'Catch All' 404 Not Found route below here.  */}
              <Route path="*" element={<PageNotFound />} /> 

            </Routes>
          </div>
          <Footer />
        </Router>      
    </>
  );
}

export default App;