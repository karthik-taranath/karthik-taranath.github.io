import React from 'react';
import styles from './Position.module.css';

export default function Position({ company, role, start_date, end_date, location, link, bullets, notes }) {
  const content = (
    <>
      <div id={styles.line1}>
        <span>{role}</span>
        <span style={{ float: 'right' }}>{start_date} - {end_date || 'Present'}</span>
      </div>
      
      <div id={styles.line2}>
        <span><i>{company}</i></span>
        <span style={{ float: 'right' }}>{location}</span>
      </div>

      <ul>
        {bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
        {notes && <li id={styles.notes}>{notes}</li>}
      </ul>
    </>
  );

  return false ?
          <a className={styles.position} href={link} target='_blank' rel='noreferrer'> {content} </a> :
          <div className={styles.position}> {content} </div>;
}