import React, {useReducer, useMemo, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Axios from "axios";
import MD5 from 'crypto-js/md5';

import Beranda from "./views/Beranda.js";
import Informasi from "./views/Informasi.js";
import Artikel from "./views/Artikel.js";
import Programs from "./views/Programs.js";
import Program from "./views/Program.js";
import DaftarProgram from "./views/DaftarProgram.js";
import DaftarPelamar from "./views/DaftarPelamar.js";
import Kegiatanku from "./views/Kegiatanku.js";
import Detail from "./views/Detail.js";
import TentangKami from "./views/TentangKami.js";
import Login from "./views/auth/Login.js";
import Daftar from "./views/auth/Daftar.js";


import {AuthContext} from './context/AuthContext';
import { API_URL } from './config/config';

export default function App() {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'NO_TOKEN':
              return {
                ...prevState,
              };
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                apiKey: action.key,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                apiKey: action.key,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                apiKey: null,
              };
            default:
                return
          }
        },
        {
          isSignout: false,
          apiKey: null,
        }
    );

    useEffect(() => {
      const getDataUser = () => {
        let usernameLokal = localStorage.getItem('username');
        let passwordLokal = localStorage.getItem('password');
        if (usernameLokal != null && passwordLokal!= null) {
          dispatch({
            type: 'SIGN_IN',
            key: 'ada',
          });
        }
      }
      getDataUser();
    }, [])

    const authContext = useMemo(
        () => ({
          apiKey: state.apiKey,
          isSignout: state.isSignout,
          signIn: async data => {
            const userData = await Axios.get(`${API_URL}/mbkm-api-new/api/list/m_user?cmd=search&t=m_user&z__email=LIKE&x__email=${data.username}&z__password=LIKE&x__password=${MD5(data.password)}`).then(res => res.data).catch(e => e);
            console.log(userData);
            if (userData.totalRecordCount > 0) {
              dispatch({
                type: 'SIGN_IN',
                key: 'ada',
              });
              localStorage.setItem('username', data.username);
              localStorage.setItem('password', MD5(data.password));
              if (userData.m_user[0].posisi_id != null) {
                if (userData.m_user[0].posisi_id === 1 ) {
                  localStorage.setItem('userId', userData.m_user[0].user_id);
                  window.location.replace("/program");
                } else {
                  localStorage.setItem('nik', userData.m_user[0].nik);
                  window.location.replace("/dosen/daftar-pelamar");
                }
              }
            } else {
              console.log('gagal');
            }
          },
          signOut: () => {
            localStorage.clear();
            dispatch({
              type: 'SIGN_OUT',
            });
          }
        }),
        [state.apiKey, state.isSignout]
    );

    return (
      <AuthContext.Provider value={authContext}>
        <BrowserRouter>
            <Switch>
              
              <Route path="/" exact component={Beranda} />
              <Route path="/informasi/:id" exact component={Informasi} />
              <Route path="/artikel/:id" exact component={Artikel} />
              <Route path="/program" exact component={Programs} />
              <Route path="/mahasiswa/kegiatanku" exact component={Kegiatanku} />
              <Route path="/dosen/daftar-pelamar" exact component={DaftarPelamar} />
              <Route path="/dosen/daftar-pelamar/:iduser/:idkegiatan" component={Detail} />
              <Route path="/program/:slug" exact component={Program} />
              <Route path="/program/:slug/daftar" exact component={DaftarProgram} />
              <Route path="/tentang-kami/:content" exact component={TentangKami} />
              <Route path="/login" exact component={Login} />
              <Route path="/daftar" exact component={Daftar} />
              {/* redirect */}
              <Redirect from="/tentang-kami" exact to="/tentang-kami/sambutan-rektor" />
              <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    )

};

