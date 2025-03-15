import React from 'react'

function useToogle() {
  const [open, setOpen] = React.useState(true);
  const change = () => setOpen(!open);


    return { open, change }
}

export default useToogle
