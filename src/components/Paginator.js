function Paginator({page, limit, prevApiLink, nextApiLink, setLimit, prevContent, nextContent}) {
    return (
        <div className="paginator">
            <p>Page {page}</p>
            <div className='flex-jc-c gap-1'>
                <select onChange={e => setLimit(e.target.value)} value={limit}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <button onClick={prevContent} disabled={prevApiLink==null}>Prev</button>
                <button onClick={nextContent} disabled={nextApiLink==null}>Next</button>

            </div>
        </div>
    )
}

export default Paginator