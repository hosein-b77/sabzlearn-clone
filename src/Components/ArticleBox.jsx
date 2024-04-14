import React from 'react'

export default function ArticleBox({img,title,txt}) {
  return (
      <div>
          <div className="article-card">
              <div className="article-card__header">
                  <a href="#" className="article-card__link-img">
                      <img src={img} className="article-card__img" alt="Article Cover" />
                  </a>
              </div>
              <div className="article-card__content">
                  <a href="#" className="article-card__link">
                      {title}
                  </a>
                  <p className="article-card__text">
                      {txt}
                  </p>
                  <a href="#" className="article-card__btn">بیشتر بخوانید</a>
              </div>
          </div>
      </div>
  )
}
