import BlogPostCards from "./BlogPostCards";
import HomepageCarousel from "./HomePageCarousel";

const Homepage = ({ blogInfo }) => {
    return (
        <>
        {/* <HomepageCarousel blogInfo={blogInfo} /> */}
        <BlogPostCards blogInfo={blogInfo} />
        </>
    );
};

export default Homepage;
