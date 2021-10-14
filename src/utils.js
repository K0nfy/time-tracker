export const msToTime = (v = 0, { withMs } = {}) => {
  // ceil to Z amount of digits
  const c = (n, z = 2) => String(n).length < z ? ('00' + n).slice(-z) : n;

  const ms = v % 1000;
  v = (v - ms) / 1000;

  const secs = v % 60;
  v = (v - secs) / 60;

  const mins = v % 60;
  const hrs = (v - mins) / 60;

  if (withMs) {
    return `${c(hrs)}:${c(mins)}:${c(secs)}.${c(ms, 3)}`;
  } else {
    return `${c(hrs)}:${c(mins)}:${c(secs)}`;
  }  
};
