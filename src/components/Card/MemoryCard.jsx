import styles from './MemoryCard.module.css';

export const MemoryCard = ({title, logo, onClickFunc}) => {
    return (  
        <div className={styles.memoryCard} onClick={onClickFunc}>
            <div className={styles.imgContainer}>
                <img src={logo} alt={title} />
            </div>
        </div>
    );
}