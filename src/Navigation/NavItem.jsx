import React from "react";
import { useState } from "react";
import { classNames } from "classnames";
import './NavItem.scss'
export default function NavItem({ title, isActive = false, onClickActionCallback }) {
    const [active, setActive] = useState(isActive);

    return <div onClick={onClickActionCallback} className='item'>{title}</div>
}
