import { useEffect } from 'react';
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectContent } from "../state/contentSlice";
import { addComments } from '../state/commentSlice'
import { useDispatch  } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comments from './Comments';




const AllBlogs = () => {

    const dispatch = useDispatch();
    const GetComments = () => {
      fetch('/getcomments')
      .then(response => response.json())
      .then(data => {
          console.log("get comments")
        dispatch(addComments(data))
      })
    }
    const {index} = useParams()
    const blogInfo = useSelector(selectContent)
    console.log(blogInfo)

    useEffect(() => {
        GetComments()
        });

   
    return (
        <>
        <Container className="blog-section-container">
            <h1 className="blog-description">{blogInfo[index].blogDescription}</h1>
            <h3>
                Written by: {blogInfo[index].author.name}
            </h3>
            <Image
                className="blog-circle-avatar"
                src={blogInfo[index].author.avatar}
            />
            <h5 className="blog-author-info">{blogInfo[index].author.username}</h5>
            <h5 className="blog-author-info date-published-text">
                Published {blogInfo[index].datePublished}
            </h5>
             
            {/* <Image className="blog-image" src={blogInfo[index].blogPostImg} fluid /> */}
            <h3 className="blog-text">{blogInfo[index].content}</h3>
        </Container>
        <Comments />
        </>
    );
};

export default AllBlogs;
