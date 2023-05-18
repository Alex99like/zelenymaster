interface IArrowIcon {
  direction: 'right' | 'down',
  color: string
}

export const ArrowIcon = ({ direction, color = '#fff' }: IArrowIcon) => {

  return (
    <div style={{ width: 20 }}>
      {direction === 'right' ? (
        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title/>
        <g id="Complete">
        <g id="arrow-right">
        <g>
        <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" 
          stroke={color} strokeLinecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line fill="none" 
          stroke={color} strokeLinecap="round" stroke-linejoin="round" stroke-width="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
        </g>
        </g>
        </g>
        </svg>
      ) : (
        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title/>
        <g id="Complete">
        <g id="arrow-down">
        <g>
        <polyline data-name="Right" fill="none" id="Right-2" points="7 16.4 12 21.5 17 16.4" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" stroke-width="2" x1="12" x2="12" y1="2.5" y2="19.2"/>
        </g>
        </g>
        </g>
        </svg>
      )}
    </div>
  )
}
