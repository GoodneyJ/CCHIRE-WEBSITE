import React from 'react'

import CallToAction from '../components/callToAction.js'
import StaffCard from '../components/staffCard.js';
import Footer from '../components/footer.js';

import '../css/App.css';

import OurTeamCTA from '../IMAGES/ourTeamCTA.jpg';
import LesFields  from '../IMAGES/staff-profiles/LesFields.jpg';
import TomRich from '../IMAGES/staff-profiles/TomRich.jpg';
import JohnNyam from '../IMAGES/staff-profiles/JohnNyam.jpg';
import Austin from '../IMAGES/staff-profiles/AustinM.PNG';
import LyndaThomas from '../IMAGES/staff-profiles/LyndaThomas.jpg';

export default function ourTeam(props) {
    document.title = "CCHI:RE | Our Team"

    return (
        <div id="our-team-page-container">
            <CallToAction ctaImage={OurTeamCTA} title="Our Team" subTitle=""/>
            <div id="staff-cards-container">
                <div id="executive-staff-container">
                    <h1 id="executive-staff" className="staff-heading">Executive Staff</h1>
                    <div id="staff-container-top" className="staff-item-container">
                        <StaffCard
                            profileImg={LesFields}
                            name="Les C. Fields"
                            position="CEO"
                            direct="415-385-0931"
                            fax="415-398-0479"
                            email="LFields@cchi.com"
                            id="One"
                        />
                        <StaffCard
                            profileImg={TomRich}
                            name="Tom R. Rich"
                            position="Managing Director"
                            direct="650-554-9777"
                            fax="415-398-0479"
                            email="trich@cchi.com"
                            id="Two"
                        />
                    </div>
                </div>

                <div id="key-staff-container">
                    <h2 id="key-staff" className="staff-heading">Key Staff</h2>
                    <div id="staff-container-bottom" className="staff-item-container">
                        <StaffCard
                            profileImg={Austin}
                            name="Austin Mullen"
                            position="Vice President Business Development"
                            direct="480-203-7043"
                            fax="415-398-0479"
                            email="amullen@cchi.com"
                            id="Three"
                        />
                        <StaffCard
                            profileImg={JohnNyam}
                            name="John Nyamuzuwe"
                            position="Executive Plan Manager"
                            direct="415-288-4126"
                            fax="415-398-0479"
                            email="johnn@cchi.com"
                            id="Four"
                        />
                        <StaffCard
                            profileImg={LyndaThomas}
                            name="Lynda Thomas"
                            position="Senior Account Manager"
                            direct="650-554-9777"
                            fax="415-398-0479"
                            email="lthomas@cchi.com"
                            id="Five"
                        />
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
