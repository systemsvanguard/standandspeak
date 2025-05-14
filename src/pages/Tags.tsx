import blogData from '../data/data_standandspeakconfidently.json';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/BlogPost';

const Tags = () => {
  const tagList = ['Delivery', 'Speaking', 'Tips', 'Writing'];

  const groupByTag = (tag: string): BlogPost[] => {
    return blogData.filter((post) => post.tags.includes(tag));
  };

  return (
    <div className="mb-5">
      <h2 className="mb-4">Articles by Tags</h2>

      {tagList.map((tag) => (
        <div className="mb-4" key={tag}>
          <h4>{tag}</h4>
          <table className="table table-striped table-bordered table-sm">
            <thead>
              <tr>
                <th>Title</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              {groupByTag(tag).map((post) => (
                <tr key={post.id}>
                  <td>
                    <Link to={`/${post.page}`}>{post.title}</Link>
                  </td>
                  <td>{post.published}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Tags;
