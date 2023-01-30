function useTimeParser() {
  const parseMillisecondsToHMS = milliseconds => {
    const h = Math.floor(milliseconds / 3600);
    const m = Math.floor((milliseconds % 3600) / 60);
    const s = Math.floor((milliseconds % 3600) % 60);

    const hDisplay = h < 10 ? '0' + h : h;
    const mDisplay = m < 10 ? '0' + m : m;
    const sDisplay = s < 10 ? '0' + s : s;

    return `${hDisplay}:${mDisplay}:${sDisplay}`;
  };

  return {
    parseMillisecondsToHMS,
  };
}

export default useTimeParser;
