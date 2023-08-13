import { Link } from 'react-router-dom';
import { StarUserSVG } from '@components/design-system';
import { Subheader } from '@components/design-system/Fonts';
import clsx from 'clsx';
import styles from './MenuGame.module.scss';
import { useQuery } from 'react-query';
import { sendStatistics } from '@services/game.service';
import { useAppSelector } from '@store/hooks';

type MenuGameT = {
  onClose: () => void;
  open: boolean;
  end: boolean;
  count: number;
  onNext: () => void;
  onRestart: () => void;
  status: 'pause' | 'end' | 'geme_over';
};

export const MenuGame: React.FC<MenuGameT> = ({ onClose, onNext, onRestart, count, status }) => {
  const { user } = useAppSelector((store) => store.user);

  const endgame = status === 'geme_over' || status === 'end';

  useQuery(
    `${count}-sendToLeaderBoard-${user?.id}`,
    () =>
      sendStatistics({
        data: { GROKpoints: count, username: user?.display_name || user?.first_name || '', avatar: user?.avatar },
        ratingFieldName: 'GROKpoints',
        teamName: '',
      }),
    {
      enabled: count > 0 && endgame,
    }
  );

  return (
    <div className={styles.menu}>
      {status === 'pause' && (
        <div className={styles.pause}>
          <Subheader color={'yellow'}>Пауза</Subheader>
        </div>
      )}
      {status === 'geme_over' && (
        <div className={styles.gameOver}>
          <Subheader>Конец</Subheader>
          <StarUserSVG color={'yellow'} />
          <Subheader color={'pink'}>+{count}</Subheader>
        </div>
      )}
      {status === 'end' && (
        <div className={styles.end}>
          <StarUserSVG color={'yellow'} />
          <Subheader color={'pink'}>+{count}</Subheader>
        </div>
      )}
      <div className={styles.munuItem}>
        {status === 'end' && (
          <div onClick={onNext}>
            <Subheader>Продолжить</Subheader>
          </div>
        )}
        {status === 'pause' && (
          <div onClick={onClose}>
            <Subheader>Продолжить игру</Subheader>
          </div>
        )}
        <div onClick={onRestart}>
          <Subheader>Начать с начала</Subheader>
        </div>
        <div>
          <Link to="/">
            <Subheader>Выйти в меню</Subheader>
          </Link>
        </div>
      </div>
    </div>
  );
};
