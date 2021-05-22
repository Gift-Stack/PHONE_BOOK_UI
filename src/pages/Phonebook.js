import { useContext, useEffect } from 'react';
import UserContext from '../context/user/userContext';

const Phonebook = () => {
    const userContext = useContext(UserContext);

    useEffect(() => {
        userContext.loadUser();

        // eslint-disable-next-line
    }, []);

    let icons = false;
    const hoverContact = () => {
        icons = true;
    };
    return (
        <div className='mb-4'>
            <div className='row mx-3'>
                <div className='col-md-3 text-center mb-3'>
                    <button
                        className='btn btn-block w-100 mb-2 text-white'
                        data-toggle='modal'
                        data-target='.addContactModal'
                        style={{ backgroundColor: '#00955C' }}
                    >
                        + Create contact
                    </button>
                    <button
                        className='btn btn-block w-100'
                        style={{ backgroundColor: '#E5FAF2' }}
                    >
                        Contacts
                    </button>
                </div>
                {/* Modal Data Starts */}

                <div
                    className='modal fade addContactModal'
                    tabindex='-1'
                    role='dialog'
                    aria-labelledby='mySmallModalLabel'
                    aria-hidden='true'
                >
                    <div className='modal-dialog modal-dialog-centered modal-sm'>
                        <div className='modal-content p-4'>
                            <div className='row mb-3'>
                                <div className='col-6'>
                                    <input
                                        type='text'
                                        placeholder='First name'
                                        className='form-control'
                                    />
                                </div>
                                <div className='col-6'>
                                    <input
                                        type='text'
                                        placeholder='Last name'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-12'>
                                    <input
                                        type='text'
                                        placeholder='Phone address'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-12'>
                                    <input
                                        type='text'
                                        placeholder='Email address'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <button className='btn btn-block btn-success text-white mb-3'>
                                Create
                            </button>
                            <button
                                className='btn btn-block border text-secondary'
                                data-dismiss='modal'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modal Data Ends */}

                <div className='col-md-9 border rounded p-3 bg-white'>
                    <table className='w-100 text-left '>
                        <tr className='py-4 mb-2 border-bottom'>
                            <th className='pb-2'>Name</th>
                            <th className='pb-2'>Phone number</th>
                            <th className='pb-2'>Email address</th>
                            <th></th>
                        </tr>

                        {/* <hr className='w-100' /> */}
                        <tr className='py-4 my-2' onMouseOver={hoverContact}>
                            <td className='py-2'>
                                <span className='label'>G</span> Gift Opia
                            </td>
                            <td className='py-2'>+77722288833</td>
                            <td className='py-2'>gift@gmail.com</td>
                            <td className='py-2'>{icons && 'Some'}</td>
                        </tr>
                        <tr className='py-4 my-2'>
                            <td className='py-2'>
                                <span className='label'>L</span> Lewis Turd
                            </td>
                            <td className='py-2'>777222888</td>
                            <td className='py-2'>gift@gmail.com</td>
                            <td className='py-2'>some...</td>
                        </tr>
                        <tr className='py-4 my-2'>
                            <td className='py-2'>
                                <span className='label'>E</span> Ekom Gerder
                            </td>
                            <td className='py-2'>777222888</td>
                            <td className='py-2'>gift@gmail.com</td>
                            <td className='py-2'>some...</td>
                        </tr>
                    </table>
                    <table className='w-100 text-left'></table>
                </div>
            </div>
        </div>
    );
};

export default Phonebook;
