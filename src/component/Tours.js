

function Tours(props) {
    let { data } = props;
    console.log(props);
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <img src={item.image} alt={item.name} />
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Tours;
