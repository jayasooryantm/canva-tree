import React from 'react'
import "./landing.css"

//Image imports
import landingHeaderIMG from '/Users/jaya/Documents/Freelance Projects/canva-tree/client-side/src/images/landing-header.png';
//import landingIMG1 from '/Users/jaya/Documents/Freelance Projects/canva-tree/client-side/src/images/landing-1.png';
//import landingIMG2 from '/Users/jaya/Documents/Freelance Projects/canva-tree/client-side/src/images/landing-2.png'
//import landingIMG3 from '/Users/jaya/Documents/Freelance Projects/canva-tree/client-side/src/images/landing-3.png'

function landing() {
    return (
        <div>
            <div className='header-card' style={{ backgroundImage: `url(${landingHeaderIMG})` }}>
                <h2 className='header-text'>THE ONLY LINK YOU’LL EVER NEED</h2>
                <p>Anim pariatur cliche reprehenderit,enim eiusmod high life accusamus
                    terry richardson ad squid.</p>
                <button className='btn btn-success'>Get Started For Free</button>
            </div>
            <div className='container'>
                <div className='col-md-6'>
                    <div style={{ backgroundImage: `url(${landingHeaderIMG})` }}>
                        s
                    </div>
                    <div className='col-md-6'>
                        s
                    </div>
                </div>
            </div>
        </div>
    )
}

export default landing