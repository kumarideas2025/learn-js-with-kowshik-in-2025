const insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{

   // keydown event triggers whenever a key is pressed.
  //e is the event object that contains information about the key event.(collect that eventListner info)

    insert.innerHTML=`
    <div class='color'>
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
  
    <td>${e.key===" " ?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
    <div>`
})

 // in live server after open it 
// i click any random key in my keybord it will show that all information