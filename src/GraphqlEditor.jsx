import React from 'react';
import { Editor } from 'graphql-editor';

const GraphqlEditor = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr',
      }}
    >
      <Editor />
    </div>
  );
};

export default GraphqlEditor;
