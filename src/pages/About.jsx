import React from 'react'
import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
        <div>About</div>
        <Outlet></Outlet> {/* 하위 컨퍼넌트가 outlet안에 들어간다 */}
    </>
  )
}
