export default function TopSection() {
    return(
    <div className="topSection">
        <p style={{margin:"0"}}>Need help? Call us (+98) 0234 456 789</p>
        <div className="TSRightSide">
            <div className='TSRSitems'>
                <img className='symbols' src="../images/symbols/location.png" alt="" />
                <p style={{margin:"0"}}>Our store</p>
            </div>
            <div className='TSRSitems'>
                <img className='symbols' src="../images/symbols/truck.png" alt="" />
                <p style={{margin:"0"}}>Track your order</p>
            </div>
        </div>
    </div>
    )
}

