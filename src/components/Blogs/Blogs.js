import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="container mt-4">
      <h2>Question-1: What is context API?</h2>
      <p>
        <span>Ans: </span>The Context API is a component structure provided by
        the React framework, which enables us to share specific forms of data
        across all levels of the application. It's aimed at solving the problem
        of prop drilling.Before the Context API, we could use a module to solve
        this, which led to the increasing popularity of state management
        libraries like Redux. Libraries like Redux allows you to get data from
        the store easily, anywhere in the tree. However, let's focus on the
        Context API.The Context API has actually always been there but was
        considered experimental. Moving forward the API was improved to
        stability, and as of the release of version 16.3, the feature was made
        available and subsequently considered a new addition to the clan of
        features that make React a wonderful framework.The Context API is a
        React structure that enables you to exchange unique details and assists
        in solving prop-drilling from all levels of your application.
      </p>
      <h2>Question-2: what is Semantic tag?</h2>
      <p>
        <span>Ans: </span>
        Semantic HTML tags allow you to add meaning to your markup so that
        search engines, screen readers, and web browsers can make sense of it.
        By default, when a user agent reads your content it doesn't understand
        the context and meaning. Semantic HTML tags let you serve structured
        content to your users, which is especially important for on-page SEO and
        accessibility. Although semantic tags existed in earlier HTML versions,
        the HTML5 specifications added several new semantic elements to the
        syntax—both on the block and inline levels. In this article, we'll look
        into how HTML semantics work and also give you some tips about how to
        get the most out of the feature.HTML was originally created as a markup
        language to describe documents on the early internet. As the internet
        grew and was adopted by more people, its needs changed. Where the
        internet was originally intended for sharing scientific documents, now
        people wanted to share other things as well. Very quickly, people
        started wanting to make the web look nicer. Because the web was not
        initially built to be designed, programmers used different hacks to get
        things laid out in different ways. Rather than using the table to
        describe information using a table, programmers would use them to
        position other elements on a page. As the use of visually designed
        layouts progressed, programmers started to use a generic “non-semantic”
        tag like div. They would often give these elements a class or id
        attribute to describe their purpose.Semantic HTML tags provide
        information about the contents of those tags that goes beyond just how
        they look on a page. Text that is enclosed in the code tag is
        immediately recognized by the browser as some type of coding language
      </p>
    </div>
  );
};

export default Blogs;
