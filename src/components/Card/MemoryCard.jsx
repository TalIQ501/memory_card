export const MemoryCard = ({title, logo, onClickFunc}) => {
    return (  
        <div className="memory-card" onClick={onClickFunc}>
            <div className="imgContainer">
                <img src={logo} alt={title} />
            </div>
            <div className="title">{title}</div>
        </div>
    );
}