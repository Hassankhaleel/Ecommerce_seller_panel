import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DropDown from './DropDown'
import { useState } from 'react'
function UserDIV() {

    return (
        <>
            <div className='flex  justify-between items-start '>

                <div className='flex justify-start items-center '>
                    <img src='https://thumbs.dreamstime.com/b/user-profile-my-account-avatar-login-icon-man-male-face-smile-symbol-flat-vector-human-person-member-sign-user-profile-182815734.jpg' className='h-auto w-14 rounded-[10%]' />
                    <div className='  flex   items-start flex-col ml-2'>
                        <h6 className='text-white text-[20px] font-[Inter] '>Nishyan</h6>
                        <a className='text-white underline opacity-50 font-light '>Visit Store</a>
                    </div>
                </div>
                <DropDown />
            </div>

        </>
    )
}
export { UserDIV }