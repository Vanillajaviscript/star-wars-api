

const Cards = ({ star }) => {
    return <div className="ships">
    {star.map((ship) => {
    return <div key={ ship.name }>
      <h2>{ ship.name }</h2>
    </div>
  })}
  </div>
}

export default Cards;