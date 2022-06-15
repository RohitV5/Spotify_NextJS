import React, { Dispatch } from 'react';

export const ariaHandleKeyPress = (
  event: React.KeyboardEvent<HTMLDivElement>,
  callback: () => void | Dispatch<string>,
) => {
  if (event.key === 'Enter' || event.key === ' ') {
    if (typeof callback === 'function') {
      callback();
    }
  }
};

export default { ariaHandleKeyPress };
