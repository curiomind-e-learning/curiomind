import React from 'react'
import Social from '../Social/Social'

const TeamCard = ({ name, imgUrl }) => {
  const socialUrls = {
    instaUrl: 'https://github.com/curiomind-e-learning',
    fbUrl: 'https://github.com/curiomind-e-learning',
    twitterUrl: 'https://github.com/curiomind-e-learning',
  }
  return (
    <div>
      <figure class="md:flex rounded-xl p-8 md:p-0 bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={`${imgUrl}`}
          alt=""
        />
        <div class="pt-6 md:p-7 text-center md:text-left space-y-4">
          <figcaption class="font-medium ml-6 mb-10">
            <div class="text-sky-400 text-xl">{name}</div>
            <div class="text-slate-400">3rd Yr Student, CIEM</div>
          </figcaption>
          <Social {...socialUrls} />
        </div>
      </figure>
    </div>
  )
}

export default TeamCard
