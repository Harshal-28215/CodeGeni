import React, { useState } from 'react'

const Button = ({copyText, index}) => {
    const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 3000);

    copyText(index, `button:${index}`)
  };

    return (
        <div className="copy" onClick={handleClick}>
            {!active?<ion-icon name="copy" style={{ fontSize: '20px' }}></ion-icon> :
            <ion-icon name="checkmark-done-circle" style={{ fontSize: '20px' }}></ion-icon>}
    </div>
    )
}

export default Button
