const Header = () => {

    return (
        <>
            <div className="absolute z-10 flex justify-center w-full overflow-hidden">
                <div className="flex w-full max-w-5xl">
                    <img src={"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"} alt="" className="w-48 h-20" />
                </div>
            </div>

            <div>
                <div className="fixed w-full h-full left-0 top-0 right-0 bottom-0 bg-black opacity-40"></div>
                <img src={"https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"} alt="" />
            </div>
        </>
    )
}

export default Header;