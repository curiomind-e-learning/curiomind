const Social = ({ instaUrl, twitterUrl, fbUrl }) => {
  return (
    <div className="flex items-baseline justify-center">
      {fbUrl ? (
        <a href={fbUrl} rel="noreferrer" target="_blank">
          <img
            className="px-5"
            src="https://www.linkpicture.com/q/Vector-1_1.svg"
            alt=""
            width="70px"
          />
        </a>
      ) : null}
      {instaUrl ? (
        <a href={instaUrl} rel="noreferrer" target="_blank">
          <img
            className="px-5"
            src="https://www.linkpicture.com/q/akar-icons_instagram-fill.svg"
            alt=""
            width="70px"
          />
        </a>
      ) : null}
      {twitterUrl ? (
        <a href={twitterUrl} rel="noreferrer" target="_blank">
          <img
            className="px-5"
            src="https://www.linkpicture.com/q/akar-icons_twitter-fill.svg"
            alt=""
            width="70px"
          />
        </a>
      ) : null}
    </div>
  )
}

export default Social
