import { Link } from 'react-router-dom';
import styles from './error-screen.module.css';
import { AppRoute } from '../../const';

function ErrorScreen(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h1>Sorry, server problems. Try again later</h1>
      <Link to={AppRoute.Main}>Restart!</Link>
    </div>
  );
}

export default ErrorScreen;
