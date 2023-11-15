import { Helmet } from 'react-helmet'
import {Link } from "react-router-dom"

import { SectionHeading } from '../../components/headings'
import { LocationTable } from '../../sections/dashboard/locations'
import { DashboardLayout } from '../../layouts/dashboard'
import { COMPANY_INFO } from '../../../config-global'
import { PATH_DASHBOARD } from '../../routes/paths'

const DeliveryLocations = () => {
    return (
        <DashboardLayout>
            <Helmet>
                <title>
                    Loactions | {`${COMPANY_INFO.name}`}
                </title>
            </Helmet>
            <SectionHeading title='Locations' />
            <div className='w-full flex justify-end'>
                <Link to={PATH_DASHBOARD.locations.new} className='text-slate-800 underline'>Add Location</Link> 
            </div>
            <LocationTable />


        </DashboardLayout>
    )
}

export default DeliveryLocations