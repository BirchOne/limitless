import React from 'react';
import styles from './RatingListEntry.css';

export default function RatingCount() {
  return (
    <div className={styles.container}>
      <h3>RatingListEntry</h3>
      <div className={styles.content}>
        <div className={styles.ratingHeader}>
          <div>*****</div>
          <div>User1234, January 1, 2019</div>
        </div>
        <div className={styles.ratingTitle}>Donut chocolate bar pudding.</div>
        <div className={styles.ratingBody}>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
          dolor nibh. Curabitur non vestibulum massa. Curabitur erat purus,
          consequat sit amet sem laoreet, lacinia gravida dolor. Pellentesque
          faucibus odio ut ex facilisis rutrum. Quisque sed arcu a massa
          suscipit euismod. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
        </div>
        <div className={styles.recommend}>✓ I recommend this product</div>
        <div className={styles.response}>
          <strong>Response:</strong>
          <p>
            Marzipan danish jelly beans gummi bears apple pie cheesecake topping
            biscuit sesame snaps.
          </p>
        </div>
      </div>
    </div>
  );
}
