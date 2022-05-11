

const Cards = ({star}) => {
    return <div className="results">
    {star.map((ship) => {
    return <div key={ship.name}>
      <h1>{ship.name}</h1>
    </div>
  })}
  </div>
}

export default Cards;