const WatchDigits = ({ time }) => {
    return (
        <div className="digits-container">
            <span className="digits">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits">
            {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
        </div>
    )
}

export default WatchDigits;