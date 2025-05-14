import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { format, parse } from 'date-fns';
import { format  } from 'date-fns';
import blogData from '../data/data_standandspeakconfidently.json';
import { BlogPost } from '../types/BlogPost';
// import sampleImage from '/images/open_road_002.jpg';

const Home = () => {
    //---------------->
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const sorted = [...blogData].sort((a, b) => {
        return new Date(b.published).getTime() - new Date(a.published).getTime();
        });
        setPosts(sorted);
    }, []);
    //---------------->
  return (
    <div>
      {/* <img src={sampleImage} alt="Stand & Speak Confidently" className="img-fluid mb-3" style={{ maxWidth: '450px', height: '250px' }} /> */}
      {/* <h1>Home Page</h1> */}
      
      {/* Start of Blog Cards */}
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-6 col-lg-4 mb-4" key={post.id}>
            <div className="card h-100">
              <img
                src={`/images/${post.picture}`}
                className="card-img-top"
                alt={post.title}
                style={{ height: '130px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  <strong>
                    <Link to={`/${post.page}`}>{post.title}</Link>
                  </strong>
                </h5>
                <p className="card-text">{post.synopsis}</p>
                <small className="text-muted mt-auto">
                  {format(new Date(post.published), 'yyyy-MMM-dd hh:mm a')}
                </small>
              </div>
              
              <div className="card-footer">
                  <Link to={`/${post.page}`} className="btn btn-primary" role="button">
                    <i className="bi bi-book"></i> Read Article ... 
                  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End of Blog Cards */}

      <br />
      {/*
      <p>Lorem Ipsum filler text ~ Aliquam tincidunt arcu nec felis placerat, id ultrices...</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      */}
    </div>
  );
};

export default Home;

