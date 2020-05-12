// Array Method - Map

const FancyButton = () => {
  const names = ["Famita", "Nawal", "Tinta", "Laetitia", "Tas", "Leida"]

  return (
    <ul>
      {
        names.map(name => (
          <li>
            {name}
          </li>
        ))
      }
    </ul>
  )
}

/*

<ul>
  <li>Fatima</li>
  <li>Nawal</li>
  <li>{name}</li>
  <li>{name}</li>
  <li>{name}</li>
  <li>{name}</li>
</ul>
*/