import {takeEvery} from "@redux-saga/core/effects";
import {PayloadAction} from "@reduxjs/toolkit";

function* log(action: PayloadAction) {
   console.log("Log", action)
}

export default function* counterSage() {
   yield takeEvery('*', log)
}
