import styles from './Header.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-content')}>Hello from Header</div>
        </header>
    );
}

export default Header;
