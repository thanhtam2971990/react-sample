import {takeEvery} from "@redux-saga/core/effects";
import {PayloadAction} from "@reduxjs/toolkit";

function* log(action: PayloadAction) {
   console.log("Log", action)
}

export default function* counterSage() {
   console.log("Counter Saga")
   yield takeEvery('*', log)
}
