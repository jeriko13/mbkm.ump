import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import {AuthContext} from '../context/AuthContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Nav(props) {
  const { apiKey, signOut } = useContext(AuthContext);
  let userId = localStorage.getItem('userId');


  const navigation = [
    { name: 'Beranda', href: '/', current: (props.current === 'Beranda') },
    { name: 'Program', href: '/program', current: (props.current === 'Program') },
    { name: 'Tentang Kami', href: '/tentang-kami', current: (props.current === 'Tentang Kami') },
  ]
  return (
    <Fragment>
      <Disclosure as="nav" className="bg-white shadow-md fixed w-full z-50 top-0">
        {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="block lg:hidden h-10 w-auto sm:border-r sm:pr-6"
                    src={process.env.PUBLIC_URL + '/images/logo-ump.png'} alt="UMP" />
                  <div className="hidden lg:flex flex-row items-center md:border-r md:pr-6">
                    <img className="lg:block h-10 w-auto"
                    src={process.env.PUBLIC_URL + '/images/logo-ump.png'} alt="Workflow" />
                    <h1 className="font-bold ml-2 text-ump-1">MBKM UMP</h1>
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-4">
                  <div className="flex space-x-4 just-center">
                    {navigation.map((item) => (
                    <a key={item.name} href={item.href} className={classNames( item.current ? 'border-b-2 text-gray-800 border-gray-800'
                      : 'text-gray-500 hover:text-gray-800' , 'px-3 py-2 text-sm font-medium h-16 leading-12')}
                      aria-current={item.current ? 'page' : undefined}>
                      {item.name}
                    </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {
                  (apiKey === null) ? (
                    <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button
                        className="bg-ump-1 text-base font-sm mx-auto text-center text-white rounded-md block w-16 h-8 leading-8">
                        Login
                      </Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                      <Menu.Items
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="text-gray-800 p-2">
                          <h1 className="font-medium">Login sebagai</h1>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto "></div>
                        <Menu.Item>
                          <a href="https://mbkm.ump.ac.id/mbkm_mahasiswa" className="block px-4 py-2 text-sm text-gray-700" target="_blank">
                            Mahasiswa
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href="https://mbkm.ump.ac.id/mbkm_dosen_pembimbing" className="block px-4 py-2 text-sm text-gray-700" target="_blank">
                            Pembimbing
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href="https://mbkm.ump.ac.id/mbkm_mitra" className="block px-4 py-2 text-sm text-gray-700" target="_blank">
                            Mitra
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href="https://mbkm.ump.ac.id/mbkm_admin" className="block px-4 py-2 text-sm text-gray-700" target="_blank">
                            Admin
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    // <a href="/login" className="bg-ump-1 text-base font-sm mx-auto text-center text-white rounded-md block w-16 h-8 leading-8">Login</a>
                  ) : (
                    // Profile dropdown
                    <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button
                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="" />
                      </Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                      <Menu.Items
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                          <a href="sementar" className={classNames(active ? 'bg-gray-100' : ''
                            , 'block px-4 py-2 text-sm text-gray-700' )}>
                            Profil
                          </a>
                          )}
                        </Menu.Item>
                        {(userId) ? (
                          <Menu.Item>
                            {({ active }) => (
                            <a href="/mahasiswa/kegiatanku" className={classNames(active ? 'bg-gray-100' : ''
                              , 'block px-4 py-2 text-sm text-gray-700' )}>
                              Kegiatanku
                            </a>
                            )}
                          </Menu.Item>
                        ) : (
                          <Menu.Item>
                            {({ active }) => (
                            <a href="/dosen/daftar-pelamar" className={classNames(active ? 'bg-gray-100' : ''
                              , 'block px-4 py-2 text-sm text-gray-700' )}>
                              Peserta Kegiatan
                            </a>
                            )}
                          </Menu.Item>
                        )}
                        <Menu.Item>
                          {({ active }) => (
                          <button className={classNames(active ? 'bg-gray-100' : ''
                            , 'block px-4 py-2 text-sm text-gray-700' )} onClick={signOut}>
                            Sign out
                          </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                    </Menu>
                  )
                }
                
              </div>


              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {
                  (apiKey === null) ? (
                    
                    <Menu className="ml-3 relative">
                      <a href="/daftar">
                    <div>
                    
                      <button
                      className="bg-ump-1 text-base font-sm mx-auto text-center text-white rounded-md block w-16 h-8 leading-8">
                        
                        Daftar
                        
                      </button>
                      
                    </div>
                    </a>
                   {/*  <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                      <Menu.Items
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="text-gray-800 p-2">
                          <h1 className="font-medium">Daftar sebagai</h1>
                        </div>
                        <div className="border-b border-gray-200 w-full mx-auto "></div>
                        <Menu.Item>
                          <a href="https://mbkm.ump.ac.id/mbkm_mahasiswa" className="block px-4 py-2 text-sm text-gray-700" target="_blank">
                            Mahasiswa Internal
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href="/daftar" className="block px-4 py-2 text-sm text-gray-700" target="_blank">
                          Mahasiswa External
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href="https://mbkm.ump.ac.id/mbkm_mitra" className="block px-4 py-2 text-sm text-gray-700" target="_blank">
                            Pembimbing
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href="https://mbkm.ump.ac.id/mbkm_admin" className="block px-4 py-2 text-sm text-gray-700" target="_blank">
                            Mitra
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition> */}
                    </Menu>
                    // <a href="/login" className="bg-ump-1 text-base font-sm mx-auto text-center text-white rounded-md block w-16 h-8 leading-8">Login</a>
                  ) : (
                    // Profile dropdown
                    <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button
                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="" />
                      </Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                      <Menu.Items
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                          <a href="sementar" className={classNames(active ? 'bg-gray-100' : ''
                            , 'block px-4 py-2 text-sm text-gray-700' )}>
                            Profil
                          </a>
                          )}
                        </Menu.Item>
                        {(userId) ? (
                          <Menu.Item>
                            {({ active }) => (
                            <a href="/mahasiswa/kegiatanku" className={classNames(active ? 'bg-gray-100' : ''
                              , 'block px-4 py-2 text-sm text-gray-700' )}>
                              Kegiatanku
                            </a>
                            )}
                          </Menu.Item>
                        ) : (
                          <Menu.Item>
                            {({ active }) => (
                            <a href="/dosen/daftar-pelamar" className={classNames(active ? 'bg-gray-100' : ''
                              , 'block px-4 py-2 text-sm text-gray-700' )}>
                              Peserta Kegiatan
                            </a>
                            )}
                          </Menu.Item>
                        )}
                        <Menu.Item>
                          {({ active }) => (
                          <button className={classNames(active ? 'bg-gray-100' : ''
                            , 'block px-4 py-2 text-sm text-gray-700' )} onClick={signOut}>
                            Sign out
                          </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                    </Menu>
                  )
                }
                
              </div>


            </div>
          </div>
  
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
              <a key={item.name} href={item.href} className={classNames( item.current ? 'text-gray-900 bg-white'
                : 'text-gray-700 hover:bg-gray-900 hover:text-white' , 'block px-3 py-2 rounded-md text-base font-medium' )}
                aria-current={item.current ? 'page' : undefined}>
                {item.name}
              </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
        )}
      </Disclosure>
      {/* NAVIGATION END */}
    </Fragment>
  )
}