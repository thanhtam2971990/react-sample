import { fork, take, call, delay, put } from "redux-saga/effects";
import { authAction, LoginPayLoad } from "./authSlide";
import { PayloadAction } from "@reduxjs/toolkit";
import { navigateTo } from '../../hooks/useNavigateHelper';

function* handleLogin (payload: LoginPayLoad) {
    console.log("auth handleLogin")

    try {
        yield delay(1000);
        console.log("auth handleLogin")
        localStorage.setItem('access_token', 'aaaaaaaaaaaaaaaaaaaaa');
        yield put(authAction.loginSuccess({
            id: payload.username,
            name: payload.password,
        }))
        navigateTo('/admin');
    } catch(error: any) { 
        const errorMessage = error?.response?.data?.message || error?.message || "Login failed";
        yield put(authAction.loginFailed(errorMessage));
    }
   
}

function* handleLogout() {
    console.log("auth handleLogout")
    yield delay(500);
    console.log("auth handleLogout")
    localStorage.removeItem('access_token');
    console.log("auth handleLogout")
    navigateTo('/login');
}

function* watchLoginFollow() {
    console.log("auth watchLoginFollow")
    while(true) {
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if(!isLoggedIn) {
            const action: PayloadAction<LoginPayLoad> = yield take(authAction.login.type);
            yield fork(handleLogin, action.payload);
        }

        yield take(authAction.logout.type);
        yield call(handleLogout)
    }
}

export function* authSaga() {
    yield fork(watchLoginFollow)
}