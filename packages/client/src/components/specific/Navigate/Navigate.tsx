import { Link } from 'react-router-dom';
import styles from './Navigate.module.scss';

type NavigateT = {};

export const Navigate: React.FC<NavigateT> = () => {
  return (
    <div className={styles.Navigate}>
      <nav>
        <ul>
          <li>
            <Link to="/">Старт</Link>
          </li>
          <li>
            <Link to="/leaders">Лидеры</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
          <li>
            <Link to="/progress">Прогресс</Link>
          </li>
          <li>
            <Link to="/forum">Форум</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
