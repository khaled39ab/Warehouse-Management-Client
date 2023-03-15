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
            logo: honda,
            name: "Honda"
        },
        {
            id: 2,
            logo: hyundai,
            name: "Hyundai"
        },
        {
            id: 3,
            logo: toyota,
            name: "Toyota"
        },
        {
            id: 4,
            logo: mercedesBenz,
            name: "Mercedes Benz"
        },
        {
            id: 5,
            logo: mitsubishi,
            name: "Mitsubishi"
        },
        {
            id: 6,
            logo: landRover,
            name: "Land Rover"
        },
        {
            id: 7,
            logo: nissan,
            name: "Nissan"
        },
        {
            id: 8,
            logo: kia,
            name: "Kia"
        },
    ]

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 my-5 mx-5'>
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