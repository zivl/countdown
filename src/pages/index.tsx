import React from 'react';
import clsx from 'clsx';
import Countdown from 'react-countdown';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Button, {Color} from '../components/Button';
import Progress from '../components/Progress';
import useInterval from '../hooks/useInterval';

const dueDate = new Date('2024-04-30 08:00')
const fromDate = new Date('2024-04-19 08:00')
const fromDateInMilliseconds = fromDate.getTime()
const dueDateInMilliseconds = dueDate.getTime()

const calculateProgress = (fromDateInMilliseconds: number, dueDateInMilliseconds: number) => {
  const now = new Date().getTime()
  const total = dueDateInMilliseconds - fromDateInMilliseconds
  const timeElapsed = now - fromDateInMilliseconds;
  const progress = timeElapsed / total * 100
  return progress
}
const countHowManyDays = (fromDate: Date, dueDate: Date) => {
  const diffTime = Math.abs(dueDate.getTime() - fromDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays
}
const reduceNightHoursBetween = (fromDate: Date, dueDate: Date) => {
  const days = countHowManyDays(fromDate, dueDate)
  return (days - 1) * 10 * 60 * 60 * 1000
}


const determineColor = (progress: number): Color => {
  if (progress > 0 && progress <= 25) {
    return 'red'
  } else if (progress > 25 && progress <= 60) {
    return 'orange'
  } else if (progress > 60 && progress <= 90) {
    return 'green'
  } else {
    return 'blue'
  }
}

const renderer = ({days, hours, minutes, seconds, completed }: {days:number, hours:number, minutes:number, seconds:number, completed:boolean }) => {
  if (completed) {
    return <h2>Done!</h2>;
  } else {
    return <div className={clsx(styles.counter)}>
      <div className={clsx(styles.days)}>{days}</div>
      <div className={clsx(styles.hours)}>{hours}</div>
      <div className={clsx(styles.minutes)}>{minutes}</div>
      <div className={clsx(styles.seconds)}>{seconds}</div>
      </div>;
  }
};
const nightRenderer = ({days, hours, minutes, completed }: {days:number, hours:number, minutes:number, seconds:number, completed:boolean }) => {
  if (completed) {
    return <h2>Done!</h2>;
  } else {
    return <div className={clsx(styles.nightCounter)}>
      <div className={clsx(styles.hours)}>{(days * 24) + hours}</div>
      <div className={clsx(styles.minutes)}>{minutes}</div>
      </div>;
  }
};

export default function Home(): JSX.Element {
  const [progress, setProgress] = React.useState(calculateProgress(fromDateInMilliseconds, dueDateInMilliseconds))

  useInterval(() => {
    setProgress(calculateProgress(fromDateInMilliseconds, dueDateInMilliseconds))
  }, 360000)

  return (
    <Layout>
      <link href="https://fonts.googleapis.com/css?family=Roboto:400" rel="stylesheet"/>
      <main style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>

      <Button color={determineColor(progress)} label={'They are gone in...'}/>
        <Countdown date={dueDate} renderer={renderer}/>
        <Progress progress={Math.floor(progress)} color={determineColor(progress)} />
        <h3>✨ Total Waking Time Left ✨</h3>
        <Countdown date={dueDate.getTime() - reduceNightHoursBetween(new Date(),dueDate)} renderer={nightRenderer} daysInHours/>
        <h5>It'll go like that!</h5>
      </main>
    </Layout>
  );
}
