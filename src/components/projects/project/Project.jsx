import React from 'react';
import styles from './Project.module.css';
import vehicle_path_tracker from '../vehicle_path_tracker.png';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const DEFAULT_IMG = vehicle_path_tracker;

export default function Project({ image, title, caption, link }) {
  const content = (
    <>
      <img className={styles.cardImage} src={image || DEFAULT_IMG} alt={title} />
      { link && <FaArrowUpRightFromSquare className={styles.icon}/> }
      <div className={styles.cardText}>
        <h2>{title}</h2>
        <p>{caption}</p>
      </div>
    </>
  );

  return link ?
          <a className={styles.card} href={link} target='_blank' rel='noreferrer'> {content} </a> :
          <div className={styles.card}> {content} </div>;
}