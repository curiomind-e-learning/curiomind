import React from 'react'
import Social from '../Social/Social'
import './TeamCard.styles.css';

const TeamCard = ({ name, imgUrl }) => {
  const socialUrls = {
    instaUrl: 'https://github.com/curiomind-e-learning',
    fbUrl: 'https://github.com/curiomind-e-learning',
    twitterUrl: 'https://github.com/curiomind-e-learning',
  }
  return (
    <div>
      <div className="team-card">
      <div className='image' style={{backgroundImage:`url(${imgUrl})`}}></div>
        <div className='details flex flex-col items-center justify-center pl-5'>
          <div className='name'>
            <div className="text-sky-400 text-xl">{name}</div>
            <div className="text-slate-400">3rd Yr Student, CIEM</div>
          </div>
          <Social {...socialUrls} />
        </div>
      </div>
    </div>
  )
}

export default TeamCard
