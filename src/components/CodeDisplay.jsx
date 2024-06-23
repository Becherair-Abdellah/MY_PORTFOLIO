import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { prism  } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomOneDark      } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const CodeDisplay = ({ codeString, language }) => {
    const customStyle = {
        background: '#262626', // Dark background color
        borderRadius: '8px', // Rounded corners
        padding: '20px', // Padding around the code block
        fontSize: '17px', // Font size
        lineHeight: '1.6', // Line height
        overflow: 'hidden', // Prevent scrolling
      };
  return (
    
      <SyntaxHighlighter language={language} style={atomOneDark  } customStyle={customStyle}>
        {codeString}
      </SyntaxHighlighter>
    
  );
};

export default CodeDisplay;
