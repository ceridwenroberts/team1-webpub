import React from 'react';
import styles from './Article.module.css';
import articleImage from 'public/webbdesign.png'

const title = "Qipper";
const services = ["web", "site", "app"];
const articleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et scelerisque euismod, mauris neque aliquam dolor, eu porttitor libero elit ut eros.";

const Article = () => {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.article}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.servicesList}>
          <span>{services[0]}</span>
          <span className={styles.dot}>.</span>
          <span>{services[1]}</span>
          <span className={styles.dot}>.</span>
          <span>{services[2]}</span>
        </p>
        <p className={styles.articleText}>{articleText}</p>
      </div>
      <div className={styles.articleImage}>
          <img src={articleImage} alt="Article" className={styles.image} />
      </div>
    </div>
  );
};

export default Article;




  
