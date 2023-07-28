/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Coming Soon"
        // placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3 justify-center">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              // handleClick={() => handleSubmit("logo")}
              customStyles="text-xs w-[40%]"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              // handleClick={() => handleSubmit("full")}
              customStyles="text-xs w-[40%]"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
