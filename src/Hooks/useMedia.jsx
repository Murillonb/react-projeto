import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    window.addEventListener('resize', changeMatch);
    changeMatch();
    // Returning a function from useEffect tells React how to clean up this effect.
    return () => {
      // Cleanup function: React runs this when the component unmounts
      // or before re-running this effect if "media" changes.
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
