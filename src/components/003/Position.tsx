import React from 'react';

function Position() {
    // relative
    // absolute
    // fixed
    // sticky
  return (
    <section className='grid grid-cols-4 w-screen h-screen'>
        <div className='bg-red-300 h-full'>
            <h1>relative</h1>
        </div>
        <div>
            <h1>Absolute</h1>
        </div>
        <div>
            <h1>fixed</h1>
        </div>
        <div>
            <h1>Sticky</h1>
        </div>
    </section>
  );
}

export default Position;
