import React from 'react'
import { SectionHeading } from '../../components/headings'
import { LocationTable } from '../../sections/dashboard/locations'
import { DashboardLayout } from '../../layouts/dashboard'

const DeliveryLocations = () => {
    return (
        <DashboardLayout>
            <SectionHeading title='Locations' />
            <LocationTable />
        </DashboardLayout>
    )
}

export default DeliveryLocations