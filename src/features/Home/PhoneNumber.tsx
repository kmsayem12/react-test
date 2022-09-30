import React from 'react'
import { MaskedInput } from 'antd-mask-input'

const PhoneNumber = (props: any) => {
  const cellphoneMask = '(00) 0 0000-0000'
  const phoneMask = '(00) 0000-0000'
  // always memoize dynamic masks
  const mask = React.useMemo(
    () => [
      {
        mask: cellphoneMask,
        lazy: false,
      },
      {
        mask: phoneMask,
        lazy: false,
      },
    ],
    [],
  )

  return (
    <MaskedInput
      {...props}
      mask={mask}
      maskOptions={{
        dispatch: function (_appended, dynamicMasked) {
          const isCellPhone = dynamicMasked.unmaskedValue[2] === '9'
          return dynamicMasked.compiledMasks[isCellPhone ? 0 : 1]
        },
      }}
    />
  )
}
export default PhoneNumber
