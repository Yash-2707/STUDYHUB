import React from 'react';

const Team = () => {
  return (
    <>
      {/* Container with flex properties to align cards in a row */}
      <div className="team flex justify-center items-center space-x-6 p-6 mt-10 pt-10">
        {/* Member 1 */}
        <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg text-center border-4 border-[#3fcaca]">
          <h3 className="text-xl font-semibold">DHRUV KADAM</h3>
          <p className="text-blue-500">TEAM LEADER</p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum natus totam quidem officiis laudantium odio. Quam ad et ipsam nulla quasi? Accusamus, veritatis optio?
          </p>
          <div className="flex justify-center space-x-4 mt-4 p-4 gap-8">
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Member 2 */}
        <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg text-center border-4 border-[#3fcaca]">
          <h3 className="text-xl font-semibold">YASH RATHOD</h3>
          <p className="text-blue-500">FULLSTACK DEVELOPER & BLOCKCHAIN ENTHUSIAST</p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum natus totam quidem officiis laudantium odio. Quam ad et ipsam nulla quasi? Accusamus, veritatis optio?
          </p>
          <div className="flex justify-center space-x-4 mt-4 p-4 gap-8">
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Member 3 */}
        <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg text-center border-4 border-[#3fcaca]">
          <h3 className="text-xl font-semibold">GRANTHA GADHESARIYA</h3>
          <p className="text-blue-500">FRONTEND-DEVELOPER</p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum natus totam quidem officiis laudantium odio. Quam ad et ipsam nulla quasi? Accusamus, veritatis optio?
          </p>
          <div className="flex justify-center space-x-4 mt-4 p-4 gap-8">
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Member 4 */}
        <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg text-center border-4 border-[#3fcaca]">
          <h3 className="text-xl font-semibold">AMIT VAGHELA</h3>
          <p className="text-blue-500">BACKEND-DEVELOPER</p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum natus totam quidem officiis laudantium odio. Quam ad et ipsam nulla quasi? Accusamus, veritatis optio?
          </p>
          <div className="flex justify-center space-x-4 mt-4 p-4 gap-8">
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="feedback py-8 mt-16 pt-16">
  <h2 className="text-5xl font-bold text-center mb-6">
    As a Growing Platform, we welcome your feedback
  </h2>
  <div className="flex justify-center mt-20 pt-24">
    <form
      id="feedbackForm"
      className="w-full max-w-2xl bg-gray-900 bg-opacity-40 p-8 rounded-lg shadow-lg border-4 border-[#3fcaca] "
    >
      {/* Email Input */}
      <div className="form-group mb-6">
        <label
          htmlFor="exampleInputEmail1"
          className="block text-white text-sm font-bold mb-2"
        >
          Your Email
        </label>
        <input
          type="email"
          className="w-full p-2 rounded border-2 border-gray-300 focus:border-[#3fcaca] focus:outline-none"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your email"
        />
      </div>

      {/* Feedback Textarea */}
      <div className="form-group mb-6">
        <label
          htmlFor="feedbackTextarea"
          className="block text-white text-sm font-bold mb-2"
        >
          Your Feedback
        </label>
        <textarea
          className="w-full p-2 rounded border-2 border-gray-300 focus:border-[#3fcaca] focus:outline-none"
          id="feedbackTextarea"
          rows="4"
          placeholder="Enter your feedback"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#3fcaca] hover:bg-[#35b0b0] text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Feedback
        </button>
      </div>
    </form>
  </div>
</div>

    </>
  );
};

export default Team;