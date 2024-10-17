

const Welcome = ({
  title,
  description
}) => {
  return(
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-7xl font-semibold my-11">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Welcome;