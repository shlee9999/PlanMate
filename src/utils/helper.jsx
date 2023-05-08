const useFormattedTime = (time) => {
  const minute = Math.floor(time / 60) % 60;
  const second = Math.floor(time % 60);
  const hour = Math.floor(time / 3600) % 24;

  const formattedTime =
    hour.toString().padStart(2, "0") +
    ":" +
    minute.toString().padStart(2, "0") +
    ":" +
    second.toString().padStart(2, "0");
  return formattedTime;
};

export { useFormattedTime };
