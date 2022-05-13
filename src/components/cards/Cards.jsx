
const Cards = ({ star}) => {
    return <div className="ships">
    {star?.results?.map((ship) => {
    return <div className="container" key={ ship.name }>
      <h2>{ ship.name } </h2>
      <h6>{ship.manufacturer}</h6>
    </div>
  })}
  </div>
}

export default Cards;