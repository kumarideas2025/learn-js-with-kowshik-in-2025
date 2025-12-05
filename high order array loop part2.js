// we use forin loop to use loop in object


const MYobject={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    py:'python'

}


 for (const key in MYobject) {
     console.log(`${key} shortcut for ${MYobject[key]}`);
     
    }


    const programming=["js","cpp","java","rb"]
  for (const key in  programming) {
    //  console.log(key);---this will give me number 0,1,2,3..... so we use object to avoid theses keys in array .(more deatailes in ndm docs)
     console.log(programming[key]);
     
  }




//USUOING FORIN LOOP OIN THE MAP
const map =new Map()
map.set('BAn','UK','NZ')
map.set('BAn','Utt','NZtt')
map.set('Rot','UKtt','NZ')
map.set('BAyn','UK','No')

for (const key in map) {
    console.log(key);
    
} // this map is not iterable but so we can not be executed like this(read doc)