import { useCountdown } from "@/hooks/use-count-down";
import React from "react";
import { ShowCounter } from "./show-counter";
import { ExpiredNotice } from "./expired-notice";

type Props = {
  targetDate: string;
};

export const CountdownTimer = ({ targetDate }: Props) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
