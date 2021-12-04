//imported pictures from local assets folder
import blog1 from "./assets/blogpic1.jpeg";
import blog2 from "./assets/blogpic2.jpeg";
import blog3 from "./assets/blogpic3.jpeg";
import HT from "./assets/HT.jpeg";
import Jav from "./assets/Jav.jpeg";
import Reah from "./assets/Reah.jpeg";
import HTML from "./assets/html.jpeg";
import react from "./assets/react.png";
import javaScript from "./assets/javascript.jpeg";
import carouselPic1 from "./assets/carpic1.jpeg";
import carouselPic2 from "./assets/carpic2.jpeg";
import carouselPic3 from "./assets/carpic3.jpeg";

//contains images and text from the entire blog site
const siteData = [
  {
    blogPreviewImg: HTML,
    title: "Hypertext Markup Language",
    description:
      "HTML is the skeleton of websites. Discover how HTML can display content on your platform.",
    blogPostImg: blog1,
    author: {
      name: "Professor H.T. Emil",
      age: "Age " + 30,
      username: "@htemil",
      avatar: HT,
      about: "This is a really cool description of Professor H.T. Emil, the founder of HTML."
    },
    datePublished: "March 24th 2021",
    blogDescription: "HTML",
    content: "HTML stands for Hyper Text Markup Language, it is the standard markup language for documents to be displayed in a web browser. Tim Berners-Lee proposed ENQUIRE, a system for researchers to use and share documents. It did not make its transition into more traditional HTML until 1991. Tags are the elements that make up a page in HTML, they make up most of the website and are the basic building blocks for the rest of your site to be built from. Attributes contain pieces of information relating to the element they exist on. By using attributes like src and alt you are able to bring information into your elements. There is a lot of information you can have on your HTML page! One thing to help keep all of this organized is by being semantic. There are a few tags that can help you organize all of the information on your page. By using the simple concepts of HTML you can create a basic working website, but that isn't enough for us as developers. We have to make it look better, the simplest way to achieve this is by using inline styles. Using inline styles you can customize a number of things like the font size and color, position of the text and italicizing. This will work for basic styling on your website but for any more advanced you will have to use CSS which we will go over in a later article.",
    carousel: {
      carouselImg: carouselPic1,
      carouselTitle: 'Explore a new path',
      carouselDescription: 'Immerse yourself in the world of coding.',
      alt: 'girl looking at camera with lights and code projected on face',
    },
  },
  {
    blogPreviewImg: javaScript,
    title: "JavaScript",
    description:
      "Discover how widely used JavaScript is, and why you don't want to design platforms without it.",
    blogPostImg: blog2,
    author: {
      name: "Professor Jav A. Script",
      age: "Age " + 26,
      username: "@scrypto",
      avatar: Jav,
      about: "This is a really cool description of Professor Jav A. Script, the founder of JavaScript."
    },
    datePublished: "March 29th 2021",
    blogDescription: "JavaScript",
    content: "Have you ever looked at a website and wondered how the page seemingly comes to life? How buttons can navigate you to different pages with a simple click, special effects and graphics that make images move, or even automatic website updates without having to refresh the page. Well, look no further because you've found the answer. JavaScript is an object orient programming language that lets you implement complex features on a web page. It goes a step further than HTML and CSS where it takes the objects and makes the page interactive. If you want your platform to engage a user and ensure they remember your site and continue to revisit, learning JavaScript is crucial. And thanks to today's technology, mainly thanks to JavaScript, it's also easy and fun! It can be used to create games, APIs, scrolling abilities and so much more. An even better way of understanding what JavaScript can do is to think about web features you use every day and likely take for granted—like when your Facebook timeline automatically updates on your screen or Google suggests search terms based on a few letters you’ve started typing. In both cases, that’s JavaScript in action. In short, it's never been easier to start learning how to use Javascript to use on your platform. Don't wait! Start your journey today!",
    carousel: {
      carouselImg: carouselPic2,
      carouselTitle: 'Never been easier',
      carouselDescription: 'Learn to code from the comfort of your home.',
      alt: 'computer on desk with code displayed on screen',
    },
  },
  {
    blogPreviewImg: react,
    title: "ReactJS",
    description:
      "React is an efficient JavaScript library. Learn how react can creates fast, scalable, and simple interative UIs.",
    blogPostImg: blog3,
    author: {
      name: "Professor Reah Act",
      age: "Age " + 10,
      username: "@reahacker",
      avatar: Reah,
      about: "This is a really cool description of Professor Reah Act, the founder of React."
    },
    datePublished: "March 31st 2021",
    blogDescription: "React",
    content: "React is the most popular front-end JavaScript library in the field of web development. It is used by large, established companies and newly-minted startups alike (Netflix, Airbnb, Instagram, and the New York Times, to name a few). React brings many advantages to the table, making it a better choice than other frameworks like Angular.js. React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. React’s popularity today has eclipsed that of all other front-end development frameworks mainly due to its easy creation of dynamic applications, reusable components, unidirectional data flow, dedicated tools for easy debugging, and it can be used for the development of both web and mobile apps. You may be wondering how you can obtain the skills necessary to take advantage of its rising popularity. Simplilearn.com offers a comprehensive React.js training course, which will help you become career-ready upon completion. If you’re a web and mobile developer, React training will help you broaden your skills and your career horizons.",
    carousel: {
      carouselImg: carouselPic3,
      carouselTitle: 'Create a new perspective',
      carouselDescription: 'Change how you view the world around you.',
      alt: 'blurry computer screen with clear view through glass lenses',
    },
  },
];

export default siteData;