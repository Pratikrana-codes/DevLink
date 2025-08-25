import React from "react";

const Testimonial = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-10">
      <div className="flex flex-col mt-10 mb-10">
        <div className="text-center ">
          <h2 className="text-3xl text-gray-600 font-semibold mb-20">
            People just like you are already using Dev<span className="text-sky-300">Link</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]">
          {/* Tall Card (spans 2 rows) */}
          <div className="bg-white rounded-2xl p-6 flex flex-col row-span-2  shadow-[6px_6px_12px_rgba(60,120,255,0.4)] hover:shadow-[6px_6px_12px_rgba(60,225,225,0.4)] hover:scale-105 transition-all cursor-pointer">
            <p className="text-gray-700 flex-grow">
              "This task manager has completely transformed the way my team
              works. We now collaborate in real-time and always meet deadlines."
            </p>
            <div className="flex items-center mt-4">
              
              <div>
                <p className="font-semibold">John D.</p>
                <p className="text-sm text-gray-500">Marketing Lead</p>
              </div>
            </div>
          </div>

          {/* Normal Card */}
          <div className="bg-white rounded-2xl  p-6 flex flex-col  shadow-[6px_6px_12px_rgba(60,120,255,0.4)] hover:shadow-[6px_6px_12px_rgba(60,225,225,0.4)] hover:scale-105 transition-all cursor-pointer">
            <p className="text-gray-700 flex-grow">
              "An essential tool for anyone looking to manage their tasks
              better."
            </p>
            <div className="flex items-center mt-4">
    
              <div>
                <p className="font-semibold">Sarah W.</p>
                <p className="text-sm text-gray-500">Freelance Designer</p>
              </div>
            </div>
          </div>

          {/* Normal Card */}
          <div className="bg-white rounded-2xl  p-6 flex flex-col  shadow-[6px_6px_12px_rgba(60,120,255,0.4)] hover:shadow-[6px_6px_12px_rgba(60,225,225,0.4)] hover:scale-105 transition-all cursor-pointer">
            <p className="text-gray-700 flex-grow">
              "The built-in analytics give me a complete overview of our team's
              productivity."
            </p>
            <div className="flex items-center mt-4">
              
              <div>
                <p className="font-semibold">Sam J.</p>
                <p className="text-sm text-gray-500">Project Coordinator</p>
              </div>
            </div>
          </div>

          {/* Normal Card */}
          <div className="bg-white rounded-2xl  p-6 flex flex-col  shadow-[6px_6px_12px_rgba(60,120,255,0.4)] hover:shadow-[6px_6px_12px_rgba(60,225,225,0.4)] hover:scale-105 transition-all cursor-pointer">
            <p className="text-gray-700 flex-grow">
              "I love how easy it is to create and assign tasks. The platform's
              interface makes work feel less overwhelming."
            </p>
            <div className="flex items-center mt-4">
              
              <div>
                <p className="font-semibold">Daniela T.</p>
                <p className="text-sm text-gray-500">Operations Manager</p>
              </div>
            </div>
          </div>

          {/* Normal Card */}
          <div className="bg-white rounded-2xl  shadow-[6px_6px_12px_rgba(20,120,255,0.4)] hover:shadow-[6px_6px_12px_rgba(60,225,225,0.4)] hover:scale-105 transition-all cursor-pointer p-6 flex flex-col">
            <p className="text-gray-700 flex-grow">
              "The time-tracking feature has been a game-changer for my
              freelance projects. It helps me stay organized and productive."
            </p>
            <div className="flex items-center mt-4">
              
              <div>
                <p className="font-semibold">Alex M.</p>
                <p className="text-sm text-gray-500">Freelance Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
