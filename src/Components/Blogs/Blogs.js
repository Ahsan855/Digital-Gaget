import React from "react";

const Blogs = () => {
  return (
    <section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <h1 class="mb-6 text-2xl font-bold text-purple-600 md:text-3xl">
        Basic Questions
      </h1>
      <div class="flex border-2 rounded-lg p-8">
        <div>
          <p class="mt-10 mb-3 text-2xl font-semibold text-gray-900 underline">
            What is Context Api ?
          </p>
          <p class="text-gray-600 w-3/5 mx-auto">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around.This is a
            atentive prop drilling. Becuse GrandFather to grandSon conection
            attactment proses.The parents is also Children data analisis posible
            for props comming. so props is alwayes drilling GrandFather to
            parents and Childrens . It is very HelpFull.
          </p>

          <p class="mt-10 mb-3 text-2xl underline font-semibold text-gray-900">
            What is Semantic Tag?
          </p>
          <p class="text-gray-600 w-3/5 mx-auto">
            The benifit is all semantic tag in HTML5.Semantic tag also provied
            this ssection meanigful and gorgious tag. IT makes a very HelpFull
            for HTML5 .
            <span className="text-2xl text-red-500 font-bold">
              Header Main Nav Section Article Footer
            </span>
            becuse this is a meanigful Semantic HTML tags provide information
            about the contents of those tags that goes beyond just how they look
            on a page. Text that is enclosed in the tag is immediately
            recognized by the browser as some type of coding language.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
