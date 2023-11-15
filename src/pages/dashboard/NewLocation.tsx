import { Helmet } from 'react-helmet'

import { SectionHeading } from '../../components/headings'
import { NewLocationForm } from '../../sections/dashboard/new-location'
import { DashboardLayout } from '../../layouts/dashboard'
import { COMPANY_INFO } from '../../../config-global'

const NewLocation = () => {
    return (
        <DashboardLayout>
            <Helmet>
                <title>
                    New Loaction | {`${COMPANY_INFO.name}`}
                </title>
            </Helmet>
            <SectionHeading title='Add Location' />
            <NewLocationForm />
        </DashboardLayout>
    )
}

export default NewLocation