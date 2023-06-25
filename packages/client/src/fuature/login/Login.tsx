import { BodyBold, BodyNormal, Subheader, Title } from '@components/design-system/Fonts';

import { Button } from '@components/design-system';
import { Link } from 'react-router-dom';
import { Logo } from '@components/specific/Logo/Logo';
import styles from './Login.module.scss';

type LoginT = {};

export const Login: React.FC<LoginT> = () => {
  return (
    <div className={styles.Wrapper}>
      <Logo />
      <BodyNormal color={'yellow'} weight={'normal'}>
        BodyNormal
      </BodyNormal>
      <BodyBold color={'blue'} weight={'bold'}>
        BodyBold
      </BodyBold>
      <Subheader color={'pink'} weight={'bold'}>
        Subheader
      </Subheader>
      <Title color={'black'} weight={'bold'}>
        Title
      </Title>
      <Link to="/">
        <Button color={'pink'}>
          <BodyNormal weight={'normal'}>Войти</BodyNormal>
        </Button>
      </Link>
    </div>
  );
};
