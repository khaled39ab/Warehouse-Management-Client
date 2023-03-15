import React from 'react';
import honda from '../../../asset/images/Company/honda.png';
import hyundai from '../../../asset/images/Company/hyundai.png';
import toyota from '../../../asset/images/Company/toyota.png';
import mitsubishi from '../../../asset/images/Company/mitsubishi.png';
import mercedesBenz from '../../../asset/images/Company/mercedes-benz.png';
import nissan from '../../../asset/images/Company/nissan.png';
import landRover from '../../../asset/images/Company/land-rover.png';
import kia from '../../../asset/images/Company/kia.png';
import Company from './Company';

const AvailableCompany = () => {
    const companyLogo = [
        {
            id: 1,
            logo: honda
        },
        {
            id: 2,
            logo: hyundai
        },
        {
            id: 3,
            logo: toyota
        },
        {
            id: 4,
            logo: mercedesBenz
        },
        {
            id: 5,
            logo: mitsubishi
        },
        {
            id: 6,
            logo: landRover
        },
        {
            id: 7,
            logo: nissan
        },
        {
            id: 8,
            logo: kia
        },
    ]


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 mx-auto'>
            {
                companyLogo.map(logo => <Company
                    key={logo.id}
                    logo={logo}
                ></Company>)
            }
        </div>
    );
};

export default AvailableCompany;