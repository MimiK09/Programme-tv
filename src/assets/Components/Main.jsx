const Main = (props) => {
	console.log(props);
	return (
		<main>
			{props.data.map((element, index) => {
				return (
					<div className="liste" key={index}>
						<p>{element.time}</p>
						<img src={element.image} alt="ceci est une image" />
						<div className="infos">
                            <p className="title">
                            {element.title}
                            </p>
                            <p>
                            {element.type}
                            </p>
                            <div className="info-temps">
                                <p>
                                    {element.duration}
                                </p>
                                <p className="direct-seen">
                                    {element.isUnseen ? "• Inédit" : ""}
                                </p>
                                <p className="direct-seen">
                                    {element.direct ? "• Direct" : ""}
                                </p>
                            </div>
                        </div>
					</div>
				);
			})}
		</main>
	);
};

export default Main;
