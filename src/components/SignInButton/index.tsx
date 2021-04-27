import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export  default function SignInButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#A4D361" />
      João Gomes
      <FiX color="#737380" className={styles.closeIcon}/> 
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
    <FaGithub color="#EBA417" />
    Sign in with GitHub
  </button>
  );
}