import { Button, Spinner } from 'flowbite-react';
import React from 'react';

const Loading = () => {
    return (
      <div className="container mx-auto">
          <Spinner aria-label="Alternate spinner example" />
          <span className="pl-3">Loading...</span>
      </div>
    );
};

export default Loading;