import { useEffect, useState } from "react";
// import moment from "moment";
const Index = () => {
  // const difference = +new moment("2021-9-30 12:00:00").utc() - +new Date();

  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     if (difference > 0) {
  //       setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
  //       setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
  //       setMinutes(Math.floor((difference / 1000 / 60) % 60));
  //       setSeconds(Math.floor((difference / 1000) % 60));
  //     }
  //   }, 1000);

  //   return () => {
  //     clearTimeout(id);
  //   };
  // });

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("2021-9-30 12:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="flex">
      <Time time={timerDays} title="days" />
      <Time time={timerHours} title="hrs" />
      <Time time={timerMinutes} title="min" />
      <Time time={timerSeconds} title="sec" />
    </div>
  );
};

export default Index;

const Time = ({ time, title }) => (
  <span className="ml-4 text-center">
    <span className="block text-xl sm:text-2xl">
      {time.toString().padStart(2, 0)}
    </span>
    <span
      className="font-serif font-thin uppercase block"
      style={{ fontSize: 10, letterSpacing: 3 }}
    >
      {title}
    </span>
  </span>
);
