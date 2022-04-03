import React from "react";

const Blogs = () => {
  return (
    <div className="bg-white p-4">
      <div className="container mx-auto flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold text-gray-700">Questions</h2>
        <div className="border p-4 rounded-lg">
          <h2 className="font-semibold">What is Context API?</h2>
          <p>
            Context API is a way to share data between components. It is used to
            prevent props drilling. By using context API, we can send data from
            one component to another component without having to pass the data
            down through the component tree. With it we can easily get data from
            grandfater component to child component.
          </p>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="font-semibold">What is Semantic Tag?</h2>
          <p>
            Semantic Tag is a way to make website more readable. In HTML 5 there
            are many new tags which are used to make website more readable. For
            example abbr, address, article, aside, bdi, bdo, blockquote, button,
            canvas, caption, cite, code etc. With these tags we can easily
            understand the content of the tag.
          </p>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="font-semibold">
            Difference between inline element and block element.
          </h2>
          <p>
            Inline elements takes only one line. Block elements takes multiple
            lines. For example, <code>&lt;p&gt;</code> is a block element and{" "}
            <code>&lt;div&gt;</code> is an inline element. Inline elements takes
            only the width of the content. Block elements takes the whole width
            of the container.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
