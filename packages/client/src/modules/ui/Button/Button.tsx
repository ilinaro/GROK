import { ButtonHTMLAttributes, MutableRefObject, ReactNode, RefCallback, SyntheticEvent } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Текст кнопки */
  value: string;
  /** Размеры */
  size?: 's' | 'm' | 'l' | 'xl';
  /** Кнопка на всю ширину */
  block?: boolean;
  /** Выравнивание по горизонтали */
  align?: 'center' | 'left' | 'right' | 'stretch';
  /** URL для кнопок-ссылок */
  href?: string;
  /** Иконка слева от текста кнопки */
  icon?: ReactNode;
  /** Внешний вид */
  view?: 'normal' | 'blue';
  /** Заблокирована */
  disabled?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст во время загрузки */
  loadingText?: string;
  /** Дополнительные стили */
  styles?: any;
  /** Обработчик клика */
  onClick?: (event: SyntheticEvent) => void;
  buttonRef?: RefCallback<HTMLButtonElement> | MutableRefObject<HTMLButtonElement | null>;
  className?: string;
}

export const Button = ({
  value,
  href,
  icon,
  size = 'm',
  block,
  align = 'left',
  view = 'normal',
  disabled,
  onClick,
  loading,
  loadingText = 'ЗАГРУЗКА...',
  buttonRef,
  className,
  ...props
}: ButtonProps) => {
  const buttonContainerClassNames = cn(
    styles.container,
    {
      [styles.containerAlignCenter]: align === 'center',
      [styles.containerAlignLeft]: align === 'left',
      [styles.containerAlignRight]: align === 'right',
      [styles.containerAlignStretch]: align === 'stretch',
      [styles.buttonBlock]: block,
    },
    className
  );

  const buttonClassNames = cn(styles.button, {
    [styles.buttonSizeS]: size === 's',
    [styles.buttonSizeM]: size === 'm',
    [styles.buttonSizeL]: size === 'l',
    [styles.buttonSizeXl]: size === 'xl',

    [styles.buttonBlock]: block,

    [styles.buttonBlue]: view === 'blue',
    [styles.buttonLoading]: loading,

    [styles.buttonDisabled]: disabled,
  });

  const renderButtonIcon = () => {
    // TO DO сделать спиннер в кнопку
    // if (loading) {
    // 	return (
    // 		<div className={styles.buttonContentIcon}>
    // 			<Spinner
    // 				size={14}
    // 				strokeWidth={1}
    // 				color={
    // 					['ghost-white', 'white'].includes(view)
    // 						? 'black'
    // 						: 'red'
    // 				}
    // 				type='simple'
    // 			/>
    // 		</div>
    // 	);
    // }
    if (icon) return <div className={styles.buttonContentIcon}>{icon}</div>;
  };

  if (href) {
    const innerLink = (
      <div className={styles.buttonContent}>
        {renderButtonIcon()}
        <div className={styles.buttonContentText}>{loading && loadingText ? loadingText : value}</div>
      </div>
    );

    if (disabled || loading) {
      return (
        <div className={buttonContainerClassNames}>
          <div className={buttonClassNames}>{innerLink}</div>
        </div>
      );
    }

    return (
      <div className={buttonContainerClassNames}>
        {/* <Link href={href}> */}
        <a href={href} className={buttonClassNames}>
          {innerLink}
        </a>
        {/* </Link> */}
      </div>
    );
  }

  return (
    <div className={buttonContainerClassNames}>
      <button
        className={buttonClassNames}
        onClick={disabled || loading ? undefined : onClick}
        disabled={disabled || loading}
        ref={buttonRef}
        {...props}
      >
        <div className={styles.buttonContent}>
          {renderButtonIcon()}
          <div className={styles.buttonContentText}>{loading && loadingText ? loadingText : value}</div>
        </div>
      </button>
    </div>
  );
};
