// rfc

import React from 'react';
import './App.css';

import Position from './components/experience/position/Position'
import { EXPERIENCE } from './components/experience/Experience'

import Project from './components/projects/project/Project'
import { PROJECTS } from './components/projects/project/Projects'

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";



export default function App() {
  return (
    <>
      {/* <Navbar /> */}

      <div id='hero'>
        <div className='text'>
          <h1>Karthik Taranath</h1>
          <h3>Computer Science + Math + Robotics @ University of Maryland</h3>
        </div>

        <svg style={{bottom: '0'}} viewBox='0 0 1920 200'>
          <path d='M0 140L35.5 149.7C71 159.3 142 178.7 213.2 165.2C284.3 151.7 355.7 105.3 426.8 97.7C498 90 569 121 640 131.8C711 142.7 782 133.3 853.2 121.8C924.3 110.3 995.7 96.7 1066.8 86C1138 75.3 1209 67.7 1280 75.8C1351 84 1422 108 1493.2 124.7C1564.3 141.3 1635.7 150.7 1706.8 144.5C1778 138.3 1849 116.7 1884.5 105.8L1920 95L1920 201L1884.5 201C1849 201 1778 201 1706.8 201C1635.7 201 1564.3 201 1493.2 201C1422 201 1351 201 1280 201C1209 201 1138 201 1066.8 201C995.7 201 924.3 201 853.2 201C782 201 711 201 640 201C569 201 498 201 426.8 201C355.7 201 284.3 201 213.2 201C142 201 71 201 35.5 201L0 201Z' fill='#FFFFFF' stroke-linecap='round' stroke-linejoin='miter' />
        </svg>
      </div>

      <div id='experience'>
        <h1>Experience</h1>

        <div className='content'>

          { EXPERIENCE.map((position, idx) => (
            <Position key={idx} company={position.company} role={position.role} start_date={position.start_date}
                      end_date={position.end_date} location={position.location} link={position.link}
                      bullets={position.bullets} notes={position.notes} />
          )) }
        </div>
      </div>

      <div id='projects'>
        <svg viewBox='0 0 1920 200'>
          <path d='M0 63L40 80.7C80 98.3 160 133.7 240 150C320 166.3 400 163.7 480 145.3C560 127 640 93 720 71.5C800 50 880 41 960 57.2C1040 73.3 1120 114.7 1200 127.7C1280 140.7 1360 125.3 1440 118.2C1520 111 1600 112 1680 120.3C1760 128.7 1840 144.3 1880 152.2L1920 160L1920 0L1880 0C1840 0 1760 0 1680 0C1600 0 1520 0 1440 0C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0L0 0Z' fill='#FFFFFF' stroke-linecap='round' stroke-linejoin='miter' />
        </svg>

        <div className='content'>
          <h1>Projects</h1>

          <div style={{width: '100%', height: '4vh'}}/>
          
          { PROJECTS.map((project, idx) => (
            <Project key={idx} title={project.title} caption={project.caption} image={project.image} link={project.link} />
          )) }
        </div>

        <svg style={{bottom: 0}} viewBox='0 0 1920 200'>
          <path d='M0 36L32 55.8C64 75.7 128 115.3 192 114C256 112.7 320 70.3 384 72.8C448 75.3 512 122.7 576 142.7C640 162.7 704 155.3 768 134.2C832 113 896 78 960 60.2C1024 42.3 1088 41.7 1152 61.2C1216 80.7 1280 120.3 1344 134.3C1408 148.3 1472 136.7 1536 120.3C1600 104 1664 83 1728 76.8C1792 70.7 1856 79.3 1888 83.7L1920 88L1920 201L1888 201C1856 201 1792 201 1728 201C1664 201 1600 201 1536 201C1472 201 1408 201 1344 201C1280 201 1216 201 1152 201C1088 201 1024 201 960 201C896 201 832 201 768 201C704 201 640 201 576 201C512 201 448 201 384 201C320 201 256 201 192 201C128 201 64 201 32 201L0 201Z' fill='#FFFFFF' stroke-linecap='round' stroke-linejoin='miter' />
        </svg>
      </div>

      <div id='footer'>
        <div className='content'>
          <div className='text'>
            &copy; Karthik Taranath 2024
          </div>
          <div className='icons'>
            <a href='mailto:karthikt@terpmail.umd.edu' target='_blank' rel='noreferrer'><FaEnvelope className='icon'/></a>
            <a href='https://github.com/karthik-taranath' target='_blank' rel='noreferrer'><FaGithub className='icon'/></a>
            <a href='https://www.linkedin.com/in/karthiktaranath/' target='_blank' rel='noreferrer'><FaLinkedin className='icon'/></a>
          </div>
        </div>
      </div>
    </>
  );
}