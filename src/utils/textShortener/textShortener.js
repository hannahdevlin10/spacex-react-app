const textShortener = (str, limit) => {
    let sub = str.substring(0, limit);
    return (
        <div> 
            {sub.length >= limit ? (
            <div>
                {sub} ...
            </div>
            ) : (
            <div>
                {sub}
            </div>
            )}
        </div>
    );
}

export { textShortener };