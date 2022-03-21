const Social = ({ instaUrl, twitterUrl, fbUrl, githubUrl }) => {
  return (
    <div className="flex items-baseline justify-center space-x-4">
      {githubUrl ? (
        <a href={githubUrl} rel="noreferrer" target="_blank">
          <img
            className="w-7 hover:scale-95 transition-all ease-in-out"
            src="/github.png"
            alt=""
          />
        </a>
      ) : null}
      {fbUrl ? (
        <a href={fbUrl} rel="noreferrer" target="_blank">
          <img
            className="w-7 hover:scale-95 transition-all ease-in-out"
            src="/fb.png"
            alt=""
          />
        </a>
      ) : null}
      {instaUrl ? (
        <a href={instaUrl} rel="noreferrer" target="_blank">
          <img
            className="w-7 hover:scale-95 transition-all ease-in-out"
            src="/instagram.png"
            alt=""
          />
        </a>
      ) : null}
      {twitterUrl ? (
        <a href={twitterUrl} rel="noreferrer" target="_blank">
          <img
            className="w-7 hover:scale-95 transition-all ease-in-out"
            src="/twitter.png"
            alt=""
          />
        </a>
      ) : null}
    </div>
  )
}

export default Social
