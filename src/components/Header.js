const Header = () =>{
    const header = (
        <div className="header">
            <h1><img src={require('../images/logo2.png')} alt='logo'/>Stankevičiai travel journal.</h1>
        </div>
    )
    return(
        <>
            {header}
        </>
    )
}

export default Header;