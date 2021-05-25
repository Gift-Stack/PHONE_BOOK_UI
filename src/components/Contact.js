const Contact = ({ firstName, lastName, address, phoneNumber }) => {
    return (
        <tr
            className='py-4 my-2'
            data-toggle='modal'
            data-target='#contactInfoModel'
        >
            <td className='py-2 d-inline-block truncate'>
                <span className='label'>{firstName[0].toUpperCase()}</span>{' '}
                {firstName[0].toUpperCase() + firstName.substring(1)}{' '}
                {lastName[0].toUpperCase() + lastName.substring(1)}
            </td>
            <td className='py-2'>{phoneNumber}</td>
            <td className='py-2  d-inline-block truncate'>{address}</td>
            {/* <td className='py-2'>{icons && 'Some'}</td> */}
        </tr>
    );
};

export default Contact;
