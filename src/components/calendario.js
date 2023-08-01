import React from 'react'

function calendario() {
  return (
    <div className='calendariowrapper'>
        <div className='calendarioeventi'>
        <p>Consulta il calendario per rimanere informato sulle date dei nostri eventi</p>
        <iframe title='calendariogoogle' 
        src="https://calendar.google.com/calendar/embed?height=700&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FRome&showNav=0&showPrint=1&showDate=1&showTitle=0&showCalendars=0&showTz=1&showTabs=1&src=dDFvY2Rub2NqaXNxbHNkMmgyYTNmdW9sbGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26&color=%2333B679"  
        width="400" height="300" 
        frameborder="0" s
        crolling="no">
        </iframe>
        </div>
    </div>
    
  )
}

export default calendario