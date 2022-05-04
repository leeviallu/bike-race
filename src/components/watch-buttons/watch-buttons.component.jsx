const WatchButtons = (props) => {
    const { handleStart, handleReset, handleStop} = props;

    return (
        <div className="watch-buttons-container">
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default WatchButtons;