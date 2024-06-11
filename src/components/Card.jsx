const Card = ({ image, selected, onClick }) => {

    return (
        <div className="card">
            <div className={selected && 'selected'}>
                <img src={image} alt="" className="card-face" />

                <img
                    src={'/assets/fireship.png'}
                    className="card-back"
                    alt=""
                    onClick={onClick}
                />
            </div>
        </div>
    );

};

export default Card;