import { memo } from 'react';

function showChangeText({ counterStarted }) {
  // body
  return (
    <>
      <p className='text-white'>
        {counterStarted ? 'Le compteur a démarré' : 'Le compteur à zéro'}
      </p>
    </>
  );
}

export default memo(showChangeText);
