import React from 'react';
import CodeDisplay from '../CodeDisplay';

const codeString = `
<button type="button" class=" w-full h-full relative  font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 border-[1.5px] border-gray-800 + colorVar } ">
      <span className={"left-[2px] border-[1px] border-gray-800 top-[2px] + bgVar absolute w-[101%] h-[105%] rounded-lg z-[-1]"}></span>
      {text}</button>
`;

const Buttons_outside_border = () => {
  return (
    
      <CodeDisplay codeString={codeString} language="jsx" />
    
  );
};

export default Buttons_outside_border;
