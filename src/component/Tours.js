
function Tours(props) {
    let { data } = props;
    console.log(props);
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "50%", height: "auto" }}
                    />
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Tours;
