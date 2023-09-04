import { Title } from '@components/design-system/Fonts';
import styles from './Progress.module.scss';
import { ProgressBlock } from './components/block-progress/BlockProgress';

type ProgressT = {};

export const Progress: React.FC<ProgressT> = () => {
  return (
    <div className={styles.Wrapper}>
      <Title weight={'bold'}>Прогресс</Title>
      <div className={styles.Levels}>
        <ProgressBlock isCompleted color="yellow" />
        <ProgressBlock isCompleted />
        <ProgressBlock isCompleted />
        <ProgressBlock isCompleted />
        <ProgressBlock isCompleted />
        <ProgressBlock isCompleted />
      </div>
    </div>
  );
};
