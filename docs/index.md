---
id: index
title: 时间线
slug: /
---
import {useEffect} from 'react';
import './index.scss';

export const Main = () => {
  return (
    <section id="cd-timeline" className="cd-container">
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture">
        </div>
        <div className="cd-timeline-content">
          <h2>Sangria's Lab</h2>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Journey
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              2020.09
            </span>
          </div>
          <p>物有所不足，智有所不明</p>
          <ul className="content-skills">
          <li>Develop</li>
          <li>Design</li>
          <li>Createive</li>
          <li>Blog</li>
          <li>Share</li>
          </ul>
        </div>
      </div>
      <div className="cd-timeline-block">
			  <div className="cd-timeline-img cd-movie"></div>
        <div className="cd-timeline-content">
          <h2>Lab System Started</h2>
          <p>Start building Sangria‘s Lab from 2020.09.23</p>
          <span className="cd-date">Sep 23, 2020</span>
        </div>
      </div>
      <div className="cd-timeline-block">
			  <div className="cd-timeline-img cd-movie"></div>
        <div className="cd-timeline-content">
          <h2>Website Online</h2>
          <p>Complete phase：</p>
          <ul>
            <li>托管Github自动构建部署</li>
            <li>Gitee自动同步部署</li>
            <li>Gitalk接入</li>
          </ul>
          <span className="cd-date">Sep 30, 2020</span>
        </div>
      </div>
      <div className="cd-timeline-block">
			  <div className="cd-timeline-img cd-movie"></div>
        <div className="cd-timeline-content">
          <h2>Deploy Documents</h2>
          <p>开始整理开发、设计文档</p>
          <span className="cd-date">Continuous</span>
        </div>
      </div>
	</section>
  )
}

<Main/>
