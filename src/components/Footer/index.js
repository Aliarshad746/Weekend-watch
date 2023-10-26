import "./footer.css"

function Footer() {
  return (
    <footer>
        <div className='footer-top'>
            <div>
                <img src="https://i.ibb.co/0yfxc6n/Group-17273-2x.png" alt="logo" className="img-logo"/>
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>24, Vaishnavi Centre, Raja Park, 51, Dhanana, Panipat, Haryana, Pincode-154419</div>
                </div>
            </div>
            <div>
                <div className="top-heading top-heading-basic">The Basics</div>
                <div>About Weekend Watch</div>
                <div>Contact us</div>
                <div>Support</div>
                <div>API</div>
            </div>
            <div>
                <div className="top-heading top-heading-margin">Get Involved</div>
                <div>Contribution Guideline</div>
                <div>Add New Movie</div>
                <div>Add New TV Show</div>
            </div>
            <div>
                <div className="top-heading top-heading-margin">Community</div>
                <div>Guide Lines</div>
                <div>Discussions</div>
                <div>Leader Board</div>
                <div>Twitter</div>
            </div>
            <div>
                <div className="top-heading top-heading-margin">Legal</div>
                <div>Terms of use</div>
                <div>API Terms of use</div>
                <div>Privacy Policy</div>
            </div>
        </div>
        <div className="footer-bottom">
            <div>© 2022 STAR. All Rights Reserved. Weekend watch’s all related Movies and TV Shoes are part of copyright.</div>
            <div>India</div>
        </div>
    </footer>
  )
}

export default Footer