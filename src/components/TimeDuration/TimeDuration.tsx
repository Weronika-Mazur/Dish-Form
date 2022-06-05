import { useEffect, useState } from "react";

import * as S from "./styles";

import { fadeInUp } from "../../utils/constants";

interface TimeDurationProps {
  onChange: (event: React.ChangeEvent<Element> | any) => void;
  onFocus: (event?: React.FocusEvent<HTMLElement, Element>) => void;
  onBlur: (event?: React.FocusEvent<HTMLElement, Element> | undefined) => void;
  value: string;
}

interface Time {
  hours: string;
  minutes: string;
  seconds: string;
}

const TimeDuration = ({
  onChange,
  onFocus,
  onBlur,
  value,
}: TimeDurationProps) => {
  const [duration, setDuration] = useState<Time>({
    hours: "",
    minutes: "",
    seconds: "",
  });

  useEffect(() => {
    if (!value) {
      setDuration({
        hours: "",
        minutes: "",
        seconds: "",
      });
    }
  }, [value]);

  const parseTime = (value: string) => {
    if (!value) return value;

    const slice = value.length > 2 ? value.slice(0, 2) : value;

    const time = parseInt(slice);

    return time >= 59 ? 59 : time;
  };

  const parseHours = (value: string) => {
    if (!value) return value;

    const slice = value.length > 2 ? value.slice(0, 2) : value;

    const time = parseInt(slice);

    if (time <= 0) {
      return 0;
    }

    return time > 99 ? 99 : time;
  };

  const format = (value: number | string) => ("00" + value).slice(-2);

  const getTimeString = (time: Time) => {
    const { hours, minutes, seconds } = time;
    const formatted = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
    return formatted;
  };

  const updateTime = (newTime: Time) => {
    setDuration(newTime);
    const value = getTimeString(newTime);
    onChange(value);
  };

  const handleHours = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hours = String(parseHours(e.target.value));
    const newTime = { ...duration, hours };
    updateTime(newTime);
  };

  const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minutes = String(parseTime(e.target.value));
    const newTime = { ...duration, minutes };
    updateTime(newTime);
  };

  const handleSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seconds = String(parseTime(e.target.value));
    const newTime = { ...duration, seconds };
    updateTime(newTime);
  };

  return (
    <S.TimeDurationContainer>
      <S.Input
        value={duration.hours}
        onChange={handleHours}
        type="number"
        step="1"
        min="0"
        max="99"
        placeholder="HH"
        required
        className={fadeInUp}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <S.Sign>:</S.Sign>
      <S.Input
        value={duration.minutes}
        onChange={handleMinutes}
        type="number"
        step="1"
        min="0"
        max="59"
        required
        placeholder="MM"
        className={fadeInUp}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <S.Sign>:</S.Sign>
      <S.Input
        value={duration.seconds}
        onChange={handleSeconds}
        type="number"
        step="1"
        min="0"
        max="59"
        placeholder="SS"
        required
        className={fadeInUp}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </S.TimeDurationContainer>
  );
};

export default TimeDuration;
