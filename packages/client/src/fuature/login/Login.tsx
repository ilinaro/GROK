import { BodyBold, BodyNormal, Subheader, Title } from '@components/design-system/Fonts';

import { PrimaryLayout } from '@layouts/PrimaryLayout';
import styles from './Login.module.scss';

type LoginT = {};

export const Login: React.FC<LoginT> = () => {
  return (
    <PrimaryLayout>
      <div className={styles.Wrapper}>
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
      </div>
    </PrimaryLayout>
  );
};
