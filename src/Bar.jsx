import React, { forwardRef } from 'react';

const Bar = forwardRef(({ position, top }, ref) => (
  <div ref={ref} className={`bar bar-${position}`} style={{ top: `${top}px` }}></div>
));

export default Bar;
