import styles from './ScoreCounter.module.css'

export const ScoreCounter = ({s, hs}) => {
    return (
        <div id="score-counter" className={styles.scoreCounter}>
            <div id="score">Score: {s}</div>
            <div id="high-score">High Score: {hs}</div>
        </div>
    );
}