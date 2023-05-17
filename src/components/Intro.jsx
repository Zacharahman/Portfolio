import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Zach Abdulrahman</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer and Mathematician</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            Hi, I'm Zach! I am a Software Engineer and Mathematician located in Columbia, SC. I am dedicated to full stack devleoping with specific interests in cloud devleopment and machine learning. I currently attend the University of South Carolina pursuing a Bachelor of Science in Computer Science as well as a Bachelor of Science in Mathematics. Some hobbies of mine include hiking, cooking and playing the double bass in my University Orchestra!
            <br />
            Check out my tutoring website! {''}
            <a
               href="https://zachabdulrahmantutoring.godaddysites.com/"
               target="_blank"
               className="text-red-700 hover:underline underline-offset-2 decoration-2 decoration-red-700"
               rel="noreferrer noopener"
            >
              <u> Here </u> 
            </a>{''}
            
         </p>
      </div>
   )
}

export default Intro;